/* NovAIFlow — landing interactions
   Progressive enhancement: the page is fully readable and navigable
   without JS (the mobile menu is a native <details> disclosure).
   Honours prefers-reduced-motion (final states are set in CSS).
   Theme toggle, EN/ES i18n, contact parallax and stat counters. */
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
    "en": {
      "skip": "Skip to content",
      "meta_title": "NovAIFlow — Custom AI engineering and integration",
      "meta_desc": "Custom AI solutions for your business. NovAIFlow brings together AI agents, automation, system integration and software development, from strategy to operation.",
      "nav_services": "Capabilities",
      "nav_sectors": "Sectors",
      "nav_integration": "Integration",
      "nav_cases": "Work",
      "nav_approach": "Approach",
      "nav_start": "Discuss your project",
      "hero_kicker": "AI engineering & integration",
      "hero_title": "AI engineered<br>for your <span class=\"accent\">business.</span>",
      "hero_lede": "We design and integrate AI solutions around your processes, data and goals. From agents and automation to custom software, we take your project from strategy into operation.",
      "hero_cta2": "Explore our capabilities <span aria-hidden=\"true\">→</span>",
      "hero_meta1": "STRATEGY → BUILD → INTEGRATE",
      "hero_meta2": "US · LATAM",
      "map_caption": "From your challenge to production",
      "map_context": "Your business",
      "map_data": "Data",
      "map_systems": "Systems",
      "map_teams": "Teams",
      "map_core": "AI engineering",
      "map_agents": "Agents",
      "map_flows": "Automation",
      "map_software": "Custom software",
      "map_result": "A solution integrated into your business",
      "map_note": "Designed around your business",
      "proof_kicker": "Engineering in practice",
      "proof_title": "Experience building and operating real systems.",
      "stat1": "production systems we operate",
      "stat4": "AI agents in operation",
      "stat6": "production AI connectors",
      "int_kicker": "Built around your business",
      "int_title": "From a business challenge to an integrated solution.",
      "int_lede": "We start with how your company works: its people, processes and existing systems. Then we design the architecture, connect the right tools and build the capabilities your operation needs.",
      "int_b1": "Your processes and goals define the scope.",
      "int_b2": "AI, data and software connected to your existing systems.",
      "int_b3": "One team from design and implementation to ongoing improvement.",
      "int_cta": "Let's explore your challenge",
      "services_kicker": "Our capabilities",
      "services_title": "The expertise your project needs.",
      "services_lede": "We combine AI, integration and custom development around the problem you need to solve. Each project brings together the capabilities that fit your business.",
      "svc1_title": "Process automation",
      "svc1_tag": "Build workflows that move work forward.",
      "svc1_b1": "Automate recurring tasks and approvals",
      "svc1_b2": "Coordinate processes across teams and tools",
      "svc1_b3": "Track exceptions and keep people in control",
      "svc1_d": "→ More time for higher-value work",
      "svc2_title": "System integration",
      "svc2_tag": "Connect the systems your business relies on.",
      "svc2_b1": "Link business applications, APIs and data sources",
      "svc2_b2": "Synchronize information across your operation",
      "svc2_b3": "Bring existing software into new workflows",
      "svc2_d": "→ Connected systems and data",
      "svc3_title": "AI agents & assistants",
      "svc3_tag": "Give AI a useful role in your operation.",
      "svc3_b1": "Assist customers and internal teams",
      "svc3_b2": "Connect agents to business knowledge and tools",
      "svc3_b3": "Define permissions, handoffs and human oversight",
      "svc3_d": "→ AI working within your processes",
      "svc4_title": "Data & intelligence",
      "svc4_tag": "Turn your information into useful insight.",
      "svc4_b1": "Bring operational data into a shared view",
      "svc4_b2": "Automate reports and performance indicators",
      "svc4_b3": "Surface trends and exceptions for your team",
      "svc4_d": "→ Better information for decisions",
      "svc5_title": "Process optimization",
      "svc5_tag": "Understand the process. Improve how it works.",
      "svc5_b1": "Map workflows and identify bottlenecks",
      "svc5_b2": "Redesign handoffs, rules and responsibilities",
      "svc5_b3": "Measure the impact against agreed goals",
      "svc5_d": "→ Improvements you can measure",
      "svc6_title": "AI strategy & advisory",
      "svc6_tag": "Find where AI can create value.",
      "svc6_b1": "Assess opportunities, feasibility and readiness",
      "svc6_b2": "Prioritize use cases around business objectives",
      "svc6_b3": "Define a roadmap, scope and success measures",
      "svc6_d": "→ A clear path to implementation",
      "svc7_title": "Custom software",
      "svc7_tag": "Build the capabilities your business is missing.",
      "svc7_b1": "Develop applications, platforms and internal tools",
      "svc7_b2": "Embed AI into the experience and workflow",
      "svc7_b3": "Design for your industry and operating model",
      "svc7_d": "→ Software shaped around your business",
      "svc_cta_title": "Start with the challenge.",
      "svc_cta_tag": "Tell us what needs to change. We will work with you to define the right combination of capabilities.",
      "svc_cta_link": "Discuss your project <span aria-hidden=\"true\">→</span>",
      "sec_kicker": "Across industries",
      "sec_title": "Different industries. Solutions built in context.",
      "sec_lede": "The process, constraints and people shape each implementation. These are some of the areas where our capabilities can be applied.",
      "sec1_t": "Logistics & air cargo",
      "sec1_p": "Connect booking, warehousing, transport and billing. Bring operational visibility and intelligent coordination into the movement of goods.",
      "sec2_t": "Healthcare & clinics",
      "sec2_p": "Support administrative workflows, patient communication and document handling, with defined access and human review.",
      "sec3_t": "Manufacturing & workshops",
      "sec3_p": "Connect quoting, production planning and shop-floor activity. Give teams clearer priorities and visibility into each job.",
      "sec4_t": "Wholesale & distribution",
      "sec4_p": "Bring together orders, inventory, purchasing and invoicing. Use data to support replenishment and commercial decisions.",
      "sec5_t": "Professional services",
      "sec5_p": "Organize business knowledge, automate document workflows and support research, service delivery and client communication.",
      "sec6_t": "Field service & fleet operations",
      "sec6_p": "Connect service requests, dispatch, field activity and billing. Help office and field teams work from shared information.",
      "case_kicker": "Selected work",
      "case_title": "Engineering applied to real business problems.",
      "case_lede": "Systems we have designed, built and operated across logistics, field service, compliance and reporting.",
      "case1_tag": "FIELD OPERATIONS · AUTOMATION",
      "case1_t": "99.4% of legacy invoices reconciled automatically",
      "case1_p": "A field-service operation with 3,000+ devices: 12+ agents triage tickets, dispatch technicians and communicate with customers through WhatsApp, Telegram, voice and email — 24/7.",
      "case1_m": "<strong>23,000+</strong> invoices · agents working overnight",
      "case2_tag": "CUSTOMER COMMUNICATION · VOICE AI",
      "case2_t": "Bilingual call handling beyond business hours",
      "case2_p": "Voice agents on live business lines for logistics, HVAC and clinics — with English and Spanish support, PBX routing, human handoff and written follow-up.",
      "case2_m": "<strong>4+</strong> live lines · 24/7 · zero reported downtime during carrier migration",
      "case3_tag": "SYSTEM INTEGRATION · AI ASSISTANTS",
      "case3_t": "Business systems connected to Claude and ChatGPT",
      "case3_p": "Production connectors with OAuth let teams query tickets, devices, invoices and customer records through controlled tools — 36 on one platform — from their existing AI assistants.",
      "case3_m": "<strong>3</strong> production connectors · audited",
      "case4_tag": "COMPLIANCE · CUSTOM SOFTWARE",
      "case4_t": "570 carriers managed beyond spreadsheets",
      "case4_p": "A Miami trucking-compliance firm: a multi-tenant system for deadlines, auto-filled DOT/FMCSA forms and 48,000 migrated historical documents.",
      "case4_m": "Live <strong>in under 30 days</strong>",
      "case5_tag": "AIR CARGO · INTEGRATED PLATFORM",
      "case5_t": "An integrated operation, from booking to invoicing",
      "case5_p": "A Miami air-cargo operator: booking, warehousing, delivery and invoicing in one platform, with a live public demo.",
      "case5_m": "<strong>1,800+</strong> automated tests passing in CI",
      "case6_tag": "DOCUMENT INTELLIGENCE · REPORTING",
      "case6_t": "A personalized insight report for every participant",
      "case6_p": "A behavioral-assessment platform on AWS: an orchestrated AI pipeline generates multi-section reports from participant assessments.",
      "case6_m": "<strong>18</strong> orchestrated model calls per report",
      "appr_kicker": "How we work",
      "appr_title": "From strategy to operation.",
      "appr_lede": "We connect business understanding with hands-on engineering. Scope, priorities and success measures are defined around your project.",
      "appr_step1": "01 · STRATEGY",
      "appr_step2": "02 · ENGINEERING",
      "appr_step3": "03 · OPERATION",
      "appr_land_t": "Understand & define",
      "appr_land_d": "We map your processes, systems and objectives. Together, we prioritize the opportunity and define a practical roadmap.",
      "appr_expand_t": "Design & implement",
      "appr_expand_d": "We build and integrate the solution in stages, validate it with your team and prepare it for real operating conditions.",
      "appr_anchor_t": "Operate & improve",
      "appr_anchor_d": "We support adoption, monitor performance and refine the solution as your operation and priorities evolve.",
      "fnd_kicker": "The team behind the work",
      "fnd_title": "Hands-on engineering. Direct accountability.",
      "fnd_p": "NovAIFlow is led by Luis Monsalve, an applied AI engineer in Miami. We design, build and operate the systems we deliver, connecting technical decisions to the needs of the business. We work in English and Spanish across the US and LATAM.",
      "contact_kicker": "Let's talk",
      "contact_title": "What does your business need to solve?",
      "contact_lede": "A process to improve, systems to connect or a new capability to build. Tell us the challenge and we will explore how AI and engineering can help.",
      "footer_tagline": "AI, systems and software built around your business.",
      "footer_contact": "Contact",
      "footer_copy": "© 2026 NovAIFlow. AI engineering and integration.",
      "theme_to_light": "Switch to light theme",
      "theme_to_dark": "Switch to dark theme"
    },
    "es": {
      "skip": "Saltar al contenido",
      "meta_title": "NovAIFlow — Ingeniería e integración de IA a medida",
      "meta_desc": "Soluciones de IA a la medida de tu empresa. NovAIFlow combina agentes de IA, automatización, integración de sistemas y desarrollo de software, de la estrategia a la operación.",
      "nav_services": "Capacidades",
      "nav_sectors": "Sectores",
      "nav_integration": "Integración",
      "nav_cases": "Proyectos",
      "nav_approach": "Método",
      "nav_start": "Hablemos de tu proyecto",
      "hero_kicker": "Ingeniería e integración de IA",
      "hero_title": "IA a la medida<br>de tu <span class=\"accent\">empresa.</span>",
      "hero_lede": "Diseñamos e integramos soluciones de IA alrededor de tus procesos, datos y objetivos. Desde agentes y automatización hasta software a medida, acompañamos tu proyecto de la estrategia a la operación.",
      "hero_cta2": "Explora nuestras capacidades <span aria-hidden=\"true\">→</span>",
      "hero_meta1": "ESTRATEGIA → DESARROLLO → INTEGRACIÓN",
      "hero_meta2": "EE. UU. · LATAM",
      "map_caption": "De tu reto a producción",
      "map_context": "Tu empresa",
      "map_data": "Datos",
      "map_systems": "Sistemas",
      "map_teams": "Equipos",
      "map_core": "Ingeniería de IA",
      "map_agents": "Agentes",
      "map_flows": "Automatización",
      "map_software": "Software a medida",
      "map_result": "Una solución integrada a tu operación",
      "map_note": "Diseñada alrededor de tu negocio",
      "proof_kicker": "Ingeniería en la práctica",
      "proof_title": "Experiencia construyendo y operando sistemas reales.",
      "stat1": "sistemas en producción que operamos",
      "stat4": "agentes de IA en operación",
      "stat6": "conectores de IA en producción",
      "int_kicker": "A la medida de tu empresa",
      "int_title": "De un desafío de negocio a una solución integrada.",
      "int_lede": "Partimos de cómo trabaja tu empresa: las personas, los procesos y los sistemas que ya utiliza. Después diseñamos la arquitectura, conectamos las herramientas y construimos las capacidades que tu operación necesita.",
      "int_b1": "Tus procesos y objetivos definen el alcance.",
      "int_b2": "IA, datos y software conectados a tus sistemas actuales.",
      "int_b3": "Un equipo desde el diseño y la implementación hasta la mejora continua.",
      "int_cta": "Exploremos tu desafío",
      "services_kicker": "Nuestras capacidades",
      "services_title": "La experiencia que tu proyecto necesita.",
      "services_lede": "Combinamos IA, integración y desarrollo a medida alrededor del problema que necesitas resolver. Cada proyecto reúne las capacidades que encajan con tu empresa.",
      "svc1_title": "Automatización de procesos",
      "svc1_tag": "Flujos que hacen avanzar el trabajo.",
      "svc1_b1": "Automatiza tareas recurrentes y aprobaciones",
      "svc1_b2": "Coordina procesos entre equipos y herramientas",
      "svc1_b3": "Gestiona excepciones y conserva el control humano",
      "svc1_d": "→ Más tiempo para tareas de mayor valor",
      "svc2_title": "Integración de sistemas",
      "svc2_tag": "Conecta los sistemas de los que depende tu negocio.",
      "svc2_b1": "Integra aplicaciones, APIs y fuentes de datos",
      "svc2_b2": "Sincroniza información en toda tu operación",
      "svc2_b3": "Incorpora tu software actual a nuevos procesos",
      "svc2_d": "→ Sistemas y datos conectados",
      "svc3_title": "Agentes y asistentes de IA",
      "svc3_tag": "Dale a la IA una función útil en tu operación.",
      "svc3_b1": "Asiste a clientes y equipos internos",
      "svc3_b2": "Conecta agentes al conocimiento y las herramientas del negocio",
      "svc3_b3": "Define permisos, derivaciones y supervisión humana",
      "svc3_d": "→ IA integrada en tus procesos",
      "svc4_title": "Datos e inteligencia",
      "svc4_tag": "Convierte tu información en conocimiento útil.",
      "svc4_b1": "Reúne los datos operativos en una visión compartida",
      "svc4_b2": "Automatiza reportes e indicadores de desempeño",
      "svc4_b3": "Identifica tendencias y excepciones para tu equipo",
      "svc4_d": "→ Mejor información para decidir",
      "svc5_title": "Optimización de procesos",
      "svc5_tag": "Entiende el proceso. Mejora cómo funciona.",
      "svc5_b1": "Mapea los flujos e identifica cuellos de botella",
      "svc5_b2": "Rediseña las transferencias, reglas y responsabilidades",
      "svc5_b3": "Mide el impacto frente a los objetivos acordados",
      "svc5_d": "→ Mejoras que puedes medir",
      "svc6_title": "Estrategia y consultoría de IA",
      "svc6_tag": "Encuentra dónde la IA puede aportar valor.",
      "svc6_b1": "Evalúa oportunidades, viabilidad y preparación",
      "svc6_b2": "Prioriza casos de uso según tus objetivos de negocio",
      "svc6_b3": "Define la hoja de ruta, el alcance y las métricas de éxito",
      "svc6_d": "→ Un camino claro hacia la implementación",
      "svc7_title": "Software a medida",
      "svc7_tag": "Construye las capacidades que le faltan a tu empresa.",
      "svc7_b1": "Desarrolla aplicaciones, plataformas y herramientas internas",
      "svc7_b2": "Integra IA en la experiencia y los procesos",
      "svc7_b3": "Diseña para tu industria y modelo operativo",
      "svc7_d": "→ Software diseñado para tu negocio",
      "svc_cta_title": "Empecemos por el desafío.",
      "svc_cta_tag": "Cuéntanos qué necesita cambiar. Definiremos contigo la combinación de capacidades adecuada.",
      "svc_cta_link": "Hablemos de tu proyecto <span aria-hidden=\"true\">→</span>",
      "sec_kicker": "En distintas industrias",
      "sec_title": "Cada industria tiene su contexto. Cada solución también.",
      "sec_lede": "Los procesos, las condiciones y las personas dan forma a cada implementación. Estas son algunas áreas donde podemos aplicar nuestras capacidades.",
      "sec1_t": "Logística y carga aérea",
      "sec1_p": "Conecta reservas, almacén, transporte y facturación. Incorpora visibilidad operativa y coordinación inteligente al movimiento de mercancías.",
      "sec2_t": "Salud y clínicas",
      "sec2_p": "Apoya los procesos administrativos, la comunicación con pacientes y la gestión documental, con acceso definido y revisión humana.",
      "sec3_t": "Manufactura y talleres",
      "sec3_p": "Conecta cotización, planificación de producción y actividad del taller. Da a los equipos prioridades claras y visibilidad sobre cada trabajo.",
      "sec4_t": "Mayoristas y distribución",
      "sec4_p": "Integra pedidos, inventario, compras y facturación. Utiliza los datos para apoyar el abastecimiento y las decisiones comerciales.",
      "sec5_t": "Servicios profesionales",
      "sec5_p": "Organiza el conocimiento del negocio, automatiza procesos documentales y apoya la investigación, la prestación de servicios y la comunicación con clientes.",
      "sec6_t": "Servicio de campo y flotas",
      "sec6_p": "Conecta solicitudes, despacho, trabajo de campo y facturación. Ayuda a que oficina y técnicos trabajen con información compartida.",
      "case_kicker": "Proyectos seleccionados",
      "case_title": "Ingeniería aplicada a problemas reales de negocio.",
      "case_lede": "Sistemas que hemos diseñado, construido y operado en logística, servicio de campo, cumplimiento normativo y generación de reportes.",
      "case1_tag": "OPERACIONES DE CAMPO · AUTOMATIZACIÓN",
      "case1_t": "99,4 % de las facturas históricas conciliadas automáticamente",
      "case1_p": "Una operación de servicio de campo con más de 3.000 equipos: más de 12 agentes clasifican solicitudes, asignan técnicos y se comunican con clientes por WhatsApp, Telegram, voz y correo — 24/7.",
      "case1_m": "<strong>23.000+</strong> facturas · agentes trabajando de noche",
      "case2_tag": "COMUNICACIÓN CON CLIENTES · IA DE VOZ",
      "case2_t": "Atención telefónica bilingüe fuera del horario comercial",
      "case2_p": "Agentes de voz en líneas reales de logística, climatización y clínicas, con atención en inglés y español, enrutamiento a la central telefónica, derivación a personas y seguimiento escrito.",
      "case2_m": "<strong>4+</strong> líneas activas · 24/7 · sin interrupciones reportadas durante la migración de operador",
      "case3_tag": "INTEGRACIÓN DE SISTEMAS · ASISTENTES DE IA",
      "case3_t": "Sistemas de negocio conectados a Claude y ChatGPT",
      "case3_p": "Conectores en producción con OAuth permiten consultar solicitudes, equipos, facturas y registros de clientes mediante herramientas con acceso controlado — 36 en una plataforma — desde los asistentes de IA que el equipo ya utiliza.",
      "case3_m": "<strong>3</strong> conectores en producción · auditados",
      "case4_tag": "CUMPLIMIENTO NORMATIVO · SOFTWARE A MEDIDA",
      "case4_t": "Gestión de 570 transportistas más allá de las hojas de cálculo",
      "case4_p": "Una firma de cumplimiento normativo de transporte en Miami: sistema para múltiples empresas con gestión de vencimientos, formularios DOT/FMCSA autocompletados y 48.000 documentos históricos migrados.",
      "case4_m": "En producción <strong>en menos de 30 días</strong>",
      "case5_tag": "CARGA AÉREA · PLATAFORMA INTEGRADA",
      "case5_t": "Una operación integrada, de la reserva a la factura",
      "case5_p": "Un operador de carga aérea en Miami: reservas, almacén, entrega y facturación en una plataforma, con una demostración pública disponible.",
      "case5_m": "<strong>1.800+</strong> pruebas automatizadas aprobadas en integración continua",
      "case6_tag": "INTELIGENCIA DOCUMENTAL · REPORTES",
      "case6_t": "Un reporte personalizado para cada participante",
      "case6_p": "Una plataforma de evaluación conductual en AWS: un flujo de IA orquestado genera reportes con múltiples secciones a partir de las evaluaciones de los participantes.",
      "case6_m": "<strong>18</strong> llamadas al modelo orquestadas por reporte",
      "appr_kicker": "Cómo trabajamos",
      "appr_title": "De la estrategia a la operación.",
      "appr_lede": "Conectamos el conocimiento del negocio con la ejecución técnica. El alcance, las prioridades y las métricas de éxito se definen alrededor de tu proyecto.",
      "appr_step1": "01 · ESTRATEGIA",
      "appr_step2": "02 · INGENIERÍA",
      "appr_step3": "03 · OPERACIÓN",
      "appr_land_t": "Entender y definir",
      "appr_land_d": "Mapeamos tus procesos, sistemas y objetivos. Priorizamos contigo la oportunidad y definimos una hoja de ruta práctica.",
      "appr_expand_t": "Diseñar e implementar",
      "appr_expand_d": "Construimos e integramos la solución por etapas, la validamos con tu equipo y la preparamos para las condiciones reales de operación.",
      "appr_anchor_t": "Operar y mejorar",
      "appr_anchor_d": "Acompañamos la adopción, supervisamos el desempeño y ajustamos la solución a medida que evolucionan tu operación y tus prioridades.",
      "fnd_kicker": "El equipo detrás del trabajo",
      "fnd_title": "Ingeniería de principio a fin. Responsabilidad directa.",
      "fnd_p": "NovAIFlow está liderada por Luis Monsalve, ingeniero de IA aplicada en Miami. Diseñamos, construimos y operamos los sistemas que entregamos, conectando las decisiones técnicas con las necesidades del negocio. Trabajamos en inglés y español en Estados Unidos y LATAM.",
      "contact_kicker": "Conversemos",
      "contact_title": "¿Qué necesita resolver tu empresa?",
      "contact_lede": "Un proceso que mejorar, sistemas que conectar o una nueva capacidad que construir. Cuéntanos el desafío y exploremos cómo la IA y la ingeniería pueden ayudar.",
      "footer_tagline": "IA, sistemas y software al servicio de tu empresa.",
      "footer_contact": "Contacto",
      "footer_copy": "© 2026 NovAIFlow. Ingeniería e integración de IA.",
      "theme_to_light": "Cambiar a tema claro",
      "theme_to_dark": "Cambiar a tema oscuro"
    }
  };

  var THEME_COLORS = { dark: '#0A1020', light: '#F7F9FC' };

  /* Keeps browser chrome colour and theme-toggle aria-label in sync. */
  function applyThemeUI() {
    var theme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    var meta = document.getElementById('meta-theme');
    if (meta) meta.setAttribute('content', THEME_COLORS[theme]);
    var dict = I18N[currentLang] || I18N.en;
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? dict.theme_to_light : dict.theme_to_dark);
    });
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
    document.title = dict.meta_title;
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', dict.meta_title);
    if (ogDescription) ogDescription.setAttribute('content', dict.meta_desc);
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
  applyLang(currentLang);
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
      if (window.innerWidth > 1080) close();
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
