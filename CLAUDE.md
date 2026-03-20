# tessavujovic.com — CLAUDE.md

This is the personal portfolio website of **Tessa Vujovic**, Lead Product Designer at KoboToolbox, based in Cape Town and Europe.

---

## Purpose

A portfolio site that:
- Showcases case studies of past and active projects
- Communicates Tessa's design sensibility and personality
- Functions as a professional calling card for work opportunities

---

## Aesthetic Direction

The site should feel like it was designed by a designer — not just built by a developer. Key references and influences:

- **Dieter Rams** — less but better, purposeful restraint, honest materials
- **Mid-century modern** — warmth, craft, considered proportion
- **Mark Rothko** — emotional use of colour and space; negative space as a design element
- **Kelly Wearstler** — boldness, architectural scale, disciplined maximalism
- **Interior/architectural design background** — Tessa trained in interior architecture before transitioning to digital product design; the site should carry that spatial sensibility: proportion, materiality, the way a well-designed room makes you feel
- **Reference sites**: [guglieri.com](https://guglieri.com/about), [billysweeney.com](https://billysweeney.com), [apple.com](https://apple.com), [des.obys.agency](https://des.obys.agency), [lovefrom.com](https://www.lovefrom.com)

### Design principles to uphold
- Typography-led. Type does heavy lifting — layout, hierarchy, personality.
- Generous white space, but not at the expense of joy — the site should not feel like every other minimal designer portfolio.
- **Colour is welcome and encouraged.** Use it with intention — as a Rothko uses a field of colour, not as decoration sprinkled in. Think moments of warmth, surprise, delight.
- Clean lines. No decorative noise.
- Photography is a first-class element, not filler.
- Interactions should feel intentional and refined — not showy.
- References product, graphic, and architectural design sensibility without being self-referential.
- Bold where it counts. The site should have presence — not timid minimalism.
- **When people arrive, it should feel fun and joyful.** This is a distinguishing trait. Protect it.

### Existing design decisions to preserve
- The **italic `<i>` tag treatment** on specific letters (e.g. `Vujov<i>i</i>c`, `des<i>i</i>gner`) is an intentional branding detail — a typographic signature. Maintain and extend this pattern thoughtfully.
- Custom font stack: **Ogg** (display/headings, with Ogg-LightItalic for `<i>` elements), **Helvetica Neue** (body)
- Colour palette foundation: `--colour-light: #fbfcff` / `--colour-dark: #191411` — near-white and near-black, not pure values. Colour additions should feel considered alongside these.

### Interaction & animation
- Hover animations on text are encouraged — explore them. Typographic, playful, surprising without being gimmicky.
- Fade-in on load is already in place — extend this pattern for new sections.
- Dark/light mode toggle is a planned feature. Design both modes with equal care.
- Animation should add joy, not just polish.

---

## Planned Features (in rough priority order)

1. **Dark / light mode toggle** — user-controlled, with a refined transition
2. **Case studies** — project pages or expanded sections showing Tessa's work
3. **About / photo section** — a more personal section with photography, expanding on the bio
4. **Work gallery** — visual overview of projects

---

## Technical Stack

Currently: plain HTML, CSS, vanilla JavaScript. No build tools or framework.

Open to introducing a build tool, static site generator, or lightweight framework **if there's a clear reason** (e.g. case studies would benefit from templating). Don't introduce complexity speculatively — only when it earns its place.

Hosted via GitHub Pages. The `docs/` directory is the web root.

---

## Content

- Bio copy is still evolving — don't treat it as final
- Case studies are to be added over time
- Tone: warm, confident, dry wit — not corporate, not try-hard

---

## Collaboration Style

- **Always propose changes before implementing** — share the plan, get sign-off, then build
- Keep solutions simple and focused. Don't over-engineer.
- Don't add features beyond what's asked or clearly needed
- Prefer editing existing files over creating new ones
- No emojis in code or UI unless explicitly requested
