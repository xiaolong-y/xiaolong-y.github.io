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
  }
  
  /* Dark theme accent colors */
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
    }
  }
  
  /* Global styling with Flexoki colors */
  body {
    background-color: var(--fx-paper);
    color: var(--fx-base-900);
    font-family: 'IBM Plex Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
    font-weight: 200;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Font weight definitions for different elements */
  strong, b {
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
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
    transition: color 0.2s ease;
  }
  
  a:hover {
    color: var(--fx-cyan);
  }
  
  /* Neural art - floats right at all sizes */
  .neural-container {
    float: right;
    width: 140px;
    margin: 0 0 16px 16px;
    text-align: center;
  }

  .neural-container img, .neural-container canvas {
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(47, 45, 40, 0.15);
    transition: box-shadow 0.3s ease;
  }

  .neural-caption {
    display: none; /* Hidden on mobile to save space */
  }

  /* Small phones - slightly larger art */
  @media (min-width: 400px) {
    .neural-container {
      width: 160px;
      margin: 0 0 20px 20px;
    }
  }

  /* Larger phones */
  @media (min-width: 500px) {
    .neural-container {
      width: 200px;
    }

    .neural-caption {
      display: block;
      font-size: 10px;
      color: var(--fx-base-600);
      line-height: 1.4;
      text-align: left;
      margin-top: 8px;
    }
  }

  /* Tablets */
  @media (min-width: 600px) {
    .neural-container {
      width: 240px;
      margin: 0 0 25px 25px;
    }

    .neural-caption {
      font-size: 11px;
    }
  }

  /* Desktop */
  @media (min-width: 992px) {
    .neural-container {
      width: 300px;
      margin: 0 0 30px 30px;
    }

    .neural-caption {
      font-size: 12px;
    }
  }

  /* Large desktop */
  @media (min-width: 1200px) {
    .neural-container {
      width: 340px;
      margin: 0 0 30px 40px;
    }
  }
  
  /* Accessibility: Respect user preferences for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
  
  /* Horizontal rules - clear float to avoid cutting across art */
  hr {
    clear: both !important;
    border: none !important;
    border-top: 1px solid var(--fx-base-200) !important;
    margin: 2em 0 !important;
  }

  /* Code styling */
  code {
    background-color: var(--fx-base-50);
    color: var(--fx-orange);
    padding: 0.15em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
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

  /* Floating title animation - subtle */
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  .site-title {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 200;
    font-size: 1.8em;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    display: inline-block;
    animation: float 8s ease-in-out infinite;
    text-shadow: 0 4px 12px rgba(0,0,0,0.03);
    border-bottom: none;
    margin-bottom: 1.2em;
  }

  /* Headings with Flexoki styling */
  h1 {
    color: var(--fx-orange);
    border-bottom: 1px solid var(--fx-base-200);
    padding-bottom: 0.3em;
  }

  h1.site-title {
    color: inherit;
    border-bottom: none;
    padding-bottom: 0;
  }

  h2 {
    color: var(--fx-base-600);
    font-weight: 200;
    font-size: 0.9em;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-top: 2.5em;
    margin-bottom: 1em;
  }

  h3 {
    color: var(--fx-base-500);
    font-weight: 200;
    font-size: 0.8em;
    letter-spacing: 0.08em;
    text-transform: lowercase;
    margin-top: 1.8em;
    margin-bottom: 0.6em;
  }

  /* Flexoki Dark mode support */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--fx-base-950);
      color: var(--fx-base-200);
    }

    .neural-caption {
      color: var(--fx-base-400);
    }

    .neural-container img, .neural-container canvas {
      box-shadow: 0 2px 8px rgba(28, 27, 24, 0.4);
    }

    hr {
      border-top-color: var(--fx-base-800);
    }

    code {
      background-color: var(--fx-base-900);
      color: var(--fx-orange);
    }

    h1 {
      border-bottom-color: var(--fx-base-800);
    }

    h2 {
      color: var(--fx-base-500);
    }

    h3 {
      color: var(--fx-base-400);
    }

    .site-title {
      text-shadow: 0 6px 16px rgba(0,0,0,0.15);
    }

    /* Dark mode title colors - inverted for dark bg */
    .site-title .c1 { color: #A8ABA5 !important; }
    .site-title .c2 { color: #989B95 !important; }
    .site-title .c3 { color: #888B85 !important; }
    .site-title .c4 { color: #787B75 !important; }
    .site-title .c5 { color: #909590 !important; }
    .site-title .c6 { color: #808580 !important; }
    .site-title .c7 { color: #707570 !important; }
    .site-title .c8 { color: #606560 !important; }
    .site-title .y1 { color: #A09878 !important; }
    .site-title .y2 { color: #AA9E80 !important; }
    .site-title .y3 { color: #B4A888 !important; }
    .site-title .y4 { color: #BEB290 !important; }
  }

  /* Art alternation - hide by default, show when active */
  .art-option {
    display: none;
  }

  .art-option.active {
    display: block;
  }
</style>

<h1 class="site-title"><span class="c1" style="color:#3C3F3A">X</span><span class="c2" style="color:#4C4F4A">i</span><span class="c3" style="color:#5C5F5A">a</span><span class="c4" style="color:#6C6F6A">o</span><span class="c5" style="color:#52554F">l</span><span class="c6" style="color:#62655F">o</span><span class="c7" style="color:#72756F">n</span><span class="c8" style="color:#82857F">g</span> <span class="y1" style="color:#807862">Y</span><span class="y2" style="color:#8A826A">a</span><span class="y3" style="color:#948C72">n</span><span class="y4" style="color:#9E967A">g</span></h1>

<!-- Art Option 1: Neural Connection Symphony -->
<div class="art-option" id="art-neural">
  <div class="neural-container">
    <canvas id="neuron-canvas" role="img" aria-label="Interactive neural network visualization showing neurons connected by dendrites with animated synaptic signals"></canvas>
    <p class="neural-caption">
      <em>Neural Connection Symphony</em> visualizes the invisible music of thought. Each neuron fires with biologically-accurate action potentials—sharp depolarization flashes followed by refractory "cooling" periods. Signals cascade through dendrites using saltatory conduction, while calcium blooms mark synaptic arrivals. The psychedelic color palette evokes altered states where creativity flourishes. Click any neuron to trigger a cascade; the burst particles follow actual dendrite angles, simulating back-propagating action potentials. This is consciousness rendered visible: the tension between organic unpredictability and algorithmic precision.<br><br>
      <em>Inspired by Neuropit #13 by the Zairja Collective. Created with Claude AI.</em>
    </p>
  </div>
</div>

<!-- Art Option 2: Kismet -->
<div class="art-option" id="art-kismet">
  <div class="neural-container">
    <img src="assets/images/kismet.png" alt="Kismet, an expressive anthropomorphic robot with large eyes and mechanical features designed for social interaction">
    <p class="neural-caption">
      <em><a href="http://www.ai.mit.edu/projects/humanoid-robotics-group/kismet/kismet.html">Kismet</a></em> is an expressive anthropomorphic robot developed by <a href="https://www.media.mit.edu/people/cynthiab/overview/">Cynthia Breazeal</a>, designed to engage people in natural face-to-face interaction through facial expressions, gaze, and vocal babbles—embodying how social and computer systems can meaningfully interact.
    </p>
  </div>
</div>

<!-- Random art selection and conditional script loading -->
<script>
(function() {
  const artOptions = document.querySelectorAll('.art-option');
  const randomIndex = Math.floor(Math.random() * artOptions.length);
  artOptions[randomIndex].classList.add('active');

  // Only load neural-symphony.js if that art is selected
  if (artOptions[randomIndex].id === 'art-neural') {
    const script = document.createElement('script');
    script.src = 'assets/js/neural-symphony.js';
    script.onload = function() {
      // Manually initialize since DOMContentLoaded has already fired
      if (window.NeuralSymphony && document.getElementById('neuron-canvas')) {
        window.neuralSymphony = new window.NeuralSymphony('neuron-canvas');
      }
    };
    document.body.appendChild(script);
  }
})();
</script>

Welcome! I am a G2 graduate student in Harvard University's Master's program of [Regional Studies - East Asia](https://rsea.fas.harvard.edu) at the Kenneth C. Griffin Graduate School of Arts and Sciences.

My CV can be found [here](pdfs/cv_xly_web.pdf).

## intellectual pursuits

I am broadly interested in the interplay between important technologies and foundational human systems. 

### statistical software
I have worked on the [`evalITR`](https://github.com/MichaelLLi/evalITR) R package to expand its support for causal machine learning methods for estimation and evaluation of individualized treatment rules, and more generally heterogeneous treatment effects.

### book
My amazing coauthors and I delivered an open source book on the applications of R Markdown in Chinese.

Chunhui Gao, Yifan Wang, Qiushi Yan, Liangliang Zhuang, **Xiaolong Yang**.  
[An Authoritative Guide for R Markdown (Tentative English Title).](https://cosname.github.io/rmarkdown-guide/) Open-source Publication. 2023.

## teaching

Teaching and learning are bonded intellectual activities. I am particularly thankful to Prof. [Kosuke Imai](https://imai.fas.harvard.edu/) and Prof. [Connor Jerzak](https://connorjerzak.com/). Thanks to them, I had many opportunities to learn and teach. 

I was fortunate to be a part of Prof. [Kosuke Imai](https://imai.fas.harvard.edu/)'s teaching team for the celebrated introductory level data science course for social scientists - [QSS](https://kosukeimai.github.io/qss-todai/) at the University of Tokyo in 2022. We taught a series of TA lectures on tidyverse - a popular syntax of R. Slides are provided [here](https://github.com/xiaolong-y/qss-inst-tidyverse).

## miscellaneous

Non-academically, I write on my [bear blog](https://xiaolongy.bearblog.dev) occasionally.

I also keep my favorite [quotes](quotes.md), [bookshelf](bookshelf.md), and [thought snippets](ephemeral-thoughts-final.html) here. I created a collection of interactive [cognitive bias](cognitive-biases.html) visualizations in collaboration with [Claude Code](https://claude.ai/code).

<div style="clear: both;"></div>

---

<div align="center" style="margin: 30px 0;">
  <a href="mailto:yang-xiaolong0406@g.ecc.u-tokyo.ac.jp" style="text-decoration: none; margin: 0 8px;">
    <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/email.svg" alt="Email" width="30" height="30">
  </a>
  <a href="https://github.com/xiaolong-y" style="text-decoration: none; margin: 0 8px;">
    <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/github.svg" alt="Github" width="30" height="30">
  </a>
  <a href="https://twitter.com/xlypolmeth" style="text-decoration: none; margin: 0 8px;">
    <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/twitter.svg" alt="Twitter" width="30" height="30">
  </a>
  <a href="https://www.strava.com/athletes/107005784" style="text-decoration: none; margin: 0 8px;">
    <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/strava.svg" alt="Strava" width="30" height="30">
  </a>
</div>

<div align="center">
  <sub>Many thanks to <a href="https://jtibshirani.github.io/">Julie Tibshirani</a> for showing the perfect implementation of a lightweight website.</sub>
</div>
