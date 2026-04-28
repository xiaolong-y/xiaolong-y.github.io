#!/usr/bin/env python3
"""Validate the static site structure before publishing to GitHub Pages."""

from __future__ import annotations

import argparse
import re
import shutil
import subprocess
import sys
from collections import Counter
from pathlib import Path
from typing import Iterable
from urllib.parse import unquote, urlparse


IGNORED_DIRS = {
    ".cache",
    ".git",
    ".jj",
    ".jekyll-cache",
    ".sass-cache",
    ".worktrees",
    "__pycache__",
    "_site",
    "coverage",
    "dist",
    "node_modules",
    "out",
}

CHECKED_EXTENSIONS = {".html", ".md"}
REQUIRED_FILES = {
    "_config.yml",
    "README.md",
    "CNAME",
    "blog/attempts-and-failures-are-information.md",
    "blog/fav_music.md",
    "blog/index.md",
    "blog/just-innovate.md",
}

HTML_LINK_RE = re.compile(r"""(?:href|src)=["']([^"']+)["']""", re.IGNORECASE)
MARKDOWN_LINK_RE = re.compile(r"""!?\[[^\]]*\]\(([^)]+)\)""")
REDIRECT_RE = re.compile(
    r"""http-equiv=["']refresh["'][^>]*content=["'][^"']*url=([^"']+)["']""",
    re.IGNORECASE,
)
GOOGLE_ANALYTICS_RE = re.compile(r"""^\s*google_analytics:\s*["']?([^"'\s#]+)""", re.MULTILINE)


def iter_site_files(root: Path) -> Iterable[Path]:
    """Yield site files, excluding VCS, generated, dependency, and cache directories."""
    root = root.resolve()
    for path in sorted(root.rglob("*")):
        if not path.is_file():
            continue
        rel_parts = path.relative_to(root).parts
        if any(part in IGNORED_DIRS for part in rel_parts):
            continue
        yield path


def classify_assets(paths: Iterable[Path]) -> dict[str, object]:
    """Return inventory counts by extension, top-level folder, and functional cluster."""
    extensions: Counter[str] = Counter()
    top_level: Counter[str] = Counter()
    clusters: Counter[str] = Counter()
    normalized_paths = [Path(path) for path in paths]

    for path in normalized_paths:
        path_string = path.as_posix()
        name = path.name.lower()
        extension = path.suffix.lower() or ("[dotfile/no-ext]" if name.startswith(".") else "[no extension]")

        extensions[extension] += 1
        top_level[path.parts[0] if len(path.parts) > 1 else "."] += 1

        if path_string.startswith("assets/"):
            clusters["assets directory"] += 1
        elif path_string.startswith("pdfs/"):
            clusters["pdf documents"] += 1
        elif name.startswith("bias-"):
            clusters["bias pages"] += 1
        elif name.startswith("time-viz-") or name.startswith("2025-12-18_"):
            clusters["time visualization prototypes/research"] += 1
        elif name.startswith("calendar-") or name == "calendar-api.gs":
            clusters["calendar widgets/api"] += 1
        elif name.startswith("kismet-"):
            clusters["kismet prototypes"] += 1
        elif name.endswith("_spec.md") or name.endswith("spec.md") or "design" in name or "plan" in name:
            clusters["design/spec/plan docs"] += 1
        elif path.suffix.lower() in {".md", ".yml", ".yaml"} or name in {"cname", "readme.md"}:
            clusters["site content/config"] += 1
        else:
            clusters["other root/support"] += 1

    return {
        "total": len(normalized_paths),
        "extensions": dict(sorted(extensions.items())),
        "top_level": dict(sorted(top_level.items())),
        "clusters": dict(sorted(clusters.items())),
    }


def extract_local_links(text: str) -> set[str]:
    """Extract non-external href/src and Markdown links from a text blob."""
    links: set[str] = set()
    for raw_link in HTML_LINK_RE.findall(text) + MARKDOWN_LINK_RE.findall(text):
        link = raw_link.strip().strip("<>")
        parsed = urlparse(link)
        if parsed.scheme in {"http", "https", "mailto", "tel", "data", "javascript"}:
            continue
        if link.startswith("#") or not link:
            continue

        cleaned = unquote(parsed.path)
        if not cleaned:
            continue
        links.add(cleaned)

    return links


def _candidate_paths(root: Path, source: Path, link: str) -> list[Path]:
    if link.startswith("/"):
        base = root
        relative = link.lstrip("/")
    else:
        base = source.parent
        relative = link

    direct = (base / relative).resolve()
    candidates = [direct]
    if direct.suffix == ".html":
        candidates.append(direct.with_suffix(".md"))
    if direct.suffix == "":
        candidates.extend([direct.with_suffix(".html"), direct / "index.html"])
    return candidates


