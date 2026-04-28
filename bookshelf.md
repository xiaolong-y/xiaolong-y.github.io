<!-- Plaintext bookshelf inspired by patrickcollison.com/bookshelf. -->
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
    font-weight: 600;
  }

  h2 {
    margin: 1.8rem 0 0.5rem;
    font-size: 1rem;
    font-weight: 600;
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
  <li><a href="pdfs/Resume_XiaolongYang_27.pdf">Resume</a></li>
  <li><a href="research.html">Research</a></li>
  <li><a href="software.html">Software</a></li>
  <li><a href="teaching.html">Teaching</a></li>
  <li><a href="bookshelf.html">Bookshelf</a></li>
  <li><a href="blog/">Blog</a></li>
  <li><a href="quotes.html">Quotes</a></li>
  <li><a href="labs/">Maker Space</a></li>
</ul>

# Bookshelf

<p class="quiet">A plaintext list of books I have been reading or keeping nearby. The previous interactive version is preserved in <a href="labs/bookshelf.html">Maker Space</a>.</p>

## Economics

- [Capital in the Twenty-First Century](https://www.goodreads.com/book/show/18736925-capital-in-the-twenty-first-century), Thomas Piketty, 2013.

<!-- ## Fiction -->

## Philosophy

- A Pattern Language, Christopher Alexander, Sara Ishikawa, and Murray Silverstein, 1977.
- [Tractatus Logico-Philosophicus](https://www.goodreads.com/book/show/12075.Tractatus_Logico_Philosophicus), Ludwig Wittgenstein, 1922.
- [Meditations](https://www.goodreads.com/book/show/30659.Meditations), Marcus Aurelius, 180.
- [Zen and the Art of Motorcycle Maintenance](https://www.goodreads.com/book/show/629.Zen_and_the_Art_of_Motorcycle_Maintenance), Robert M. Pirsig, 1974.
- [The Structure of Scientific Revolutions](https://www.goodreads.com/book/show/61539.The_Structure_of_Scientific_Revolutions), Thomas S. Kuhn, 1962.

## Science

- [Thinking, Fast and Slow](https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow), Daniel Kahneman, 2011.
- [Gödel, Escher, Bach](https://www.goodreads.com/book/show/24113.G_del_Escher_Bach), Douglas Hofstadter, 1979.
- [Metamagical Themas: Questing for the Essence of Mind and Pattern](https://www.goodreads.com/book/show/181239.Metamagical_Themas), Douglas R. Hofstadter, 1985.
- [Biophilia](https://www.goodreads.com/book/show/153268.Biophilia), Edward O. Wilson, 1984.
- [The Elements of Statistical Learning](https://www.goodreads.com/book/show/148009.The_Elements_of_Statistical_Learning), Hastie, Tibshirani, Friedman, 2009.
- [Image and Brain: The Resolution of the Imagery Debate](https://www.goodreads.com/book/show/6352017-image-and-brain), Stephen M. Kosslyn, 1994.

## Technology

- [The Innovator's Dilemma](https://www.goodreads.com/book/show/2615.The_Innovator_s_Dilemma), Clayton Christensen, 1997.
- [Giant Brains: or Machines That Think](https://www.goodreads.com/book/show/25696020), Edmund Callis Berkeley, 1949.
- [The Idea Factory: Bell Labs and the Great Age of American Innovation](https://www.goodreads.com/book/show/11797471-the-idea-factory), Jon Gertner, 2012.
- [The Dream Machine: J.C.R. Licklider and the Revolution That Made Computing Personal](https://www.goodreads.com/book/show/722412.The_Dream_Machine), M. Mitchell Waldrop, 2001.
- [The Art of Doing Science and Engineering](https://www.goodreads.com/book/show/530415.The_Art_of_Doing_Science_and_Engineering), Richard Hamming, 1997.
