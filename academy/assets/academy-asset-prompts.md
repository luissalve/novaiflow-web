# NovAIFlow Academy — Hoja de Prompts (Higgsfield WEB · Unlimited gratis)

> **Genera GRATIS en higgsfield.ai con el toggle "Unlimited" ON** (cola Relax = $0). El CLI cobra créditos; la web con Unlimited no.
> Cuando termines, **descarga con el nombre exacto indicado** a una carpeta y **pásame la ruta** → yo integro al `/academy` + redeploy.

## Reglas de oro (aprendidas)
1. **NUNCA pongas códigos hex** (`#0A1020`, `#18C8E6`) en el prompt — el modelo los imprime como texto garabateado. **Colores por NOMBRE** (abajo).
2. **Fija el aspect ratio correcto** por asset (casi todos 16:9).
3. Si un prompt es rechazado por moderación → usa **img2img** partiendo de un asset base (o reformula suavemente).

## Paleta (por nombre)
- **Fondo:** azul casi-negro muy oscuro (deep near-black navy / ink)
- **Acento frío 1:** cyan brillante · **Acento frío 2:** violeta eléctrico
- **Acento cálido (el nodo, racionado):** ámbar-dorado cálido
- Vibe: infraestructura premium que brilla en silencio. Sin sparkle de 4 puntas, sin neón cyberpunk, sin nebulosa cósmica, sin 3D plástico, sin texto con gradiente.

## Modelo por asset
- **Fondos sin texto** (hero, covers, dividers): **FLUX.2 Pro** (1ª) · Nano Banana 2 (2ª)
- **OG con texto:** **GPT Image** (mejor texto legible)

---

# 1 · HERO DEL HUB → `academy-hero.png`
**Modelo:** FLUX.2 Pro · **Aspect ratio: 16:9**

```PROMPT
A striking dark-tech hero background, wide cinematic 16:9, for a premium AI learning academy. Deep near-black navy background with a subtle darker gradient. A bold convergence: many luminous streams of light, bright cyan flowing into electric violet, sweep in from the left and converge into ONE radiant warm amber-gold node — a glowing sphere with a crisp luminous halo, the clear focal point; from it a single bright beam flows out to the right toward a sharp arrowhead. Layered depth, elegant light-trail motion, a faint constellation of dim nodes behind. Cinematic, high-impact yet refined, calm generous negative space on the left third for a headline. No four-pointed sparkle star, no neon cyberpunk, no cosmic nebula, no rainbow, no text, no letters, no numbers, no watermark, no 3D plastic.
```
> Se usa en: fondo del hero del hub + back-cover del hub + portada de cierre de los decks.

---

# 2 · COVER NIVEL 1 (Fundamentos) → `cover-l1.png`
**Modelo:** FLUX.2 Pro (o Nano Banana 2) · **Aspect ratio: 16:9**

```PROMPT
A calm dark-tech cover background, wide 16:9, deep near-black navy. A single bright-cyan luminous line begins as one clean stroke and gently branches into a few soft light-paths — the FIRST step of a learning journey, foundational and clear. One small warm amber node glows where the first path begins. Minimal, lots of dark negative space, premium, quiet. No text, no numbers, no sparkle, no neon, no 3D.
```

---

# 3 · COVER NIVEL 2 (Aplicado) → `cover-l2.png`
**Modelo:** FLUX.2 Pro (o Nano Banana 2) · **Aspect ratio: 16:9**

```PROMPT
A dark-tech cover background, wide 16:9, deep near-black navy. Several bright-cyan to electric-violet light-paths weave into a small tidy lattice of connected nodes — templates and reusable structure coming together. One warm amber node anchors the lattice. Slightly more built-up than a first-step image, still minimal and premium, ample dark negative space. No text, no numbers, no sparkle, no neon, no 3D.
```

---

# 4 · DIVIDER DEMO → `divider-demo.png`
**Modelo:** Nano Banana 2 (o FLUX.2 Pro) · **Aspect ratio: 16:9**

```PROMPT
An ultra-wide minimal band on a deep near-black navy background. A single bright-cyan light-stream flows left to right with a subtle live pulse, suggesting a live demonstration in motion. One faint warm amber node midway. Vast dark negative space, Swiss, premium, one small warm accent only. No text, no numbers, no sparkle, no neon, no 3D.
```

---

# 5 · DIVIDER WORKSHOP → `divider-workshop.png`
**Modelo:** Nano Banana 2 (o FLUX.2 Pro) · **Aspect ratio: 16:9**

```PROMPT
An ultra-wide minimal band on a deep near-black navy background. Several bright-cyan to violet light-strands run in parallel like hands-on work happening side by side, converging slightly toward the right. One faint warm amber node where they begin to meet. Vast dark negative space, Swiss, premium. No text, no numbers, no sparkle, no neon, no 3D.
```

---

# 6 · OG / SHARE CARD (con texto) → `og-academy.png`
**Modelo:** GPT Image · **Aspect ratio: 16:9**

```PROMPT
A clean social share card on a deep near-black navy background. Upper-left: a faint converging node-graph, thin bright-cyan to violet strokes flowing into one warm amber node, one stroke toward the headline. Swiss layout, generous margins. A small uppercase monospace kicker in muted grey reads "NOVAIFLOW ACADEMY". Below, a large two-line headline in a modern geometric sans-serif, white, with EXACTLY ONE word in cyan: "Put AI to work. From zero to agent." Premium, high-contrast, crisp legible correct text, no clutter, no sparkle star, no gradient on text, no misspelling, no watermark, no stray numbers.
```

---

## 📥 Nombres de descarga (EXACTOS — el HTML ya los espera)
```
novaiflow-academy-assets/
├── academy-hero.png        (16:9)  ← hero del hub + back-cover + cierre de decks
├── cover-l1.png            (16:9)  ← portada deck Nivel 1
├── cover-l2.png            (16:9)  ← portada deck Nivel 2
├── divider-demo.png        (16:9)  ← divisor "demo" en decks
├── divider-workshop.png    (16:9)  ← divisor "workshop" en decks
└── og-academy.png          (16:9)  ← tarjeta social (con texto)
```
**Prioridad:** 1) `academy-hero.png`  2) `cover-l1.png` + `cover-l2.png`  3) dividers  4) `og-academy.png`.

Cuando termines: **dime la carpeta** → copio los `.png` a `src/academy/assets/img/`, quito los `onerror` de respaldo donde aplique, y hago **redeploy** a novaiflow.com/academy.
