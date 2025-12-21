<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RQC3VEC49K"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-RQC3VEC49K');
</script>

<style>
  /* Font Imports */
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=IBM+Plex+Mono:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300&display=swap');

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

    /* Accent colors */
    --fx-red: #AF3029;
    --fx-orange: #BC5215;
    --fx-yellow: #AD8301;
    --fx-green: #66800B;
    --fx-cyan: #24837B;
    --fx-blue: #205EA6;
    --fx-purple: #5E409D;
    --fx-magenta: #A02F6F;

    /* Shadows */
    --shadow-subtle: 0 1px 3px rgba(45, 43, 40, 0.08);
    --shadow-medium: 0 4px 12px rgba(45, 43, 40, 0.10);
    --shadow-float: 0 8px 24px rgba(45, 43, 40, 0.12);

    /* Animation */
    --ease-gentle: cubic-bezier(0.25, 0.1, 0.25, 1.0);
    --duration-medium: 300ms;
    --duration-slow: 500ms;

    /* Spacing */
    --sp-1: 8px;
    --sp-2: 16px;
    --sp-3: 24px;
    --sp-4: 32px;
    --sp-5: 48px;
    --sp-6: 64px;
  }

  /* Dark theme */
  @media (prefers-color-scheme: dark) {
    :root {
      --fx-red: #D14D41;
      --fx-orange: #DA702C;
      --fx-yellow: #D0A215;
      --fx-green: #879A39;
      --fx-cyan: #3AA99F;
      --fx-blue: #4385BE;
      --fx-purple: #8B7EC8;
      --fx-magenta: #CE5D97;
      --shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.2);
      --shadow-medium: 0 4px 12px rgba(0, 0, 0, 0.25);
      --shadow-float: 0 8px 24px rgba(0, 0, 0, 0.3);
    }
  }

  /* Reset and base */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Hide Jekyll default header completely */
  header.page-header,
  section.page-header,
  .page-header,
  .project-name,
  .project-tagline,
  header[role="banner"],
  .site-header,
  .main-content > h1:first-child,
  .markdown-body > h1:first-child {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }

  body {
    background-color: var(--fx-paper);
    color: var(--fx-base-900);
    font-family: 'IBM Plex Mono', 'SF Mono', Monaco, monospace;
    font-weight: 200;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    transition: background-color var(--duration-medium) var(--ease-gentle),
                color var(--duration-medium) var(--ease-gentle);
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--fx-base-950);
      color: var(--fx-base-100);
    }
  }

  /* Page container */
  .quotes-page {
    max-width: 1400px;
    margin: 0 auto;
    padding: var(--sp-4) var(--sp-3);
    min-height: 100vh;
  }

  /* Navigation */
  .nav-header {
    position: sticky;
    top: 0;
    z-index: 100;
    padding: var(--sp-2) 0;
    margin-bottom: var(--sp-4);
    background: linear-gradient(to bottom, var(--fx-paper) 60%, transparent);
  }

  @media (prefers-color-scheme: dark) {
    .nav-header {
      background: linear-gradient(to bottom, var(--fx-base-950) 60%, transparent);
    }
  }

  .nav-link {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-1);
    color: var(--fx-base-700);
    text-decoration: none;
    font-size: 0.9em;
    font-weight: 300;
    padding: var(--sp-1) var(--sp-2);
    border-radius: 4px;
    transition: color var(--duration-medium) var(--ease-gentle),
                background-color var(--duration-medium) var(--ease-gentle);
  }

  .nav-link:hover {
    color: var(--fx-blue);
    background-color: var(--fx-base-50);
  }

  @media (prefers-color-scheme: dark) {
    .nav-link {
      color: var(--fx-base-400);
    }
    .nav-link:hover {
      color: var(--fx-cyan);
      background-color: var(--fx-base-900);
    }
  }

  .nav-arrow {
    font-size: 1.1em;
    transition: transform var(--duration-medium) var(--ease-gentle);
  }

  .nav-link:hover .nav-arrow {
    transform: translateX(-3px);
  }

  /* Page title */
  .page-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.9em;
    font-weight: 300;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-align: center;
    color: var(--fx-base-600);
    margin: var(--sp-4) 0 var(--sp-3);
  }

  @media (prefers-color-scheme: dark) {
    .page-title {
      color: var(--fx-base-500);
    }
  }

  /* Page intro */
  .page-intro {
    max-width: 700px;
    margin: 0 auto var(--sp-6) auto;
    text-align: center;
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.15em;
    font-weight: 300;
    line-height: 1.7;
    color: var(--fx-base-700);
    padding: 0 var(--sp-2);
  }

  @media (prefers-color-scheme: dark) {
    .page-intro {
      color: var(--fx-base-400);
    }
  }

  /* Quotes grid - organic masonry-like layout */
  .quotes-container {
    column-count: 1;
    column-gap: var(--sp-4);
    padding: var(--sp-2);
  }

  @media (min-width: 600px) {
    .quotes-container {
      column-count: 2;
    }
  }

  @media (min-width: 1000px) {
    .quotes-container {
      column-count: 3;
    }
  }

  /* Floating paper cards */
  .quote-card {
    break-inside: avoid;
    background: #FFFFFF;
    padding: var(--sp-3) var(--sp-3) var(--sp-2);
    margin-bottom: var(--sp-3);
    border-radius: 3px;
    box-shadow: var(--shadow-medium);
    position: relative;
    transform-origin: center center;
    transition: box-shadow var(--duration-medium) var(--ease-gentle),
                transform var(--duration-slow) var(--ease-gentle);
    will-change: transform;
  }

  @media (prefers-color-scheme: dark) {
    .quote-card {
      background: var(--fx-base-900);
    }
  }

  /* Random rotations via nth-child */
  .quote-card:nth-child(12n+1) { transform: rotate(-1.5deg); }
  .quote-card:nth-child(12n+2) { transform: rotate(0.8deg); }
  .quote-card:nth-child(12n+3) { transform: rotate(-0.5deg); }
  .quote-card:nth-child(12n+4) { transform: rotate(1.2deg); }
  .quote-card:nth-child(12n+5) { transform: rotate(-2deg); }
  .quote-card:nth-child(12n+6) { transform: rotate(0.3deg); }
  .quote-card:nth-child(12n+7) { transform: rotate(1.8deg); }
  .quote-card:nth-child(12n+8) { transform: rotate(-1deg); }
  .quote-card:nth-child(12n+9) { transform: rotate(0.6deg); }
  .quote-card:nth-child(12n+10) { transform: rotate(-1.8deg); }
  .quote-card:nth-child(12n+11) { transform: rotate(2deg); }
  .quote-card:nth-child(12n+12) { transform: rotate(-0.3deg); }

  /* Hover effect */
  .quote-card:hover {
    box-shadow: var(--shadow-float);
    transform: rotate(0deg) translateY(-4px) !important;
    z-index: 10;
  }

  /* Quote text - Crimson Pro serif */
  .quote-text {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.6;
    color: var(--fx-base-800);
    margin-bottom: var(--sp-2);
  }

  .quote-text em {
    font-style: italic;
    font-weight: 300;
  }

  @media (prefers-color-scheme: dark) {
    .quote-text {
      color: var(--fx-base-200);
    }
  }

  /* Quote author - IBM Plex Mono */
  .quote-author {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.8em;
    font-weight: 300;
    color: var(--fx-base-600);
    text-align: right;
    border-top: 1px solid var(--fx-base-200);
    padding-top: var(--sp-1);
    margin-top: var(--sp-2);
  }

  .quote-author a {
    color: var(--fx-blue);
    text-decoration: none;
    transition: color var(--duration-medium) var(--ease-gentle);
  }

  .quote-author a:hover {
    color: var(--fx-cyan);
    text-decoration: underline;
  }

  @media (prefers-color-scheme: dark) {
    .quote-author {
      color: var(--fx-base-500);
      border-top-color: var(--fx-base-800);
    }
  }

  /* Image cards */
  .quote-card.image-card {
    padding: 0;
    overflow: hidden;
  }

  .quote-card.image-card img {
    width: 100%;
    height: auto;
    display: block;
  }

  .quote-card.image-card .image-caption {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.75em;
    font-weight: 300;
    color: var(--fx-base-600);
    padding: var(--sp-2) var(--sp-2) var(--sp-2);
    line-height: 1.5;
  }

  @media (prefers-color-scheme: dark) {
    .quote-card.image-card .image-caption {
      color: var(--fx-base-500);
    }
  }

  /* Video cards */
  .quote-card.video-card {
    padding: 0;
    overflow: hidden;
  }

  .quote-card.video-card .video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
  }

  .quote-card.video-card .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .quote-card.video-card .video-caption {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.75em;
    font-weight: 300;
    color: var(--fx-base-600);
    padding: var(--sp-2) var(--sp-2) var(--sp-2);
    line-height: 1.5;
  }

  @media (prefers-color-scheme: dark) {
    .quote-card.video-card .video-caption {
      color: var(--fx-base-500);
    }
  }

  /* Parallax effect classes added by JS */
  .quote-card.parallax-slow { --parallax-speed: 0.02; }
  .quote-card.parallax-medium { --parallax-speed: 0.035; }
  .quote-card.parallax-fast { --parallax-speed: 0.05; }

  /* Accessibility: Respect reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    .quote-card {
      transform: none !important;
      transition: box-shadow var(--duration-medium) var(--ease-gentle) !important;
    }

    .quote-card:hover {
      transform: none !important;
    }

    .nav-link:hover .nav-arrow {
      transform: none;
    }
  }

  /* Print styles */
  @media print {
    .nav-header {
      display: none;
    }

    .quotes-container {
      column-count: 2;
    }

    .quote-card {
      box-shadow: none;
      border: 1px solid var(--fx-base-300);
      transform: none !important;
      break-inside: avoid;
    }
  }
