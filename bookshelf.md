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
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');

  :root {
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
    --fx-base-900: #2D2B28;
    --fx-base-950: #1C1B18;
    --fx-red: #AF3029;
    --fx-orange: #BC5215;
    --fx-yellow: #AD8301;
    --fx-green: #66800B;
    --fx-cyan: #24837B;
    --fx-blue: #205EA6;
    --fx-purple: #5E409D;
    --fx-magenta: #A02F6F;
    --bg-primary: var(--fx-paper);
    --bg-secondary: var(--fx-base-50);
    --text-primary: var(--fx-base-900);
    --text-secondary: var(--fx-base-700);
    --text-muted: var(--fx-base-500);
    --border-color: var(--fx-base-200);
    --shadow-sm: 0 2px 8px rgba(47, 45, 40, 0.08);
    --shadow-md: 0 8px 24px rgba(47, 45, 40, 0.12);
    --shadow-lg: 0 16px 48px rgba(47, 45, 40, 0.16);
  }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --fx-red: #D14D41; --fx-orange: #DA702C; --fx-yellow: #D0A215;
      --fx-green: #879A39; --fx-cyan: #3AA99F; --fx-blue: #4385BE;
      --fx-purple: #8B7EC8; --fx-magenta: #CE5D97;
      --bg-primary: var(--fx-base-950); --bg-secondary: var(--fx-base-900);
      --text-primary: var(--fx-base-100); --text-secondary: var(--fx-base-300);
      --text-muted: var(--fx-base-500); --border-color: var(--fx-base-800);
      --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);
      --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.3);
      --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.4);
    }
  }

  [data-theme="dark"] {
    --fx-red: #D14D41; --fx-orange: #DA702C; --fx-yellow: #D0A215;
    --fx-green: #879A39; --fx-cyan: #3AA99F; --fx-blue: #4385BE;
    --fx-purple: #8B7EC8; --fx-magenta: #CE5D97;
    --bg-primary: var(--fx-base-950); --bg-secondary: var(--fx-base-900);
    --text-primary: var(--fx-base-100); --text-secondary: var(--fx-base-300);
    --text-muted: var(--fx-base-500); --border-color: var(--fx-base-800);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.4);
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    font-family: 'Crimson Pro', Georgia, serif;
    font-weight: 500;
    line-height: 1.3;
  }

  .bookshelf-header {
    text-align: center;
    padding: 60px 20px 50px;
    margin-bottom: 40px;
  }

  .bookshelf-header h1 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }

  .bookshelf-header p {
    color: var(--text-muted);
    font-size: 1.1rem;
    max-width: 500px;
    margin: 0 auto;
  }

  .controls-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    padding: 0 20px;
  }

  .filter-btn {
    padding: 8px 18px;
    border: 1px solid var(--border-color);
    background: var(--bg-primary);
    color: var(--text-secondary);
    border-radius: 24px;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 400;
    transition: all 0.2s ease;
  }

  .filter-btn:hover { border-color: var(--fx-blue); color: var(--fx-blue); }
  .filter-btn.active { background: var(--fx-blue); border-color: var(--fx-blue); color: white; }

  .theme-toggle {
    padding: 8px;
    border: 1px solid var(--border-color);
    background: var(--bg-primary);
    border-radius: 8px;
    cursor: pointer;
    margin-left: 12px;
  }
  .theme-toggle svg { width: 20px; height: 20px; fill: var(--text-secondary); }
  .theme-toggle .sun-icon { display: none; }
  .theme-toggle .moon-icon { display: block; }
  [data-theme="dark"] .theme-toggle .sun-icon { display: block; }
  [data-theme="dark"] .theme-toggle .moon-icon { display: none; }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) .theme-toggle .sun-icon { display: block; }
    :root:not([data-theme="light"]) .theme-toggle .moon-icon { display: none; }
  }

  /* ========== PINTEREST MASONRY GRID ========== */
  .book-grid {
    column-count: 4;
    column-gap: 24px;
    padding: 0 24px;
    max-width: 1400px;
    margin: 0 auto 60px;
  }

  /* ========== FLOATING ANIMATIONS ========== */
  @keyframes float-up {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @keyframes float-down {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }

  .book-card:nth-child(4n+1) { animation: float-up 22s ease-in-out infinite; }
  .book-card:nth-child(4n+2) { animation: float-down 26s ease-in-out infinite; animation-delay: -5s; }
  .book-card:nth-child(4n+3) { animation: float-up 28s ease-in-out infinite; animation-delay: -10s; }
  .book-card:nth-child(4n+4) { animation: float-down 24s ease-in-out infinite; animation-delay: -3s; }

  /* ========== BOOK CARD ========== */
  .book-card {
    break-inside: avoid;
    margin-bottom: 24px;
    background: var(--bg-secondary);
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: var(--shadow-sm);
    will-change: transform;
  }

  .book-card:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: var(--shadow-lg);
  }

  .book-card:focus { outline: 3px solid var(--fx-cyan); outline-offset: 2px; }

  .book-cover {
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    display: block;
    background: var(--border-color);
  }

  /* Geometric Fallback Cover */
  .book-cover-fallback {
    width: 100%;
    aspect-ratio: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    background: linear-gradient(145deg, var(--cover-color) 0%, color-mix(in srgb, var(--cover-color) 70%, #000) 100%);
    position: relative;
    overflow: hidden;
  }

  .book-cover-fallback::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background-image: var(--pattern);
    background-size: var(--pattern-size, 60px 60px);
  }

  .book-cover-fallback[data-pattern="circles"]::before {
    --pattern: radial-gradient(circle at center, white 2px, transparent 2px);
    --pattern-size: 24px 24px;
  }
  .book-cover-fallback[data-pattern="grid"]::before {
    --pattern: linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px);
    --pattern-size: 30px 30px;
  }
  .book-cover-fallback[data-pattern="diagonal"]::before {
    --pattern: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px);
    --pattern-size: 100% 100%;
  }
  .book-cover-fallback[data-pattern="dots"]::before {
    --pattern: radial-gradient(circle, white 3px, transparent 3px);
    --pattern-size: 20px 20px;
  }
  .book-cover-fallback[data-pattern="waves"]::before {
    --pattern: radial-gradient(ellipse at 50% 0%, transparent 70%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0.1) 72%, transparent 72%);
    --pattern-size: 40px 20px;
  }

  .fallback-title {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: white;
    line-height: 1.3;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    position: relative;
    z-index: 1;
  }

  .fallback-author {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.85);
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    position: relative;
    z-index: 1;
  }

  .fallback-decoration {
    position: absolute;
    bottom: 20%;
    right: -20%;
    width: 60%;
    height: 60%;
    border: 2px solid rgba(255,255,255,0.2);
    border-radius: 50%;
  }

  .book-info { padding: 20px; }

  .book-title {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 6px;
    color: var(--text-primary);
    line-height: 1.35;
  }

  .book-author {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 8px;
  }

  .book-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .book-rating { color: var(--fx-yellow); letter-spacing: -1px; }

  .book-category {
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    background: var(--bg-primary);
    padding: 3px 8px;
    border-radius: 4px;
  }

  /* ========== MODAL ========== */
  .book-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    padding: 20px;
    backdrop-filter: blur(4px);
  }

  .book-modal-overlay.active { opacity: 1; visibility: visible; }

  .book-modal {
    background: var(--bg-primary);
    border-radius: 20px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    transform: scale(0.95) translateY(10px);
    transition: transform 0.2s ease;
  }

  .book-modal-overlay.active .book-modal { transform: scale(1) translateY(0); }

  .modal-header {
    position: relative;
    padding: 32px 32px 24px;
    display: flex;
    gap: 24px;
    align-items: flex-start;
  }

  .modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border: none;
    background: var(--bg-secondary);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }
  .modal-close:hover { background: var(--border-color); }
  .modal-close svg { width: 18px; height: 18px; stroke: var(--text-secondary); }

  .modal-cover {
    width: 140px;
    height: 210px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: var(--shadow-md);
    flex-shrink: 0;
  }

  .modal-cover-fallback {
    width: 140px;
    height: 210px;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .modal-info h2 { font-size: 1.5rem; font-weight: 500; margin-bottom: 8px; }
  .modal-author { color: var(--text-muted); margin-bottom: 12px; }
  .modal-meta { display: flex; gap: 16px; font-size: 0.85rem; color: var(--text-secondary); }
  .modal-body { padding: 0 32px 32px; }
  .modal-description { color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; }

  .modal-quote {
    background: var(--bg-secondary);
    padding: 24px;
    border-radius: 12px;
    position: relative;
  }

  .modal-quote::before {
    content: '"';
    position: absolute;
    top: 8px;
    left: 16px;
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 4rem;
    color: var(--fx-cyan);
    opacity: 0.3;
    line-height: 1;
  }

  .modal-quote p {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.15rem;
    font-style: italic;
    color: var(--text-primary);
    line-height: 1.6;
    margin-bottom: 12px;
    padding-left: 20px;
  }

  .modal-quote cite {
    font-size: 0.9rem;
    color: var(--text-muted);
    font-style: normal;
    padding-left: 20px;
  }

  /* ========== RESPONSIVE ========== */
  @media (max-width: 1200px) { .book-grid { column-count: 3; } }
  @media (max-width: 900px) {
    .book-grid { column-count: 2; column-gap: 20px; padding: 0 20px; }
    .book-card { margin-bottom: 20px; }
    .bookshelf-header h1 { font-size: 2.5rem; }
  }
  @media (max-width: 600px) {
    .book-grid { column-count: 2; column-gap: 16px; padding: 0 16px; }
    .book-card { margin-bottom: 16px; }
    .book-info { padding: 16px; }
    .book-title { font-size: 1rem; }
    .bookshelf-header { padding: 40px 16px 30px; }
    .bookshelf-header h1 { font-size: 2rem; }
    .modal-header { flex-direction: column; align-items: center; text-align: center; padding: 24px 20px 16px; }
    .modal-cover { width: 120px; height: 180px; }
    .modal-body { padding: 0 20px 24px; }
  }
  @media (max-width: 400px) { .book-grid { column-count: 1; max-width: 320px; } }

  @media (prefers-reduced-motion: reduce) {
    .book-card { animation: none !important; }
    .book-card:hover { transform: none; }
    .book-modal { transition: none; }
  }

  .loading { display: flex; justify-content: center; padding: 80px; }
  .loading-spinner {
    width: 32px; height: 32px;
    border: 3px solid var(--border-color);
    border-top-color: var(--fx-blue);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .empty-state { text-align: center; padding: 60px 20px; color: var(--text-muted); }

  .nav-links {
    text-align: center;
    padding: 30px 20px 60px;
    border-top: 1px solid var(--border-color);
    margin-top: 40px;
  }
  .nav-links a { color: var(--fx-blue); text-decoration: none; }
  .nav-links a:hover { text-decoration: underline; }
</style>

<div class="bookshelf-header">
  <h1>Bookshelf</h1>
  <p>Books that shaped my thinking</p>
</div>

<div class="controls-bar">
  <button class="filter-btn active" data-category="all">All</button>
  <button class="filter-btn" data-category="philosophy">Philosophy</button>
  <button class="filter-btn" data-category="science">Science</button>
  <button class="filter-btn" data-category="technology">Technology</button>
  <button class="filter-btn" data-category="economics">Economics</button>
  <button class="filter-btn" data-category="fiction">Fiction</button>
  <button class="theme-toggle" aria-label="Toggle theme">
    <svg class="sun-icon" viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
    <svg class="moon-icon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
  </button>
</div>

<div class="book-grid" role="list">
  <div class="loading"><div class="loading-spinner"></div></div>
</div>

<div class="book-modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="book-modal">
    <div class="modal-header">
      <button class="modal-close" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div id="modal-cover-container"></div>
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
    </div>
  </div>
</div>

<div class="empty-state" style="display: none;" id="empty-state">
  <p>No books found in this category.</p>
</div>

<div class="nav-links">
  <a href="/">← Back to Home</a>
</div>

<script src="assets/js/bookshelf.js"></script>
