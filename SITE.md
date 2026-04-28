# Website Documentation

Personal academic website for Xiaolong Yang, published through GitHub Pages.

## Project Structure

```text
xiaolong-y.github.io/
├── README.md                  # Minimal homepage; Jekyll renders it as the index
├── research.md                # Research-only page
├── software.md                # Software-only page
├── teaching.md                # Teaching-only page
├── bookshelf.md               # Plaintext bookshelf page
├── blog/                      # Local blog index and migrated posts
├── quotes.md                  # Quotes and inspirations
├── thought-snippets.html      # Redirect to Maker Space thought snippets
├── cognitive-biases.html      # Public index for cognitive bias visualizations
├── _config.yml                # Jekyll and SEO configuration
├── CNAME                      # Custom domain configuration
├── assets/
│   ├── data/books.json        # Book data
│   ├── images/                # Site images
│   └── js/                    # Vanilla JS for interactive pages
├── docs/
│   └── plans/                 # Migration and implementation plans
├── labs/
│   ├── index.html             # Discoverable index of experiments
│   ├── bias/                  # Cognitive bias detail pages
│   ├── calendar/              # Calendar widget prototypes
│   ├── kismet/                # Kismet visual prototypes
│   ├── name-layout/           # Name layout studies
│   ├── time-viz/              # Time visualization prototypes and research
│   ├── bookshelf.md           # Previous interactive bookshelf
│   ├── homepage-neural.md     # Previous visual homepage, preserved as a lab artifact
│   └── thought-snippets.html  # Previous visual thought snippets page
├── pdfs/
│   ├── cv_xly_web.pdf
│   ├── Resume_XiaolongYang_27.pdf
│   ├── interecon.pdf
│   └── replicate.pdf
├── scripts/site_harness.py    # Publishing/readiness validation harness
└── tests/test_site_harness.py # Harness unit tests
```

## Public Pages

The homepage intentionally follows a Patrick Collison-style model: small text surface, sparse links, no hero animation, and fast static rendering. It is a dense directory rather than a landing page with full sections.

Research, software, and teaching content lives on dedicated atomic pages:

- `research.md`
- `software.md`
- `teaching.md`

`bookshelf.md`, `blog/index.md`, `quotes.md`, and `cognitive-biases.html` remain public root-level pages. `thought-snippets.html` is now a compatibility redirect to `labs/thought-snippets.html`.

The blog lives under `blog/`. Only current public writing is kept in this repository.

- `blog/just-innovate.md`
- `blog/attempts-and-failures-are-information.md`
- `blog/fav_music.md`

## Maker Space And Redirects

Prototype and highly visual pages now live under `labs/` by topic. Root-level prototype URLs are preserved as lightweight redirect stubs, so older links such as `bias-sunk-cost.html`, `thought-snippets.html`, and `time-viz-prototype-A.html` continue to resolve.

Use `labs/index.html` as the entry point for Maker Space experiments. When adding a new prototype, place it in the relevant `labs/<topic>/` folder and add a link from the Maker Space index.

## Bookshelf

The public `bookshelf.md` is a plaintext reading list generated from `assets/data/books.json`. The previous interactive bookshelf is preserved at `labs/bookshelf.html`.

Use `./add-book.sh` for interactive book entry, or edit `assets/data/books.json` directly.

Required book fields:

```json
{
  "id": "13",
  "title": "Book Title",
  "author": "Author Name",
  "year": 2024,
  "category": "technology",
  "description": "Brief description...",
  "coverUrl": "https://...",
  "accentColor": "#205EA6",
  "rating": 5,
  "quote": {
    "text": "A memorable quote...",
    "author": "Author Name"
  }
}
```

Supported categories: `philosophy`, `science`, `technology`, `economics`, and `fiction`.

## Publishing Harness

Before pushing site changes, run:

```bash
python3 -m unittest tests/test_site_harness.py -v
python3 scripts/site_harness.py
```

The harness checks:

- Required GitHub Pages files and migrated blog sources
- Internal Markdown and HTML links
- Redirect stubs and redirect targets
- Asset inventory by extension, top-level folder, and functional cluster
- Optional local Jekyll build if `bundle`/`Gemfile` or `jekyll` is available

If local Jekyll tooling is unavailable, the harness reports the build as skipped rather than failed. GitHub Pages still builds remotely after pushing.

## Deployment

GitHub Pages deploys when changes are pushed to the publishing branch.

```bash
git add -A
git commit -m "description"
git push origin main
```

Do not remove redirect stubs unless you have intentionally decided to break old prototype URLs.
