/* Progressive controls for static, independently translated entry pages. */
(function () {
  'use strict';
  var root = document.documentElement;
  var es = root.lang === 'es';
  function updateTheme() {
    var light = root.getAttribute('data-theme') === 'light';
    document.querySelectorAll('.theme-toggle').forEach(function (button) {
      button.setAttribute('aria-label', es ? (light ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro') : (light ? 'Switch to dark theme' : 'Switch to light theme'));
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = light ? '#F7F9FC' : '#0A1020';
  }
  document.querySelectorAll('.theme-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      var theme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', theme);
      try { localStorage.setItem('nf-theme', theme); } catch (_error) { /* Optional preference. */ }
      updateTheme();
    });
  });
  updateTheme();
  var header = document.querySelector('.site-header');
  function updateHeader() { if (header) header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
  var disclosure = document.querySelector('.nav-disclosure');
  if (disclosure) {
    var close = function () { disclosure.removeAttribute('open'); };
    disclosure.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', close); });
    disclosure.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && disclosure.open) {
        close();
        disclosure.querySelector('summary').focus();
      }
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 1080) close(); });
  }
}());
