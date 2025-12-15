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

  * { box-sizing: border-box; }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: 'Crimson Pro', Georgia, serif;
    font-weight: 500;
    line-height: 1.3;
  }

  .bookshelf-header {
    text-align: center;
    padding: 60px 20px 40px;
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

  /* ========== INFINITE SCROLL GRID ========== */
  .book-grid {
    display: flex;
    gap: 24px;
    padding: 0 24px;
    max-width: 1400px;
    margin: 0 auto 60px;
    height: 85vh;
    overflow: hidden;
    position: relative;
  }

  .book-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    overflow: hidden;
  }

  .book-column-inner {
    display: flex;
    flex-direction: column;
    gap: 24px;
    will-change: transform;
  }

  /* Infinite scroll animations - alternating directions */
  @keyframes scroll-down {
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0%); }
  }

  @keyframes scroll-up {
    0% { transform: translateY(0%); }
    100% { transform: translateY(-50%); }
  }

  .book-column:nth-child(odd) .book-column-inner {
    animation: scroll-down 60s linear infinite;
  }

  .book-column:nth-child(even) .book-column-inner {
    animation: scroll-up 55s linear infinite;
  }

  /* Pause on hover for readability */
  .book-grid:hover .book-column-inner {
    animation-play-state: paused;
  }

  /* ========== BOOK CARD - 3D BOOK COVERS ========== */
  .book-card {
    flex-shrink: 0;
    border-radius: 4px;
    overflow: visible;
    cursor: pointer;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
  }

  /* 3D book effect - pages underneath */
  .book-card::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    right: -3px;
    bottom: -3px;
    background: repeating-linear-gradient(
      90deg,
      var(--fx-base-100) 0px,
      var(--fx-base-200) 1px,
      var(--fx-base-100) 2px
    );
    border-radius: 2px 4px 4px 2px;
    transform: translateZ(-2px);
    box-shadow:
      2px 2px 4px rgba(0,0,0,0.1),
      4px 4px 8px rgba(0,0,0,0.08);
  }

  /* Book spine shadow */
  .book-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 8px;
    background: linear-gradient(90deg,
      rgba(0,0,0,0.2) 0%,
      rgba(0,0,0,0.05) 50%,
      transparent 100%);
    border-radius: 4px 0 0 4px;
    z-index: 2;
    pointer-events: none;
  }

  .book-card:focus { outline: 3px solid var(--fx-cyan); outline-offset: 4px; }

  /* ========== HOVER SHAKE ANIMATION ========== */
  @keyframes gentle-shake {
    0%, 100% { transform: rotate(0deg) translateY(0) scale(1); }
    10% { transform: rotate(-1.5deg) translateY(-2px) scale(1.02); }
    20% { transform: rotate(1.5deg) translateY(-3px) scale(1.02); }
    30% { transform: rotate(-1deg) translateY(-2px) scale(1.01); }
    40% { transform: rotate(1deg) translateY(-3px) scale(1.01); }
    50% { transform: rotate(-0.5deg) translateY(-4px) scale(1.02); }
    60% { transform: rotate(0.5deg) translateY(-3px) scale(1.02); }
    70% { transform: rotate(-0.5deg) translateY(-2px) scale(1.01); }
    80% { transform: rotate(0.5deg) translateY(-2px) scale(1.01); }
    90% { transform: rotate(0deg) translateY(-1px) scale(1.01); }
  }

  .book-card:hover {
    animation: gentle-shake 0.6s ease-in-out;
    z-index: 10;
  }

  .book-card:hover::before {
    box-shadow:
      4px 4px 8px rgba(0,0,0,0.15),
      8px 8px 16px rgba(0,0,0,0.1);
  }

  .book-cover-wrapper {
    position: relative;
    z-index: 1;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  }

  .book-cover {
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    display: block;
    background: var(--border-color);
  }

  /* ========== GENRE-SPECIFIC COVER ART ========== */
  .book-cover-fallback {
    width: 100%;
    aspect-ratio: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }

  /* Philosophy - Interconnected Minds/Nodes */
  .book-cover-fallback[data-genre="philosophy"] {
    background: linear-gradient(135deg, #5E409D 0%, #3d2a6b 100%);
  }
  .book-cover-fallback[data-genre="philosophy"]::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.2;
    background-image:
      radial-gradient(circle at 30% 20%, white 4px, transparent 4px),
      radial-gradient(circle at 70% 30%, white 3px, transparent 3px),
      radial-gradient(circle at 20% 60%, white 3px, transparent 3px),
      radial-gradient(circle at 80% 70%, white 4px, transparent 4px),
      radial-gradient(circle at 50% 50%, white 5px, transparent 5px),
      radial-gradient(circle at 40% 80%, white 3px, transparent 3px);
  }
  .book-cover-fallback[data-genre="philosophy"]::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background-image:
      linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%),
      linear-gradient(-45deg, transparent 48%, white 49%, white 51%, transparent 52%),
      linear-gradient(30deg, transparent 48%, white 49%, white 51%, transparent 52%);
    background-size: 60px 60px, 80px 80px, 100px 100px;
    background-position: 10px 10px, 30px 20px, 0 0;
  }

  /* Science - Atomic Orbitals */
  .book-cover-fallback[data-genre="science"] {
    background: linear-gradient(135deg, #24837B 0%, #1a5f59 100%);
  }
  .book-cover-fallback[data-genre="science"]::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    border: 2px solid rgba(255,255,255,0.2);
    border-radius: 50%;
    box-shadow:
      inset 0 0 0 40px transparent,
      inset 0 0 0 42px rgba(255,255,255,0.15),
      inset 0 0 0 80px transparent,
      inset 0 0 0 82px rgba(255,255,255,0.1);
  }
  .book-cover-fallback[data-genre="science"]::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 180px;
    height: 60px;
    transform: translate(-50%, -50%) rotate(60deg);
    border: 2px solid rgba(255,255,255,0.15);
    border-radius: 50%;
  }

  /* Technology - Circuit Board */
  .book-cover-fallback[data-genre="technology"] {
    background: linear-gradient(135deg, #205EA6 0%, #163d6b 100%);
  }
  .book-cover-fallback[data-genre="technology"]::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.2;
    background-image:
      linear-gradient(90deg, transparent 49%, white 49%, white 51%, transparent 51%),
      linear-gradient(0deg, transparent 49%, white 49%, white 51%, transparent 51%),
      radial-gradient(circle, white 3px, transparent 3px);
    background-size: 40px 40px, 40px 40px, 40px 40px;
    background-position: 0 0, 0 0, 20px 20px;
  }
  .book-cover-fallback[data-genre="technology"]::after {
    content: '';
    position: absolute;
    inset: 20px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 4px;
  }

  /* Economics - Graph Lines */
  .book-cover-fallback[data-genre="economics"] {
    background: linear-gradient(135deg, #66800B 0%, #455508 100%);
  }
  .book-cover-fallback[data-genre="economics"]::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.2;
    background-image:
      linear-gradient(0deg, transparent 95%, white 95%),
      linear-gradient(90deg, transparent 95%, white 95%);
    background-size: 20px 30px;
  }
  .book-cover-fallback[data-genre="economics"]::after {
    content: '';
    position: absolute;
    bottom: 30%;
    left: 10%;
    right: 10%;
    height: 40%;
    background:
      linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 32%, transparent 32%),
      linear-gradient(-20deg, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 52%, transparent 52%),
      linear-gradient(70deg, transparent 40%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0.12) 42%, transparent 42%);
  }

  /* Fiction - Flowing Narrative Waves */
  .book-cover-fallback[data-genre="fiction"] {
    background: linear-gradient(135deg, #A02F6F 0%, #6b1f4a 100%);
  }
  .book-cover-fallback[data-genre="fiction"]::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background-image:
      radial-gradient(ellipse 100% 50% at 0% 50%, transparent 40%, rgba(255,255,255,0.3) 45%, transparent 50%),
      radial-gradient(ellipse 100% 50% at 100% 30%, transparent 40%, rgba(255,255,255,0.2) 45%, transparent 50%),
      radial-gradient(ellipse 100% 50% at 0% 70%, transparent 40%, rgba(255,255,255,0.25) 45%, transparent 50%);
  }
  .book-cover-fallback[data-genre="fiction"]::after {
    content: '';
    position: absolute;
    top: 20%;
    left: -20%;
    width: 140%;
    height: 60%;
    border-top: 2px solid rgba(255,255,255,0.1);
    border-radius: 50%;
    transform: rotate(-10deg);
  }

  .fallback-title {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
    line-height: 1.3;
    text-shadow: 0 2px 4px rgba(0,0,0,0.4);
    position: relative;
    z-index: 1;
  }

  .fallback-author {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.8);
    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
    position: relative;
    z-index: 1;
  }

  /* ========== BOOK OPENING MODAL ========== */
  .book-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease, background 0.4s ease;
    padding: 20px;
    perspective: 2000px;
  }

  .book-modal-overlay.active {
    opacity: 1;
    visibility: visible;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
  }

  .book-modal {
    background: var(--bg-primary);
    border-radius: 4px;
    max-width: 700px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(-90deg) scale(0.8);
    transform-origin: left center;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow:
      -20px 0 40px rgba(0,0,0,0.3),
      0 20px 60px rgba(0,0,0,0.4);
  }

  .book-modal-overlay.active .book-modal {
    transform: rotateY(0deg) scale(1);
  }

  /* Book spine effect */
  .book-modal::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 20px;
    background: linear-gradient(90deg,
      rgba(0,0,0,0.15) 0%,
      rgba(0,0,0,0.05) 50%,
      rgba(255,255,255,0.05) 100%);
    border-radius: 4px 0 0 4px;
  }

  /* Page edge effect */
  .book-modal::after {
    content: '';
    position: absolute;
    right: -3px;
    top: 5px;
    bottom: 5px;
    width: 3px;
    background: repeating-linear-gradient(
      180deg,
      var(--fx-base-200) 0px,
      var(--fx-base-100) 1px,
      var(--fx-base-200) 2px
    );
    border-radius: 0 2px 2px 0;
  }

  .modal-content {
    padding: 40px 40px 40px 50px;
  }

  .modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border: none;
    background: var(--bg-secondary);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 10;
  }
  .modal-close:hover { background: var(--border-color); transform: rotate(90deg); }
  .modal-close svg { width: 20px; height: 20px; stroke: var(--text-secondary); }

  .modal-header {
    display: flex;
    gap: 28px;
    margin-bottom: 28px;
  }

  .modal-cover-container {
    flex-shrink: 0;
  }

  .modal-cover {
    width: 160px;
    height: 240px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: var(--shadow-md);
  }

  .modal-cover-fallback {
    width: 160px;
    height: 240px;
    border-radius: 4px;
    box-shadow: var(--shadow-md);
  }

  .modal-info {
    padding-top: 8px;
  }

  .modal-info h2 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 8px;
    line-height: 1.25;
  }

  .modal-author {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-bottom: 16px;
  }

  .modal-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 0.9rem;
    color: var(--text-muted);
  }

  .modal-meta span {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .modal-rating { color: var(--fx-yellow); }

  .modal-description {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 28px;
    font-size: 1rem;
  }

  .modal-quote {
    background: var(--bg-secondary);
    padding: 28px;
    border-radius: 8px;
    position: relative;
    border-left: 4px solid var(--fx-cyan);
  }

  .modal-quote::before {
    content: '"';
    position: absolute;
    top: 12px;
    left: 20px;
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 4rem;
    color: var(--fx-cyan);
    opacity: 0.2;
    line-height: 1;
  }

  .modal-quote p {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.2rem;
    font-style: italic;
    color: var(--text-primary);
    line-height: 1.7;
    margin-bottom: 12px;
    padding-left: 24px;
  }

  .modal-quote cite {
    font-size: 0.9rem;
    color: var(--text-muted);
    font-style: normal;
    padding-left: 24px;
    display: block;
  }

  /* ========== RESPONSIVE ========== */
  @media (max-width: 1200px) {
    .book-grid { gap: 20px; }
    .book-column:nth-child(4) { display: none; }
  }

  @media (max-width: 900px) {
    .book-grid { gap: 16px; padding: 0 16px; height: 80vh; }
    .book-column:nth-child(3) { display: none; }
    .bookshelf-header h1 { font-size: 2.5rem; }
    .modal-header { flex-direction: column; align-items: center; text-align: center; }
    .modal-cover, .modal-cover-fallback { width: 140px; height: 210px; }
    .modal-content { padding: 32px 24px 32px 34px; }
  }

  @media (max-width: 600px) {
    .book-grid { height: 75vh; gap: 12px; }
    .book-card { border-radius: 8px; }
    .bookshelf-header { padding: 40px 16px 30px; }
    .bookshelf-header h1 { font-size: 2rem; }
    .modal-cover, .modal-cover-fallback { width: 120px; height: 180px; }
    .modal-info h2 { font-size: 1.4rem; }
    .modal-content { padding: 28px 20px 28px 30px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .book-column-inner { animation: none !important; }
    .book-card:hover { animation: none; }
    .book-modal { transition: opacity 0.2s; transform: none !important; }
    .book-modal-overlay.active .book-modal { transform: none !important; }
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--border-color);
    border-top-color: var(--fx-blue);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  .empty-state {
    text-align: center;
    padding: 60px 20px;
    color: var(--text-muted);
  }

  .nav-links {
    text-align: center;
    padding: 30px 20px 60px;
    border-top: 1px solid var(--border-color);
    margin-top: 20px;
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
    <button class="modal-close" aria-label="Close">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-cover-container" id="modal-cover-container"></div>
        <div class="modal-info">
          <h2 id="modal-title"></h2>
          <p class="modal-author" id="modal-author"></p>
          <div class="modal-meta">
            <span id="modal-year"></span>
            <span id="modal-category"></span>
            <span class="modal-rating" id="modal-rating"></span>
          </div>
        </div>
      </div>
      <p class="modal-description" id="modal-description"></p>
      <div class="modal-quote" id="modal-quote-container" style="display: none;">
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