</style>

<div class="quotes-page">

<nav class="nav-header">
  <a href="/" class="nav-link">
    <span class="nav-arrow">&larr;</span>
    <span>Home</span>
  </a>
</nav>

<h1 class="page-title">Inspirations</h1>

<p class="page-intro">
  These inspirations have had a profound influence on me. Their value lies not only in the solutions and perspectives they present, but in the reminder that others&mdash;often our heroes&mdash;have thought deeply about the same problems. That recognition is both heartening and humbling.
</p>

<div class="quotes-container" id="quotesContainer">
<div class="quote-card">
  <div class="quote-text">
    "Brick walls let us show our dedication."
  </div>
  <div class="quote-author">Randy Pausch</div>
</div>


<div class="quote-card">
  <div class="quote-text">
    "Follow your heart."
  </div>
  <div class="quote-author">Kosuke Imai</div>
</div>

<div class="quote-card">
  <div class="quote-text">
    1. QUESTION dumb requirements<br>
    2. DELETE anything you can<br>
    3. SIMPLIFY/OPTIMIZE<br>
    4. ACCELERATE CYCLE TIME<br>
    5. AUTOMATE
  </div>
  <div class="quote-author">Elon Musk</div>
</div>

<div class="quote-card image-card">
  <img src="assets/images/m87-black-hole.jpg" alt="First image of a black hole - M87* captured by the Event Horizon Telescope">
  <div class="image-caption"><a href="https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-87/">M87*</a> — Seeing the unseeable</div>
