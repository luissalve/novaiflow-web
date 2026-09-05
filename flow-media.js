/* Load the ambient film only while it is visible and motion is welcome. */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var connection = navigator.connection;

  document.querySelectorAll('[data-flow-media]').forEach(function (media) {
    var video = media.querySelector('video');
    var button = media.querySelector('.flow-media-toggle');
    if (!video || !button || !video.canPlayType('video/mp4')) return;
    var visible = false;
    var loaded = false;
    var failed = false;
    var userPaused = false;
    var playPending = false;
    video.muted = true;

    function savingData() { return !!(connection && connection.saveData); }
    function canRun() { return visible && !document.hidden && !userPaused && !reduced.matches && !savingData() && !failed; }

    function updateControl() {
      var es = (root.lang || 'en').toLowerCase().indexOf('es') === 0;
      var paused = userPaused || reduced.matches || savingData();
      var label = paused ? (es ? 'Reproducir animación' : 'Play animation') : (es ? 'Pausar animación' : 'Pause animation');
      button.querySelector('span').textContent = label;
      button.setAttribute('data-paused', paused ? 'true' : 'false');
      button.disabled = reduced.matches || savingData();
      button.hidden = failed || reduced.matches || savingData();
    }

    function syncPlayback() {
      updateControl();
      if (!canRun()) {
        video.pause();
        if (reduced.matches || savingData()) media.classList.remove('media-has-frame');
        return;
      }
      if (!loaded) {
        video.src = video.getAttribute('data-src');
        loaded = true;
      }
      if (playPending || !video.paused) return;
      playPending = true;
      var playback = video.play();
      if (playback && typeof playback.then === 'function') {
        playback.then(function () {
          playPending = false;
          if (!canRun()) video.pause();
        }).catch(function (error) {
          playPending = false;
          // A visibility change can interrupt play before the first frame.
          if (error.name === 'AbortError') { if (canRun()) syncPlayback(); return; }
          userPaused = true;
          updateControl();
        });
      } else playPending = false;
    }

    video.addEventListener('playing', function () {
      if (canRun()) media.classList.add('media-has-frame');
      else video.pause();
    });
    video.addEventListener('error', function () {
      failed = true;
      media.classList.remove('media-has-frame');
      syncPlayback();
    });
    button.addEventListener('click', function () {
      userPaused = !userPaused;
      syncPlayback();
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        syncPlayback();
      }, { threshold: 0 }).observe(media);
    } else {
      function checkViewport() {
        var box = media.getBoundingClientRect();
        visible = box.bottom > 0 && box.top < window.innerHeight;
        syncPlayback();
      }
      window.addEventListener('scroll', checkViewport, { passive: true });
      window.addEventListener('resize', checkViewport, { passive: true });
      checkViewport();
    }
    document.addEventListener('visibilitychange', syncPlayback);
    window.addEventListener('pagehide', function () { video.pause(); });
    window.addEventListener('pageshow', syncPlayback);
    if (reduced.addEventListener) reduced.addEventListener('change', syncPlayback);
    else reduced.addListener(syncPlayback);
    if (connection && connection.addEventListener) connection.addEventListener('change', syncPlayback);
    if ('MutationObserver' in window) new MutationObserver(updateControl).observe(root, { attributes: true, attributeFilter: ['lang'] });
    updateControl();
  });
})();