def _find_redirect_target(path: Path) -> str | None:
    if path.suffix.lower() != ".html":
        return None
    try:
        text = path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return None
    match = REDIRECT_RE.search(text)
    if not match:
        return None
    return match.group(1).strip()


def _configured_google_analytics_id(root: Path) -> str | None:
    config = root / "_config.yml"
    if not config.exists():
        return None
    text = config.read_text(encoding="utf-8", errors="ignore")
    match = GOOGLE_ANALYTICS_RE.search(text)
    return match.group(1) if match else None


def _link_exists(root: Path, source: Path, link: str) -> bool:
    candidates = _candidate_paths(root, source, link)
    if any(candidate.exists() for candidate in candidates):
        return True

    # Moved root pages are allowed when their root redirect points at an existing lab file.
    if not link.startswith("/") and "/" not in link:
        root_candidate = root / link
        target = _find_redirect_target(root_candidate)
        if target:
            return any(candidate.exists() for candidate in _candidate_paths(root, root_candidate, target))

    return False


def validate_site(root: Path) -> dict[str, object]:
    """Validate required files, internal links, redirect targets, and inventory counts."""
    root = root.resolve()
    files = list(iter_site_files(root))
    rel_files = [path.relative_to(root) for path in files]
    errors: list[str] = []
    warnings: list[str] = []

    for required in sorted(REQUIRED_FILES):
        if not (root / required).exists():
            errors.append(f"Missing required file: {required}")

    analytics_id = _configured_google_analytics_id(root)
    homepage = root / "README.md"
    if analytics_id and homepage.exists():
        homepage_text = homepage.read_text(encoding="utf-8", errors="ignore")
        if analytics_id not in homepage_text:
            errors.append(f"README.md is missing configured Google Analytics id: {analytics_id}")

    for path in files:
        rel_path = path.relative_to(root).as_posix()
        if path.suffix.lower() not in CHECKED_EXTENSIONS:
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        for link in sorted(extract_local_links(text)):
            if not _link_exists(root, path, link):
                errors.append(f"Broken local link in {rel_path}: {link}")

        target = _find_redirect_target(path)
        if target and not any(candidate.exists() for candidate in _candidate_paths(root, path, target)):
            errors.append(f"Broken redirect in {rel_path}: {target}")

    build_status = _jekyll_build_status(root)
    if build_status["status"] == "skipped":
        warnings.append(build_status["message"])
    elif build_status["status"] == "failed":
        errors.append(build_status["message"])

    return {
        "root": root.as_posix(),
        "inventory": classify_assets(rel_files),
        "errors": errors,
        "warnings": warnings,
        "build": build_status,
    }


def _jekyll_build_status(root: Path) -> dict[str, str]:
    bundle = shutil.which("bundle")
    jekyll = shutil.which("jekyll")

    if bundle and (root / "Gemfile").exists():
        command = [bundle, "exec", "jekyll", "build"]
    elif jekyll:
        command = [jekyll, "build"]
    else:
        return {
            "status": "skipped",
            "message": "Jekyll build skipped: neither Gemfile+bundle nor jekyll executable was found.",
        }

    result = subprocess.run(command, cwd=root, text=True, capture_output=True, timeout=60)
    if result.returncode == 0:
        return {"status": "passed", "message": "Jekyll build passed."}

    output = "\n".join(part for part in [result.stdout.strip(), result.stderr.strip()] if part)
    return {"status": "failed", "message": f"Jekyll build failed with exit {result.returncode}:\n{output}"}


def _print_report(report: dict[str, object]) -> None:
    inventory = report["inventory"]
    assert isinstance(inventory, dict)

    print(f"Site root: {report['root']}")
    print(f"Total assets: {inventory['total']}")

    print("\nBy extension:")
    for key, value in inventory["extensions"].items():
        print(f"  {key}: {value}")

    print("\nBy top-level location:")
    for key, value in inventory["top_level"].items():
        print(f"  {key}: {value}")

    print("\nBy functional cluster:")
    for key, value in inventory["clusters"].items():
        print(f"  {key}: {value}")

    warnings = report["warnings"]
    if warnings:
        print("\nWarnings:")
        for warning in warnings:
            print(f"  - {warning}")

    errors = report["errors"]
    if errors:
        print("\nErrors:")
        for error in errors:
            print(f"  - {error}")
    else:
        print("\nErrors: 0")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Validate static site publishing readiness.")
    parser.add_argument("root", nargs="?", default=".", help="Site root to validate.")
    args = parser.parse_args(argv)

    report = validate_site(Path(args.root))
    _print_report(report)
    return 1 if report["errors"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
