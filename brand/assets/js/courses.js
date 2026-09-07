/**
 * Render the Academy course catalog from Gumroad's published products.
 *
 * The catalog used to be hand-written HTML in brand/academy/index.html, so a
 * course only reached the site when someone remembered to edit that file and
 * redeploy. This reads /api/courses (netlify/functions/courses.mts) instead,
 * which returns only products that are published on Gumroad. Publishing there
 * is the single control over what appears here.
 *
 * Degrading quietly is deliberate. On any failure the page keeps the
 * hand-written live-session cards already in the markup, which is a correct if
 * incomplete page rather than a broken one.
 */
(function () {
  'use strict';

  var grid = document.getElementById('course-grid');
  if (!grid) return;

  /** Text into HTML. Product names and summaries come from Gumroad, which is
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

  function cardFor(course) {
    var card = document.createElement('a');
    card.className = 'product-card';
    card.href = course.url;
    card.rel = 'noopener';

    card.innerHTML =
      '<div class="card-meta-row">' +
        '<p class="card-category">Self-paced &middot; Email course</p>' +
        '<span class="pill pill-shipping">Available</span>' +
      '</div>' +
      '<h3>' + escapeHtml(course.name) + '</h3>' +
      '<p class="card-desc">' + escapeHtml(course.summary) + '</p>' +
      '<div class="card-footer">' +
        '<p class="card-price">' + escapeHtml(course.price) + '</p>' +
        '<span class="card-cta">Get the course &rarr;</span>' +
      '</div>';

    return card;
  }

  fetch('/api/courses', { headers: { Accept: 'application/json' } })
    .then(function (response) {
      if (!response.ok) throw new Error('courses request failed: ' + response.status);
      return response.json();
    })
    .then(function (payload) {
      var courses = (payload && payload.courses) || [];
      if (!courses.length) return;

      // Published, self-paced courses lead. The hand-written live-session
      // cards already in the markup stay where they are, after these.
      var fragment = document.createDocumentFragment();
      courses.forEach(function (course) {
        if (!course.url) return;
        fragment.appendChild(cardFor(course));
      });
      grid.insertBefore(fragment, grid.firstChild);
    })
    .catch(function (error) {
      // Leave the page exactly as served. Nothing is removed on failure.
      if (window.console && console.warn) {
        console.warn('Course catalog unavailable:', error.message);
      }
    });
})();
