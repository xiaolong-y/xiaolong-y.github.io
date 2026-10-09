<!-- Research page: keep research material here rather than on the homepage. -->
<style>
  :root {
    --fx-paper: #FFFCF0;
    --fx-base-50: #F2F0E5;
    --fx-base-900: #2D2B28;
    --fx-base-950: #1C1B18;
    --fx-blue: #205EA6;
    --fx-cyan: #24837B;
    --fx-orange: #BC5215;
  }

  body {
    box-sizing: border-box;
    max-width: 900px;
    margin: 48px auto;
    padding: 0 210px 0 18px;
    color: var(--fx-base-900);
    background: var(--fx-paper);
    font: 16px/1.55 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }

  h1 {
    margin: 0 0 1rem;
    font-size: 1.7rem;
  }

  h2 {
    margin: 1.8rem 0 0.5rem;
    font-size: 1rem;
  }

  a {
    color: var(--fx-blue);
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--fx-cyan);
  }

  code {
    background-color: var(--fx-base-50);
    color: var(--fx-orange);
    padding: 0.15em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
  }

  .quiet {
    color: #555;
  }

  @media (prefers-color-scheme: dark) {
    body {
      color: var(--fx-base-50);
      background: var(--fx-base-950);
    }

    :root {
      --fx-blue: #4385BE;
      --fx-cyan: #3AA99F;
      --fx-orange: #DA702C;
    }

    a {
      color: var(--fx-blue);
    }

    code {
      background-color: #2D2B28;
      color: var(--fx-orange);
    }

    .quiet {
      color: #aaa;
    }
  }

  .site-nav {
    list-style: none;
    padding-left: 0;
    margin: 0;
    position: fixed;
    top: 48px;
    right: max(18px, calc(50vw - 450px));
    width: 155px;
    z-index: 1000;
    font: 16px/1.55 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }

  .site-nav li {
    display: block;
    margin: 0.18rem 0;
  }

  .site-nav li:not(:last-child)::after {
    content: "";
  }

  .site-nav a {
    color: var(--fx-blue, #205EA6);
  }

  .site-nav a:hover {
    color: var(--fx-cyan, #24837B);
  }

  @media (max-width: 760px) {
    .site-nav {
      position: static;
      width: auto;
      margin: 1.25rem 0 2rem;
    }

    .site-nav li {
      display: inline;
      margin: 0;
    }

    .site-nav li:not(:last-child)::after {
      content: " / ";
      color: #777;
    }
  }

  @media (max-width: 760px) {
    body {
      max-width: 720px;
      padding: 0 18px;
    }
  }

  .thesis { margin: 2rem 0; padding: 1.1rem 0 1.3rem; border-top: 1px solid #DAD8CE; border-bottom: 1px solid #DAD8CE; }
  .thesis h2 { margin: 0 0 0.6rem; font-size: 0.8rem; font-weight: 400; }
  .thesis h3 { margin: 0; font-size: 1.08rem; font-weight: 600; line-height: 1.45; }
  .thesis-meta { font-size: 0.78rem; line-height: 1.6; margin: 0.5rem 0 1rem; }
  .thesis-abstract { font-size: 0.9rem; line-height: 1.65; margin: 0; }
  .figure-note { font-size: 0.72rem; margin: 1.1rem 0 0.5rem; }
  .thesis-figures { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
  .thesis-figures figure { margin: 0; min-width: 0; }
  .thesis-figures a { display: block; cursor: zoom-in; }
  .thesis-figures img { display: block; width: 100%; height: auto; }
  .thesis-figures figcaption { font-size: 0.74rem; line-height: 1.5; margin-top: 0.5rem; }
  .thesis-figures strong { font-weight: 600; }
  .thesis a:focus-visible { outline: 2px solid var(--fx-blue); outline-offset: 4px; }
  @media (max-width: 540px) { .thesis-figures { grid-template-columns: 1fr; gap: 1rem; } }
  @media (prefers-color-scheme: dark) { .thesis { border-color: #575653; } }
</style>

<ul class="site-nav">
  <li><a href="/">Home</a></li>
  <li><a href="pdfs/Resume_XiaolongYang_27.pdf">Resume</a></li>
  <li><a href="research.html">Research</a></li>
  <li><a href="software.html">Software</a></li>
  <li><a href="teaching.html">Outreach</a></li>
  <li><a href="bookshelf.html">Bookshelf</a></li>
  <li><a href="blog/">Blog</a></li>
  <li><a href="quotes.html">Quotes</a></li>
  <li><a href="labs/">Labs</a></li>
</ul>

# Research

I was drawn to questions in political methodology and applied statistics, with a particular interest in causal inference, heterogeneous treatment effects, and empirical research designs for social science. Please see my [Google Scholar page](https://scholar.google.com/citations?hl=en&user=aXdIxxEAAAAJ) for more.

<section class="thesis" aria-labelledby="thesis-heading">
  <h2 id="thesis-heading">Master’s thesis</h2>
  <h3>The Political Economy of Blockchain Innovation: Institutions, State-Legible Firms, and Open-Source Development</h3>
  <p class="thesis-meta quiet">A.M., Regional Studies East Asia · Harvard University · 2026<br>Advisor: Christina Davis</p>
  <p class="thesis-abstract"><strong>Abstract.</strong> How do political institutions shape blockchain innovations? I compare China and Japan, two institutionally distinct early adopters that govern blockchain through different governance channels. I compile original event-level data assets of domestic blockchain policy from 2013 to 2026. I link them to three new innovation outcomes: state-legible business activity in China, licensed exchange i.e., trading platforms activity in Japan, and blockchain open-source software activity associated with both countries. Using a number of identification strategies, the empirical evidence indicates that promotional policy does not reliably increase innovation volume, while restrictive policy reduces activity where it directly targets infrastructure or financial actors. In Japan, regulatory clarification expands the asset diversity for incumbent platforms with longer licensed history rather than increasing entry. In sum, states govern to structure the organizational forms, application domains, and channels which blockchain innovation becomes visible and durable.</p>
  <p class="figure-note quiet">Selected findings · click a figure to enlarge</p>
  <div class="thesis-figures">
    <figure>
      <a href="assets/images/research/japan-asset-diversity.webp" aria-label="Enlarge figure: Japan · Regulatory clarification"><img src="assets/images/research/japan-asset-diversity.webp" width="1800" height="1029" loading="lazy" decoding="async" alt="Coefficient estimates for asset diversity after Japan’s stablecoin reform. The diversity interaction is positive; the early-entrant interval includes zero."></a>
      <figcaption><strong>Japan · Regulatory clarification</strong><br>After the stablecoin reform, already-diversified exchanges expanded their asset listings; the early-entrant estimate remains imprecise. <span class="quiet">Fig. 20.</span></figcaption>
    </figure>
    <figure>
      <a href="assets/images/research/china-open-source.webp" aria-label="Enlarge figure: China · Infrastructure restrictions"><img src="assets/images/research/china-open-source.webp" width="1800" height="1125" loading="lazy" decoding="async" alt="Event-study estimates of Chinese blockchain open-source activity relative to global ecosystems around the May 2021 mining and trading ban, with an uncertainty band."></a>
      <figcaption><strong>China · Infrastructure restrictions</strong><br>Open-source activity declined after the May 2021 mining/trading ban, relative to global ecosystems. Shading shows uncertainty. <span class="quiet">Fig. 23d.</span></figcaption>
    </figure>
  </div>
</section>

## Notes (from long ago)

- [Econometrics](pdfs/interecon.pdf)
- [How to replicate](pdfs/replicate.pdf)

## Related Work

My dated (since 2023) academic CV is available [here](pdfs/cv_xly_web.pdf).
