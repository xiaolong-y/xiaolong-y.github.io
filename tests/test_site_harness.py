import tempfile
import unittest
from pathlib import Path

from scripts import site_harness


def write_required_blog_files(root: Path) -> None:
    blog = root / "blog"
    blog.mkdir()
    for filename in [
        "index.md",
        "just-innovate.md",
        "attempts-and-failures-are-information.md",
        "fav_music.md",
    ]:
        (blog / filename).write_text("# Blog", encoding="utf-8")


class SiteHarnessTests(unittest.TestCase):
    def test_iter_site_files_excludes_generated_and_git_directories(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp).resolve()
            (root / "README.md").write_text("home", encoding="utf-8")
            (root / ".git").mkdir()
            (root / ".git" / "HEAD").write_text("ref", encoding="utf-8")
            (root / ".jj").mkdir()
            (root / ".jj" / "repo").mkdir()
            (root / ".jj" / "repo" / "store").write_text("metadata", encoding="utf-8")
            (root / "_site").mkdir()
            (root / "_site" / "index.html").write_text("built", encoding="utf-8")

            files = {path.relative_to(root).as_posix() for path in site_harness.iter_site_files(root)}

        self.assertEqual(files, {"README.md"})

    def test_classify_assets_counts_extensions_and_clusters(self):
        paths = [
            Path("README.md"),
            Path("bias-anchoring.html"),
            Path("assets/js/site.js"),
            Path("pdfs/cv_xly_web.pdf"),
            Path("calendar-widget.html"),
        ]

        result = site_harness.classify_assets(paths)

        self.assertEqual(result["total"], 5)
        self.assertEqual(result["extensions"][".html"], 2)
        self.assertEqual(result["extensions"][".md"], 1)
        self.assertEqual(result["clusters"]["bias pages"], 1)
        self.assertEqual(result["clusters"]["calendar widgets/api"], 1)

    def test_extract_local_links_ignores_external_mailto_and_fragments(self):
        text = """
        <a href="https://example.com">external</a>
        <a href="mailto:test@example.com">email</a>
        <a href="#section">fragment</a>
        <script src="assets/js/site.js"></script>
        ![Image](images/post/photo.png)
        [CV](pdfs/cv_xly_web.pdf)
        """

        self.assertEqual(
            site_harness.extract_local_links(text),
            {"assets/js/site.js", "images/post/photo.png", "pdfs/cv_xly_web.pdf"},
        )

    def test_validate_site_accepts_redirect_when_target_exists(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / "_config.yml").write_text("title: Test", encoding="utf-8")
            (root / "README.md").write_text("[Old](old.html)", encoding="utf-8")
            (root / "CNAME").write_text("example.com", encoding="utf-8")
            write_required_blog_files(root)
            (root / "labs").mkdir()
            (root / "labs" / "old.html").write_text("<p>target</p>", encoding="utf-8")
            (root / "old.html").write_text(
                '<!doctype html><meta http-equiv="refresh" content="0; url=labs/old.html">',
                encoding="utf-8",
            )

            report = site_harness.validate_site(root)

        self.assertEqual(report["errors"], [])

    def test_validate_site_accepts_html_link_to_markdown_source(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / "_config.yml").write_text("title: Test", encoding="utf-8")
            (root / "CNAME").write_text("example.com", encoding="utf-8")
            write_required_blog_files(root)
            (root / "README.md").write_text("[Books](bookshelf.html)", encoding="utf-8")
            (root / "bookshelf.md").write_text("# Books", encoding="utf-8")

            report = site_harness.validate_site(root)

        self.assertEqual(report["errors"], [])

    def test_validate_site_requires_homepage_google_analytics_when_configured(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / "_config.yml").write_text("google_analytics: G-TEST123", encoding="utf-8")
            (root / "CNAME").write_text("example.com", encoding="utf-8")
            (root / "README.md").write_text("# Home", encoding="utf-8")

            report = site_harness.validate_site(root)

        self.assertIn(
            "README.md is missing configured Google Analytics id: G-TEST123",
            report["errors"],
        )

    def test_validate_site_reports_missing_required_files(self):
        with tempfile.TemporaryDirectory() as tmp:
            report = site_harness.validate_site(Path(tmp))

        self.assertIn("Missing required file: README.md", report["errors"])
        self.assertIn("Missing required file: _config.yml", report["errors"])
        self.assertIn("Missing required file: CNAME", report["errors"])

    def test_validate_site_requires_migrated_blog_files(self):
        with tempfile.TemporaryDirectory() as tmp:
            report = site_harness.validate_site(Path(tmp))

        self.assertIn("Missing required file: blog/index.md", report["errors"])
        self.assertIn("Missing required file: blog/just-innovate.md", report["errors"])
        self.assertIn(
            "Missing required file: blog/attempts-and-failures-are-information.md",
            report["errors"],
        )
        self.assertIn("Missing required file: blog/fav_music.md", report["errors"])


if __name__ == "__main__":
    unittest.main()
