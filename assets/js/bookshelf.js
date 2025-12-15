/**
 * Bookshelf - Pinterest-style masonry layout with floating columns
 */

(function() {
  'use strict';

  let books = [];
  let currentFilter = 'all';
  let currentSort = 'title';
  const NUM_COLUMNS = 4;

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

  const bookGrid = document.querySelector('.book-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sortSelect = document.getElementById('sort-select');
  const themeToggle = document.querySelector('.theme-toggle');
  const modalOverlay = document.querySelector('.book-modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const emptyState = document.getElementById('empty-state');

  document.addEventListener('DOMContentLoaded', init);

  async function init() {
    initTheme();
    await loadBooks();
    setupEventListeners();
  }

  function initTheme() {
    const saved = localStorage.getItem('bookshelf-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const newTheme = current === 'dark' ? 'light' : (current === 'light' ? 'dark' : (prefersDark ? 'light' : 'dark'));
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('bookshelf-theme', newTheme);
  }

  async function loadBooks() {
    try {
      const response = await fetch('assets/data/books.json');
      if (!response.ok) throw new Error('Failed to load');
      const data = await response.json();
      books = data.books;
      renderBooks();
    } catch (error) {
      console.error('Error loading books:', error);
      bookGrid.innerHTML = '<div class="empty-state"><p>Unable to load books.</p></div>';
    }
  }

  function renderBooks() {
    const filtered = currentFilter === 'all' ? books : books.filter(b => b.category === currentFilter);
    const sorted = sortBooks(filtered, currentSort);

    if (sorted.length === 0) {
      bookGrid.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';

    // Create masonry columns
    const columns = Array.from({ length: NUM_COLUMNS }, () => []);
    sorted.forEach((book, i) => columns[i % NUM_COLUMNS].push(book));

    // Render columns with cards
    bookGrid.innerHTML = columns.map(colBooks =>
      '<div class="masonry-column">' + colBooks.map(book => createBookCard(book)).join('') + '</div>'
    ).join('');

    // Add click handlers
    document.querySelectorAll('.book-card').forEach(card => {
      const bookId = card.dataset.bookId;
      const book = sorted.find(b => b.id === bookId);
      card.addEventListener('click', () => openModal(book));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(book);
        }
      });
    });
  }

  function createBookCard(book) {
    const accent = getAccentName(book.accentColor);

    if (book.coverUrl) {
      return '<article class="book-card" tabindex="0" role="listitem" data-book-id="' + book.id + '" data-accent="' + accent + '" aria-label="' + book.title + ' by ' + book.author + '">' +
        '<div class="book-cover-container">' +
        '<img class="book-cover" src="' + book.coverUrl + '" alt="' + book.title + '" loading="lazy" ' +
        'onerror="this.parentElement.innerHTML = createFallbackCover(\'' + escapeAttr(book.title) + '\', \'' + escapeAttr(book.author) + '\', \'' + accent + '\')">' +
        '</div>' +
        '<div class="book-info">' +
        '<div class="book-category">' + capitalize(book.category) + '</div>' +
        '<h3 class="book-title">' + book.title + '</h3>' +
        '<p class="book-author">' + book.author + '</p>' +
        '</div></article>';
    } else {
      return '<article class="book-card" tabindex="0" role="listitem" data-book-id="' + book.id + '" data-accent="' + accent + '" aria-label="' + book.title + ' by ' + book.author + '">' +
        '<div class="book-cover-container">' +
        createFallbackCoverHTML(book.title, book.author, accent) +
        '</div>' +
        '<div class="book-info">' +
        '<div class="book-category">' + capitalize(book.category) + '</div>' +
        '<h3 class="book-title">' + book.title + '</h3>' +
        '<p class="book-author">' + book.author + '</p>' +
        '</div></article>';
    }
  }

  function createFallbackCoverHTML(title, author, accent) {
    return '<div class="book-cover-fallback" style="--book-accent: var(--fx-' + accent + ')">' +
      '<div><div class="fallback-title">' + title + '</div><div class="fallback-decoration"></div></div>' +
      '<div class="fallback-author">' + author + '</div></div>';
  }

  window.createFallbackCover = function(title, author, accent) {
    return createFallbackCoverHTML(title, author, accent);
  };

  function getAccentName(hex) {
    if (!hex) return 'blue';
    return colorMap[hex.toUpperCase()] || 'blue';
  }

  function sortBooks(books, sortBy) {
    const sorted = [...books];
    switch (sortBy) {
      case 'title': sorted.sort((a, b) => a.title.localeCompare(b.title)); break;
      case 'author': sorted.sort((a, b) => a.author.localeCompare(b.author)); break;
      case 'year': sorted.sort((a, b) => b.year - a.year); break;
      case 'rating': sorted.sort((a, b) => b.rating - a.rating); break;
    }
    return sorted;
  }

  function openModal(book) {
    if (!book) return;
    const accent = getAccentName(book.accentColor);

    const coverContainer = document.getElementById('modal-cover-container');
    if (book.coverUrl) {
      coverContainer.innerHTML = '<img class="modal-cover" src="' + book.coverUrl + '" alt="' + book.title + '" ' +
        'onerror="this.outerHTML = createModalFallback(\'' + escapeAttr(book.title) + '\', \'' + escapeAttr(book.author) + '\', \'' + accent + '\')">';
    } else {
      coverContainer.innerHTML = createModalFallback(book.title, book.author, accent);
    }

    document.getElementById('modal-title').textContent = book.title;
    document.getElementById('modal-author').textContent = book.author;
    document.getElementById('modal-year').textContent = 'Published ' + book.year;
    document.getElementById('modal-category').textContent = capitalize(book.category);
    document.getElementById('modal-description').textContent = book.description;

    const quoteContainer = document.getElementById('modal-quote-container');
    if (book.quote && book.quote.text) {
      document.getElementById('modal-quote').textContent = book.quote.text;
      document.getElementById('modal-quote-author').textContent = '— ' + book.quote.author;
      quoteContainer.style.display = 'block';
    } else {
      quoteContainer.style.display = 'none';
    }

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function createModalFallback(title, author, accent) {
    return '<div class="modal-cover-fallback" style="--book-accent: var(--fx-' + accent + ')">' +
      '<div><div class="fallback-title">' + title + '</div><div class="fallback-decoration"></div></div>' +
      '<div class="fallback-author">' + author + '</div></div>';
  }

  window.createModalFallback = createModalFallback;

  function closeModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    const firstCard = document.querySelector('.book-card');
    if (firstCard) firstCard.focus();
  }

  function setupEventListeners() {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        currentFilter = btn.dataset.category;
        filterButtons.forEach(b => {
          b.classList.toggle('active', b.dataset.category === currentFilter);
          b.setAttribute('aria-pressed', b.dataset.category === currentFilter);
        });
        renderBooks();
      });
    });

    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        currentSort = e.target.value;
        renderBooks();
      });
    }

    themeToggle.addEventListener('click', toggleTheme);
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
        return;
      }

      // Arrow key navigation
      const cards = document.querySelectorAll('.book-card');
      if (cards.length === 0 || !document.activeElement.classList.contains('book-card')) return;

      const currentIndex = Array.from(cards).indexOf(document.activeElement);
      let newIndex = currentIndex;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          newIndex = Math.min(currentIndex + 1, cards.length - 1);
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          newIndex = Math.max(currentIndex - 1, 0);
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
    });
  }

  function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }
  function escapeAttr(str) { return str.replace(/'/g, "\\'").replace(/"/g, '\\"'); }
})();
