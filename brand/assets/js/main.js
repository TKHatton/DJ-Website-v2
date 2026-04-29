(function () {
  var toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var header = btn.closest('.site-header');
      if (!header) return;
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      btn.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      header.classList.toggle('is-open', !open);
    });
  });

  var mq = window.matchMedia('(min-width: 769px)');
  function closeOnDesktop() {
    if (!mq.matches) return;
    document.querySelectorAll('.site-header.is-open').forEach(function (h) {
      h.classList.remove('is-open');
    });
    toggles.forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
    });
  }
  if (mq.addEventListener) {
    mq.addEventListener('change', closeOnDesktop);
  } else if (mq.addListener) {
    mq.addListener(closeOnDesktop);
  }
})();
