<style>
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
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  a {
    color: var(--fx-blue);
    transition: color 0.2s ease;
  }
  
  a:hover {
    color: var(--fx-cyan);
  }
  
  /* Mobile-first approach - consistent with homepage */
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
  
  /* Quote styling with Flexoki colors */
  .quote-block {
    margin: 30px auto;
    padding: 20px;
    border-left: 4px solid var(--fx-green);
    border-radius: 4px;
    max-width: 800px;
    background-color: var(--fx-base-50);
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  .quote-text {
    font-style: italic;
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 10px;
    color: var(--fx-base-800);
  }
  
  .quote-author {
    text-align: right;
    font-size: 0.9em;
    color: var(--fx-base-600);
    font-weight: bold;
  }
  
  /* Navigation */
  .nav-links {
    margin-bottom: 30px;
    text-align: center;
  }
  
  .nav-links a {
    color: var(--fx-blue);
    text-decoration: none;
    margin: 0 15px;
    font-size: 1em;
    transition: color 0.2s ease;
  }
  
  .nav-links a:hover {
    color: var(--fx-cyan);
    text-decoration: underline;
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
    
    .quote-block {
      background-color: var(--fx-base-900);
      border-left-color: var(--fx-green);
    }
    
    .quote-text {
      color: var(--fx-base-200);
    }
    
    .quote-author {
      color: var(--fx-base-400);
    }
  }
</style>

Bags of words that have influnced me profusely over the years.

---

<div class="quote-block">
  <div class="quote-text">
    "What mysterious forces precede the appearance of the processes, promote their growth and ramification, stimulate the corresponding migration of the cells and fibres in predetermined directions, as if in obedience to a skillfully arranged architectural plan, and finally establish those protoplasmic kisses, the intercellular articulations, which seem to constitute the final ecstasy of an epic love story?"
  </div>
  <div class="quote-author">— Ramón y Cajal</div>
</div>

<div class="quote-block">
  <div class="quote-text">
    "Don't worry if you're winning or losing the fight. Just keep attacking!"
  </div>
  <div class="quote-author">— Connor Jerzak (Aug. 19th 2025)</div>
</div>

---

<div class="nav-links">
  <a href="/">← Back to Home</a>
</div>
