/* Hero flow: native SVG motion, synchronized CSS signals, no dependencies. */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('[data-hero-flow]').forEach(function (map) {
    var svgs = Array.prototype.slice.call(map.querySelectorAll('[data-flow-svg]'));
    var motions = Array.prototype.slice.call(map.querySelectorAll('animateMotion'));
    var button = map.querySelector('.flow-toggle');
    if (!button || !svgs.length || !motions.length ||
        svgs.some(function (svg) { return typeof svg.pauseAnimations !== 'function'; }) ||
        motions.some(function (motion) { return typeof motion.beginElement !== 'function'; })) return;

    var userPaused = false;
    var started = false;
    var visible = inViewport();
    var running = false;
    svgs.forEach(function (svg) { svg.pauseAnimations(); });

    function inViewport() {
      var rect = map.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight;
    }

    function updateControl() {
      var spanish = (root.getAttribute('lang') || 'en').toLowerCase().indexOf('es') === 0;
      var paused = userPaused || reduced.matches;
      var label = reduced.matches ? (spanish ? 'Movimiento reducido' : 'Reduced motion') :
        paused ? (spanish ? 'Reanudar' : 'Resume') : (spanish ? 'Pausar' : 'Pause');
      var accessible = reduced.matches ?
        (spanish ? 'Animación desactivada por tu preferencia de movimiento reducido' : 'Animation disabled by your reduced-motion preference') :
        paused ? (spanish ? 'Reanudar animación del flujo' : 'Resume flow animation') :
          (spanish ? 'Pausar animación del flujo' : 'Pause flow animation');
      button.querySelector('.flow-control-label').textContent = label;
      button.setAttribute('aria-label', accessible);
      button.setAttribute('data-paused', paused ? 'true' : 'false');
      button.disabled = reduced.matches;
    }

    function syncPlayback() {
      var shouldRun = visible && !document.hidden && !userPaused && !reduced.matches;
      if (shouldRun && !started) {
        // CSS and SVG start together. SMIL is indefinite until this point,
        // so reduced-motion and no-JS visits have a fully static diagram.
        svgs.forEach(function (svg) { svg.setCurrentTime(0); });
        motions.forEach(function (motion) { motion.beginElement(); });
        map.classList.add('flow-ready');
        started = true;
      }
      if (running !== shouldRun) {
        svgs.forEach(function (svg) {
          if (shouldRun) svg.unpauseAnimations();
          else svg.pauseAnimations();
        });
        running = shouldRun;
      }
      map.classList.toggle('flow-is-paused', !shouldRun);
    }

    function preferenceChanged() {
      if (reduced.matches) {
        svgs.forEach(function (svg) { svg.pauseAnimations(); svg.setCurrentTime(0); });
        map.classList.remove('flow-ready');
        started = false;
        running = false;
      }
      updateControl();
      syncPlayback();
    }

    button.addEventListener('click', function () {
      if (reduced.matches) return;
      userPaused = !userPaused;
      updateControl();
      syncPlayback();
    });
    button.hidden = false;
    updateControl();
    syncPlayback();

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        syncPlayback();
      }, { threshold: 0 });
      observer.observe(map);
    } else {
      var scheduled = false;
      var checkViewport = function () {
        if (scheduled) return;
        scheduled = true;
        window.requestAnimationFrame(function () {
          visible = inViewport();
          syncPlayback();
          scheduled = false;
        });
      };
      window.addEventListener('scroll', checkViewport, { passive: true });
      window.addEventListener('resize', checkViewport, { passive: true });
    }

    document.addEventListener('visibilitychange', syncPlayback);
    window.addEventListener('pagehide', function () {
      svgs.forEach(function (svg) { svg.pauseAnimations(); });
      map.classList.add('flow-is-paused');
      running = false;
    });
    window.addEventListener('pageshow', function () { visible = inViewport(); syncPlayback(); });
    if (typeof reduced.addEventListener === 'function') reduced.addEventListener('change', preferenceChanged);
    else reduced.addListener(preferenceChanged);
    if ('MutationObserver' in window) {
      new MutationObserver(updateControl).observe(root, { attributes: true, attributeFilter: ['lang'] });
    }
  });
})();
