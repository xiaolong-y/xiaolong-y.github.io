---
layout: default
title: Teaching
---

<style>
  :root { color-scheme: light dark; --paper: #FFFCF0; --ink: #2D2B28; --muted: #6F6E69; --line: #DAD8CE; --link: #205EA6; }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--paper); color: var(--ink); font: 15px/1.55 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
  .teaching-page { max-width: 1180px; margin: 44px auto; padding: 0 200px 0 24px; }
  a { color: var(--link); text-underline-offset: 3px; }
  a:hover { text-decoration-thickness: 2px; }
  a:focus-visible, button:focus-visible { outline: 2px solid var(--link); outline-offset: 5px; }
  .site-nav { position: fixed; top: 46px; right: max(24px, calc((100vw - 1180px) / 2 + 24px)); width: 140px; }
  .site-nav ul { list-style: none; padding: 0; margin: 0; }
  .site-nav li { margin: 3px 0; }
  .site-nav a { text-decoration: none; }
  .site-nav a:hover { text-decoration: underline; }
  .site-nav [aria-current="page"] { color: var(--ink); font-weight: 600; }
  h1 { font-size: 27px; font-weight: 600; letter-spacing: -.5px; margin: 0 0 7px; }
  .intro { max-width: 690px; margin: 0 0 17px; font-size: 17px; line-height: 1.5; }
  .course { font-size: 13px; color: var(--muted); margin: 0; }
  .course strong { color: var(--ink); font-weight: 600; }
  .course-links { display: flex; flex-wrap: wrap; gap: 6px 17px; margin: 7px 0 23px; font-size: 13px; }
  .section-line { display: flex; justify-content: space-between; gap: 12px; border-top: 1px solid var(--line); padding-top: 12px; margin-bottom: 19px; font-size: 12px; color: var(--muted); }
  .section-line h2 { font: inherit; color: var(--ink); margin: 0; }
  .lessons { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 27px 24px; }
  .lesson { min-width: 0; }
  .lesson h3 { display: flex; align-items: baseline; gap: 10px; font-size: 17px; font-weight: 600; letter-spacing: -.2px; line-height: 1.3; margin: 0 0 5px; }
  .number { color: var(--muted); font: 11px ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0; }
  .topic { color: var(--muted); font-size: 12px; margin: 0 0 10px; }
  figure { margin: 0; }
  .slide-link { display: block; cursor: zoom-in; border: 1px solid var(--line); background: white; }
  .slide-link img { display: block; width: 100%; height: auto; }
  .method { font-size: 14px; line-height: 1.55; margin: 10px 0 6px; }
  code { font: .9em ui-monospace, SFMono-Regular, Menlo, monospace; }
  .slide-source { font-size: 11px; color: var(--muted); margin: 0; }
  .slide-source a { color: inherit; }
  .practice { border-top: 1px solid var(--line); margin-top: 29px; padding-top: 17px; display: grid; grid-template-columns: 145px minmax(0,1fr); gap: 16px; }
  .practice h2 { font-size: 14px; margin: 0; font-weight: 600; }
  .practice p { margin: 0; font-size: 14px; }
  .credits { margin: 25px 0 0; font-size: 12px; color: var(--muted); max-width: 770px; }
  .credits a { color: inherit; }
  .slide-dialog { padding: 15px; border: 1px solid var(--line); max-width: min(1120px, 96vw); max-height: 96dvh; background: var(--paper); color: var(--ink); }
  .slide-dialog::backdrop { background: rgb(0 0 0 / 75%); }
  .dialog-bar { display: flex; align-items: center; justify-content: space-between; gap: 15px; font-size: 13px; margin-bottom: 12px; }
  .dialog-bar p { margin: 0; }
  .dialog-bar button { cursor: pointer; font: inherit; padding: 5px 11px; background: none; color: var(--ink); border: 1px solid var(--line); }
  .slide-dialog img { display: block; width: auto; max-width: 100%; max-height: calc(96dvh - 90px); margin: auto; object-fit: contain; }
  @media (prefers-color-scheme: dark) { :root { --paper: #1C1B18; --ink: #E6E4D9; --muted: #B7B5AC; --line: #575653; --link: #8EBCEB; } }
  @media (max-width: 900px) {
    .teaching-page { padding: 0 22px; margin: 25px auto; max-width: 800px; }
    .site-nav { position: static; width: auto; margin-bottom: 25px; }
    .site-nav ul { display: flex; flex-wrap: wrap; gap: 4px 14px; font-size: 13px; }
    .site-nav li { margin: 0; }
  }
  @media (max-width: 600px) {
    .teaching-page { padding: 0 18px; }
    .lessons { grid-template-columns: 1fr; gap: 26px; }
    .intro { font-size: 16px; }
    .section-line { font-size: 11px; }
    .practice { grid-template-columns: 1fr; gap: 6px; }
  }
  @media print { .site-nav, .slide-dialog { display: none; } .teaching-page { padding: 0; margin: 0; max-width: none; } .lesson { break-inside: avoid; } }
</style>

<div class="teaching-page">
<nav class="site-nav" aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="pdfs/Resume_XiaolongYang_27.pdf">Resume</a></li>
    <li><a href="research.html">Research</a></li>
    <li><a href="software.html">Software</a></li>
    <li><a href="teaching.html" aria-current="page">Teaching</a></li>
    <li><a href="bookshelf.html">Bookshelf</a></li>
    <li><a href="blog/">Blog</a></li>
    <li><a href="quotes.html">Quotes</a></li>
    <li><a href="beliefs.html">Beliefs</a></li>
    <li><a href="labs/">Maker Space</a></li>
  </ul>
</nav>
<main>
<header>
  <h1>Teaching</h1>
  <p class="intro">From running R code to understanding, reusing, and explaining it.</p>
  <p class="course"><strong>Quantitative Social Science</strong> · University of Tokyo · Summer 2022<br>Course assistant for Kosuke Imai. I taught tidyverse lectures for social science students.</p>
  <p class="course-links"><a href="https://kosukeimai.github.io/qss-todai/">Course</a><a href="https://github.com/xiaolong-y/qss-inst-tidyverse">Slides &amp; source code</a></p>
</header>
<section aria-labelledby="lecture-heading">
  <div class="section-line"><h2 id="lecture-heading">What I taught, and how</h2><span>Original lecture slides · click to enlarge</span></div>
  <div class="lessons">
    <article class="lesson">
      <h3><span class="number">01</span> One operation, many columns</h3>
      <p class="topic">dplyr · across() · where()</p>
      <figure>
        <a class="slide-link" href="assets/images/teaching/across.webp" aria-label="Enlarge slide: One operation, many columns">
          <img src="assets/images/teaching/across.webp" width="1400" height="1051" alt="Lecture slide explaining the column-selection and function arguments of across(), with examples of summary functions." loading="eager" decoding="async">
        </a>
        <figcaption>
          <p class="method">I started with repeated summaries of Florida voter data, then replaced them with <code>across()</code>. Same calculation; less repetition.</p>
          <p class="slide-source"><a href="https://raw.githubusercontent.com/xiaolong-y/qss-inst-tidyverse/main/Probability/pdf_slides/probability-tidy-1.pdf#page=9">Probability I · PDF p. 9 ↗</a></p>
        </figcaption>
      </figure>
    </article>
    <article class="lesson">
      <h3><span class="number">02</span> Give repeated code a name</h3>
      <p class="topic">Functions · arguments · code style</p>
      <figure>
        <a class="slide-link" href="assets/images/teaching/functions.webp" aria-label="Enlarge slide: Give repeated code a name">
          <img src="assets/images/teaching/functions.webp" width="1400" height="1051" alt="Lecture slide revealing a copied variable-name error in repeated rescaling code, motivating reusable functions." loading="eager" decoding="async">
        </a>
        <figcaption>
          <p class="method">A copy-paste error made the case for functions. We then built one in three steps: name, inputs, body.</p>
          <p class="slide-source"><a href="https://raw.githubusercontent.com/xiaolong-y/qss-inst-tidyverse/main/Probability/pdf_slides/probability-tidy-2.pdf#page=8">Probability II · PDF p. 8 ↗</a></p>
        </figcaption>
      </figure>
    </article>
    <article class="lesson">
      <h3><span class="number">03</span> See what the code works on</h3>
      <p class="topic">Vectors · lists · data frames</p>
      <figure>
        <a class="slide-link" href="assets/images/teaching/data-structures.webp" aria-label="Enlarge slide: See what the code works on">
          <img src="assets/images/teaching/data-structures.webp" width="1400" height="1051" alt="Lecture slide contrasting homogeneous atomic vectors and heterogeneous lists, with R code and printed results." loading="lazy" decoding="async">
        </a>
        <figcaption>
          <p class="method">I compared atomic vectors and lists side by side, using code and its output to connect data types to their structure.</p>
          <p class="slide-source"><a href="https://raw.githubusercontent.com/xiaolong-y/qss-inst-tidyverse/main/Uncertainty/pdf_slides/uncertainty-tidy-1.pdf#page=5">Uncertainty I · PDF p. 5 ↗</a></p>
        </figcaption>
      </figure>
    </article>
    <article class="lesson">
      <h3><span class="number">04</span> Build a loop, then generalize</h3>
      <p class="topic">For loops · functionals · purrr</p>
      <figure>
        <a class="slide-link" href="assets/images/teaching/iteration.webp" aria-label="Enlarge slide: Build a loop, then generalize">
          <img src="assets/images/teaching/iteration.webp" width="1400" height="1051" alt="Lecture slide annotating the output, sequence, and body of a for loop that computes column means." loading="lazy" decoding="async">
        </a>
        <figcaption>
          <p class="method">I unpacked a loop into output, sequence, and body. We then generalized column means to other summaries by passing a function as an argument.</p>
          <p class="slide-source"><a href="https://raw.githubusercontent.com/xiaolong-y/qss-inst-tidyverse/main/Uncertainty/pdf_slides/uncertainty-tidy-2.pdf#page=10">Uncertainty II · PDF p. 10 ↗</a></p>
        </figcaption>
      </figure>
    </article>
    <article class="lesson">
      <h3><span class="number">05</span> Make uncertainty visible</h3>
      <p class="topic">ggplot2 · intervals · facets</p>
      <figure>
        <a class="slide-link" href="assets/images/teaching/uncertainty.webp" aria-label="Enlarge slide: Make uncertainty visible">
          <img src="assets/images/teaching/uncertainty.webp" width="1400" height="1051" alt="Lecture slide plotting predicted vote shares against Obama vote shares with 95 percent confidence intervals." loading="lazy" decoding="async">
        </a>
        <figcaption>
          <p class="method">I paired plotting syntax with the figure it produces: vote-share predictions and 95% confidence intervals, followed by faceting examples.</p>
          <p class="slide-source"><a href="https://raw.githubusercontent.com/xiaolong-y/qss-inst-tidyverse/main/Uncertainty/pdf_slides/uncertainty-tidy-1.pdf#page=26">Uncertainty I · PDF p. 26 ↗</a></p>
        </figcaption>
      </figure>
    </article>
    <article class="lesson">
      <h3><span class="number">06</span> Write the reasoning, too</h3>
      <p class="topic">R Markdown · LaTeX · Bayes’ rule</p>
      <figure>
        <a class="slide-link" href="assets/images/teaching/writing.webp" aria-label="Enlarge slide: Write the reasoning, too">
          <img src="assets/images/teaching/writing.webp" width="1400" height="1051" alt="Lecture slide expressing an Enigma decoding problem in prose and displaying Bayes’ rule in mathematical notation." loading="lazy" decoding="async">
        </a>
        <figcaption>
          <p class="method">Using the Enigma decoding problem, I showed mathematical source and rendered notation, then how prose and code share one document.</p>
          <p class="slide-source"><a href="https://raw.githubusercontent.com/xiaolong-y/qss-inst-tidyverse/main/Probability/pdf_slides/probability-tidy-1.pdf#page=21">Probability I · PDF p. 21 ↗</a></p>
        </figcaption>
      </figure>
    </article>
  </div>
</section>
<section class="practice" aria-labelledby="practice-heading">
  <h2 id="practice-heading">Then, put it to work.</h2>
  <p>The lectures led into in-class QSS assignments: Enigma decoding, women in China, and the file-drawer problem. The sequence was concrete example → reusable idea → application.</p>
</section>
<p class="credits">Selected from my Probability and Uncertainty decks in our <a href="https://github.com/xiaolong-y/qss-inst-tidyverse">teaching team’s open materials</a>. Examples draw on QSS, <a href="https://r4ds.had.co.nz/">R for Data Science</a>, and <a href="https://adv-r.hadley.nz/">Advanced R</a>.<br>Grateful to <a href="https://imai.fas.harvard.edu/">Kosuke Imai</a> and <a href="https://connorjerzak.com/">Connor Jerzak</a> for opportunities to learn and teach.</p>
</main>
</div>

<dialog class="slide-dialog" aria-labelledby="slide-title">
  <div class="dialog-bar"><p id="slide-title"></p><button type="button" autofocus>Close <span aria-hidden="true">×</span></button></div>
  <img alt="">
</dialog>
<script>
(() => {
  const dialog = document.querySelector('.slide-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('img');
  const title = dialog.querySelector('#slide-title');
  document.querySelectorAll('.slide-link').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const thumbnail = link.querySelector('img');
      image.src = link.href;
      image.alt = thumbnail.alt;
      title.textContent = link.closest('article').querySelector('h3').textContent.trim();
      dialog.showModal();
    });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
})();
</script>
