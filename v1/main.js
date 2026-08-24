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
      meta_desc: 'NovAIFlow integrates AI, automation and your systems to eliminate manual work and optimize operations — measurable impact, live in under 30 days.',
      nav_services: 'Services', nav_cases: 'Case studies', nav_industries: 'Industries',
      nav_approach: 'Approach', nav_portfolio: 'Portfolio', nav_start: 'Start a project',
      hero_kicker: 'AI · Automation · Integration',
      hero_title: 'Where AI, automation and your systems <span class="accent">flow</span> together.',
      hero_lede: 'NovAIFlow integrates AI, automation and your systems to eliminate manual work and optimize operations — measurable impact, live in under 30 days.',
      hero_cta2: 'See it running in production <span aria-hidden="true">→</span>',
      hero_meta1: 'MANY SYSTEMS IN', hero_meta2: 'ONE FLOW OUT',
      proof_kicker: 'Operated in production', proof_title: "We don't demo. We operate.",
      stat1: 'systems live in production',
      stat2: 'commits shipped in 12 months',
      stat3: 'automated tests green',
      stat4: 'AI agents running 24/7',
      stat5: 'AI voice lines answering real calls',
      stat6: 'MCP connectors live in Claude & ChatGPT',
      services_kicker: 'What we do', services_title: 'Seven services. One continuous flow.',
      services_lede: 'Productized where it should be, bespoke where it matters. Pick a single node — or let us wire the whole flow.',
      svc1_tag: 'Automate business processes.', svc1_b1: 'Eliminate manual tasks', svc1_b2: 'Automatic flows between systems', svc1_b3: 'Reclaim operating hours', svc1_d: '→ Manual work, gone',
      svc2_tag: 'Integrate your systems.', svc2_b1: 'CRM, ERP & APIs', svc2_b2: 'Real-time data sync', svc2_b3: 'No more silos', svc2_d: '→ Systems, connected',
      svc3_tag: 'AI agents that work.', svc3_b1: 'Sales', svc3_b2: 'Customer support', svc3_b3: 'Internal operations', svc3_d: '→ An agent in production',
      svc4_tag: 'Analytics & BI.', svc4_b1: 'Live dashboards', svc4_b2: 'Automated KPIs', svc4_b3: 'Predictive data', svc4_d: '→ Decisions, in real time',
      svc5_tag: 'Optimize operations.', svc5_b1: 'Operational audit', svc5_b2: 'Find the bottlenecks', svc5_b3: 'Measurable efficiency', svc5_d: '→ Efficiency, measured',
      svc6_tag: 'Strategic consulting.', svc6_b1: 'AI roadmaps', svc6_b2: 'Digital diagnosis', svc6_b3: 'Business transformation', svc6_d: '→ A roadmap to AI',
      svc7_tag: 'Custom development.', svc7_b1: 'Bespoke software', svc7_b2: 'Advanced integrations', svc7_b3: 'Industry-specific solutions', svc7_d: '→ Built for you',
      svc_cta_title: 'Not sure where it starts?',
      svc_cta_tag: "Most real problems span several of these. That's exactly the point.",
      svc_cta_link: 'Talk to an architect <span aria-hidden="true">→</span>',
      conv_kicker: 'The difference',
      conv_title: 'Most firms sell you one tool. We deliver the whole flow.',
      conv_p: 'Point tools leave you exporting spreadsheets, stitching apps together and chasing data across systems. NovAIFlow unifies your systems, data and tasks into one automated, AI-powered flow — then keeps it running.',
      conv_claim: '<strong>Many systems in. One flow of value out.</strong>',
      case_kicker: 'Case studies',
      case_title: 'Real systems. Real operations. Running today.',
      case_lede: 'A selection of flows we designed, built and operate — on our own platforms and for clients in logistics, healthcare, compliance and SaaS.',
      case1_tag: 'MULTI-AGENT · OPERATIONS',
      case1_t: 'An operations department that never sleeps',
      case1_p: 'Our multi-agent platform runs 12+ specialized agents 24/7 — ticket triage, technician dispatch, billing and customer comms across WhatsApp, Telegram, voice and email — for a managed-print fleet of 3,000+ devices.',
      case1_m: '<strong>99.4%</strong> automated reconciliation across 23,000+ legacy invoices',
      case2_tag: 'VOICE AI · TELEPHONY',
      case2_t: 'AI receptionists on real phone lines',
      case2_p: 'Our voice AI agents answer business lines for logistics, HVAC and healthcare clients — bilingual EN/ES agents with multi-destination PBX routing, guardrails and post-call actions. Provider migration with zero reported downtime.',
      case2_m: '<strong>4+</strong> live lines · bilingual EN/ES · 24/7',
      case3_tag: 'MCP · AI CONNECTIVITY',
      case3_t: 'Your business systems, inside Claude and ChatGPT',
      case3_p: 'Production MCP connectors with OAuth 2.1 expose tickets, devices, invoices and CRM data as safe tools — 36 of them on one platform alone — directly inside the AI assistants your team already uses.',
      case3_m: '<strong>3</strong> production connectors · OAuth 2.1 · audited',
      case4_tag: 'COMPLIANCE · SAAS',
      case4_t: 'From spreadsheet chaos to a compliance engine',
      case4_p: 'For a Miami trucking-compliance firm: a multi-tenant platform replacing manual spreadsheets for ~570 carriers — deadline engine, auto-filled DOT/FMCSA forms and 48,000 historical documents migrated.',
      case4_m: 'Live in production <strong>in under 30 days</strong>',
      case5_tag: 'LOGISTICS · PLATFORM REBUILD',
      case5_t: 'An air-cargo hub, rebuilt end-to-end',
      case5_p: 'Full flight → booking → warehouse → delivery → invoicing platform for a Miami air-cargo operator, with pyramid multi-tenant security and a live public demo.',
      case5_m: '<strong>1,800+</strong> automated tests green in CI',
      case6_tag: 'AI REPORTS · SAAS',
      case6_t: 'LLM-powered insight reports at scale',
      case6_p: 'Sole engineering ownership of a behavioral-assessment SaaS on AWS — an orchestrated Claude pipeline renders personalized multi-section reports for every participant.',
      case6_m: '<strong>18</strong> orchestrated model calls per report',
      ind_kicker: 'Who we serve', ind_title: 'Built for operations-heavy teams.',
      ind_lede: 'We work with companies of <strong>10–500 people</strong> that are done with manual work and scattered data.',
      ind_services: 'Services', ind_health: 'Healthcare', ind_logistics: 'Logistics',
      ind_retail: 'Retail', ind_education: 'Education', ind_finance: 'Finance',
      appr_kicker: 'How we work', appr_title: 'From diagnosis to live — in under 30 days.',
      appr_lede: 'The same team carries it from first diagnosis to live operation. Most implementations go live in under 30 days.',
      step1_t: 'Diagnose', step1_d: 'Map the processes, data and bottlenecks worth automating.',
      step2_t: 'Design', step2_d: 'Architecture, AI agents and the integration plan.',
      step3_t: 'Build', step3_d: 'Ship the automation, agents and software — tested and real.',
      step4_t: 'Integrate', step4_d: 'Wire it into your CRM, ERP, APIs and data.',
      step5_t: 'Optimize', step5_d: 'Measure, tune and keep improving — continuously.',
      port_kicker: 'Portfolio', port_title: 'Our products run on the same flow.',
      port_lede: "We don't only build for clients — we run these platforms ourselves on the same automated flow, and offer them directly to you.",
      port1_t: 'AI Operations Platform',
      port2_t: 'Voice AI Agents',
      port3_t: 'Logistics Control Tower',
      port4_t: 'Managed Cloud & Hosting',
      port1: 'A multi-agent platform — orchestrated intelligence for real operations.',
      port2: 'Enterprise voice agents — bilingual AI on real phone lines, in production.',
      port3: 'A logistics & 3PL platform — control tower, CRM, comms and master data.',
      port4: 'The infrastructure & hosting layer — operated, observed and secured.',
      fnd_kicker: 'Who builds this', fnd_title: 'Built by an engineer who ships.',
      fnd_p: 'NovAIFlow is led by Luis Monsalve, an applied AI engineer in Miami. Every system above is designed, built and operated hands-on — from the multi-agent platforms and voice AI to the servers they run on. Bilingual EN/ES, serving the US and LATAM.',
      contact_kicker: 'Start a project', contact_title: "Let's put your business in flow.",
      contact_lede: "Tell us the process that's costing you time. We'll automate the flow that fixes it — and operate it once it's live.",
      footer_tagline: 'Where AI, automation and your systems flow together.',
      footer_contact: 'Contact',
      footer_copy: '© 2026 NovAIFlow. Next-generation business flows, powered by AI.',
      theme_to_light: 'Switch to light theme',
      theme_to_dark: 'Switch to dark theme'
    },
    es: {
      skip: 'Saltar al contenido',
      meta_desc: 'NovAIFlow integra IA, automatización y tus sistemas para eliminar trabajo manual y optimizar operaciones — impacto medible, en vivo en menos de 30 días.',
      nav_services: 'Servicios', nav_cases: 'Casos', nav_industries: 'Industrias',
      nav_approach: 'Método', nav_portfolio: 'Portafolio', nav_start: 'Iniciar un proyecto',
      hero_kicker: 'IA · Automatización · Integración',
      hero_title: 'Donde la IA, la automatización y tus sistemas <span class="accent">fluyen</span> juntos.',
      hero_lede: 'NovAIFlow integra IA, automatización y tus sistemas para eliminar trabajo manual y optimizar operaciones — impacto medible, en vivo en menos de 30 días.',
      hero_cta2: 'Míralo corriendo en producción <span aria-hidden="true">→</span>',
      hero_meta1: 'MUCHOS SISTEMAS ENTRAN', hero_meta2: 'UN FLUJO SALE',
      proof_kicker: 'Operado en producción', proof_title: 'No hacemos demos. Operamos.',
      stat1: 'sistemas vivos en producción',
      stat2: 'commits entregados en 12 meses',
      stat3: 'pruebas automatizadas en verde',
      stat4: 'agentes de IA operando 24/7',
      stat5: 'líneas de voz IA atendiendo llamadas reales',
      stat6: 'conectores MCP vivos en Claude y ChatGPT',
      services_kicker: 'Qué hacemos', services_title: 'Siete servicios. Un flujo continuo.',
      services_lede: 'Productizado donde debe serlo, a medida donde importa. Elige un solo nodo — o deja que cableemos el flujo completo.',
      svc1_tag: 'Automatiza procesos de negocio.', svc1_b1: 'Elimina tareas manuales', svc1_b2: 'Flujos automáticos entre sistemas', svc1_b3: 'Recupera horas operativas', svc1_d: '→ Trabajo manual, eliminado',
      svc2_tag: 'Integra tus sistemas.', svc2_b1: 'CRM, ERP y APIs', svc2_b2: 'Datos sincronizados en tiempo real', svc2_b3: 'Se acabaron los silos', svc2_d: '→ Sistemas, conectados',
      svc3_tag: 'Agentes de IA que trabajan.', svc3_b1: 'Ventas', svc3_b2: 'Atención al cliente', svc3_b3: 'Operaciones internas', svc3_d: '→ Un agente en producción',
      svc4_tag: 'Analítica y BI.', svc4_b1: 'Dashboards en vivo', svc4_b2: 'KPIs automatizados', svc4_b3: 'Datos predictivos', svc4_d: '→ Decisiones, en tiempo real',
      svc5_tag: 'Optimiza operaciones.', svc5_b1: 'Auditoría operativa', svc5_b2: 'Encuentra los cuellos de botella', svc5_b3: 'Eficiencia medible', svc5_d: '→ Eficiencia, medida',
      svc6_tag: 'Consultoría estratégica.', svc6_b1: 'Roadmaps de IA', svc6_b2: 'Diagnóstico digital', svc6_b3: 'Transformación del negocio', svc6_d: '→ Un roadmap hacia la IA',
      svc7_tag: 'Desarrollo a medida.', svc7_b1: 'Software a medida', svc7_b2: 'Integraciones avanzadas', svc7_b3: 'Soluciones por industria', svc7_d: '→ Construido para ti',
      svc_cta_title: '¿No sabes por dónde empezar?',
      svc_cta_tag: 'Los problemas reales suelen cruzar varios de estos. Ese es exactamente el punto.',
      svc_cta_link: 'Habla con un arquitecto <span aria-hidden="true">→</span>',
      conv_kicker: 'La diferencia',
      conv_title: 'La mayoría te vende una herramienta. Nosotros entregamos el flujo completo.',
      conv_p: 'Las herramientas sueltas te dejan exportando hojas de cálculo, cosiendo apps y persiguiendo datos entre sistemas. NovAIFlow unifica tus sistemas, datos y tareas en un solo flujo automatizado con IA — y lo mantiene funcionando.',
      conv_claim: '<strong>Muchos sistemas entran. Un flujo de valor sale.</strong>',
      case_kicker: 'Casos de estudio',
      case_title: 'Sistemas reales. Operaciones reales. Corriendo hoy.',
      case_lede: 'Una selección de flujos que diseñamos, construimos y operamos — en nuestras propias plataformas y para clientes de logística, salud, compliance y SaaS.',
      case1_tag: 'MULTI-AGENTE · OPERACIONES',
      case1_t: 'Un departamento de operaciones que nunca duerme',
      case1_p: 'Nuestra plataforma multi-agente corre 12+ agentes especializados 24/7 — triaje de tickets, despacho de técnicos, facturación y comunicación con clientes por WhatsApp, Telegram, voz y email — para una flota gestionada de 3,000+ equipos.',
      case1_m: '<strong>99.4%</strong> de conciliación automática en 23,000+ facturas legacy',
      case2_tag: 'VOZ IA · TELEFONÍA',
      case2_t: 'Recepcionistas IA en líneas telefónicas reales',
      case2_p: 'Nuestros agentes de voz IA atienden líneas de negocio para clientes de logística, HVAC y salud — agentes bilingües EN/ES con enrutamiento a PBX multi-destino, guardrails y acciones post-llamada. Migración de proveedor sin downtime reportado.',
      case2_m: '<strong>4+</strong> líneas en vivo · bilingüe EN/ES · 24/7',
      case3_tag: 'MCP · CONECTIVIDAD IA',
      case3_t: 'Tus sistemas de negocio, dentro de Claude y ChatGPT',
      case3_p: 'Conectores MCP en producción con OAuth 2.1 exponen tickets, equipos, facturas y datos de CRM como herramientas seguras — 36 en una sola plataforma — directamente dentro de los asistentes de IA que tu equipo ya usa.',
      case3_m: '<strong>3</strong> conectores en producción · OAuth 2.1 · auditados',
      case4_tag: 'COMPLIANCE · SAAS',
      case4_t: 'Del caos de hojas de cálculo a un motor de compliance',
      case4_p: 'Para una firma de compliance de transporte en Miami: plataforma multi-tenant que reemplaza hojas de cálculo manuales para ~570 carriers — motor de vencimientos, formularios DOT/FMCSA auto-llenados y 48,000 documentos históricos migrados.',
      case4_m: 'En producción <strong>en menos de 30 días</strong>',
      case5_tag: 'LOGÍSTICA · RECONSTRUCCIÓN',
      case5_t: 'Un hub de carga aérea, reconstruido de punta a punta',
      case5_p: 'Plataforma completa vuelo → booking → bodega → entrega → facturación para un operador de carga aérea en Miami, con seguridad multi-tenant piramidal y demo pública en vivo.',
      case5_m: '<strong>1,800+</strong> pruebas automatizadas en verde en CI',
      case6_tag: 'REPORTES IA · SAAS',
      case6_t: 'Reportes de insight con LLM, a escala',
      case6_p: 'Propiedad única de ingeniería de un SaaS de evaluación conductual en AWS — un pipeline orquestado de Claude genera reportes personalizados multi-sección para cada participante.',
      case6_m: '<strong>18</strong> llamadas orquestadas al modelo por reporte',
      ind_kicker: 'A quién servimos', ind_title: 'Hecho para equipos con operación pesada.',
      ind_lede: 'Trabajamos con empresas de <strong>10–500 personas</strong> que ya se cansaron del trabajo manual y los datos dispersos.',
      ind_services: 'Servicios', ind_health: 'Salud', ind_logistics: 'Logística',
      ind_retail: 'Retail', ind_education: 'Educación', ind_finance: 'Finanzas',
      appr_kicker: 'Cómo trabajamos', appr_title: 'Del diagnóstico a producción — en menos de 30 días.',
      appr_lede: 'El mismo equipo lo lleva del primer diagnóstico a la operación en vivo. La mayoría de implementaciones salen a producción en menos de 30 días.',
      step1_t: 'Diagnosticar', step1_d: 'Mapear los procesos, datos y cuellos de botella que vale la pena automatizar.',
      step2_t: 'Diseñar', step2_d: 'Arquitectura, agentes de IA y el plan de integración.',
      step3_t: 'Construir', step3_d: 'Entregar la automatización, los agentes y el software — probados y reales.',
      step4_t: 'Integrar', step4_d: 'Cablearlo a tu CRM, ERP, APIs y datos.',
      step5_t: 'Optimizar', step5_d: 'Medir, ajustar y seguir mejorando — continuamente.',
      port_kicker: 'Portafolio', port_title: 'Nuestros productos corren sobre el mismo flujo.',
      port_lede: 'No solo construimos para clientes — operamos estas plataformas nosotros mismos sobre el mismo flujo automatizado, y te las ofrecemos directamente.',
      port1_t: 'Plataforma de Operaciones IA',
      port2_t: 'Agentes de Voz IA',
      port3_t: 'Torre de Control Logística',
      port4_t: 'Nube Gestionada & Hosting',
      port1: 'Plataforma multi-agente — inteligencia orquestada para operaciones reales.',
      port2: 'Agentes de voz empresariales — IA bilingüe en líneas telefónicas reales, en producción.',
      port3: 'Plataforma de logística y 3PL — torre de control, CRM, comunicaciones y datos maestros.',
      port4: 'La capa de infraestructura y hosting — operada, observada y asegurada.',
      fnd_kicker: 'Quién construye esto', fnd_title: 'Construido por un ingeniero que entrega.',
      fnd_p: 'NovAIFlow es liderada por Luis Monsalve, ingeniero de IA aplicada en Miami. Cada sistema de arriba está diseñado, construido y operado de primera mano — desde las plataformas multi-agente y la voz IA hasta los servidores donde corren. Bilingüe EN/ES, sirviendo a US y LATAM.',
      contact_kicker: 'Iniciar un proyecto', contact_title: 'Pongamos tu negocio en flujo.',
      contact_lede: 'Cuéntanos el proceso que te está costando tiempo. Automatizamos el flujo que lo resuelve — y lo operamos una vez en vivo.',
      footer_tagline: 'Donde la IA, la automatización y tus sistemas fluyen juntos.',
      footer_contact: 'Contacto',
      footer_copy: '© 2026 NovAIFlow. Flujos de negocio de nueva generación, impulsados por IA.',
      theme_to_light: 'Cambiar a tema claro',
      theme_to_dark: 'Cambiar a tema oscuro'
    }
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
  document.querySelectorAll('.card-grid, .node-grid, .industry-grid, .flowline, .stat-band, .case-grid').forEach(function (grid) {
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
