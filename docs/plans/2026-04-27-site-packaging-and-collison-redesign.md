# Site Packaging and Collison Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Organize the website into stable public pages and archived labs while redesigning the homepage in a sparse Patrick Collison-inspired style.

**Architecture:** Preserve existing public URLs through root-level redirect stubs, move experimental assets into topic folders under `labs/`, and keep canonical site pages at the root for GitHub Pages compatibility. Add a dependency-light publishing harness that checks asset inventory, redirects, internal links, required GitHub Pages files, and optional Jekyll build health.

**Tech Stack:** GitHub Pages/Jekyll, static HTML/Markdown, vanilla JavaScript, Python stdlib validation.

---

## Current Inventory

The repo has 84 site-relevant assets excluding `.git` internals:

- 49 HTML files
- 16 Markdown files
- 4 JavaScript files
- 3 PDFs
- 3 PNG images
- 1 GIF image
- 1 JPG image
- 1 JSON data file
- 1 Google Apps Script file
- 1 shell script
- 1 YAML config
- 2 dotfiles/no-extension files plus `CNAME`

Functional clusters:

- 20 cognitive bias pages
- 19 time visualization prototypes/research pages
- 6 calendar widgets/API files
- 2 Kismet prototypes
- 10 reusable files under `assets/`
- 3 PDF documents
- 7 design/spec/test documents
- 11 canonical content/config files
- 6 support/root miscellaneous files

## Target Structure

```text
/
  README.md
  _config.yml
  CNAME
  bookshelf.md
  quotes.md
  thought-snippets.html
  assets/
    data/
    images/
    js/
  docs/
    plans/
    specs/
    qa/
  labs/
    bias/
    calendar/
    kismet/
    name-layout/
    time-viz/
  pdfs/
  scripts/
  tests/
```

## Redirect Policy

Root URLs for moved prototypes remain valid via lightweight redirect pages:

- `bias-*.html` -> `labs/bias/bias-*.html`
- `calendar-widget*.html` -> `labs/calendar/calendar-widget*.html`
- `kismet-*.html` -> `labs/kismet/kismet-*.html`
- `time-viz-*.html` and `2025-12-18_*time-visualization_research.html` -> `labs/time-viz/...`
- `name-layout-prototypes.html` -> `labs/name-layout/name-layout-prototypes.html`

`cognitive-biases.html` remains at the root as a public index page unless a later pass chooses to promote `labs/bias/index.html`.

## Task 1: Add Publishing Harness Tests

**Files:**
- Create: `tests/test_site_harness.py`
- Create later: `scripts/site_harness.py`

**Step 1: Write failing tests**

Create tests that expect the harness module to:

- Count site assets while excluding `.git`, `_site`, `.cache`, and other generated directories.
- Find local links in HTML and Markdown files.
- Treat root redirect pages as valid if their target exists.
- Validate required GitHub Pages files: `_config.yml`, `README.md`, and `CNAME`.

**Step 2: Run tests to verify failure**

Run: `python3 -m unittest tests/test_site_harness.py -v`

Expected: fail because `scripts.site_harness` does not exist.

**Step 3: Implement minimal harness**

Implement `scripts/site_harness.py` with:

- `iter_site_files(root)`
- `classify_assets(paths)`
- `extract_local_links(text)`
- `validate_site(root)`
- CLI entrypoint printing a readable report and returning nonzero on errors.

**Step 4: Run tests to verify pass**

Run: `python3 -m unittest tests/test_site_harness.py -v`

Expected: all tests pass.

## Task 2: Package Experimental Assets

**Files:**
- Move bias detail pages into `labs/bias/`
- Move calendar widgets into `labs/calendar/`
- Move Kismet prototypes into `labs/kismet/`
- Move name-layout prototype into `labs/name-layout/`
- Move time visualization pages into `labs/time-viz/`
- Create root redirect stubs for every moved file.

**Step 1: Move files in topic batches**

Use a script to move only files in the approved mapping. Do not move canonical pages, PDFs, images, or JavaScript assets in this batch.

**Step 2: Generate redirect stubs**

Each root stub should include:

- `<!doctype html>`
- `<meta charset="utf-8">`
- `<meta http-equiv="refresh" content="0; url=...">`
- canonical link
- fallback anchor

**Step 3: Repair relative links inside moved files**

Update moved pages as needed:

- Bias detail pages link back to `../../cognitive-biases.html`.
- Moved pages that reference root assets use `../../assets/...`.

**Step 4: Run harness**

Run: `python3 scripts/site_harness.py`

Expected: zero errors.

## Task 3: Collison-Style Homepage Redesign

**Files:**
- Modify: `README.md`
- Preserve references to: `pdfs/cv_xly_web.pdf`, `quotes.md`, `bookshelf.md`, `thought-snippets.html`, `cognitive-biases.html`, `labs/`

**Step 1: Replace heavy homepage presentation**

Remove the neural animation-forward homepage and replace it with a sparse text index:

- Name
- One concise bio paragraph
- Small navigation list
- Sections for research, teaching, software, writing, and elsewhere
- Link to CV

**Step 2: Keep behavior low-risk**

Do not add external CSS dependencies. Keep styling inline and tiny because GitHub Pages currently renders `README.md` directly.

**Step 3: Run harness**

Run: `python3 scripts/site_harness.py`

Expected: zero errors.

## Task 4: Add Labs Index

**Files:**
- Create: `labs/index.html`
- Optionally create topic indexes later if needed.

**Step 1: Create a plain labs landing page**

List:

- Cognitive bias visualizations
- Calendar widgets
- Kismet prototypes
- Time visualization prototypes and research
- Name layout prototypes

**Step 2: Run harness**

Run: `python3 scripts/site_harness.py`

Expected: zero errors.

## Task 5: Documentation Refresh

**Files:**
- Modify: `SITE.md`
- Move docs into `docs/specs/` and `docs/qa/` only if doing so does not hide active user docs unexpectedly.

**Step 1: Update structure documentation**

Document the new canonical pages, labs folders, redirect strategy, and publishing harness.

**Step 2: Run harness**

Run: `python3 scripts/site_harness.py`

Expected: zero errors.

## Final Verification

Run:

```bash
python3 -m unittest tests/test_site_harness.py -v
python3 scripts/site_harness.py
```

If Ruby/Jekyll tooling is available locally, also run one of:

```bash
bundle exec jekyll build
jekyll build
```

If unavailable, the harness must report that the Jekyll build was skipped rather than failed.
