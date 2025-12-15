/**
 * Bookshelf - Infinite scroll columns with 3D book covers
 */

(function() {
  'use strict';

  let books = [];
  let currentFilter = 'all';
  let isOverviewMode = false;
  const NUM_COLUMNS = 4;

  // DOM elements - initialized in init()
  let bookGrid, filterButtons, themeToggle, overviewToggle, modalOverlay, modalClose, emptyState;

  // Handle both cases: DOM still loading OR already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Query DOM elements after DOM is ready
    bookGrid = document.querySelector('.book-grid');
    filterButtons = document.querySelectorAll('.filter-btn');
    themeToggle = document.querySelector('.theme-toggle');
    overviewToggle = document.getElementById('overview-toggle');
    modalOverlay = document.querySelector('.book-modal-overlay');
    modalClose = document.querySelector('.modal-close');
    emptyState = document.getElementById('empty-state');

    initTheme();
    loadBooks();
    setupEventListeners();
  }

  function initTheme() {
    var saved = localStorage.getItem('bookshelf-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var newTheme = current === 'dark' ? 'light' : (current === 'light' ? 'dark' : (prefersDark ? 'light' : 'dark'));
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('bookshelf-theme', newTheme);
  }

  function toggleOverview() {
    isOverviewMode = !isOverviewMode;

    if (bookGrid) {
      bookGrid.classList.toggle('overview-mode', isOverviewMode);
    }
    if (overviewToggle) {
      overviewToggle.classList.toggle('active', isOverviewMode);
      overviewToggle.setAttribute('aria-pressed', isOverviewMode);
    }
    renderBooks();
  }

  function loadBooks() {
    fetch('assets/data/books.json')
      .then(function(response) {
        if (!response.ok) throw new Error('Failed to load');
        return response.json();
      })
      .then(function(data) {
        books = data.books;
        renderBooks();
      })
      .catch(function(error) {
        console.error('Error loading books:', error);
        if (bookGrid) {
          bookGrid.innerHTML = '<div class="empty-state"><p>Unable to load books.</p></div>';
        }
      });
  }

  function renderBooks() {
    if (!bookGrid) return;

    var filtered = currentFilter === 'all' ? books : books.filter(function(b) { return b.category === currentFilter; });

    if (filtered.length === 0) {
      bookGrid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    if (isOverviewMode) {
      // Overview mode: simple flat list for grid layout
      var cardsHTML = filtered.map(function(book) {
        return createBookCard(book);
      }).join('');
      bookGrid.innerHTML = cardsHTML;
    } else {
      // Normal mode: columns for infinite scroll (no duplicates)
      var columns = [];
      for (var c = 0; c < NUM_COLUMNS; c++) {
        columns.push([]);
      }
      filtered.forEach(function(book, i) {
        columns[i % NUM_COLUMNS].push(book);
      });

      var columnsHTML = '';
      for (var col = 0; col < NUM_COLUMNS; col++) {
        var colBooks = columns[col];
        if (colBooks.length === 0) continue;

        var cardsHTML = '';
        for (var b = 0; b < colBooks.length; b++) {
          cardsHTML += createBookCard(colBooks[b]);
        }

        columnsHTML += '<div class="book-column"><div class="book-column-inner">' + cardsHTML + '</div></div>';
      }

      bookGrid.innerHTML = columnsHTML;
    }

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
    if (!book || !modalOverlay) return;

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
    if (modalClose) modalClose.focus();
  }

  function createModalFallback(title, author, genre) {
    return '<div class="modal-cover-fallback book-cover-fallback" data-genre="' + genre + '">' +
      '<div class="fallback-title">' + escapeHtml(title) + '</div>' +
      '<div class="fallback-author">' + escapeHtml(author) + '</div>' +
      '</div>';
  }

  window.createModalFallback = createModalFallback;

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    var firstCard = document.querySelector('.book-card');
    if (firstCard) firstCard.focus();
  }

  function setupEventListeners() {
    if (filterButtons) {
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
    }

    if (overviewToggle) {
      overviewToggle.addEventListener('click', toggleOverview);
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) closeModal();
      });
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
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
