/**
 * Render the Academy catalog from Gumroad's published products.
 *
 * The catalog used to be hand-written HTML in brand/academy/index.html, so a
 * course only reached the site when someone remembered to edit that file and
 * redeploy. This reads /api/courses (netlify/functions/courses.mts) instead,
 * which returns only products that are published on Gumroad. Publishing there
 * is the single control over what appears here.
 *
 * Products are split into two groups, because the catalog sells two different
 * things and a visitor should not have to work out which is which: a Courses
 * group for anything taught over time, and a Products group for the things a
 * buyer simply receives, such as a study guide or a worksheet bundle.
 *
 * Degrading quietly is deliberate. On any failure the page keeps the
 * hand-written live-session cards already in the markup, which is a correct if
 * incomplete page rather than a broken one.
 */
(function () {
  'use strict';

  var grid = document.getElementById('course-grid');
  if (!grid) return;

  /**
   * What each Gumroad product actually is, keyed by its short code: the last
   * segment of the product's short URL, so gum.co/pxdla is "pxdla".
   *
   * ---------------------------------------------------------------------
   * THIS MAP IS A COPY. The source of truth is PRODUCT_SOURCES in the
   * course-cannon repo, automation/product_sources.py. When a course ships,
   * its code must be added in BOTH places or it lands in the wrong group
   * here. There is no build step linking the two repos.
   * ---------------------------------------------------------------------
   *
   * Kinds match that file: drip, full-course, workshop, external.
   */
  var KIND_BY_CODE = {
    fclzr: 'drip',          // AI 101
    iwsjru: 'drip',         // Spotting AI
    oeqlsb: 'drip',         // AI for Everyday Life
    yvoczz: 'drip',         // Your First Conversation with AI
    kfbdr: 'drip',          // Give Your AI Agent Tools, Memory, and Data
    pxdla: 'drip',          // Build Your First AI Agent
    doubc: 'drip',          // AI for Job Seekers (mapped, not yet on Gumroad)
    efagy: 'full-course',   // The AI-Powered Solopreneur
    ulbfi: 'workshop',      // From Idea to Launch
    xyvax: 'external',      // AI Marketing Skills Bundle
    jscix: 'external'       // Claude Certified Architect Exam Pro
  };

  /**
   * Short codes to keep off the page even when published on Gumroad.
   * From Idea to Launch has no cover art, and a card with a blank image reads
   * as broken. Remove it from here once a cover is uploaded.
   */
  var HIDDEN_CODES = { ulbfi: true };

  /** The badge each card carries, by kind. */
  var KIND_LABELS = {
    'drip': '5-Day Email Course',
    'full-course': 'Full Course',
    'workshop': 'Workshop',
    'external': 'Product'
  };

  /** Kinds that belong in the Products group rather than Courses. */
  var PRODUCT_KINDS = { 'workshop': true, 'external': true };

  function shortCodeOf(url) {
    if (!url) return '';
    var path = String(url).split('?')[0].split('#')[0];
    while (path.charAt(path.length - 1) === '/') {
      path = path.slice(0, -1);
    }
    return path.split('/').pop() || '';
  }

  /**
   * An unmapped code is treated as a course, because almost everything shipped
   * here is a course and that is the less wrong default. The warning names the
   * code so the omission is findable rather than silent.
   */
  function kindOf(course) {
    var code = shortCodeOf(course.url);
    var kind = KIND_BY_CODE[code];
    if (!kind) {
      if (window.console && console.warn) {
        console.warn('Course catalog: unmapped Gumroad code "' + code + '". Add it to KIND_BY_CODE.');
      }
      return 'drip';
    }
    return kind;
  }

  /** Text into HTML. Names and summaries come from Gumroad, which is
   *  operator-controlled, but this is inserted into the DOM so it is escaped
   *  regardless. */
  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function cardFor(course, kind) {
    var card = document.createElement('a');
    card.className = 'product-card';
    card.href = course.url;
    card.rel = 'noopener';

    card.innerHTML =
      '<div class="card-meta-row">' +
        '<p class="card-category">' + escapeHtml(KIND_LABELS[kind] || 'Course') + '</p>' +
        '<span class="pill pill-shipping">Available</span>' +
      '</div>' +
      '<h3>' + escapeHtml(course.name) + '</h3>' +
      '<p class="card-desc">' + escapeHtml(course.summary) + '</p>' +
      '<div class="card-footer">' +
        '<p class="card-price">' + escapeHtml(course.price) + '</p>' +
        '<span class="card-cta">' +
          (PRODUCT_KINDS[kind] ? 'Get it &rarr;' : 'Get the course &rarr;') +
        '</span>' +
      '</div>';

    // The cover is the artwork already uploaded to the Gumroad product, so a
    // buyer arriving at checkout sees the same image and knows they are in the
    // right place. Set as a property rather than interpolated into the markup.
    // Nothing is generated here: a product with no cover simply gets no image.
    if (course.image) {
      var cover = document.createElement('img');
      cover.className = 'card-cover';
      cover.src = course.image;
      cover.alt = '';
      cover.loading = 'lazy';
      card.insertBefore(cover, card.firstChild);
    }

    return card;
  }

  function groupHeading(text) {
    var heading = document.createElement('h3');
    heading.className = 'catalog-group-heading';
    heading.textContent = text;
    return heading;
  }

  /** The Products group, built only when there is something to put in it. */
  function productGroup(cards) {
    var wrap = document.createElement('div');
    wrap.className = 'catalog-group';
    wrap.id = 'product-group';

    var productGrid = document.createElement('div');
    productGrid.className = 'product-grid';
    cards.forEach(function (card) {
      productGrid.appendChild(card);
    });

    wrap.appendChild(groupHeading('Products'));
    wrap.appendChild(productGrid);
    return wrap;
  }

  fetch('/api/courses', { headers: { Accept: 'application/json' } })
    .then(function (response) {
      if (!response.ok) throw new Error('courses request failed: ' + response.status);
      return response.json();
    })
    .then(function (payload) {
      var courses = (payload && payload.courses) || [];
      if (!courses.length) return;

      var courseCards = document.createDocumentFragment();
      var productCards = [];
      var courseCount = 0;

      courses.forEach(function (course) {
        if (!course.url) return;
        if (HIDDEN_CODES[shortCodeOf(course.url)]) return;

        var kind = kindOf(course);
        var card = cardFor(course, kind);

        if (PRODUCT_KINDS[kind]) {
          productCards.push(card);
        } else {
          courseCards.appendChild(card);
          courseCount += 1;
        }
      });

      // Self-paced courses lead. The hand-written live-session cards already in
      // the markup stay where they are, after these.
      if (courseCount) {
        grid.insertBefore(courseCards, grid.firstChild);
        if (grid.parentNode) {
          grid.parentNode.insertBefore(groupHeading('Courses'), grid);
        }
      }

      if (productCards.length && grid.parentNode) {
        grid.parentNode.insertBefore(productGroup(productCards), grid.nextSibling);
      }
    })
    .catch(function (error) {
      // Leave the page exactly as served. Nothing is removed on failure.
      if (window.console && console.warn) {
        console.warn('Course catalog unavailable:', error.message);
      }
    });
})();
