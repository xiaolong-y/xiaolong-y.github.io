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

  /* ========================================
     Calendar Strip Widget (8 weeks)
     Light, soft, minimal design
     ======================================== */

  .calendar-widget {
    display: flex;
    justify-content: center;
    margin: 24px 0;
    padding: 8px 0;
  }

  .cal-strip-8w {
    display: flex;
    justify-content: center;
  }

  .cal-strip-8w-days {
    display: flex;
    gap: 2px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cal-strip-8w-week {
    display: flex;
    gap: 2px;
  }

  .cal-strip-8w-week:not(:last-child) {
    margin-right: 4px;
  }

  .cal-strip-8w-day {
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: transform 0.15s ease, opacity 0.15s ease;
    flex-shrink: 0;
  }

  .cal-strip-8w-day:hover {
    transform: scale(1.4);
    z-index: 10;
    position: relative;
  }

  .cal-strip-8w-day.weekend {
    border-radius: 50%;
  }

  .cal-strip-8w-day.today {
    box-shadow: 0 0 0 1.5px var(--fx-cyan);
  }

  /* Tooltip - soft and light */
  .cal-tooltip {
    position: fixed;
    background: var(--fx-base-50);
    color: var(--fx-base-700);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    padding: 4px 8px;
    border-radius: 3px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 100ms ease;
    white-space: nowrap;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .cal-tooltip.visible {
    opacity: 1;
  }

  /* Dark mode adjustments */
  @media (prefers-color-scheme: dark) {
    .cal-strip-8w-day.today {
      box-shadow: 0 0 0 1.5px var(--fx-cyan);
    }

    .cal-tooltip {
      background: var(--fx-base-850);
      color: var(--fx-base-300);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cal-strip-8w-day,
    .cal-tooltip {
      transition: none;
    }

    .cal-strip-8w-day:hover {
      transform: none;
    }
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

I also keep my favorite [inspirations](quotes.md), [books](bookshelf.md), and [thought snippets](ephemeral-thoughts-final.html) here. I created a collection of interactive [cognitive bias](cognitive-biases.html) visualizations in collaboration with [Claude Code](https://claude.ai/code).

<div style="clear: both;"></div>

<!-- Calendar Widget: 8-week busyness view -->
<div class="calendar-widget">
  <div class="cal-strip-8w" id="cal-8w">
    <div class="cal-strip-8w-days" id="cal-8w-days"></div>
  </div>
</div>
<div class="cal-tooltip" id="cal-tooltip"></div>

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

<!-- Calendar Widget JavaScript -->
<script>
(function() {
  'use strict';

  // ============================================
  // CALENDAR API CONFIGURATION
  // To enable real calendar data:
  // 1. Deploy calendar-api.gs to Google Apps Script
  // 2. Fill in APPS_SCRIPT_URL and SECRET_TOKEN below
  // 3. Set ENABLE_FETCH to true
  // See CALENDAR_INTEGRATION.md for setup instructions
  // ============================================
  const CALENDAR_CONFIG = {
    APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycby2vx1W23lG_b4sHX2-ZnlobMMj__yBrTEbVPzcUR5Woy6zVIG1SsZL_QfnVbMfjHRbDQ/exec',
    SECRET_TOKEN: '84943a9316e6a8e03d48e25dc776426b',
    ENABLE_FETCH: true,
    CACHE_KEY: 'cal_widget_cache',
    CACHE_MINUTES: 30      // Cache duration
  };

  const tooltip = document.getElementById('cal-tooltip');
  let calendarData = null;

  function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Soft, light color gradient
  function hoursToColor(hours, dark) {
    const t = Math.min(hours / 8, 1);

    if (dark) {
      // Dark mode: subtle warm tones
      if (t < 0.1) return '#1C1B1A';
      if (t < 0.25) return `rgba(180, 160, 120, ${0.15 + t * 0.4})`;
      if (t < 0.5) return `rgba(200, 160, 100, ${0.25 + t * 0.3})`;
      if (t < 0.75) return `rgba(210, 140, 90, ${0.35 + t * 0.25})`;
      return `rgba(200, 120, 100, ${0.45 + t * 0.2})`;
    } else {
      // Light mode: soft pastel warmth
      if (t < 0.1) return '#FFFCF0';
      if (t < 0.25) return '#FDF8E8';
      if (t < 0.5) return '#F8EDCD';
      if (t < 0.75) return '#F2DEB0';
      return '#EBCFA0';
    }
  }

  // ============================================
  // CALENDAR DATA FETCHING
  // ============================================

  // Check cache validity
  function getCachedData() {
    try {
      const cached = localStorage.getItem(CALENDAR_CONFIG.CACHE_KEY);
      if (!cached) return null;

      const { data, timestamp } = JSON.parse(cached);
      const age = (Date.now() - timestamp) / (1000 * 60);

      if (age < CALENDAR_CONFIG.CACHE_MINUTES) {
        return data;
      }
    } catch (e) {
      console.warn('Cache read error:', e);
    }
    return null;
  }

  // Save to cache
  function setCachedData(data) {
    try {
      localStorage.setItem(CALENDAR_CONFIG.CACHE_KEY, JSON.stringify({
        data: data,
        timestamp: Date.now()
      }));
    } catch (e) {
      console.warn('Cache write error:', e);
    }
  }

  // Fetch from Google Apps Script API
  async function fetchCalendarData() {
    if (!CALENDAR_CONFIG.ENABLE_FETCH || !CALENDAR_CONFIG.APPS_SCRIPT_URL) {
      return null;
    }

    // Check cache first
    const cached = getCachedData();
    if (cached) {
      return cached;
    }

    try {
      const url = `${CALENDAR_CONFIG.APPS_SCRIPT_URL}?token=${encodeURIComponent(CALENDAR_CONFIG.SECRET_TOKEN)}&days=56`;
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors'
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const json = await response.json();

      if (!json.success) {
        throw new Error(json.error || 'API error');
      }

      // Transform API response to widget format
      const data = transformApiData(json.days);
      setCachedData(data);
      return data;

    } catch (error) {
      console.warn('Calendar fetch failed, using simulated data:', error.message);
      return null;
    }
  }

  // Transform API response to widget data format
  function transformApiData(apiDays) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return apiDays.map((day, index) => {
      const [year, month, dayNum] = day.date.split('-').map(Number);
      const date = new Date(year, month - 1, dayNum);

      return {
        date: date,
        hours: day.hours,
        eventCount: day.eventCount,
        isToday: index === 0
      };
    });
  }

  // ============================================
  // SIMULATED DATA (fallback)
  // ============================================

  function seededRandom(seed) {
    return function() {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };
  }

  function generateSimulatedData() {
    const data = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const weekSeed = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
    const random = seededRandom(weekSeed);

    for (let i = 0; i < 56; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const weekNum = Math.floor(i / 7);

      let hours = 0;
      let mult = 1;

      if (weekNum === 2 || weekNum === 3) mult = 1.3;
      else if (weekNum === 4) mult = 0.5;
      else if (weekNum === 6) mult = 1.15;

      if (isWeekend) {
        hours = random() < 0.2 ? random() * 2.5 : 0;
      } else {
        const r = random();
        if (r < 0.12) hours = 0;
        else if (r < 0.3) hours = 1 + random() * 2;
        else if (r < 0.6) hours = 2.5 + random() * 2.5;
        else if (r < 0.85) hours = 4 + random() * 2.5;
        else hours = 6 + random() * 2;
        hours *= mult;
      }

      data.push({
        date: date,
        hours: Math.max(0, Math.min(9, Math.round(hours * 10) / 10)),
        isToday: i === 0
      });
    }
    return data;
  }

  // ============================================
  // UI RENDERING
  // ============================================

  function formatDate(date) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  }

  function showTooltip(el, dateStr, hours) {
    tooltip.textContent = hours > 0 ? `${dateStr} · ${hours}h` : dateStr;
    const rect = el.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 28}px`;
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.classList.add('visible');
  }

  function hideTooltip() {
    tooltip.classList.remove('visible');
  }

  function renderCalendar(data) {
    const container = document.getElementById('cal-8w-days');
    if (!container) return;
    container.innerHTML = '';

    const dark = isDarkMode();

    for (let week = 0; week < 8; week++) {
      const weekEl = document.createElement('div');
      weekEl.className = 'cal-strip-8w-week';

      for (let day = 0; day < 7; day++) {
        const d = data[week * 7 + day];
        if (!d) continue;

        const dayEl = document.createElement('div');
        dayEl.className = 'cal-strip-8w-day';

        if (d.date.getDay() === 0 || d.date.getDay() === 6) {
          dayEl.classList.add('weekend');
        }
        if (d.isToday) dayEl.classList.add('today');

        dayEl.style.backgroundColor = hoursToColor(d.hours, dark);

        const dateStr = formatDate(d.date);
        dayEl.addEventListener('mouseenter', () => showTooltip(dayEl, dateStr, d.hours));
        dayEl.addEventListener('mouseleave', hideTooltip);

        weekEl.appendChild(dayEl);
      }
      container.appendChild(weekEl);
    }
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  async function initCalendar() {
    // Try to fetch real data, fall back to simulated
    calendarData = await fetchCalendarData();
    if (!calendarData) {
      calendarData = generateSimulatedData();
    }
    renderCalendar(calendarData);
  }

  function handleColorSchemeChange() {
    if (calendarData) {
      renderCalendar(calendarData);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalendar);
  } else {
    initCalendar();
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleColorSchemeChange);
})();
</script>
