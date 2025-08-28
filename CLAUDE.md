# Claude Development Guide

This repository contains Xiaolong Yang's personal academic website hosted on GitHub Pages using Jekyll.

## Project Overview

- **Type**: Personal academic website built with Jekyll and GitHub Pages
- **Owner**: Xiaolong Yang - Harvard University graduate student
- **URL**: https://xiaolong-y.github.io
- **Domain**: Academic portfolio showcasing research, teaching, and publications

## Repository Structure

```
xiaolong-y.github.io/
├── _config.yml              # Jekyll configuration with SEO settings
├── README.md                # Homepage content (serves as index.html)
├── favorite-sentences.md    # Collection of quotes and inspirational text
├── CNAME                    # Custom domain configuration
├── neuron.gif              # Neural network animation for homepage
├── neuron.png              # Static neural network image
├── xl_talk.png             # Profile/presentation image
└── pdfs/                   # Academic documents
    ├── cv_xly_web.pdf      # Current CV
    ├── interecon.pdf       # Research paper
    └── replicate.pdf       # Research paper
```

## Key Features

### Design & Styling
- **Color Scheme**: Flexoki color palette with dark mode support
- **Layout**: Mobile-first responsive design
- **Typography**: Clean academic styling with proper hierarchy
- **Images**: Neural network theme with animated GIF on homepage

### Content Sections
1. **Homepage (README.md)**:
   - Personal introduction and academic affiliations
   - Research interests and methodology focus
   - Teaching experience
   - Software development (evalITR R package)
   - Social media links and contact information

2. **Favorite Sentences (favorite-sentences.md)**:
   - Collection of inspirational quotes
   - HTML-styled quote blocks with proper attribution
   - Consistent formatting pattern

## Development Guidelines

### Content Updates
- **Homepage**: Edit README.md for main content changes
- **Quotes**: Edit favorite-sentences.md using the established HTML quote block pattern:
  ```html
  <div class="quote-block">
    <div class="quote-text">
      "Quote text here" or <em>Latin text here</em>
    </div>
    <div class="quote-author">— Author Name</div>
  </div>
  ```

### Styling Guidelines
- Use Flexoki CSS variables defined at the top of both README.md and favorite-sentences.md
- Maintain responsive design with mobile-first approach
- Follow existing class naming conventions (.quote-block, .quote-text, .quote-author)
- Preserve dark mode support using CSS media queries

### File Management
- PDFs should be placed in the `pdfs/` directory
- Images should be optimized and use descriptive names
- Maintain the existing file naming convention

### SEO Configuration
The site includes comprehensive SEO setup in `_config.yml`:
- Google Analytics 4 (G-RQC3VEC49K)
- Jekyll SEO plugin
- Social media metadata
- Sitemap generation

## Common Tasks

### Adding New Quotes
1. Edit `favorite-sentences.md`
2. Use the established HTML quote block format
3. For Latin quotes, wrap in `<em>` tags
4. Follow the author attribution pattern

### Updating CV
1. Replace `pdfs/cv_xly_web.pdf` with new version
2. Ensure filename consistency to avoid broken links

### Content Updates
1. Edit README.md for homepage changes
2. Maintain the existing CSS styling blocks
3. Preserve responsive image containers and neural network theme

### Deployment
- Changes are automatically deployed via GitHub Pages
- No build process required - Jekyll handles compilation
- Test changes locally if needed before pushing

## Technical Notes

### Jekyll Configuration
- Uses default GitHub Pages Jekyll settings
- SEO plugin enabled for better search engine visibility
- Sitemap automatically generated

### Analytics
- Google Analytics 4 tracking enabled
- Track ID: G-RQC3VEC49K

### Social Media Integration
- Twitter/X: @yang_appstats (note: different from homepage link @xlypolmeth)
- GitHub: xiaolong-y
- Strava integration for personal interests

## Contact Information
- Primary email: yang-xiaolong0406@g.ecc.u-tokyo.ac.jp
- Academic affiliation: Harvard University Regional Studies - East Asia
- Research focus: Political methodology and applied statistics