---
title: Bookshelf
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RQC3VEC49K"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-RQC3VEC49K');
</script>

<style>
  /* Typography - Crimson Pro for headings, Inter for body (Stripe Press inspired) */
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

  /* Flexoki Color Palette Variables */
  :root {
    /* Base colors */
    --fx-paper: #FFFCF0;
    --fx-base-50: #F2F0E5;
    --fx-base-100: #E6E4D9;
    --fx-base-200: #DAD8CE;
    --fx-base-300: #CECDC3;
    --fx-base-400: #B7B5AC;
    --fx-base-500: #9F9D94;
    --fx-base-600: #878681;
    --fx-base-700: #6F6E69;
    --fx-base-800: #575653;
    --fx-base-850: #403E3C;
    --fx-base-900: #2D2B28;
    --fx-base-950: #1C1B18;

    /* Accent colors - light theme */
    --fx-red: #AF3029;
    --fx-orange: #BC5215;
    --fx-yellow: #AD8301;
    --fx-green: #66800B;
    --fx-cyan: #24837B;
    --fx-blue: #205EA6;
    --fx-purple: #5E409D;
    --fx-magenta: #A02F6F;

    /* Theme state */
    --bg-primary: var(--fx-paper);
    --bg-secondary: var(--fx-base-50);
    --text-primary: var(--fx-base-900);
    --text-secondary: var(--fx-base-700);
    --text-muted: var(--fx-base-600);
    --border-color: var(--fx-base-200);
    --shadow-color: rgba(47, 45, 40, 0.12);
    --shadow-hover: rgba(47, 45, 40, 0.2);
  }

  /* Dark theme - system preference */
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --fx-red: #D14D41;
      --fx-orange: #DA702C;
      --fx-yellow: #D0A215;
      --fx-green: #879A39;
      --fx-cyan: #3AA99F;
      --fx-blue: #4385BE;
      --fx-purple: #8B7EC8;
      --fx-magenta: #CE5D97;

      --bg-primary: var(--fx-base-950);
      --bg-secondary: var(--fx-base-900);
      --text-primary: var(--fx-base-100);
      --text-secondary: var(--fx-base-300);
      --text-muted: var(--fx-base-400);
      --border-color: var(--fx-base-800);
      --shadow-color: rgba(0, 0, 0, 0.3);
      --shadow-hover: rgba(0, 0, 0, 0.5);
    }
  }

  /* Manual dark theme override */
  :root[data-theme="dark"] {
    --fx-red: #D14D41;
    --fx-orange: #DA702C;
    --fx-yellow: #D0A215;
    --fx-green: #879A39;
    --fx-cyan: #3AA99F;
    --fx-blue: #4385BE;
    --fx-purple: #8B7EC8;
    --fx-magenta: #CE5D97;

    --bg-primary: var(--fx-base-950);
    --bg-secondary: var(--fx-base-900);
    --text-primary: var(--fx-base-100);
    --text-secondary: var(--fx-base-300);
    --text-muted: var(--fx-base-400);
    --border-color: var(--fx-base-800);
    --shadow-color: rgba(0, 0, 0, 0.3);
    --shadow-hover: rgba(0, 0, 0, 0.5);
  }

  /* Global styling */
  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 400;
    transition: background-color 0.3s ease, color 0.3s ease;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Serif headings for elegance */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Crimson Pro', Georgia, 'Times New Roman', serif;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  strong, b { font-weight: 600; }
  em, i { font-style: italic; }

  a {
    color: var(--fx-blue);
    transition: color 0.2s ease;
    text-decoration: none;
  }

  a:hover {
    color: var(--fx-cyan);
    text-decoration: underline;
  }

  /* Page Header - Generous whitespace like Stripe Press */
  .bookshelf-header {
    text-align: center;
    margin-bottom: 60px;
    padding: 60px 0 50px;
    border-bottom: 1px solid var(--border-color);
  }

  .bookshelf-header h1 {
    font-size: 3.5rem;
    margin-bottom: 16px;
    color: var(--text-primary);
    font-weight: 400;
  }

  .bookshelf-header p {
    color: var(--text-muted);
    font-size: 1.125rem;
    max-width: 550px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Controls Bar */
  .controls-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding: 15px 20px;
    background: var(--bg-secondary);
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }

  .filter-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }

  .filter-btn {
    padding: 8px 16px;
    border: 1px solid var(--border-color);
    background: var(--bg-primary);
    color: var(--text-secondary);
    border-radius: 20px;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.85em;
    font-weight: 300;
    transition: all 0.2s ease;
  }

  .filter-btn:hover {
    border-color: var(--fx-blue);
    color: var(--fx-blue);
  }

  .filter-btn.active {
    background: var(--fx-blue);
    border-color: var(--fx-blue);
    color: white;
  }

  .filter-btn:focus {
    outline: 2px solid var(--fx-cyan);
    outline-offset: 2px;
  }

  .sort-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sort-controls label {
    font-size: 0.85em;
    color: var(--text-muted);
  }

  .sort-select {
    padding: 8px 12px;
    border: 1px solid var(--border-color);
    background: var(--bg-primary);
    color: var(--text-primary);
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.85em;
    cursor: pointer;
  }

  .sort-select:focus {
    outline: 2px solid var(--fx-cyan);
    outline-offset: 2px;
  }

  /* Theme Toggle */
  .theme-toggle {
    padding: 8px;
    border: 1px solid var(--border-color);
    background: var(--bg-primary);
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .theme-toggle:hover {
    border-color: var(--fx-yellow);
  }

  .theme-toggle:focus {
    outline: 2px solid var(--fx-cyan);
    outline-offset: 2px;
  }

  .theme-toggle svg {
    width: 20px;
    height: 20px;
    fill: var(--text-secondary);
  }

  .theme-toggle .sun-icon { display: none; }
  .theme-toggle .moon-icon { display: block; }

  [data-theme="dark"] .theme-toggle .sun-icon { display: block; }
  [data-theme="dark"] .theme-toggle .moon-icon { display: none; }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) .theme-toggle .sun-icon { display: block; }
    :root:not([data-theme="light"]) .theme-toggle .moon-icon { display: none; }
  }

  /* Book Catalog - Vertical scrolling like Stripe Press */
  .book-grid {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 60px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Book Card - Horizontal layout with 3D cover */
  .book-card {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 40px;
    padding: 40px;
    background: var(--bg-secondary);
    border-radius: 16px;
    border: 1px solid var(--border-color);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  /* Per-book accent color bar */
  .book-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: var(--book-accent, var(--fx-blue));
    transition: width 0.3s ease;
  }

  .book-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px var(--shadow-hover);
  }

  .book-card:hover::before {
    width: 7px;
  }

  .book-card:focus {
    outline: 3px solid var(--fx-cyan);
    outline-offset: 2px;
  }

  /* 3D Book Cover Container */
  .book-cover-container {
    position: relative;
    perspective: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 3D Book Cover with spine, shadows, and shininess */
  .book-cover {
    position: relative;
    width: 140px;
    height: 200px;
    background: linear-gradient(
      135deg,
      var(--book-accent, var(--fx-blue)) 0%,
      color-mix(in srgb, var(--book-accent, var(--fx-blue)) 70%, #000) 100%
    );
    border-radius: 3px 8px 8px 3px;
    transform: rotateY(-8deg) rotateX(2deg);
    transform-style: preserve-3d;
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease;
    box-shadow:
      /* Main shadow */
      0 4px 8px var(--shadow-color),
      6px 6px 12px var(--shadow-color),
      12px 12px 24px var(--shadow-hover),
      /* Inner glow on right edge */
      inset -3px 0 10px rgba(0,0,0,0.15);
  }

  /* Book spine effect */
  .book-cover::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 12px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0,0,0,0.25) 0%,
      rgba(0,0,0,0.1) 40%,
      rgba(255,255,255,0.05) 60%,
      transparent 100%
    );
    border-radius: 3px 0 0 3px;
  }

  /* Glossy highlight/shininess effect */
  .book-cover::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 30%,
      rgba(255,255,255,0.08) 42%,
      rgba(255,255,255,0.18) 50%,
      rgba(255,255,255,0.08) 58%,
      transparent 70%
    );
    border-radius: 3px 8px 8px 3px;
    pointer-events: none;
  }

  /* Book cover image */
  .book-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px 8px 8px 3px;
  }

  /* Placeholder for books without covers */
  .book-cover-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 16px;
    text-align: center;
  }

  .book-cover-placeholder span {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.1rem;
    font-weight: 600;
    font-style: italic;
    color: rgba(255,255,255,0.92);
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
    line-height: 1.3;
  }

  /* 3D hover effect */
  .book-card:hover .book-cover {
    transform: rotateY(-12deg) rotateX(3deg) translateZ(12px);
    box-shadow:
      0 6px 12px var(--shadow-color),
      10px 10px 20px var(--shadow-color),
      18px 18px 36px var(--shadow-hover),
      inset -3px 0 10px rgba(0,0,0,0.15);
  }

  /* Book Info - Clean typography hierarchy */
  .book-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
  }

  .book-category {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--book-accent, var(--fx-cyan));
    margin-bottom: 10px;
  }

  .book-title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 6px;
    color: var(--text-primary);
    line-height: 1.3;
  }

  .book-author {
    font-size: 1rem;
    color: var(--text-muted);
    margin-bottom: 16px;
  }

  .book-description {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .book-meta {
    display: flex;
    gap: 24px;
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .book-meta span {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .book-year {
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .book-rating {
    display: flex;
    gap: 3px;
  }

  .star {
    width: 14px;
    height: 14px;
    fill: var(--fx-yellow);
  }

  .star.empty {
    fill: var(--border-color);
  }

  /* Book Tags */
  .book-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  }

  .book-tag {
    padding: 5px 14px;
    font-size: 0.75rem;
    font-weight: 500;
    background: var(--bg-primary);
    color: var(--text-secondary);
    border-radius: 20px;
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
  }

  .book-tag:hover {
    background: var(--book-accent, var(--fx-blue));
    color: white;
    border-color: var(--book-accent, var(--fx-blue));
  }

  /* ===== PER-BOOK ACCENT COLORS ===== */
  .book-card[data-accent="red"] { --book-accent: var(--fx-red); }
  .book-card[data-accent="orange"] { --book-accent: var(--fx-orange); }
  .book-card[data-accent="yellow"] { --book-accent: var(--fx-yellow); }
  .book-card[data-accent="green"] { --book-accent: var(--fx-green); }
  .book-card[data-accent="cyan"] { --book-accent: var(--fx-cyan); }
  .book-card[data-accent="blue"] { --book-accent: var(--fx-blue); }
  .book-card[data-accent="purple"] { --book-accent: var(--fx-purple); }
  .book-card[data-accent="magenta"] { --book-accent: var(--fx-magenta); }

  /* Book Modal */
  .book-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    padding: 20px;
  }

  .book-modal-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  .book-modal {
    background: var(--bg-primary);
    border-radius: 16px;
    max-width: 700px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    transform: scale(0.9);
    transition: transform 0.3s ease;
  }

  .book-modal-overlay.active .book-modal {
    transform: scale(1);
  }

  .modal-header {
    position: relative;
    padding: 40px;
    display: flex;
    gap: 30px;
    align-items: flex-start;
  }

  .modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 36px;
    height: 36px;
    border: none;
    background: var(--bg-secondary);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
  }

  .modal-close:hover {
    background: var(--border-color);
  }

  .modal-close svg {
    width: 18px;
    height: 18px;
    stroke: var(--text-secondary);
  }

  .modal-cover {
    width: 150px;
    height: 225px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    flex-shrink: 0;
  }

  .modal-info h2 {
    font-size: 1.5em;
    font-weight: 400;
    margin-bottom: 8px;
    color: var(--text-primary);
  }

  .modal-author {
    font-size: 1em;
    color: var(--text-muted);
    margin-bottom: 15px;
  }

  .modal-meta {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    font-size: 0.85em;
    color: var(--text-secondary);
  }

  .modal-body {
    padding: 0 40px 40px;
  }

  .modal-description {
    font-size: 0.95em;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 25px;
  }

  .modal-quote {
    background: var(--bg-secondary);
    padding: 20px;
    border-left: 4px solid var(--fx-green);
    border-radius: 4px;
    margin-bottom: 25px;
  }

  .modal-quote p {
    font-style: italic;
    color: var(--text-secondary);
    margin-bottom: 10px;
    line-height: 1.6;
  }

  .modal-quote cite {
    font-size: 0.85em;
    color: var(--text-muted);
  }

  .modal-links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .modal-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: var(--fx-blue);
    color: white;
    border-radius: 6px;
    font-size: 0.9em;
    transition: background-color 0.2s ease;
  }

  .modal-link:hover {
    background: var(--fx-cyan);
    text-decoration: none;
    color: white;
  }

  .modal-link.secondary {
    background: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
  }

  .modal-link.secondary:hover {
    border-color: var(--fx-blue);
    color: var(--fx-blue);
    background: transparent;
  }

  /* Empty State */
  .empty-state {
    text-align: center;
    padding: 60px 20px;
    color: var(--text-muted);
  }

  .empty-state svg {
    width: 80px;
    height: 80px;
    fill: var(--border-color);
    margin-bottom: 20px;
  }

  .empty-state h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: var(--text-secondary);
  }

  /* Navigation */
  .nav-links {
    margin-top: 50px;
    padding-top: 30px;
    border-top: 1px solid var(--border-color);
    text-align: center;
  }

  .nav-links a {
    color: var(--fx-blue);
    font-size: 1em;
    transition: color 0.2s ease;
  }

  .nav-links a:hover {
    color: var(--fx-cyan);
  }

  /* Loading State */
  .loading {
    display: flex;
    justify-content: center;
    padding: 60px;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--border-color);
    border-top-color: var(--fx-blue);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* ===== RESPONSIVE DESIGN ===== */

  /* Tablet */
  @media (max-width: 900px) {
    .bookshelf-header {
      padding: 40px 0 35px;
      margin-bottom: 40px;
    }

    .bookshelf-header h1 {
      font-size: 2.5rem;
    }

    .bookshelf-header p {
      font-size: 1rem;
    }

    .book-card {
      grid-template-columns: 150px 1fr;
      gap: 30px;
      padding: 30px;
    }

    .book-cover {
      width: 120px;
      height: 170px;
    }

    .book-title {
      font-size: 1.35rem;
    }
  }

  /* Mobile Landscape / Small Tablet */
  @media (max-width: 700px) {
    .controls-bar {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
    }

    .filter-controls {
      justify-content: center;
    }

    .sort-controls {
      justify-content: center;
    }

    .book-grid {
      gap: 30px;
    }

    .book-card {
      grid-template-columns: 130px 1fr;
      gap: 24px;
      padding: 24px;
    }

    .book-cover {
      width: 100px;
      height: 145px;
    }

    .book-title {
      font-size: 1.25rem;
    }

    .book-description {
      font-size: 0.9rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  /* Mobile Portrait */
  @media (max-width: 540px) {
    .bookshelf-header {
      padding: 30px 0 25px;
      margin-bottom: 30px;
    }

    .bookshelf-header h1 {
      font-size: 2rem;
    }

    .book-grid {
      gap: 24px;
    }

    /* Stack vertically on mobile */
    .book-card {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 24px;
      text-align: center;
    }

    .book-card::before {
      width: 100%;
      height: 4px;
      left: 0;
      top: 0;
    }

    .book-card:hover::before {
      width: 100%;
      height: 6px;
    }

    .book-cover-container {
      justify-content: center;
    }

    .book-cover {
      width: 130px;
      height: 185px;
      transform: rotateY(0) rotateX(0);
    }

    .book-card:hover .book-cover {
      transform: translateY(-8px);
    }

    .book-info {
      text-align: center;
    }

    .book-meta {
      justify-content: center;
      flex-wrap: wrap;
    }

    .book-tags {
      justify-content: center;
    }

    .modal-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 30px 20px;
    }

    .modal-cover {
      width: 120px;
      height: 180px;
    }

    .modal-meta {
      justify-content: center;
    }

    .modal-body {
      padding: 0 20px 30px;
    }

    .modal-links {
      justify-content: center;
    }
  }

  @media (max-width: 400px) {
    .filter-btn {
      padding: 6px 10px;
      font-size: 0.8rem;
    }

    .book-title {
      font-size: 1.15rem;
    }

    .book-description {
      font-size: 0.85rem;
    }
  }

  /* Accessibility: Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
    }

    .book-card:hover {
      transform: none;
    }

    .book-cover {
      transform: none !important;
    }

    .book-card:hover .book-cover {
      transform: none !important;
    }
  }

  /* Focus visible for keyboard navigation */
  .book-card:focus-visible,
  .filter-btn:focus-visible,
  .sort-select:focus-visible,
  .theme-toggle:focus-visible,
  .modal-close:focus-visible,
  .book-tag:focus-visible {
    outline: 3px solid var(--fx-cyan);
    outline-offset: 2px;
  }

  /* High contrast mode support */
  @media (forced-colors: active) {
    .book-card {
      border: 2px solid CanvasText;
    }

    .book-cover {
      border: 1px solid CanvasText;
    }
  }

  /* Screen reader only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Print styles */
  @media print {
    .controls-bar,
    .theme-toggle,
    .nav-links {
      display: none;
    }

    .book-card {
      break-inside: avoid;
      box-shadow: none;
      border: 1px solid #ccc;
    }

    .book-cover {
      transform: none;
      box-shadow: none;
    }
  }
</style>

<div class="bookshelf-header">
  <h1>Bookshelf</h1>
  <p>A curated collection of books that have shaped my thinking and sparked curiosity.</p>
</div>

<div class="controls-bar" role="toolbar" aria-label="Book filtering and sorting controls">
  <div class="filter-controls" role="group" aria-label="Filter by category">
    <button class="filter-btn active" data-category="all" aria-pressed="true">All</button>
    <button class="filter-btn" data-category="philosophy" aria-pressed="false">Philosophy</button>
    <button class="filter-btn" data-category="science" aria-pressed="false">Science</button>
    <button class="filter-btn" data-category="technology" aria-pressed="false">Technology</button>
    <button class="filter-btn" data-category="economics" aria-pressed="false">Economics</button>
    <button class="filter-btn" data-category="fiction" aria-pressed="false">Fiction</button>
  </div>

  <div class="sort-controls">
    <label for="sort-select">Sort by:</label>
    <select id="sort-select" class="sort-select" aria-label="Sort books">
      <option value="title">Title</option>
      <option value="author">Author</option>
      <option value="year">Year</option>
      <option value="rating">Rating</option>
    </select>

    <button class="theme-toggle" aria-label="Toggle dark mode" title="Toggle theme">
      <svg class="sun-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 7a5 5 0 100 10 5 5 0 000-10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
      <svg class="moon-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
    </button>
  </div>
</div>

<div class="book-grid" role="list" aria-label="Book collection">
  <div class="loading" aria-label="Loading books">
    <div class="loading-spinner"></div>
  </div>
</div>

<!-- Book Modal -->
<div class="book-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-hidden="true">
  <div class="book-modal">
    <div class="modal-header">
      <button class="modal-close" aria-label="Close modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <img class="modal-cover" src="" alt="" id="modal-cover">
      <div class="modal-info">
        <h2 id="modal-title"></h2>
        <p class="modal-author" id="modal-author"></p>
        <div class="modal-meta">
          <span id="modal-year"></span>
          <span id="modal-category"></span>
          <span id="modal-rating"></span>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <p class="modal-description" id="modal-description"></p>
      <div class="modal-quote" id="modal-quote-container">
        <p id="modal-quote"></p>
        <cite id="modal-quote-author"></cite>
      </div>
      <div class="modal-links" id="modal-links"></div>
    </div>
  </div>
</div>

<!-- Empty State (hidden by default) -->
<div class="empty-state" style="display: none;" id="empty-state">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V4a2 2 0 012-2h12a2 2 0 012 2v13M6 2v15"/>
  </svg>
  <h3>No books found</h3>
  <p>Try adjusting your filters to find more books.</p>
</div>

---

<div class="nav-links">
  <a href="/">← Back to Home</a>
</div>

<script src="assets/js/bookshelf.js"></script>
