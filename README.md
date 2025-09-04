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
  
  /* Mobile-first approach */
  .neural-container {
    display: block;
    width: 100%;
    margin: 0 auto 30px auto;
    text-align: center;
  }
  
  .neural-container img {
    width: 85%;
    max-width: 400px;
    margin: 0 auto;
    display: block;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(47, 45, 40, 0.15);
    transition: box-shadow 0.3s ease;
  }
  
  .neural-caption {
    width: 85%;
    margin: 10px auto 0 auto;
    font-size: 12px;
    color: var(--fx-base-600);
    line-height: 1.4;
    text-align: left;
  }
  
  /* Portrait tablets and small desktops */
  @media (min-width: 600px) {
    .neural-container {
      float: right;
      width: 280px;
      margin: 0 0 25px 25px;
    }
    
    .neural-container img {
      width: 100%;
    }
    
    .neural-caption {
      width: 100%;
      margin: 10px 0 0 0;
      padding: 0 5px;
    }
  }
  
  /* Desktop */
  @media (min-width: 992px) {
    .neural-container {
      width: 320px;
      margin: 0 0 30px 30px;
    }
  }
  
  /* Large desktop */
  @media (min-width: 1200px) {
    .neural-container {
      width: 350px;
      margin: 0 0 30px 40px;
    }
  }
  
  /* Handle landscape orientation on phones */
  @media (max-width: 768px) and (orientation: landscape) {
    .neural-container img {
      width: 50%;
      max-width: 300px;
    }
    
    .neural-caption {
      width: 50%;
    }
  }
  
  /* Accessibility: Respect user preferences for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
  
  /* Flexoki Dark mode support */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--fx-base-950);
      color: var(--fx-base-100);
    }
    
    .neural-caption {
      color: var(--fx-base-400);
    }
    
    .neural-container img {
      box-shadow: 0 2px 8px rgba(28, 27, 24, 0.4);
    }
  }
</style>

<div class="neural-container">
  <img src="neuron.gif" alt="Neural Connection Symphony" loading="lazy">
  <p class="neural-caption">
    Neural Connection Symphony: a microscopic journey through living neural networks during moments of profound human experience—learning, excitement, and love. Inspired by Neuropit #13 by the Zairja Collective; created with sora and claude ai.
  </p>
</div>

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

I also keep my favorite [quotes](quotes.md) here.

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
