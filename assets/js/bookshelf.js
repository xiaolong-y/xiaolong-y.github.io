/**
 * Bookshelf - Infinite scroll columns with 3D book covers
 */

(function() {
  'use strict';

  let books = [];
  let currentFilter = 'all';
  const NUM_COLUMNS = 4;

  const bookGrid = document.querySelector('.book-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
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
    const filtered = currentFilter === 'all' ? books : books.filter(function(b) { return b.category === currentFilter; });

    if (filtered.length === 0) {
      bookGrid.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';

    // Distribute books across columns
    var columns = [];
    for (var c = 0; c < NUM_COLUMNS; c++) {
      columns.push([]);
    }
    filtered.forEach(function(book, i) {
      columns[i % NUM_COLUMNS].push(book);
    });

    // Render columns with infinite scroll (duplicate books for seamless loop)
    var columnsHTML = '';
    for (var col = 0; col < NUM_COLUMNS; col++) {
      var colBooks = columns[col];
      if (colBooks.length === 0) continue;

      // Duplicate books for infinite scroll effect
      var duplicatedBooks = colBooks.concat(colBooks);

      var cardsHTML = '';
      for (var b = 0; b < duplicatedBooks.length; b++) {
        cardsHTML += createBookCard(duplicatedBooks[b]);
      }

      columnsHTML += '<div class="book-column"><div class="book-column-inner">' + cardsHTML + '</div></div>';
    }

    bookGrid.innerHTML = columnsHTML;

    // Add click handlers
    var cards = document.querySelectorAll('.book-card');
    cards.forEach(function(card) {
      var bookId = card.dataset.bookId;
      var book = filtered.find(function(b) { return b.id === bookId; });
      card.addEventListener('click', function() { openModal(book); });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(book);
        }
      });
    });
  }

  function createBookCard(book) {
    var coverHTML;

    if (book.coverUrl) {
      coverHTML = '<div class="book-cover-wrapper">' +
        '<img class="book-cover" src="' + book.coverUrl + '" alt="' + escapeHtml(book.title) + '" loading="lazy" ' +
        'onerror="this.parentElement.innerHTML = createFallbackCover(\'' + escapeAttr(book.title) + '\', \'' + escapeAttr(book.author) + '\', \'' + book.category + '\')">' +
        '</div>';
    } else {
      coverHTML = '<div class="book-cover-wrapper">' +
        createFallbackCoverHTML(book.title, book.author, book.category) +
        '</div>';
    }

    return '<article class="book-card" tabindex="0" role="listitem" data-book-id="' + book.id + '" aria-label="' + escapeHtml(book.title) + ' by ' + escapeHtml(book.author) + '">' +
      coverHTML +
      '</article>';
  }

  function createFallbackCoverHTML(title, author, genre) {
    return '<div class="book-cover-fallback" data-genre="' + genre + '">' +
      '<div class="fallback-title">' + escapeHtml(title) + '</div>' +
      '<div class="fallback-author">' + escapeHtml(author) + '</div>' +
      '</div>';
  }

  // Global function for onerror handler
  window.createFallbackCover = function(title, author, genre) {
    return createFallbackCoverHTML(title, author, genre);
  };

  function openModal(book) {
    if (!book) return;

    var coverContainer = document.getElementById('modal-cover-container');
    if (book.coverUrl) {
      coverContainer.innerHTML = '<img class="modal-cover" src="' + book.coverUrl + '" alt="' + escapeHtml(book.title) + '" ' +
        'onerror="this.outerHTML = createModalFallback(\'' + escapeAttr(book.title) + '\', \'' + escapeAttr(book.author) + '\', \'' + book.category + '\')">';
    } else {
      coverContainer.innerHTML = createModalFallback(book.title, book.author, book.category);
    }

    document.getElementById('modal-title').textContent = book.title;
    document.getElementById('modal-author').textContent = book.author;
    document.getElementById('modal-year').textContent = 'Published ' + book.year;
    document.getElementById('modal-category').textContent = capitalize(book.category);
    document.getElementById('modal-rating').textContent = '\u2605'.repeat(book.rating) + '\u2606'.repeat(5 - book.rating);
    document.getElementById('modal-description').textContent = book.description;

    var quoteContainer = document.getElementById('modal-quote-container');
    if (book.quote && book.quote.text) {
      document.getElementById('modal-quote').textContent = book.quote.text;
      document.getElementById('modal-quote-author').textContent = '\u2014 ' + book.quote.author;
      quoteContainer.style.display = 'block';
    } else {
      quoteContainer.style.display = 'none';
    }

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function createModalFallback(title, author, genre) {
    return '<div class="modal-cover-fallback book-cover-fallback" data-genre="' + genre + '">' +
      '<div class="fallback-title">' + escapeHtml(title) + '</div>' +
      '<div class="fallback-author">' + escapeHtml(author) + '</div>' +
      '</div>';
  }

  window.createModalFallback = createModalFallback;

  function closeModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    var firstCard = document.querySelector('.book-card');
    if (firstCard) firstCard.focus();
  }

  function setupEventListeners() {
    filterButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        currentFilter = btn.dataset.category;
        filterButtons.forEach(function(b) {
          b.classList.toggle('active', b.dataset.category === currentFilter);
          b.setAttribute('aria-pressed', b.dataset.category === currentFilter);
        });
        renderBooks();
      });
    });

    themeToggle.addEventListener('click', toggleTheme);
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
        return;
      }

      // Arrow key navigation
      var cards = document.querySelectorAll('.book-card');
      if (cards.length === 0 || !document.activeElement.classList.contains('book-card')) return;

      var cardsArray = Array.from(cards);
      var currentIndex = cardsArray.indexOf(document.activeElement);
      var newIndex = currentIndex;

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
  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escapeAttr(str) { return str.replace(/'/g, "\\'").replace(/"/g, '\\"'); }
})();
