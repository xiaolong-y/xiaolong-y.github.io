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
  /* IBM Plex Mono Font Import */
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

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
    font-family: 'IBM Plex Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
    font-weight: 200;
    transition: background-color 0.3s ease, color 0.3s ease;
    line-height: 1.6;
  }

  strong, b { font-weight: 500; }
  h1, h2, h3, h4, h5, h6 { font-weight: 300; }
  em, i { font-style: italic; font-weight: 200; }

  a {
    color: var(--fx-blue);
    transition: color 0.2s ease;
    text-decoration: none;
  }

  a:hover {
    color: var(--fx-cyan);
    text-decoration: underline;
  }

  /* Page Header */
  .bookshelf-header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--border-color);
  }

  .bookshelf-header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: var(--text-primary);
  }

  .bookshelf-header p {
    color: var(--text-muted);
    font-size: 1em;
    max-width: 600px;
    margin: 0 auto;
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

  /* Book Grid */
  .book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
  }

  /* Book Card */
  .book-card {
    background: var(--bg-secondary);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    position: relative;
  }

  .book-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px var(--shadow-hover);
  }

  .book-card:focus {
    outline: 3px solid var(--fx-cyan);
    outline-offset: 2px;
  }

  .book-cover-container {
    position: relative;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    transition: background-color 0.3s ease;
  }

  .book-cover {
    width: 120px;
    height: 180px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
  }

  .book-card:hover .book-cover {
    transform: scale(1.05) rotate(-2deg);
  }

  .book-info {
    padding: 20px;
    border-top: 1px solid var(--border-color);
  }

  .book-category {
    font-size: 0.75em;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--fx-cyan);
    margin-bottom: 8px;
    font-weight: 400;
  }

  .book-title {
    font-size: 1.1em;
    font-weight: 400;
    margin-bottom: 5px;
    color: var(--text-primary);
    line-height: 1.3;
  }

  .book-author {
    font-size: 0.9em;
    color: var(--text-muted);
    margin-bottom: 12px;
  }

  .book-description {
    font-size: 0.85em;
    color: var(--text-secondary);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .book-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid var(--border-color);
  }

  .book-year {
    font-size: 0.8em;
    color: var(--text-muted);
  }

  .book-rating {
    display: flex;
    gap: 2px;
  }

  .star {
    width: 14px;
    height: 14px;
    fill: var(--fx-yellow);
  }

  .star.empty {
    fill: var(--border-color);
  }

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

  /* Responsive Design */
  @media (max-width: 768px) {
    .bookshelf-header h1 {
      font-size: 2em;
    }

    .controls-bar {
      flex-direction: column;
      align-items: stretch;
    }

    .filter-controls {
      justify-content: center;
    }

    .sort-controls {
      justify-content: center;
    }

    .book-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
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

  @media (max-width: 480px) {
    .book-grid {
      grid-template-columns: 1fr;
    }

    .filter-btn {
      padding: 6px 12px;
      font-size: 0.8em;
    }
  }

  /* Accessibility: Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }

    .book-card:hover {
      transform: none;
    }

    .book-card:hover .book-cover {
      transform: none;
    }
  }

  /* Focus visible for keyboard navigation */
  .book-card:focus-visible,
  .filter-btn:focus-visible,
  .sort-select:focus-visible,
  .theme-toggle:focus-visible,
  .modal-close:focus-visible {
    outline: 3px solid var(--fx-cyan);
    outline-offset: 2px;
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
