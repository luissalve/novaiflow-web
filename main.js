/* NovAIFlow — landing interactions
   Progressive enhancement: the page is fully readable and navigable
   without JS (the mobile menu is a native <details> disclosure).
   Honours prefers-reduced-motion (final states are set in CSS).
   v1: theme toggle, EN/ES i18n, parallax layers, stat counters. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;

  /* ============================================================
     i18n — EN canonical · ES first-class
     Keys applied via [data-i18n] (textContent) and [data-i18n-html]
     (innerHTML — author-controlled strings only, never user input).
     ============================================================ */
  var I18N = {
    en: {
      skip: 'Skip to content',
      meta_desc: 'NovAIFlow connects your phones, WhatsApp, CRM and warehouse so work stops living in Excel. Live in under 30 days. Bilingual EN/ES, Miami and LATAM.',
      nav_services: 'Solutions',
      nav_sectors: 'Sectors',
      nav_frontdesk: 'FrontDesk',
      nav_cases: 'Cases', nav_approach: 'Approach', nav_start: 'Book a Discovery',
      hero_kicker: 'Voice · WhatsApp · Operations',
      hero_title: 'Your calls, WhatsApp and Excel <span class="accent">do not talk</span>. We connect them.',
      hero_lede: 'A bilingual agent on your real number. Jobs land in the CRM. Inventory matches the warehouse — not a tab in Excel. Live in under 30 days.',
      hero_cta2: 'See FrontDesk <span aria-hidden="true">→</span>',
      hero_meta1: 'PHONES · CHAT · CRM · WAREHOUSE', hero_meta2: 'ONE FLOW OUT',
      proof_kicker: 'Already running', proof_title: 'Real phone lines. Real warehouses. Not a slide deck.',
      stat1: 'production systems we operate',
      stat2: 'commits shipped in 12 months',
      stat3: 'automated tests green',
      stat4: 'AI agents working overnight',
      stat5: 'live voice lines answering customers',
      stat6: 'business systems inside Claude & ChatGPT',
      fd_kicker: 'The easy yes',
      fd_title: 'FrontDesk — a bilingual AI receptionist on your real number.',
      fd_lede: 'Missed calls become bookings. After hours stop being voicemail. FrontDesk answers in English and Spanish, takes the job, and writes it into your calendar or CRM.',
      fd_b1: '24/7 coverage on the number you already publish',
      fd_b2: 'Bilingual EN/ES with the same quality, not a cheap translation',
      fd_b3: 'Hands off to a human, then logs the call',
      fd_live: 'Live in 14 days', fd_cta: 'Start with FrontDesk',
      services_kicker: 'What we install', services_title: 'Seven solution types. Named after the job they finish.',
      services_lede: 'Not a menu of buzzwords. Each line is something we have already put into production — pick one node, or wire the whole flow.',
      svc1_tag: 'Kill the copy-paste between tools.', svc1_b1: 'A 3PL stops retyping airway bills into Excel', svc1_b2: 'Invoices match themselves overnight', svc1_b3: 'Hours come back to the floor', svc1_d: '→ Manual work, gone',
      svc2_tag: 'CRM, ERP and APIs, in sync.', svc2_b1: 'A clinic intake writes to the chart, not a clipboard', svc2_b2: 'Stock, orders and invoices share one truth', svc2_b3: 'No more CSV ping-pong', svc2_d: '→ Systems, connected',
      svc3_tag: 'Voice and chat agents that take the job.', svc3_b1: 'HVAC after-hours booking on the real number', svc3_b2: 'WhatsApp sales that open a CRM deal', svc3_b3: 'Internal ops that never sleep', svc3_d: '→ An agent in production',
      svc4_tag: 'Live boards instead of Friday reports.', svc4_b1: 'A wholesaler sees fill-rate before the truck leaves', svc4_b2: 'KPIs refresh themselves', svc4_b3: 'Exceptions, not dashboards for show', svc4_d: '→ Decisions, in real time',
      svc5_tag: 'Find the bottleneck. Measure the fix.', svc5_b1: 'Shop-floor jobs stop waiting on quotes', svc5_b2: 'Dispatch gets a real queue', svc5_b3: 'Efficiency you can show a lender', svc5_d: '→ Efficiency, measured',
      svc6_tag: 'A 1–2 week Discovery with a number on it.', svc6_b1: 'Map the three processes that leak money', svc6_b2: 'Roadmap you keep even if you do not build with us', svc6_b3: 'Paid, credited to the project', svc6_d: '→ A roadmap to AI',
      svc7_tag: 'Industry software when the shelf is empty.', svc7_b1: 'Compliance engines, permit tools, shop kiosks', svc7_b2: 'Control tower for cargo and 3PL', svc7_b3: 'Yours to operate, not a rented maze', svc7_d: '→ Built for you',
      svc_cta_title: 'Not sure which node is first?',
      svc_cta_tag: 'Most real problems cross three of these. That is the point of the flow.',
      svc_cta_link: 'Book a Discovery <span aria-hidden="true">→</span>',
      sec_kicker: 'By sector', sec_title: 'Same stack. Different job on Monday morning.',
      sec_lede: 'We sell the mix that matches the floor — not a generic AI transformation.',
      sec1_t: 'Logistics / 3PL / air cargo', sec1_p: 'Control tower, voice on the 800 number, WhatsApp to the warehouse, inventory that matches the truck.',
      sec2_t: 'Healthcare / clinics / aesthetics', sec2_p: 'FrontDesk, bilingual intake, reminders, CRM that the chair-side team actually uses.',
      sec3_t: 'Trades / millwork / shop floor', sec3_p: 'Kiosk for jobs, quoting without the office bottleneck, voice for the van, status the customer can see.',
      sec4_t: 'Wholesale / distribution', sec4_p: 'Inventory, order capture on WhatsApp, invoicing, the fill-rate board before the dock closes.',
      sec5_t: 'Professional services', sec5_p: 'FrontDesk, pipeline, document automation — insurance, legal-adjacent, compliance shops tired of spreadsheets.',
      sec6_t: 'Field service / fleet ops', sec6_p: 'Tickets, dispatch, bilingual comms, billing that does not wait for Friday. The unglamorous work we already run.',
      case_kicker: 'In production', case_title: 'Outcomes first. Names under NDA.',
      case_lede: 'Flows we designed, built and still operate — logistics, clinics, compliance and SaaS.',
      case1_tag: 'FIELD OPS · OVERNIGHT', case1_t: '99.4% of legacy invoices reconciled without a clerk',
      case1_p: 'A field-service operation with 3,000+ devices: 12+ agents triage tickets, dispatch techs and talk to customers on WhatsApp, Telegram, voice and email — 24/7.',
      case1_m: '<strong>23,000+</strong> invoices · agents on the night shift',
      case2_tag: 'VOICE · REAL NUMBERS', case2_t: 'The phone is answered in EN and ES at 2 a.m.',
      case2_p: 'Voice agents on live business lines for logistics, HVAC and clinics — bilingual, routed into the PBX, with a human handoff and a written follow-up.',
      case2_m: '<strong>4+</strong> live lines · 24/7 · zero reported downtime on carrier move',
      case3_tag: 'SYSTEMS · INSIDE THE ASSISTANT', case3_t: 'Tickets and invoices, inside Claude and ChatGPT',
      case3_p: 'Production connectors with OAuth so the team queries tickets, devices, invoices and CRM as safe tools — 36 on one platform — in the assistants they already open.',
      case3_m: '<strong>3</strong> production connectors · audited',
      case4_tag: 'COMPLIANCE · 30 DAYS', case4_t: '570 carriers off spreadsheets',
      case4_p: 'Miami trucking-compliance shop: multi-tenant deadlines, auto-filled DOT/FMCSA forms, 48,000 historical documents migrated.',
      case4_m: 'Live <strong>in under 30 days</strong>',
      case5_tag: 'AIR CARGO · END TO END', case5_t: 'Flight to invoice, without the homegrown maze',
      case5_p: 'Miami air-cargo operator: booking, warehouse, delivery and invoicing in one platform, with a live public demo.',
      case5_m: '<strong>1,800+</strong> automated tests green in CI',
      case6_tag: 'REPORTS · AT SCALE', case6_t: 'A personalized insight report for every participant',
      case6_p: 'Behavioral-assessment SaaS on AWS — an orchestrated pipeline renders multi-section reports instead of a staffer in Word.',
      case6_m: '<strong>18</strong> model calls per report, on rails',
      appr_kicker: 'How we sell it', appr_title: 'Land small. Expand with proof. Anchor so it does not rot.',
      appr_lede: 'Same team from the first map to the night it goes live. Most builds are in production in under 30 days.',
      appr_land_t: 'Discovery', appr_land_d: '1–2 weeks, paid, yours to keep. Systems map, three leaks, a number. Credited if we build.',
      appr_expand_t: 'Project — 30 days', appr_expand_d: 'One agent, one integration, or the industry build. In production, not a pilot that dies in a folder.',
      appr_anchor_t: 'We operate it', appr_anchor_d: 'Retainer: Care, Grow or Partner. The flow improves every month instead of rotting after handover.',
      fnd_kicker: 'Who builds this', fnd_title: 'An engineer who ships — and answers the phone when it breaks.',
      fnd_p: 'NovAIFlow is led by Luis Monsalve, an applied AI engineer in Miami. The voice lines, the cargo platform and the agents above are designed, built and operated hands-on. Bilingual EN/ES, US and LATAM.',
      contact_kicker: 'Discovery',
      contact_title: 'Tell us the process that is burning hours.',
      contact_lede: 'A paid Discovery maps the leak and puts a number on the fix. If we build, it is credited. If not, you still keep the map.',
      contact_v1: 'Previous site',
      footer_tagline: 'Phones, chat and operations — one flow.',
      footer_contact: 'Contact',
      footer_copy: '© 2026 NovAIFlow. Next-generation business flows, powered by AI.',
      theme_to_light: 'Switch to light theme',
      theme_to_dark: 'Switch to dark theme'
    },
    es: {
      skip: 'Saltar al contenido',
      meta_desc: 'NovAIFlow conecta tus teléfonos, WhatsApp, CRM y almacén para que el trabajo deje de vivir en Excel. En vivo en menos de 30 días. Bilingüe EN/ES, Miami y LATAM.',
      nav_services: 'Soluciones',
      nav_sectors: 'Sectores',
      nav_frontdesk: 'FrontDesk',
      nav_cases: 'Casos', nav_approach: 'Metodo', nav_start: 'Agendar Discovery',
      hero_kicker: 'Voz · WhatsApp · Operaciones',
      hero_title: 'Tus llamadas, WhatsApp y Excel <span class="accent">no se hablan</span>. Los conectamos.',
      hero_lede: 'Un agente bilingüe en tu número real. Los trabajos entran al CRM. El inventario cuadra con el almacén — no con una pestaña de Excel. En vivo en menos de 30 días.',
      hero_cta2: 'Ver FrontDesk <span aria-hidden="true">→</span>',
      hero_meta1: 'TELEFONO · CHAT · CRM · ALMACEN', hero_meta2: 'UN FLUJO SALE',
      proof_kicker: 'Ya esta corriendo', proof_title: 'Lineas reales. Almacenes reales. No un deck.',
      stat1: 'sistemas en produccion que operamos',
      stat2: 'commits entregados en 12 meses',
      stat3: 'pruebas automatizadas en verde',
      stat4: 'agentes de IA trabajando de noche',
      stat5: 'lineas de voz atendiendo clientes',
      stat6: 'sistemas de negocio dentro de Claude y ChatGPT',
      fd_kicker: 'El si facil',
      fd_title: 'FrontDesk — recepcionista IA bilingue en tu numero real.',
      fd_lede: 'Las llamadas perdidas se vuelven citas. Fuera de horario deja de ser buzon. FrontDesk contesta en ingles y espanol, toma el trabajo y lo escribe en tu calendario o CRM.',
      fd_b1: 'Cobertura 24/7 en el numero que ya publicas',
      fd_b2: 'Bilingue EN/ES con la misma calidad, no una traduccion barata',
      fd_b3: 'Pasa a un humano y deja el registro de la llamada',
      fd_live: 'En vivo en 14 dias', fd_cta: 'Empezar con FrontDesk',
      services_kicker: 'Que instalamos', services_title: 'Siete tipos de solucion. Nombrados por el trabajo que terminan.',
      services_lede: 'No es un menu de moda. Cada linea es algo que ya pusimos en produccion — elige un nodo, o cablea el flujo entero.',
      svc1_tag: 'Mata el copia-pega entre herramientas.', svc1_b1: 'Un 3PL deja de reescribir guias aereas en Excel', svc1_b2: 'Las facturas se concilian de noche', svc1_b3: 'Las horas vuelven al piso', svc1_d: '→ Trabajo manual, eliminado',
      svc2_tag: 'CRM, ERP y APIs, en sincro.', svc2_b1: 'El intake de una clinica escribe a la ficha, no al clipboard', svc2_b2: 'Stock, pedidos y facturas comparten una verdad', svc2_b3: 'Se acabo el ping-pong de CSV', svc2_d: '→ Sistemas, conectados',
      svc3_tag: 'Agentes de voz y chat que toman el trabajo.', svc3_b1: 'Citas HVAC fuera de horario en el numero real', svc3_b2: 'Ventas por WhatsApp que abren un deal en el CRM', svc3_b3: 'Ops internas que no duermen', svc3_d: '→ Un agente en produccion',
      svc4_tag: 'Tableros en vivo, no el informe del viernes.', svc4_b1: 'Un mayorista ve el fill-rate antes de que salga el camion', svc4_b2: 'Los KPIs se refrescan solos', svc4_b3: 'Excepciones, no dashboards de adorno', svc4_d: '→ Decisiones, en tiempo real',
      svc5_tag: 'Encuentra el cuello de botella. Mide el arreglo.', svc5_b1: 'Los jobs de taller dejan de esperar la cotizacion', svc5_b2: 'Despacho con cola de verdad', svc5_b3: 'Eficiencia que le puedes mostrar a un banco', svc5_d: '→ Eficiencia, medida',
      svc6_tag: 'Un Discovery de 1–2 semanas, con un numero.', svc6_b1: 'Mapa de los tres procesos que filtran dinero', svc6_b2: 'Roadmap que te quedas aunque no construyas con nosotros', svc6_b3: 'Pagado, se acredita al proyecto', svc6_d: '→ Un roadmap hacia la IA',
      svc7_tag: 'Software de industria cuando el estante esta vacio.', svc7_b1: 'Motores de compliance, permisos, kioskos de piso', svc7_b2: 'Torre de control para carga y 3PL', svc7_b3: 'Tuyo para operar, no un laberinto rentado', svc7_d: '→ Construido para ti',
      svc_cta_title: 'No sabes cual nodo va primero?',
      svc_cta_tag: 'Los problemas reales cruzan tres de estos. Ese es el punto del flujo.',
      svc_cta_link: 'Agendar Discovery <span aria-hidden="true">→</span>',
      sec_kicker: 'Por sector', sec_title: 'El mismo stack. Otro trabajo el lunes a las 8.',
      sec_lede: 'Vendemos la mezcla que encaja en el piso — no una transformacion de IA generica.',
      sec1_t: 'Logistica / 3PL / carga aerea', sec1_p: 'Torre de control, voz en el 800, WhatsApp al almacen, inventario que cuadra con el camion.',
      sec2_t: 'Salud / clinicas / estetica', sec2_p: 'FrontDesk, intake bilingue, recordatorios, CRM que el equipo de silla si usa.',
      sec3_t: 'Oficios / millwork / piso de taller', sec3_p: 'Kiosko de jobs, cotizacion sin el cuello de la oficina, voz para la van, estatus que el cliente ve.',
      sec4_t: 'Mayorista / distribucion', sec4_p: 'Inventario, pedidos por WhatsApp, facturacion, el tablero de fill-rate antes de cerrar el muelle.',
      sec5_t: 'Servicios profesionales', sec5_p: 'FrontDesk, pipeline, automatizacion de documentos — seguros, near-legal, compliance cansados del Excel.',
      sec6_t: 'Servicio de campo / flota', sec6_p: 'Tickets, despacho, comms bilingue, facturacion que no espera al viernes. El trabajo poco glamuroso que ya operamos.',
      case_kicker: 'En produccion', case_title: 'Resultado primero. Nombres bajo NDA.',
      case_lede: 'Flujos que disenamos, construimos y seguimos operando — logistica, clinicas, compliance y SaaS.',
      case1_tag: 'CAMPO · NOCHE', case1_t: '99.4% de facturas legacy conciliadas sin un clerk',
      case1_p: 'Una operacion de campo con 3,000+ equipos: 12+ agentes trian tickets, despachan tecnicos y hablan con clientes por WhatsApp, Telegram, voz y email — 24/7.',
      case1_m: '<strong>23,000+</strong> facturas · agentes en el turno de noche',
      case2_tag: 'VOZ · NUMEROS REALES', case2_t: 'El telefono se contesta en EN y ES a las 2 a.m.',
      case2_p: 'Agentes de voz en lineas de negocio para logistica, HVAC y clinicas — bilingues, enrutados al PBX, con pase a humano y seguimiento escrito.',
      case2_m: '<strong>4+</strong> lineas en vivo · 24/7 · cero downtime reportado al mover de carrier',
      case3_tag: 'SISTEMAS · DENTRO DEL ASISTENTE', case3_t: 'Tickets y facturas, dentro de Claude y ChatGPT',
      case3_p: 'Conectores en produccion con OAuth para que el equipo consulte tickets, equipos, facturas y CRM como herramientas seguras — 36 en una plataforma — en los asistentes que ya abren.',
      case3_m: '<strong>3</strong> conectores en produccion · auditados',
      case4_tag: 'COMPLIANCE · 30 DIAS', case4_t: '570 carriers fuera de las hojas de calculo',
      case4_p: 'Firma de compliance de transporte en Miami: vencimientos multi-tenant, formularios DOT/FMCSA auto-llenados, 48,000 documentos historicos migrados.',
      case4_m: 'En vivo <strong>en menos de 30 dias</strong>',
      case5_tag: 'CARGA AEREA · PUNTA A PUNTA', case5_t: 'Del vuelo a la factura, sin el laberinto casero',
      case5_p: 'Operador de carga aerea en Miami: booking, bodega, entrega y facturacion en una plataforma, con demo publica en vivo.',
      case5_m: '<strong>1,800+</strong> pruebas automatizadas en verde en CI',
      case6_tag: 'REPORTES · A ESCALA', case6_t: 'Un reporte de insight personalizado para cada participante',
      case6_p: 'SaaS de evaluacion conductual en AWS — un pipeline orquestado arma reportes multi-seccion en vez de alguien en Word.',
      case6_m: '<strong>18</strong> llamadas al modelo por reporte, con rieles',
      appr_kicker: 'Como lo vendemos', appr_title: 'Entra chico. Expande con prueba. Ancla para que no se pudra.',
      appr_lede: 'El mismo equipo del primer mapa a la noche en que sale en vivo. La mayoria de builds estan en produccion en menos de 30 dias.',
      appr_land_t: 'Discovery', appr_land_d: '1–2 semanas, pagado, te lo quedas. Mapa de sistemas, tres fugas, un numero. Se acredita si construimos.',
      appr_expand_t: 'Proyecto — 30 dias', appr_expand_d: 'Un agente, una integracion, o el build de industria. En produccion, no un piloto que muere en una carpeta.',
      appr_anchor_t: 'Lo operamos', appr_anchor_d: 'Retainer: Care, Grow o Partner. El flujo mejora cada mes en vez de pudrirse despues del handover.',
      fnd_kicker: 'Quien construye esto', fnd_title: 'Un ingeniero que entrega — y contesta el telefono cuando se rompe.',
      fnd_p: 'NovAIFlow la lidera Luis Monsalve, ingeniero de IA aplicada en Miami. Las lineas de voz, la plataforma de carga y los agentes de arriba estan disenados, construidos y operados a mano. Bilingue EN/ES, US y LATAM.',
      contact_kicker: 'Discovery',
      contact_title: 'Cuentanos el proceso que esta quemando horas.',
      contact_lede: 'Un Discovery pagado mapea la fuga y le pone numero al arreglo. Si construimos, se acredita. Si no, te quedas el mapa.',
      contact_v1: 'Sitio anterior',
      footer_tagline: 'Telefono, chat y operaciones — un flujo.',
      footer_contact: 'Contacto',
      footer_copy: '© 2026 NovAIFlow. Flujos de negocio de nueva generacion, impulsados por IA.',
      theme_to_light: 'Cambiar a tema claro',
      theme_to_dark: 'Cambiar a tema oscuro'
    },
  };

  var THEME_COLORS = { dark: '#0A1020', light: '#F7F9FC' };

  /* Keeps browser chrome colour, theme-toggle aria-label and the
     hero ambient video in sync with the active theme. */
  function applyThemeUI() {
    var theme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    var meta = document.getElementById('meta-theme');
    if (meta) meta.setAttribute('content', THEME_COLORS[theme]);
    var dict = I18N[currentLang] || I18N.en;
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? dict.theme_to_light : dict.theme_to_dark);
    });
    /* Light mode uses the static hero art (Higgsfield's moderation rejects the
       light-mode video; the swap code lives in git f2f82e0 if that changes).
       Pausing the hidden video in light saves battery/CPU. */
    var vid = document.querySelector('.hero-video');
    if (vid) {
      if (theme === 'light') { vid.pause(); }
      else {
        var p = vid.play();
        if (p && p.catch) p.catch(function () { /* autoplay blocked: poster stays */ });
      }
    }
  }

  /* Renders the final, locale-formatted value of every counter
     (used when the count-up animation will not run, or after a
     language switch once it already ran). */
  function formatCounters() {
    document.querySelectorAll('.stat-v[data-count]').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      if (isNaN(target)) return;
      el.textContent = target.toLocaleString(currentLang === 'es' ? 'es' : 'en-US') +
        (el.getAttribute('data-suffix') || '');
    });
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    var meta = document.getElementById('meta-desc');
    if (meta) meta.setAttribute('content', dict.meta_desc);
    root.setAttribute('lang', lang);
    try { localStorage.setItem('nf-lang', lang); } catch (e) { /* storage unavailable */ }
    // the toggle shows the language you would switch TO
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      var code = btn.querySelector('.lang-code');
      if (code) code.textContent = lang === 'en' ? 'ES' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
    });
    applyThemeUI();
    if (reduce || counted) formatCounters();
  }

  var currentLang = root.getAttribute('lang') === 'es' ? 'es' : 'en';
  if (currentLang === 'es') applyLang('es');
  document.querySelectorAll('.lang-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentLang = currentLang === 'en' ? 'es' : 'en';
      applyLang(currentLang);
    });
  });

  /* ---- Theme toggle (data-theme set pre-paint in <head>) ---- */
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('nf-theme', next); } catch (e) { /* storage unavailable */ }
      applyThemeUI();
    });
  });
  applyThemeUI();

  /* ---- Sticky header scrolled state ---- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile nav (native <details> disclosure) ---- */
  var disclosure = document.querySelector('.nav-disclosure');
  if (disclosure) {
    var summary = disclosure.querySelector('summary');
    var close = function () { disclosure.removeAttribute('open'); };
    disclosure.querySelectorAll('.mobile-nav a').forEach(function (a) {
      a.addEventListener('click', close);
    });
    disclosure.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && disclosure.hasAttribute('open')) {
        close();
        if (summary) summary.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) close();
    });
  }

  /* ---- Parallax layers ([data-plx]) — transform-only, rAF-throttled ---- */
  var plxEls = Array.prototype.slice.call(document.querySelectorAll('[data-plx]'));
  if (!reduce && plxEls.length) {
    var plxTicking = false;
    var updatePlx = function () {
      var vh = window.innerHeight;
      var rects = new Map(); // one layout read per host, even with several layers
      plxEls.forEach(function (el) {
        var host = el.parentElement;
        if (!host) return;
        var r = rects.get(host);
        if (!r) { r = host.getBoundingClientRect(); rects.set(host, r); }
        if (r.bottom < -vh || r.top > vh * 2) return; // off-screen: skip
        var speed = parseFloat(el.getAttribute('data-plx')) || 0.2;
        el.style.transform = 'translate3d(0,' + (-r.top * speed).toFixed(1) + 'px,0)';
      });
      plxTicking = false;
    };
    window.addEventListener('scroll', function () {
      if (!plxTicking) { window.requestAnimationFrame(updatePlx); plxTicking = true; }
    }, { passive: true });
    window.addEventListener('resize', function () {
      if (!plxTicking) { window.requestAnimationFrame(updatePlx); plxTicking = true; }
    });
    updatePlx();
  }

  /* ---- Stat counters — count up once when the band scrolls in ---- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1100;
    var start = null;
    function fmt(n) { return n.toLocaleString(currentLang === 'es' ? 'es' : 'en-US'); }
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      el.textContent = fmt(Math.round(target * eased)) + (p === 1 ? suffix : '');
      if (p < 1) window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  }

  /* ---- Reveal on scroll + SVG draw-in ---- */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  document.querySelectorAll('.card-grid, .node-grid, .industry-grid, .flowline, .stat-band, .case-grid, .svc-grid, .sector-grid, .journey').forEach(function (grid) {
    Array.prototype.slice.call(grid.children).forEach(function (child, i) {
      if (child.classList.contains('reveal')) child.style.setProperty('--d', (i * 70) + 'ms');
    });
  });

  if (reduce || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('.hero-graph, .conv-graph').forEach(function (g) { g.classList.add('draw'); });
    formatCounters(); // no count-up animation: render locale-formatted final values
    return;
  }

  var counted = false;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.classList.add('in');
      if (el.classList.contains('conv-graph')) el.classList.add('draw');
      if (el.classList.contains('stat') && !counted) {
        counted = true;
        document.querySelectorAll('.stat-v[data-count]').forEach(animateCount);
      }
      io.unobserve(el);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

  revealables.forEach(function (el) { io.observe(el); });
  document.querySelectorAll('.conv-graph').forEach(function (g) { io.observe(g); });

  /* Hero graph draws as soon as the page is ready (it's above the fold) */
  var hero = document.querySelector('.hero-graph');
  if (hero) {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () { hero.classList.add('draw'); });
    });
  }
})();
