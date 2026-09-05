# NovAIFlow — AI integration and engineering

The public landing page for **novaiflow.com**, presenting NovAIFlow as a partner
that designs, integrates, and operates AI systems around each company's needs.
The message leads with the business challenge and custom engineering. Individual
channels and business tools appear as implementation examples, without defining
the company as a single SaaS product or a fixed-price receptionist service.

## Implementation

A static site built with HTML, CSS, and vanilla JavaScript, with no build step or
framework dependency. `index.html` contains the complete English page; `main.js`
provides Spanish translations and language/theme preferences in `localStorage`.
The page remains readable and navigable without JavaScript, and its motion
respects `prefers-reduced-motion`.

```text
src/
├── index.html       Main landing page and integration diagram
├── styles.css       Brand tokens, responsive layout, light/dark themes
├── main.js          EN/ES translations and progressive enhancements
├── hero-flow.css/js Native SVG data-flow animation and playback control
├── flow-media.css/js Lazy-loaded convergence film and static fallback
├── robots.txt
├── sitemap.xml
├── assets/          Brand images and supporting photography
└── v1/              Historical landing-page snapshot
```

The main page includes the hero, production experience, seven engineering
capabilities, custom integration, sector examples, case studies, delivery
approach, founder, and contact. Capability titles and content are translated in
both languages. The hero uses a diagram to show how company systems, AI, and
business processes connect. The historical `v1/` snapshot remains available
without being promoted through the main page's navigation.

The hero animates packets along its SVG connections. The integration section
uses a Higgsfield-enhanced 4K still with responsive WebP variants and a muted
1080p ambient film. Both animations have pause controls and stop outside the
viewport or when the tab is hidden. Reduced-motion visits keep a static view;
data-saver visits also avoid downloading the film. The video starts loading
only when its section enters the viewport and falls back to the image if
playback fails. Sectors and case studies use responsive WebP photography.

## Run and verify locally

```bash
python -m http.server 8080 --directory src
python -m unittest discover -s tests -p "test_landing_v2.py" -v
node --check src/main.js
```

Open `http://localhost:8080` and review desktop and mobile layouts in English and
Spanish, light and dark themes, and reduced-motion mode. Check the language and
theme toggles, mobile menu, section links, and contact link.

The Python checks cover public asset integrity, anchor targets, required
sections, complete translation bindings and EN/ES key parity, the seven
capabilities, and regressions to the previous FrontDesk/fixed-price positioning.
They do not enforce a particular card layout or exact marketing wording.

## Publishing

The source of truth is this private repository. Only `src/` is copied to the
public [`luissalve/novaiflow-web`](https://github.com/luissalve/novaiflow-web)
repository and served through GitHub Pages. Business, financial, and legal
documents outside `src/` must stay private.

After reviewing and approving the site for publication:

```bash
bash scripts/deploy-web.sh "feat: reposition NovAIFlow as an AI integration partner"
```

The deployment command commits and pushes the public website. Local edits and
validation alone do not publish changes.
