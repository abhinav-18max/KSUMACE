# KSU MACE
Malayalam-first static website with English navigation. Serve `dist/`; no build or dependencies required.

- `dist/index.html`: homepage
- `dist/style.css`: responsive design and self-hosted typography
- `dist/app.js`: mobile menu, active navigation and the loading screen timing
- `dist/assets/loader-ink-lines.webp`, `loader-ink-hatch.webp`: pen-drawing layers generated from `references/campus-hero-v2.png`; the loader reveals them, then the hero painting, and inks the KSU torch beside the title
- Sections: hero, events, coordinators, initiatives and social media. Coordinator and initiative cards are placeholders (dashed outlines) until real details are supplied.
- `dist/sources.html`: artwork downloads and source attribution
- `references/homepage-concept.png`: initial design concept, before the subsequent hero-text and animation refinements
- `references/`: source photos and original generated assets (kept locally, not published)

The illustration is not an accurate map. The loading screen (about 9 s) shows the finished painting at once under reduced-motion settings and can be skipped with a click or Escape. Instagram handle was supplied by the requester; no feed, officers or activities are fabricated. The 2026 induction story is identified as college news. Image dates and sources are documented on the source page.

Preview: `python3 -m http.server 4173 --directory dist`

