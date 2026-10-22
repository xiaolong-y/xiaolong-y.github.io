---
layout: "page"
title: "Research"
description: "Political methodology, applied statistics, and research on the political economy of blockchain innovation."
analytics: true
---

<style>
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

  .figure-dialog { box-sizing: border-box; padding: 15px; border: 1px solid #DAD8CE; width: min(1120px, 96vw); max-width: 96vw; max-height: 96dvh; background: var(--fx-paper); color: var(--fx-base-900); }
  .figure-dialog::backdrop { background: rgb(0 0 0 / 75%); }
  .figure-dialog-bar { display: flex; align-items: center; justify-content: space-between; gap: 15px; font-size: 13px; margin-bottom: 12px; }
  .figure-dialog-bar p { margin: 0; }
  .figure-dialog button { cursor: pointer; flex-shrink: 0; font: inherit; padding: 5px 11px; background: none; color: inherit; border: 1px solid #DAD8CE; }
  .figure-dialog button:focus-visible { outline: 2px solid var(--fx-blue); outline-offset: 3px; }
  .figure-dialog img { display: block; width: 100%; height: auto; max-height: calc(96dvh - 110px); margin: auto; object-fit: contain; }
  @media (prefers-color-scheme: dark) { .figure-dialog { background: var(--fx-base-950); color: var(--fx-base-900); border-color: #575653; } .figure-dialog button { border-color: #575653; } }
  @media print { .figure-dialog { display: none; } }

</style>

<!-- Research page: keep research material here rather than on the homepage. -->
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


<dialog class="figure-dialog" aria-labelledby="figure-title">
  <div class="figure-dialog-bar"><p id="figure-title"></p><button type="button" autofocus>Close <span aria-hidden="true">×</span></button></div>
  <img alt="">
</dialog>
<script>
(() => {
  const dialog = document.querySelector('.figure-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('img');
  const title = dialog.querySelector('#figure-title');
  document.querySelectorAll('.thesis-figures a').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const thumbnail = link.querySelector('img');
      image.src = link.href;
      image.alt = thumbnail.alt;
      title.textContent = link.closest('figure').querySelector('figcaption strong').textContent;
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
