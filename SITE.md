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
├── _config.yml                # Jekyll, SEO, and publication exclusions
├── _data/navigation.yml       # Main navigation labels and destinations
├── _includes/                 # Shared navigation and analytics
├── _layouts/page.html         # Main-page layout and content landmark
├── CNAME                      # Custom domain configuration
├── assets/
│   ├── data/books.json        # Book data
│   ├── css/                   # Shared page and navigation styles
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

Core pages use `layout: page` with a unique `title` and `description` in YAML front matter. The shared layout provides semantic navigation, the content landmark, a keyboard skip link, and a reserved desktop navigation column. Use `body_class: wide-page` for pages with larger grids. Quotes retains its own layout and includes the shared navigation horizontally.

Edit `_data/navigation.yml` to update navigation everywhere. Shared styles live in `assets/css/site.css` and `assets/css/navigation.css`; page-specific presentation stays with its page. Set `analytics: true` on public pages to use the shared, configured Google Analytics tag.

Public image derivatives use responsive WebP sizes while preserving original assets. The music hero reserves its aspect ratio and loads eagerly. Quotes images load lazily, and video links create embedded players only when clicked.

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

The public `bookshelf.md` is a curated plaintext reading list, maintained separately from `assets/data/books.json`. The previous interactive bookshelf at `labs/bookshelf.html` reads that JSON directly. Differences between these lists may be intentional.

Use `./add-book.sh` for interactive book entry to the experimental bookshelf, or edit `assets/data/books.json` directly. This script commits and pushes JSON changes; it does not update the public reading list. Edit `bookshelf.md` when a book should also appear there.

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

For a complete local build, use a current Ruby (validated with Ruby 3.4), install Bundler and the locked dependencies, then build:

```bash
gem install bundler -v 2.6.9
bundle install
bundle exec jekyll build
```

On systems that install gems under your home directory, add the directory printed by `ruby -rrubygems -e 'puts Gem.user_dir + "/bin"'` to your shell's `PATH`. The bundle pins GitHub Pages 232 / Jekyll 3.10 to match the published site's generator.

Development documentation, scripts, and tests are excluded from publication in `_config.yml`. Compatibility redirects retain their URLs but have `sitemap: false` so they do not compete with their destinations in the sitemap.

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