</div>

<div class="quote-card video-card">
  <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/bvim4rsNHkQ" title="YouTube video" allowfullscreen></iframe>
  </div>
  <div class="video-caption">Painful but good failures.</div>
</div>

<div class="quote-card video-card">
  <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/vGUNqq3jVLg?start=53" title="YouTube video" allowfullscreen></iframe>
  </div>
  <div class="video-caption">Speak with buts and therefores.</div>
</div>

<div class="quote-card">
  <div class="quote-text">
    "What mysterious forces precede the appearance of the processes, promote their growth and ramification, stimulate the corresponding migration of the cells and fibres in predetermined directions, as if in obedience to a skillfully arranged architectural plan, and finally establish those protoplasmic kisses, the intercellular articulations, which seem to constitute the final ecstasy of an epic love story?"
  </div>
  <div class="quote-author">Ramon y Cajal</div>
</div>

<div class="quote-card">
  <div class="quote-text">
    "Don't worry if you're winning or losing the fight. Just keep attacking!"
  </div>
  <div class="quote-author">Connor Jerzak</div>
</div>

<div class="quote-card">
  <div class="quote-text">
    <em>Esse quam videri</em>
  </div>
  <div class="quote-author">Marcus Tullius Cicero, <em>Laelius de Amicitia</em></div>
