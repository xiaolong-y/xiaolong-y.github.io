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

  img, iframe {
    max-width: 100%;
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

    code {
      background-color: #2D2B28;
      color: var(--fx-orange);
    }

    .quiet {
      color: #aaa;
    }
  }

  @media (max-width: 760px) {
    body {
      max-width: 720px;
      padding: 0 18px;
    }

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
</style>

<ul class="site-nav">
  <li><a href="/">Home</a></li>
  <li><a href="../pdfs/Resume_XiaolongYang_27.pdf">Resume</a></li>
  <li><a href="../research.html">Research</a></li>
  <li><a href="../software.html">Software</a></li>
  <li><a href="../teaching.html">Teaching</a></li>
  <li><a href="../bookshelf.html">Bookshelf</a></li>
  <li><a href="./">Blog</a></li>
  <li><a href="../quotes.html">Quotes</a></li>
  <li><a href="../labs/">Maker Space</a></li>
</ul>

# Blog

- [Just Innovate](just-innovate.html), 18 Feb 2026.
- [Attempts and failures are information](attempts-and-failures-are-information.html), 09 Dec 2025.
- [My favorite things (music)](fav_music.html), 20 Aug 2025.
