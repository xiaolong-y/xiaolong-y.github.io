# Website Documentation

Personal academic website for Xiaolong Yang.

## Project Structure

```
xiaolong-y.github.io/
├── README.md           # Homepage (Jekyll converts to index.html)
├── bookshelf.md        # Interactive bookshelf page
├── quotes.md           # Quotes collection
├── _config.yml         # Jekyll configuration
├── CNAME               # Custom domain config
├── add-book.sh         # CLI tool to add books
├── assets/
│   ├── data/
│   │   └── books.json  # Book data for bookshelf
│   └── js/
│       ├── bookshelf.js       # Bookshelf interactivity
│       └── neural-symphony.js # Homepage neural animation
└── pdfs/
    └── cv_xly_web.pdf  # CV document
```

## Pages

### Homepage (README.md)
- Neural network canvas animation
- Academic bio and CV link
- Teaching experience
- Links to blog, quotes, bookshelf

### Bookshelf (bookshelf.md)
- Pinterest-style infinite scroll columns
- 3D book card models with hover shake
- Genre-specific fallback cover art patterns
- Filter by category (philosophy, science, technology, economics, fiction)
- Overview mode for compact grid view
- Book-opening modal animation
- Dark/light theme toggle

## Adding Books

### Quick Method (CLI)
```bash
./add-book.sh
# Follow interactive prompts
```

### Manual Method
Edit `assets/data/books.json` directly:
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

### Categories
- `philosophy` - Purple gradient, connected nodes pattern
- `science` - Teal gradient, atomic orbital pattern
- `technology` - Blue gradient, circuit board pattern
- `economics` - Green gradient, graph lines pattern
- `fiction` - Magenta gradient, flowing waves pattern

### Accent Colors
| Name    | Light Mode | Dark Mode |
|---------|------------|-----------|
| red     | #AF3029    | #D14D41   |
| orange  | #BC5215    | #DA702C   |
| yellow  | #AD8301    | #D0A215   |
| green   | #66800B    | #879A39   |
| cyan    | #24837B    | #3AA99F   |
| blue    | #205EA6    | #4385BE   |
| purple  | #5E409D    | #8B7EC8   |
| magenta | #A02F6F    | #CE5D97   |

## Customization

### Bookshelf Animation Speeds
In `bookshelf.md`, adjust the keyframe durations:
```css
.book-column:nth-child(odd) .book-column-inner {
  animation: scroll-down 84s linear infinite;  /* Slower = higher number */
}
.book-column:nth-child(even) .book-column-inner {
  animation: scroll-up 77s linear infinite;
}
```

### Theme Colors
The site uses the Flexoki color palette. Variables are defined in `:root` at the top of each page's `<style>` block.

## Deployment

Site auto-deploys via GitHub Pages when pushing to `main` branch.

```bash
git add -A
git commit -m "description"
git push origin main
```

## Dependencies

- Jekyll (GitHub Pages default)
- Google Fonts: Crimson Pro, Inter, IBM Plex Mono
- No npm/node dependencies - vanilla JS only
