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

    /* Tinker Spacing Scale (8px base) */
    --sp-1: 8px;
    --sp-2: 16px;
    --sp-3: 24px;
    --sp-4: 32px;
    --sp-5: 48px;
    --sp-6: 64px;
    --sp-7: 96px;

    /* Shadows */
    --shadow-subtle: 0 1px 3px rgba(45, 43, 40, 0.08);
    --shadow-medium: 0 4px 12px rgba(45, 43, 40, 0.10);
    --shadow-float: 0 8px 24px rgba(45, 43, 40, 0.12);

    /* Animation */
    --ease-mechanical: cubic-bezier(0.4, 0.0, 0.2, 1);
    --ease-gentle: cubic-bezier(0.25, 0.1, 0.25, 1.0);
    --duration-fast: 150ms;
    --duration-medium: 300ms;
  }

  /* Dark theme colors */
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

  /* Global styling */
  body {
    background-color: var(--fx-paper);
    color: var(--fx-base-900);
    font-family: 'IBM Plex Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
    font-weight: 200;
    line-height: 1.6;
    transition: background-color var(--duration-medium) var(--ease-gentle),
                color var(--duration-medium) var(--ease-gentle);
  }

  /* Typography hierarchy */
  strong, b {
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    line-height: 1.3;
  }

  em, i {
    font-style: italic;
    font-weight: 200;
  }

  strong em, em strong, b i, i b {
    font-weight: 500;
    font-style: italic;
  }

  a {
    color: var(--fx-blue);
    transition: color var(--duration-fast) var(--ease-mechanical);
  }

  a:hover {
    color: var(--fx-cyan);
  }

  /* Navigation */
  .site-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--sp-4);
    padding: var(--sp-3) 0;
    margin-bottom: var(--sp-6);
    border-bottom: 1px solid var(--fx-base-200);
  }

  .nav-link {
    color: var(--fx-base-700);
    text-decoration: none;
    padding: var(--sp-1) var(--sp-2);
    border-bottom: 2px solid transparent;
    font-size: 0.9em;
    font-weight: 300;
    letter-spacing: 0.02em;
    transition: all var(--duration-fast) var(--ease-mechanical);
  }

  .nav-link:hover {
    color: var(--fx-blue);
    border-bottom-color: var(--fx-blue);
  }

  .nav-link.active {
    color: var(--fx-yellow);
    border-bottom-color: var(--fx-yellow);
  }

  /* Hero section with neural visualization */
  .hero-section {
    margin-bottom: var(--sp-6);
    overflow: hidden;
  }

  .neural-container {
    display: block;
    width: 100%;
    margin: 0 auto var(--sp-4) auto;
    text-align: center;
  }

  .neural-container img, .neural-container canvas {
    width: 85%;
    max-width: 400px;
    margin: 0 auto;
    display: block;
    border-radius: 4px;
    box-shadow: var(--shadow-medium);
    transition: box-shadow var(--duration-medium) var(--ease-gentle);
  }

  .neural-caption {
    width: 85%;
    margin: var(--sp-2) auto 0 auto;
    font-size: 11px;
    color: var(--fx-base-600);
    line-height: 1.5;
    text-align: left;
  }

  .intro-text {
    font-size: 1.05em;
    line-height: 1.7;
  }

  /* Content sections with proper spacing */
  .content-section {
    margin-bottom: var(--sp-6);
    padding-top: var(--sp-4);
  }

  /* Headings with Flexoki styling */
  h1 {
    color: var(--fx-orange);
    border-bottom: 1px solid var(--fx-base-200);
    padding-bottom: var(--sp-1);
    margin-bottom: var(--sp-4);
  }

  h2 {
    color: var(--fx-base-800);
    margin-top: var(--sp-5);
    margin-bottom: var(--sp-3);
    font-size: 1.15em;
    letter-spacing: 0.01em;
  }

  h3 {
    color: var(--fx-base-700);
    margin-top: var(--sp-4);
    margin-bottom: var(--sp-2);
    font-size: 1em;
  }

  /* Paragraphs */
  p {
    margin-bottom: var(--sp-3);
  }

  /* Code styling */
  code {
    background-color: var(--fx-base-50);
    color: var(--fx-orange);
    padding: 0.15em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
  }

  /* Horizontal rules */
  hr {
    clear: both !important;
    border: none !important;
    border-top: 1px solid var(--fx-base-200) !important;
    margin: var(--sp-6) 0 !important;
  }

  /* Footer */
  .site-footer {
    margin-top: var(--sp-7);
    padding-top: var(--sp-4);
    text-align: center;
  }

  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--sp-2);
    margin-bottom: var(--sp-3);
  }

  .social-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    transition: all var(--duration-fast) var(--ease-mechanical);
  }

  .social-links a:hover {
    background-color: var(--fx-base-50);
    transform: translateY(-2px);
  }

  .social-links img {
    width: 28px;
    height: 28px;
    opacity: 0.8;
    transition: opacity var(--duration-fast) var(--ease-mechanical);
  }

  .social-links a:hover img {
    opacity: 1;
  }

  .site-credit {
    font-size: 0.75em;
    color: var(--fx-base-500);
  }

  /* Responsive: Tablets and small desktops */
  @media (min-width: 600px) {
    .neural-container {
      float: right;
      width: 280px;
      margin: 0 0 var(--sp-4) var(--sp-4);
    }

    .neural-container img, .neural-container canvas {
      width: 100%;
    }

    .neural-caption {
      width: 100%;
      margin: var(--sp-2) 0 0 0;
      padding: 0;
    }

    .site-nav {
      gap: var(--sp-5);
    }
  }

  /* Desktop */
  @media (min-width: 992px) {
    .neural-container {
      width: 320px;
      margin: 0 0 var(--sp-4) var(--sp-5);
    }
  }

  /* Large desktop */
  @media (min-width: 1200px) {
    .neural-container {
      width: 350px;
      margin: 0 0 var(--sp-4) var(--sp-6);
    }
  }

  /* Mobile: Landscape */
  @media (max-width: 768px) and (orientation: landscape) {
    .neural-container img, .neural-container canvas {
      width: 50%;
      max-width: 300px;
    }

    .neural-caption {
      width: 50%;
    }
  }

  /* Mobile: Portrait */
  @media (max-width: 600px) {
    .site-nav {
      flex-wrap: wrap;
      gap: var(--sp-2);
    }

    .nav-link {
      padding: var(--sp-1);
      font-size: 0.85em;
    }

    .content-section {
      margin-bottom: var(--sp-5);
    }
  }

  /* Accessibility: Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--fx-base-950);
      color: var(--fx-base-200);
    }

    .site-nav {
      border-bottom-color: var(--fx-base-850);
    }

    .nav-link {
      color: var(--fx-base-400);
    }

    .nav-link:hover {
      color: var(--fx-blue);
    }

    .neural-caption {
      color: var(--fx-base-400);
    }

    hr {
      border-top-color: var(--fx-base-850) !important;
    }

    code {
      background-color: var(--fx-base-900);
      color: var(--fx-orange);
    }

    h1 {
      border-bottom-color: var(--fx-base-850);
    }

    h2 {
      color: var(--fx-base-300);
    }

    h3 {
      color: var(--fx-base-400);
    }

    .social-links a:hover {
      background-color: var(--fx-base-900);
    }

    .site-credit {
      color: var(--fx-base-600);
    }
  }
</style>

<!-- Navigation -->
<nav class="site-nav">
  <a href="/" class="nav-link active">home</a>
  <a href="quotes" class="nav-link">quotes</a>
  <a href="bookshelf" class="nav-link">bookshelf</a>
  <a href="cognitive-biases" class="nav-link">cognitive biases</a>
</nav>

<!-- Hero Section -->
<div class="hero-section">
  <div class="neural-container">
    <canvas id="neuron-canvas" role="img" aria-label="Interactive neural network visualization showing neurons connected by dendrites with animated synaptic signals"></canvas>
    <p class="neural-caption">
      <em>Neural Connection Symphony</em> visualizes the invisible music of thought. Each neuron fires with biologically-accurate action potentials—sharp depolarization flashes followed by refractory "cooling" periods. Signals cascade through dendrites using saltatory conduction, while calcium blooms mark synaptic arrivals. Click any neuron to trigger a cascade.<br><br>
      <em>Inspired by Neuropit #13 by the Zairja Collective. Created with Claude AI.</em>
    </p>
  </div>

  <p class="intro-text">Welcome! I am a G2 graduate student in Harvard University's Master's program of <a href="https://rsea.fas.harvard.edu">Regional Studies - East Asia</a> at the Kenneth C. Griffin Graduate School of Arts and Sciences.</p>

  <p>My CV can be found <a href="pdfs/cv_xly_web.pdf">here</a>.</p>
</div>

<!-- Intellectual Pursuits -->
<div class="content-section">

## intellectual pursuits

I am broadly interested in the interplay between important technologies and foundational human systems.

### statistical software

I have worked on the [`evalITR`](https://github.com/MichaelLLi/evalITR) R package to expand its support for causal machine learning methods for estimation and evaluation of individualized treatment rules, and more generally heterogeneous treatment effects.

### book

My amazing coauthors and I delivered an open source book on the applications of R Markdown in Chinese.

Chunhui Gao, Yifan Wang, Qiushi Yan, Liangliang Zhuang, **Xiaolong Yang**.
[An Authoritative Guide for R Markdown (Tentative English Title).](https://cosname.github.io/rmarkdown-guide/) Open-source Publication. 2023.

</div>

<!-- Teaching -->
<div class="content-section">

## teaching

Teaching and learning are bonded intellectual activities. I am particularly thankful to Prof. [Kosuke Imai](https://imai.fas.harvard.edu/) and Prof. [Connor Jerzak](https://connorjerzak.com/). Thanks to them, I had many opportunities to learn and teach.

I was fortunate to be a part of Prof. [Kosuke Imai](https://imai.fas.harvard.edu/)'s teaching team for the celebrated introductory level data science course for social scientists - [QSS](https://kosukeimai.github.io/qss-todai/) at the University of Tokyo in 2022. We taught a series of TA lectures on tidyverse - a popular syntax of R. Slides are provided [here](https://github.com/xiaolong-y/qss-inst-tidyverse).

</div>

<!-- Miscellaneous -->
<div class="content-section">

## miscellaneous

Non-academically, I write on my [bear blog](https://xiaolongy.bearblog.dev) occasionally.

</div>

<div style="clear: both;"></div>

---

<!-- Footer -->
<footer class="site-footer">
  <div class="social-links">
    <a href="mailto:yang-xiaolong0406@g.ecc.u-tokyo.ac.jp" aria-label="Email">
      <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/email.svg" alt="Email">
    </a>
    <a href="https://github.com/xiaolong-y" aria-label="GitHub">
      <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/github.svg" alt="GitHub">
    </a>
    <a href="https://twitter.com/xlypolmeth" aria-label="Twitter">
      <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/twitter.svg" alt="Twitter">
    </a>
    <a href="https://www.strava.com/athletes/107005784" aria-label="Strava">
      <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/strava.svg" alt="Strava">
    </a>
  </div>
  <p class="site-credit">Many thanks to <a href="https://jtibshirani.github.io/">Julie Tibshirani</a> for showing the perfect implementation of a lightweight website.</p>
</footer>

<script src="assets/js/neural-symphony.js"></script>
