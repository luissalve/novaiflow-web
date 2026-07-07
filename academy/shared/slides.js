/* ============================================================================
   NOVAIFLOW ACADEMY — SHARED DECK CONTROLLER
   ----------------------------------------------------------------------------
   Maneja TODOS los decks: navegación por teclado, toggle EN/ES, contador,
   barra de progreso, fragments (revelado), fullscreen y deep-link por hash.

   USO en cada deck:
     <div class="topbar" data-topbar data-level="01" data-title="Fundamentos"></div>
     <div class="deck"> <section class="slide dark">…</section> … </div>
     <script src="../../../shared/slides.js"></script>

   Atajos: → / Espacio / PageDown = siguiente · ← / PageUp = anterior
           Inicio/Fin = primera/última · F = pantalla completa · L = cambia idioma
   ============================================================================ */
(function () {
  "use strict";
  var KEY_LANG = "xg-ai-lang";

  var slides = [];
  var idx = 0;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* ── Idioma ──────────────────────────────────────────────────────────── */
  function getLang() { return localStorage.getItem(KEY_LANG) || "es"; }
  function setLang(lang) {
    localStorage.setItem(KEY_LANG, lang);
    document.documentElement.setAttribute("data-lang", lang);
    $all("[data-lang-btn]").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang-btn") === lang);
    });
  }

  /* ── Topbar ──────────────────────────────────────────────────────────── */
  function buildTopbar() {
    var mount = $("[data-topbar]");
    if (!mount || mount.dataset.built) return;
    mount.dataset.built = "1";
    mount.classList.add("topbar");
    var title = mount.getAttribute("data-title") || "Deck";
    var level = mount.getAttribute("data-level") || "";
    var back = mount.getAttribute("data-back") || "../../../index.html";
    mount.innerHTML =
      '<div class="brand-tag"><a href="' + back + '" style="display:flex;align-items:center;gap:12px">' +
        '<div class="brand-mark">NF</div>' +
        '<div><div class="brand-name">NovAIFlow · Academy</div>' +
        '<div class="brand-sub">' + (level ? "Nivel " + level + " · " : "") + title + "</div></div>" +
      "</a></div>" +
      '<div class="ctrl">' +
        '<span class="ctrl-label">Idioma · Language</span>' +
        '<div class="seg" role="group">' +
          '<button data-lang-btn="es">ES</button>' +
          '<button data-lang-btn="en">EN</button>' +
        "</div>" +
        '<button class="nav-btn" data-nav="prev" aria-label="Anterior / Previous">‹</button>' +
        '<span class="counter" data-counter>1 / 1</span>' +
        '<button class="nav-btn" data-nav="next" aria-label="Siguiente / Next">›</button>' +
        '<button class="nav-btn" data-nav="full" aria-label="Pantalla completa / Fullscreen">⛶</button>' +
        '<a href="' + back + '" class="back">← Hub</a>' +
      "</div>";

    $all("[data-lang-btn]").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang-btn")); });
    });
    $("[data-nav='prev']").addEventListener("click", function () { go(idx - 1); });
    $("[data-nav='next']").addEventListener("click", function () { next(); });
    $("[data-nav='full']").addEventListener("click", toggleFullscreen);
  }

  /* ── Navegación ──────────────────────────────────────────────────────── */
  function render() {
    slides.forEach(function (s, i) { s.classList.toggle("is-active", i === idx); });
    var counter = $("[data-counter]");
    if (counter) counter.textContent = (idx + 1) + " / " + slides.length;
    var prog = $(".progress");
    if (prog) prog.style.width = ((idx + 1) / slides.length * 100) + "%";
    if (location.hash !== "#" + (idx + 1)) history.replaceState(null, "", "#" + (idx + 1));
    // reset fragments del slide entrante
    $all(".fragment", slides[idx]).forEach(function (f) { f.classList.remove("is-shown"); });
  }
  function go(n) {
    idx = Math.max(0, Math.min(slides.length - 1, n));
    render();
  }
  function next() {
    // revela fragments pendientes antes de avanzar
    var frags = $all(".fragment", slides[idx]);
    var hidden = frags.filter(function (f) { return !f.classList.contains("is-shown"); });
    if (hidden.length) { hidden[0].classList.add("is-shown"); return; }
    go(idx + 1);
  }
  function prev() { go(idx - 1); }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      (document.documentElement.requestFullscreen || function () {}).call(document.documentElement);
    } else {
      (document.exitFullscreen || function () {}).call(document);
    }
  }

  /* ── Teclado ─────────────────────────────────────────────────────────── */
  function onKey(e) {
    switch (e.key) {
      case "ArrowRight": case " ": case "PageDown": e.preventDefault(); next(); break;
      case "ArrowLeft": case "PageUp": e.preventDefault(); prev(); break;
      case "Home": e.preventDefault(); go(0); break;
      case "End": e.preventDefault(); go(slides.length - 1); break;
      case "f": case "F": toggleFullscreen(); break;
      case "l": case "L": setLang(getLang() === "es" ? "en" : "es"); break;
    }
  }

  /* ── Init ────────────────────────────────────────────────────────────── */
  function init() {
    buildTopbar();
    setLang(getLang());
    slides = $all(".deck .slide");
    if (!slides.length) return;
    // barra de progreso
    if (!$(".progress")) {
      var p = document.createElement("div");
      p.className = "progress";
      document.body.appendChild(p);
    }
    // botón imprimir
    if (!$(".print-btn")) {
      var btn = document.createElement("button");
      btn.className = "print-btn";
      btn.textContent = "⬡ Print / PDF";
      btn.addEventListener("click", function () { window.print(); });
      document.body.appendChild(btn);
    }
    // deep-link por hash
    var h = parseInt((location.hash || "").replace("#", ""), 10);
    idx = (!isNaN(h) && h >= 1 && h <= slides.length) ? h - 1 : 0;
    render();
    document.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", function () {
      var n = parseInt((location.hash || "").replace("#", ""), 10);
      if (!isNaN(n) && n - 1 !== idx) go(n - 1);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }

  window.XGDeck = { go: go, next: next, prev: prev, setLang: setLang };
})();
