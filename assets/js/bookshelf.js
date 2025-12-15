/**
 * Bookshelf - Interactive book collection display
 * Inspired by Stripe Press
 *
 * Features:
 * - Filter by category
 * - Sort by title, author, year, rating
 * - Theme toggle (light/dark)
 * - Modal detail view
 * - Keyboard navigation
 * - Smooth animations
 */

(function() {
  'use strict';

  // State
  let books = [];
  let currentFilter = 'all';
  let currentSort = 'title';
  let focusedBookIndex = -1;

  // DOM Elements
  const bookGrid = document.querySelector('.book-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sortSelect = document.getElementById('sort-select');
  const themeToggle = document.querySelector('.theme-toggle');
  const modalOverlay = document.querySelector('.book-modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const emptyState = document.getElementById('empty-state');

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
      // No explicit theme set, toggle from system preference
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
      renderBooks();
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

  // Rendering
  function renderBooks() {
    const filteredBooks = filterBooks(books, currentFilter);
    const sortedBooks = sortBooks(filteredBooks, currentSort);

    if (sortedBooks.length === 0) {
      bookGrid.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    bookGrid.innerHTML = sortedBooks.map((book, index) => createBookCard(book, index)).join('');

    // Add click handlers to cards
    document.querySelectorAll('.book-card').forEach((card, index) => {
      card.addEventListener('click', () => openModal(sortedBooks[index]));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(sortedBooks[index]);
        }
      });
    });
  }

  function createBookCard(book, index) {
    const stars = createStarRating(book.rating);

    return `
      <article class="book-card"
               tabindex="0"
               role="listitem"
               aria-label="${book.title} by ${book.author}"
               data-index="${index}">
        <div class="book-cover-container" style="background-color: ${book.accentColor}20">
          <img class="book-cover"
               src="${book.coverUrl}"
               alt="Cover of ${book.title}"
               loading="lazy"
               onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 180%22><rect fill=%22%23${book.accentColor.slice(1)}%22 width=%22120%22 height=%22180%22/><text x=%2260%22 y=%2290%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2214%22>${encodeURIComponent(book.title.substring(0, 15))}</text></svg>'">
        </div>
        <div class="book-info">
          <span class="book-category">${book.category}</span>
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <p class="book-description">${book.description}</p>
          <div class="book-meta">
            <span class="book-year">${book.year}</span>
            <div class="book-rating" aria-label="Rating: ${book.rating} out of 5 stars">
              ${stars}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating;
      stars += `
        <svg class="star ${filled ? '' : 'empty'}" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      `;
    }
    return stars;
  }

  // Filtering
  function filterBooks(books, category) {
    if (category === 'all') return books;
    return books.filter(book => book.category === category);
  }

  function setFilter(category) {
    currentFilter = category;

    // Update button states
    filterButtons.forEach(btn => {
      const isActive = btn.dataset.category === category;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    renderBooks();
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
        sorted.sort((a, b) => b.year - a.year); // Newest first
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating); // Highest first
        break;
    }

    return sorted;
  }

  function setSort(sortBy) {
    currentSort = sortBy;
    renderBooks();
  }

  // Modal
  function openModal(book) {
    const modal = modalOverlay;

    // Populate modal content
    document.getElementById('modal-cover').src = book.coverUrl;
    document.getElementById('modal-cover').alt = `Cover of ${book.title}`;
    document.getElementById('modal-title').textContent = book.title;
    document.getElementById('modal-author').textContent = book.author;
    document.getElementById('modal-year').textContent = `Published ${book.year}`;
    document.getElementById('modal-category').textContent = capitalizeFirst(book.category);
    document.getElementById('modal-rating').textContent = `${'★'.repeat(book.rating)}${'☆'.repeat(5 - book.rating)}`;
    document.getElementById('modal-description').textContent = book.description;

    // Quote
    const quoteContainer = document.getElementById('modal-quote-container');
    if (book.quote) {
      document.getElementById('modal-quote').textContent = `"${book.quote.text}"`;
      document.getElementById('modal-quote-author').textContent = `— ${book.quote.author}`;
      quoteContainer.style.display = 'block';
    } else {
      quoteContainer.style.display = 'none';
    }

    // Links
    const linksContainer = document.getElementById('modal-links');
    linksContainer.innerHTML = '';

    if (book.links) {
      if (book.links.amazon) {
        linksContainer.innerHTML += `
          <a href="${book.links.amazon}" class="modal-link" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.21 10.95l-2.12-5.41A2.87 2.87 0 0016.37 4H7.63a2.87 2.87 0 00-2.72 1.54L2.79 10.95A2.94 2.94 0 002 13v6a2 2 0 002 2h16a2 2 0 002-2v-6a2.94 2.94 0 00-.79-2.05z"/>
            </svg>
            Buy on Amazon
          </a>
        `;
      }
      if (book.links.goodreads) {
        linksContainer.innerHTML += `
          <a href="${book.links.goodreads}" class="modal-link secondary" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            View on Goodreads
          </a>
        `;
      }
    }

    // Show modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus management
    modalClose.focus();

    // Trap focus in modal
    modal.addEventListener('keydown', trapFocus);
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalOverlay.removeEventListener('keydown', trapFocus);

    // Return focus to the grid
    const cards = document.querySelectorAll('.book-card');
    if (cards.length > 0) {
      cards[0].focus();
    }
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
    // Filter buttons
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => setFilter(btn.dataset.category));
    });

    // Sort select
    sortSelect.addEventListener('change', (e) => setSort(e.target.value));

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Modal close
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeydown);
  }

  function handleKeydown(e) {
    // Close modal on Escape
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
      return;
    }

    // Grid navigation with arrow keys
    const cards = document.querySelectorAll('.book-card');
    if (cards.length === 0) return;

    const activeElement = document.activeElement;
    const isCardFocused = activeElement.classList.contains('book-card');

    if (!isCardFocused) return;

    const currentIndex = Array.from(cards).indexOf(activeElement);
    let newIndex = currentIndex;

    // Calculate grid columns
    const gridStyle = window.getComputedStyle(bookGrid);
    const gridColumns = gridStyle.gridTemplateColumns.split(' ').length;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = Math.min(currentIndex + 1, cards.length - 1);
        break;
      case 'ArrowLeft':
        newIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'ArrowDown':
        newIndex = Math.min(currentIndex + gridColumns, cards.length - 1);
        break;
      case 'ArrowUp':
        newIndex = Math.max(currentIndex - gridColumns, 0);
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = cards.length - 1;
        break;
      default:
        return;
    }

    if (newIndex !== currentIndex) {
      e.preventDefault();
      cards[newIndex].focus();
    }
  }

  // Utilities
  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Smooth scroll behavior for filter changes
  function smoothScrollToGrid() {
    bookGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
})();