</div>

<div class="quote-card">
  <div class="quote-text">
    "I learned very early the difference between knowing the name of something and knowing something. The first principle is that you must not fool yourself, and you are the easiest person to fool."
  </div>
  <div class="quote-author">Richard Feynman</div>
</div>

<div class="quote-card">
  <div class="quote-text">
    <em>Nullius in verba</em>
  </div>
  <div class="quote-author">Motto of the Royal Society</div>
</div>

<div class="quote-card">
  <div class="quote-text">
    "It's hard to do a really good job on anything you don't think about in the shower."
  </div>
  <div class="quote-author">Paul Graham, <a href="https://www.paulgraham.com/top.html#f1n">The Top Idea in Your Mind</a></div>
</div>

<div class="quote-card">
  <div class="quote-text">
    "Premature optimization is the root of evil."
  </div>
  <div class="quote-author">Don Knuth</div>
</div>

<div class="quote-card">
  <div class="quote-text">
    "What ultimately matters in this course is not so much where you end up relative to your classmates but where you end up relative to yourself when you began."
  </div>
  <div class="quote-author">David J. Malan, CS50</div>
</div>

<div class="quote-card">
  <div class="quote-text">
    "It is better to travel than arrive."
  </div>
  <div class="quote-author">Robert Pirsig</div>
</div>

<div class="quote-card">
  <div class="quote-text">
    "Experience is what you get when you did not get what you wanted."
  </div>
  <div class="quote-author">Randy Pausch</div>
</div>

<div class="quote-card">
  <div class="quote-text">
    "One does not have to be brilliant, a genius, to be special. To do something better than anyone else. To be UNMATCHED, one has only to choose an END&mdash;an END that MATTERS, that INSPIRES YOU&mdash;and then DO IT."
  </div>
  <div class="quote-author">Manuel Blum</div>
</div>

<div class="quote-card">
  <div class="quote-text">
    "They could mock us, disregard us, use us to prop themselves up. But our teachers, if they are good, instead do something almost holy, which we never forget: they take us seriously. They accept us as new members of the guild. They tolerate the under-wonderful stories we write, the dopy things we say, our shaky-legged aesthetic theories, our posturing, because they have been there themselves.<br><br>We say: I think I might be a writer.<br><br>They say: Good for you. Proceed."
  </div>
  <div class="quote-author">George Saunders</div>
</div>

</div>

</div>

<script>
(function() {
  // Shuffle cards on page load to mix different types
  const container = document.getElementById('quotesContainer');
  const cardsArray = Array.from(container.children);
  cardsArray.sort(() => Math.random() - 0.5);
  cardsArray.forEach(card => container.appendChild(card));

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return;

  const cards = document.querySelectorAll('.quote-card');
  const parallaxSpeeds = ['parallax-slow', 'parallax-medium', 'parallax-fast'];

  // Assign random parallax speeds to cards
  cards.forEach((card, index) => {
    const speedClass = parallaxSpeeds[index % 3];
    card.classList.add(speedClass);
  });

  // Gentle parallax on scroll
  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = cardCenter - viewportCenter;

      // Get the base rotation from computed style
      const computedStyle = window.getComputedStyle(card);
      const matrix = new DOMMatrix(computedStyle.transform);
      const baseAngle = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);

      // Calculate parallax offset based on speed class
      let speed = 0.02;
      if (card.classList.contains('parallax-medium')) speed = 0.035;
      if (card.classList.contains('parallax-fast')) speed = 0.05;

      const parallaxY = distanceFromCenter * speed;

      // Apply subtle transform without overriding hover state
      if (!card.matches(':hover')) {
        card.style.transform = `rotate(${baseAngle}deg) translateY(${parallaxY}px)`;
      }
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  // Throttled scroll listener
  window.addEventListener('scroll', onScroll, { passive: true });

  // Reset transform on hover
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = '';
    });

    card.addEventListener('mouseleave', function() {
      requestAnimationFrame(updateParallax);
    });
  });

  // Initial call
  updateParallax();
})();
</script>
