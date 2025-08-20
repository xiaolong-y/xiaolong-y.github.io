# Favorite Sentences

<style>
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
  
  /* Quote styling */
  .quote-block {
    margin: 30px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-left: 4px solid #666;
    border-radius: 4px;
    max-width: 800px;
  }
  
  .quote-text {
    font-style: italic;
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 10px;
  }
  
  .quote-author {
    text-align: right;
    font-size: 0.9em;
    color: #666;
    font-weight: bold;
  }
  
  /* Navigation */
  .nav-links {
    margin-bottom: 30px;
    text-align: center;
  }
  
  .nav-links a {
    color: #0066cc;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1em;
  }
  
  .nav-links a:hover {
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
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .neural-caption {
      color: #aaa;
    }
    .neural-container img {
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    .quote-block {
      background-color: #2a2a2a;
      border-left-color: #aaa;
    }
    .quote-author {
      color: #aaa;
    }
  }
</style>

<div class="nav-links">
  <a href="/">← Back to Home</a>
</div>

A collection of sentences, quotes, and thoughts that have resonated with me over the years.

---

<div class="quote-block">
  <div class="quote-text">
    "What mysterious forces precede the appearance of the processes, promote their growth and ramification, stimulate the corresponding migration of the cells and fibres in predetermined directions, as if in obedience to a skillfully arranged architectural plan, and finally establish those protoplasmic kisses, the intercellular articulations, which seem to constitute the final ecstasy of an epic love story?"
  </div>
  <div class="quote-author">— Ramón y Cajal</div>
</div>

---

*This page is editable in markdown. You can add new quotes by editing the `favorite-sentences.md` file.*