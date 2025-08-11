---
layout: default
title: Home
---


# Xiaolong Yang

<style>
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
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .neural-caption {
    width: 85%;
    margin: 10px auto 0 auto;
    font-size: 12px;
    color: #666;
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
  
  /* Dark mode support (if you want it) */
  @media (prefers-color-scheme: dark) {
    .neural-caption {
      color: #aaa;
    }
    .neural-container img {
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
  }
</style>

<div class="neural-container">
  <img src="neuron.gif" alt="Neural Connection Symphony" loading="lazy">
  <p class="neural-caption">
    Neural Connection Symphony: a microscopic journey through living neural networks during moments of profound human experience—learning, excitement, and love. Inspired by Neuropit #13 by the Zairja Collective; created with sora and claude ai.
  </p>
</div>

Welcome! I am a G2 graduate student in Harvard University's Master's program of Regional Studies - East Asia. I am fortunate to be advised by Prof. [Kosuke Imai](https://imai.fas.harvard.edu/) and Prof. [Christina Davis](https://scholar.harvard.edu/cldavis/home).

My CV can be found [here](pdfs/cv_xly_web.pdf).

## Research

My main research interests lie in applied statistics with applications in social sciences. Particularly, I am interested in political methodology with a focus on individualized treatment rules and treatment effect heterogeneity. My substantive interests in political science broadly span comparative politics (civil society & public opinion), international relations (cooperation & IOs).

### Statistical Software
I currently work on the [`evalITR`](https://github.com/MichaelLLi/evalITR) R package to expand its support for causal machine learning methods for estimation and evaluation of individualized treatment rules, and more generally heterogeneous treatment effects.

### Book
My amazing coauthors and I are delivering an open source book on the applications of R Markdown in Chinese.

Chunhui Gao, Yifan Wang, Qiushi Yan, Liangliang Zhuang, **Xiaolong Yang**.  
[An Authoritative Guide for R Markdown (Tentative English Title).](https://cosname.github.io/rmarkdown-guide/) China Machine Press. Forthcoming in 2023.

## Teaching

I am hugely inspired by the great teaching of those before me. I am particularly thankful to Prof. [Kosuke Imai](https://imai.fas.harvard.edu/) and Prof. [Connor Jerzak](https://connorjerzak.com/). Thanks to them, I was able to learn from their teaching, and subsequently developed a passion to learn through teaching.

I was fortunate to be a part of Prof. [Kosuke Imai](https://imai.fas.harvard.edu/)'s teaching team for the celebrated introductory level data science course for social scientists - [QSS](https://kosukeimai.github.io/qss-todai/) at the University of Tokyo in 2022. We also taught a series of TA lectures on tidyverse - a popular syntax of R. Some slides are provided [here](https://github.com/xiaolong-y/qss-inst-tidyverse).

## Others

I used to keep a blog somewhere when I was younger. While I am still writing, I have not published much these days. I try and write more on my [bear blog](https://xiaolongy.bearblog.dev).

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
