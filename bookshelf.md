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

  /* ===== BOOKSHELF STRUCTURE ===== */

  /* Warm library colors */
  :root {
    --wood-light: #8B7355;
    --wood-medium: #6B5344;
    --wood-dark: #4A3728;
    --wood-grain: #5D4736;
    --shelf-shadow: rgba(45, 35, 25, 0.4);
    --library-warm: #F5F0E8;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --wood-light: #5D4A3A;
      --wood-medium: #4A3B2E;
      --wood-dark: #3A2E24;
      --wood-grain: #4A3C30;
      --shelf-shadow: rgba(0, 0, 0, 0.6);
      --library-warm: #1A1614;
    }
  }

  /* Bookshelf Container */
  .book-grid {
    max-width: 1100px;
    margin: 0 auto 60px;
    padding: 0 20px;
  }

  /* Individual Shelf Unit */
  .bookshelf {
    position: relative;
    margin-bottom: 20px;
  }

  /* Shelf Row - Books sit here */
  .shelf-row {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 8px;
    padding: 20px 30px 0;
    min-height: 220px;
    position: relative;
    flex-wrap: wrap;
  }

  /* Wooden Shelf Board */
  .shelf-board {
    position: relative;
    height: 24px;
    background: linear-gradient(
      180deg,
      var(--wood-light) 0%,
      var(--wood-medium) 40%,
      var(--wood-dark) 100%
    );
    border-radius: 2px;
    box-shadow:
      0 4px 8px var(--shelf-shadow),
      0 8px 16px var(--shelf-shadow),
      inset 0 2px 4px rgba(255,255,255,0.1),
      inset 0 -2px 4px rgba(0,0,0,0.2);
  }

  /* Wood grain texture */
  .shelf-board::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 60px,
      rgba(0,0,0,0.03) 60px,
      rgba(0,0,0,0.03) 62px
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 120px,
      rgba(255,255,255,0.02) 120px,
      rgba(255,255,255,0.02) 122px
    );
    border-radius: 2px;
  }

  /* Shelf front edge highlight */
  .shelf-board::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(
      180deg,
      var(--wood-dark) 0%,
      color-mix(in srgb, var(--wood-dark) 80%, black) 100%
    );
    border-radius: 0 0 2px 2px;
  }

  /* ===== BOOK SPINE DESIGN ===== */

  .book-spine {
    position: relative;
    cursor: pointer;
    transform-origin: bottom center;
    transition: transform 0.3s ease, margin 0.3s ease;
  }

  .book-spine:hover {
    transform: translateY(-12px) rotate(-2deg);
    z-index: 10;
    margin: 0 4px;
  }

  .book-spine:focus {
    outline: 3px solid var(--fx-cyan);
    outline-offset: 2px;
  }

  /* Spine wrapper for 3D effect */
  .spine-wrapper {
    position: relative;
    transform-style: preserve-3d;
  }

  /* Main spine face */
  .spine-face {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 12px 6px;
    background: linear-gradient(
      90deg,
      color-mix(in srgb, var(--book-accent, var(--fx-blue)) 85%, black) 0%,
      var(--book-accent, var(--fx-blue)) 15%,
      var(--book-accent, var(--fx-blue)) 85%,
      color-mix(in srgb, var(--book-accent, var(--fx-blue)) 70%, black) 100%
    );
    border-radius: 3px 3px 2px 2px;
    box-shadow:
      2px 0 4px rgba(0,0,0,0.2),
      -2px 0 4px rgba(0,0,0,0.15),
      0 4px 8px rgba(0,0,0,0.25);
    overflow: hidden;
  }

  /* Spine texture overlay */
  .spine-face::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255,255,255,0.08) 0%,
      transparent 20%,
      transparent 80%,
      rgba(0,0,0,0.1) 100%
    );
    pointer-events: none;
  }

  /* Top edge simulation */
  .spine-face::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      180deg,
      rgba(255,255,255,0.15) 0%,
      transparent 100%
    );
    border-radius: 3px 3px 0 0;
  }

  /* Book thickness variations */
  .book-spine[data-thickness="thin"] .spine-face { width: 22px; }
  .book-spine[data-thickness="medium"] .spine-face { width: 32px; }
  .book-spine[data-thickness="thick"] .spine-face { width: 42px; }
  .book-spine[data-thickness="chunky"] .spine-face { width: 52px; }

  /* Book height variations */
  .book-spine[data-height="short"] .spine-face { height: 160px; }
  .book-spine[data-height="medium"] .spine-face { height: 180px; }
  .book-spine[data-height="tall"] .spine-face { height: 200px; }

  /* Spine text - rotated vertically */
  .spine-title {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(255,255,255,0.95);
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    letter-spacing: 0.02em;
    line-height: 1.2;
    max-height: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .spine-author {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    font-family: 'Inter', sans-serif;
    font-size: 0.6rem;
    font-weight: 400;
    color: rgba(255,255,255,0.75);
    letter-spacing: 0.03em;
    max-height: 40px;
    overflow: hidden;
  }

  /* Decorative elements on spine */
  .spine-decoration {
    width: 60%;
    height: 2px;
    background: rgba(255,255,255,0.3);
    border-radius: 1px;
    margin: 4px 0;
  }

  /* ===== PER-BOOK ACCENT COLORS ===== */
  .book-spine[data-accent="red"] { --book-accent: var(--fx-red); }
  .book-spine[data-accent="orange"] { --book-accent: var(--fx-orange); }
  .book-spine[data-accent="yellow"] { --book-accent: var(--fx-yellow); }
  .book-spine[data-accent="green"] { --book-accent: var(--fx-green); }
  .book-spine[data-accent="cyan"] { --book-accent: var(--fx-cyan); }
  .book-spine[data-accent="blue"] { --book-accent: var(--fx-blue); }
  .book-spine[data-accent="purple"] { --book-accent: var(--fx-purple); }
  .book-spine[data-accent="magenta"] { --book-accent: var(--fx-magenta); }

  /* Special spine patterns */
  .book-spine[data-pattern="striped"] .spine-face {
    background: repeating-linear-gradient(
      0deg,
      var(--book-accent, var(--fx-blue)) 0px,
      var(--book-accent, var(--fx-blue)) 8px,
      color-mix(in srgb, var(--book-accent, var(--fx-blue)) 70%, white) 8px,
      color-mix(in srgb, var(--book-accent, var(--fx-blue)) 70%, white) 10px
    );
  }

  .book-spine[data-pattern="cloth"] .spine-face {
    background: var(--book-accent, var(--fx-blue));
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  }

  .book-spine[data-pattern="leather"] .spine-face {
    background: linear-gradient(
      90deg,
      color-mix(in srgb, var(--book-accent, var(--fx-blue)) 75%, black) 0%,
      var(--book-accent, var(--fx-blue)) 20%,
      var(--book-accent, var(--fx-blue)) 80%,
      color-mix(in srgb, var(--book-accent, var(--fx-blue)) 60%, black) 100%
    );
    box-shadow:
      2px 0 6px rgba(0,0,0,0.3),
      -2px 0 6px rgba(0,0,0,0.2),
      0 4px 10px rgba(0,0,0,0.3),
      inset 0 0 20px rgba(0,0,0,0.1);
  }

  /* Hover tooltip showing title */
  .book-spine[data-title]:hover::after {
    content: attr(data-title);
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 14px;
    background: var(--fx-base-900);
    color: var(--fx-base-100);
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    white-space: nowrap;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 100;
    pointer-events: none;
  }

  @media (prefers-color-scheme: dark) {
    .book-spine[data-title]:hover::after {
      background: var(--fx-base-100);
      color: var(--fx-base-900);
    }
  }

  /* ===== PULL-OUT ANIMATION STATES ===== */

  /* Phase 1: Pulling out from shelf */
  .book-spine.pulling-out {
    animation: pullOut 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    z-index: 50;
  }

  @keyframes pullOut {
    0% {
      transform: translateY(0) rotate(0) translateZ(0);
    }
    40% {
      transform: translateY(-20px) rotate(-3deg) translateZ(30px);
    }
    100% {
      transform: translateY(-30px) rotate(-8deg) translateZ(60px) scale(1.05);
    }
  }

  /* Phase 2: Fully pulled out, ready for modal */
  .book-spine.pulled-out {
    transform: translateY(-30px) rotate(-8deg) translateZ(60px) scale(1.05);
    z-index: 50;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  /* Phase 3: Sliding back into shelf when modal closes */
  .book-spine.sliding-back {
    animation: slideBack 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    z-index: 50;
  }

  @keyframes slideBack {
    0% {
      transform: translateY(-30px) rotate(-8deg) translateZ(60px) scale(1.05);
      opacity: 0.7;
    }
    60% {
      transform: translateY(-10px) rotate(-2deg) translateZ(20px) scale(1.02);
      opacity: 0.9;
    }
    100% {
      transform: translateY(0) rotate(0) translateZ(0) scale(1);
      opacity: 1;
    }
  }

  /* Disable hover effects during animation */
  .book-spine.pulling-out:hover,
  .book-spine.pulled-out:hover,
  .book-spine.sliding-back:hover {
    transform: inherit;
    margin: inherit;
  }

  /* ===== MODAL PAGE FLIP EFFECT ===== */

  .book-modal-overlay.active .book-modal {
    animation: pageFlipIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  @keyframes pageFlipIn {
    0% {
      transform: scale(0.6) rotateY(-30deg) translateZ(-100px);
      opacity: 0;
    }
    50% {
      transform: scale(0.9) rotateY(-10deg) translateZ(-30px);
      opacity: 0.8;
    }
    100% {
      transform: scale(1) rotateY(0) translateZ(0);
      opacity: 1;
    }
  }

  .book-modal-overlay.closing .book-modal {
    animation: pageFlipOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes pageFlipOut {
    0% {
      transform: scale(1) rotateY(0) translateZ(0);
      opacity: 1;
    }
    100% {
      transform: scale(0.8) rotateY(20deg) translateZ(-50px);
      opacity: 0;
    }
  }

  /* ===== BOOK MODAL (No external links) ===== */
  .book-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
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
    max-width: 650px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    transform: scale(0.9) translateY(20px);
    transition: transform 0.3s ease;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  }

  .book-modal-overlay.active .book-modal {
    transform: scale(1) translateY(0);
  }

  .modal-header {
    position: relative;
    padding: 40px 40px 30px;
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

  /* Modal Cover - With Fallback Design */
  .modal-cover-container {
    flex-shrink: 0;
    width: 140px;
  }

  .modal-cover {
    width: 140px;
    height: 210px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow:
      0 8px 30px rgba(0, 0, 0, 0.3),
      0 2px 8px rgba(0, 0, 0, 0.2);
  }

  /* Fallback Cover Design */
  .modal-cover-fallback {
    width: 140px;
    height: 210px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 14px;
    background: linear-gradient(
      145deg,
      var(--book-accent, var(--fx-blue)) 0%,
      color-mix(in srgb, var(--book-accent, var(--fx-blue)) 75%, black) 100%
    );
    box-shadow:
      0 8px 30px rgba(0, 0, 0, 0.3),
      0 2px 8px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255,255,255,0.1);
    position: relative;
    overflow: hidden;
  }

  .modal-cover-fallback::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(
      90deg,
      rgba(0,0,0,0.2) 0%,
      transparent 10%,
      transparent 90%,
      rgba(0,0,0,0.2) 100%
    );
  }

  .fallback-title {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1rem;
    font-weight: 600;
    color: rgba(255,255,255,0.95);
    line-height: 1.3;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }

  .fallback-author {
    font-family: 'Inter', sans-serif;
    font-size: 0.7rem;
    font-weight: 400;
    color: rgba(255,255,255,0.75);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .fallback-decoration {
    width: 30px;
    height: 2px;
    background: rgba(255,255,255,0.4);
    margin: 8px 0;
  }

  .modal-info h2 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--text-primary);
    line-height: 1.25;
  }

  .modal-author {
    font-size: 1.05rem;
    color: var(--text-muted);
    margin-bottom: 12px;
  }

  .modal-meta {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .modal-meta span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .modal-body {
    padding: 0 40px 40px;
  }

  .modal-description {
    font-size: 0.95rem;
    line-height: 1.75;
    color: var(--text-secondary);
    margin-bottom: 25px;
  }

  /* Featured Quote in Modal */
  .modal-quote {
    background: var(--bg-secondary);
    padding: 24px;
    border-left: 4px solid var(--fx-green);
    border-radius: 0 8px 8px 0;
    position: relative;
  }

  .modal-quote::before {
    content: '"';
    position: absolute;
    top: 8px;
    left: 12px;
    font-family: Georgia, serif;
    font-size: 3rem;
    color: var(--fx-green);
    opacity: 0.3;
    line-height: 1;
  }

  .modal-quote p {
    font-family: 'Crimson Pro', Georgia, serif;
    font-style: italic;
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 12px;
    line-height: 1.6;
    padding-left: 20px;
  }

  .modal-quote cite {
    display: block;
    font-size: 0.85rem;
    color: var(--text-muted);
    padding-left: 20px;
    font-style: normal;
  }

  /* Author info section */
  .modal-author-info {
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
  }

  .modal-author-info h4 {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-bottom: 8px;
  }

  .modal-author-info p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
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

  /* ===== RESPONSIVE DESIGN FOR BOOKSHELF ===== */

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

    .shelf-row {
      padding: 15px 20px 0;
      min-height: 200px;
      gap: 6px;
    }

    .book-spine[data-height="short"] .spine-face { height: 145px; }
    .book-spine[data-height="medium"] .spine-face { height: 165px; }
    .book-spine[data-height="tall"] .spine-face { height: 185px; }

    .spine-title {
      font-size: 0.7rem;
      max-height: 100px;
    }

    .spine-author {
      font-size: 0.55rem;
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
      flex-wrap: wrap;
    }

    .sort-controls {
      justify-content: center;
    }

    .shelf-row {
      padding: 12px 15px 0;
      min-height: 180px;
      gap: 5px;
    }

    .shelf-board {
      height: 20px;
    }

    .book-spine[data-thickness="thin"] .spine-face { width: 18px; }
    .book-spine[data-thickness="medium"] .spine-face { width: 26px; }
    .book-spine[data-thickness="thick"] .spine-face { width: 34px; }
    .book-spine[data-thickness="chunky"] .spine-face { width: 42px; }

    .book-spine[data-height="short"] .spine-face { height: 130px; }
    .book-spine[data-height="medium"] .spine-face { height: 150px; }
    .book-spine[data-height="tall"] .spine-face { height: 170px; }

    .spine-title {
      font-size: 0.65rem;
      max-height: 85px;
    }

    .spine-author {
      font-size: 0.5rem;
      max-height: 30px;
    }

    /* Hide tooltip on touch devices */
    .book-spine[data-title]:hover::after {
      display: none;
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

    .shelf-row {
      padding: 10px 10px 0;
      min-height: 160px;
      gap: 4px;
    }

    .shelf-board {
      height: 18px;
    }

    .book-spine[data-thickness="thin"] .spine-face { width: 16px; }
    .book-spine[data-thickness="medium"] .spine-face { width: 22px; }
    .book-spine[data-thickness="thick"] .spine-face { width: 28px; }
    .book-spine[data-thickness="chunky"] .spine-face { width: 36px; }

    .book-spine[data-height="short"] .spine-face { height: 115px; }
    .book-spine[data-height="medium"] .spine-face { height: 130px; }
    .book-spine[data-height="tall"] .spine-face { height: 145px; }

    .spine-face {
      padding: 8px 4px;
    }

    .spine-title {
      font-size: 0.6rem;
      max-height: 70px;
    }

    .spine-author {
      display: none; /* Hide author on very small screens */
    }

    .book-spine:hover {
      transform: translateY(-8px) rotate(-1deg);
      margin: 0 2px;
    }

    /* Modal responsive */
    .modal-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 30px 20px 20px;
    }

    .modal-cover-container {
      width: 120px;
    }

    .modal-cover,
    .modal-cover-fallback {
      width: 120px;
      height: 180px;
    }

    .modal-info h2 {
      font-size: 1.3rem;
    }

    .modal-meta {
      justify-content: center;
    }

    .modal-body {
      padding: 0 20px 30px;
    }

    .modal-quote {
      padding: 18px;
    }

    .modal-quote p {
      font-size: 1rem;
      padding-left: 15px;
    }
  }

  @media (max-width: 400px) {
    .filter-btn {
      padding: 6px 10px;
      font-size: 0.8rem;
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

    .book-spine:hover {
      transform: none;
      margin: 0;
    }
  }

  /* Focus visible for keyboard navigation */
  .book-spine:focus-visible,
  .filter-btn:focus-visible,
  .sort-select:focus-visible,
  .theme-toggle:focus-visible,
  .modal-close:focus-visible {
    outline: 3px solid var(--fx-cyan);
    outline-offset: 2px;
  }

  /* High contrast mode support */
  @media (forced-colors: active) {
    .book-spine .spine-face {
      border: 2px solid CanvasText;
    }

    .shelf-board {
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

    .shelf-board {
      background: #ccc;
      box-shadow: none;
    }

    .book-spine .spine-face {
      box-shadow: none;
      border: 1px solid #666;
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

<!-- Book Modal (No external links - cover, title, author, quote, description only) -->
<div class="book-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-hidden="true">
  <div class="book-modal">
    <div class="modal-header">
      <button class="modal-close" aria-label="Close modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <div class="modal-cover-container" id="modal-cover-container">
        <!-- Cover or fallback will be injected here -->
      </div>
      <div class="modal-info">
        <h2 id="modal-title"></h2>
        <p class="modal-author" id="modal-author"></p>
        <div class="modal-meta">
          <span id="modal-year"></span>
          <span id="modal-category"></span>
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
