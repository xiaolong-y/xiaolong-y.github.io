/**
 * Bookshelf - Real bookshelf with spines and pull-out animations
 *
 * Features:
 * - Books displayed as spines on wooden shelves
 * - Click to open modal with book details
 * - Fallback covers for broken images
 * - Filter by category, sort by various fields
 * - Theme toggle (light/dark)
 * - Keyboard navigation
 */

(function() {
  'use strict';

  // State
  let books = [];
  let currentFilter = 'all';
  let currentSort = 'title';
  let isAnimating = false;
  let activeSpine = null;
  const BOOKS_PER_SHELF = 12;

  // Animation timings (ms)
  const PULL_OUT_DURATION = 400;
  const PAGE_FLIP_DURATION = 300;
  const MODAL_DELAY = 100;

  // DOM Elements
  const bookGrid = document.querySelector('.book-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sortSelect = document.getElementById('sort-select');
  const themeToggle = document.querySelector('.theme-toggle');
  const modalOverlay = document.querySelector('.book-modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const emptyState = document.getElementById('empty-state');

  // Color mapping for accent colors
  const colorMap = {
    '#AF3029': 'red', '#D14D41': 'red',
    '#BC5215': 'orange', '#DA702C': 'orange',
    '#AD8301': 'yellow', '#D0A215': 'yellow',
    '#66800B': 'green', '#879A39': 'green',
    '#24837B': 'cyan', '#3AA99F': 'cyan',
    '#205EA6': 'blue', '#4385BE': 'blue',
    '#5E409D': 'purple', '#8B7EC8': 'purple',
    '#A02F6F': 'magenta', '#CE5D97': 'magenta'
  };

  // Thickness/height variations for visual interest
  const thicknesses = ['thin', 'medium', 'medium', 'thick', 'chunky'];
  const heights = ['short', 'medium', 'medium', 'tall'];
  const patterns = ['', '', '', 'leather', 'cloth', 'striped'];

  // Initialize
  document.addEventListener('DOMContentLoaded', init);

  async function init() {
    initTheme();
    await loadBooks();
    setupEventListeners();
  }

  // Theme Management
  function initTheme() {
    const savedTheme = localStorage.getItem('bookshelf-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let newTheme;
    if (currentTheme === 'dark') {
      newTheme = 'light';
    } else if (currentTheme === 'light') {
      newTheme = 'dark';
    } else {
      newTheme = prefersDark ? 'light' : 'dark';
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('bookshelf-theme', newTheme);
  }

  // Data Loading
  async function loadBooks() {
    try {
      const response = await fetch('assets/data/books.json');
      if (!response.ok) throw new Error('Failed to load books');
      const data = await response.json();
      books = data.books;
      renderBookshelf();
    } catch (error) {
      console.error('Error loading books:', error);
      bookGrid.innerHTML = `
        <div class="empty-state">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
          <h3>Unable to load books</h3>
          <p>Please try refreshing the page.</p>
        </div>
      `;
    }
  }

  // Render bookshelf with shelves
  function renderBookshelf() {
    const filteredBooks = filterBooks(books, currentFilter);
    const sortedBooks = sortBooks(filteredBooks, currentSort);

    if (sortedBooks.length === 0) {
      bookGrid.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';

    // Split books into shelves
    const shelves = [];
    for (let i = 0; i < sortedBooks.length; i += BOOKS_PER_SHELF) {
      shelves.push(sortedBooks.slice(i, i + BOOKS_PER_SHELF));
    }

    // Render shelves
    bookGrid.innerHTML = shelves.map((shelfBooks, shelfIndex) =>
      createShelf(shelfBooks, shelfIndex)
    ).join('');

    // Add click handlers to spines
    document.querySelectorAll('.book-spine').forEach(spine => {
      const bookId = spine.dataset.bookId;
      const book = sortedBooks.find(b => b.id === bookId);

      spine.addEventListener('click', () => handleBookClick(spine, book));
      spine.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleBookClick(spine, book);
        }
      });
    });
  }

  // Handle book click with pull-out animation
  function handleBookClick(spine, book) {
    if (isAnimating || !book) return;
    isAnimating = true;
    activeSpine = spine;

    // Phase 1: Pull out the book from the shelf
    spine.classList.add('pulling-out');

    // Phase 2: After pull-out, start page flip and show modal
    setTimeout(() => {
      spine.classList.remove('pulling-out');
      spine.classList.add('pulled-out');

      // Phase 3: Open modal with page flip effect
      setTimeout(() => {
        openModal(book);
        isAnimating = false;
      }, PAGE_FLIP_DURATION);
    }, PULL_OUT_DURATION);
  }

  // Create a shelf with books
  function createShelf(shelfBooks, shelfIndex) {
    const spines = shelfBooks.map((book, idx) => createBookSpine(book, shelfIndex * BOOKS_PER_SHELF + idx)).join('');

    return `
      <div class="bookshelf">
        <div class="shelf-row" role="list">
          ${spines}
        </div>
        <div class="shelf-board"></div>
      </div>
    `;
  }

  // Create a book spine
  function createBookSpine(book, index) {
    const accentName = getAccentName(book.accentColor);
    const thickness = thicknesses[index % thicknesses.length];
    const height = heights[index % heights.length];
    const pattern = patterns[index % patterns.length];

    // Truncate title for spine
    const spineTitle = book.title.length > 25 ? book.title.substring(0, 22) + '...' : book.title;
    const spineAuthor = book.author.split(',')[0].split(' ').pop(); // Last name only

    return `
      <div class="book-spine"
           tabindex="0"
           role="listitem"
           data-book-id="${book.id}"
           data-accent="${accentName}"
           data-thickness="${thickness}"
           data-height="${height}"
           ${pattern ? `data-pattern="${pattern}"` : ''}
           data-title="${book.title}"
           aria-label="${book.title} by ${book.author}">
        <div class="spine-wrapper">
          <div class="spine-face">
            <span class="spine-title">${spineTitle}</span>
            <div class="spine-decoration"></div>
            <span class="spine-author">${spineAuthor}</span>
          </div>
        </div>
      </div>
    `;
  }

  // Get accent color name from hex
  function getAccentName(hexColor) {
    if (!hexColor) return 'blue';
    const upper = hexColor.toUpperCase();
    return colorMap[upper] || 'blue';
  }

  // Filtering
  function filterBooks(books, category) {
    if (category === 'all') return books;
    return books.filter(book => book.category === category);
  }

  function setFilter(category) {
    currentFilter = category;

    filterButtons.forEach(btn => {
      const isActive = btn.dataset.category === category;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    renderBookshelf();
  }

  // Sorting
  function sortBooks(books, sortBy) {
    const sorted = [...books];

    switch (sortBy) {
      case 'title':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'author':
        sorted.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'year':
        sorted.sort((a, b) => b.year - a.year);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
    }

    return sorted;
  }

  function setSort(sortBy) {
    currentSort = sortBy;
    renderBookshelf();
  }

  // Modal - No external links, just cover, title, author, quote, description
  function openModal(book) {
    if (!book) return;

    const modal = modalOverlay;
    const accentName = getAccentName(book.accentColor);

    // Set modal cover (with fallback)
    const coverContainer = document.getElementById('modal-cover-container');
    coverContainer.innerHTML = createModalCover(book, accentName);

    // Set other info
    document.getElementById('modal-title').textContent = book.title;
    document.getElementById('modal-author').textContent = book.author;
    document.getElementById('modal-year').textContent = `Published ${book.year}`;
    document.getElementById('modal-category').textContent = capitalizeFirst(book.category);

    document.getElementById('modal-description').textContent = book.description;

    // Quote
    const quoteContainer = document.getElementById('modal-quote-container');
    if (book.quote && book.quote.text) {
      document.getElementById('modal-quote').textContent = book.quote.text;
      document.getElementById('modal-quote-author').textContent = `— ${book.quote.author}`;
      quoteContainer.style.display = 'block';
    } else {
      quoteContainer.style.display = 'none';
    }

    // Show modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus management
    modalClose.focus();
    modal.addEventListener('keydown', trapFocus);
  }

  // Create modal cover with fallback
  function createModalCover(book, accentName) {
    if (book.coverUrl) {
      return `
        <img class="modal-cover"
             src="${book.coverUrl}"
             alt="Cover of ${book.title}"
             onerror="this.parentElement.innerHTML = createFallbackCover('${escapeHtml(book.title)}', '${escapeHtml(book.author)}', '${accentName}')">
      `;
    }
    return createFallbackCoverHTML(book.title, book.author, accentName);
  }

  // Create fallback cover HTML
  function createFallbackCoverHTML(title, author, accentName) {
    return `
      <div class="modal-cover-fallback" data-accent="${accentName}" style="--book-accent: var(--fx-${accentName})">
        <div>
          <div class="fallback-title">${title}</div>
          <div class="fallback-decoration"></div>
        </div>
        <div class="fallback-author">${author}</div>
      </div>
    `;
  }

  // Expose for onerror handler
  window.createFallbackCover = function(title, author, accentName) {
    return createFallbackCoverHTML(title, author, accentName);
  };

  function closeModal() {
    // Add closing animation class
    modalOverlay.classList.add('closing');

    setTimeout(() => {
      modalOverlay.classList.remove('active', 'closing');
      modalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      modalOverlay.removeEventListener('keydown', trapFocus);

      // Reset the pulled-out spine with slide-back animation
      if (activeSpine) {
        activeSpine.classList.add('sliding-back');
        activeSpine.classList.remove('pulled-out');

        setTimeout(() => {
          activeSpine.classList.remove('sliding-back');
          activeSpine.focus();
          activeSpine = null;
        }, PULL_OUT_DURATION);
      } else {
        // Fallback: focus first spine
        const firstSpine = document.querySelector('.book-spine');
        if (firstSpine) firstSpine.focus();
      }
    }, 200);
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;

    const focusableElements = modalOverlay.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }

  // Event Listeners
  function setupEventListeners() {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => setFilter(btn.dataset.category));
    });

    sortSelect.addEventListener('change', (e) => setSort(e.target.value));

    themeToggle.addEventListener('click', toggleTheme);

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', handleKeydown);
  }

  function handleKeydown(e) {
    // Close modal on Escape
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
      return;
    }

    // Arrow key navigation for spines
    const spines = document.querySelectorAll('.book-spine');
    if (spines.length === 0) return;

    const activeElement = document.activeElement;
    if (!activeElement.classList.contains('book-spine')) return;

    const currentIndex = Array.from(spines).indexOf(activeElement);
    let newIndex = currentIndex;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = Math.min(currentIndex + 1, spines.length - 1);
        break;
      case 'ArrowLeft':
        newIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = spines.length - 1;
        break;
      default:
        return;
    }

    if (newIndex !== currentIndex) {
      e.preventDefault();
      spines[newIndex].focus();
    }
  }

  // Utilities
  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function escapeHtml(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
  }
})();
