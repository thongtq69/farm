# LOCAL_QA.md

Use this file to compare local build vs live site.

## QA item format
- Page:
- Viewport:
- Area:
- Live behavior / appearance:
- Local behavior / appearance:
- Gap:
- Priority: critical / medium / polish
- Recommendation:

## Current status
- Round 1 live-vs-local homepage comparison completed.
- Follow-up browser verification completed after antigravity claimed Tasks 001-005 done.

## Round 1 QA
- Page: homepage
- Viewport: narrow/mobile-style comparison
- Area: hero
- Live behavior / appearance: full photographic hero with layered composition and rounded text card.
- Local behavior / appearance: simplified hero with text and much less visual richness; current presentation does not yet match the original composition.
- Gap: hero layout and art direction are significantly underbuilt.
- Priority: critical
- Recommendation: reproduce the hero as a layered component using the correct banner asset, rounded overlay card/block, matching spacing, and stronger visual hierarchy.

- Page: homepage
- Viewport: narrow/mobile-style comparison
- Area: section continuity
- Live behavior / appearance: sections are dense and visually continuous with images, shapes, and content.
- Local behavior / appearance: very large blank white gaps appear between major sections.
- Gap: local vertical rhythm is badly off; content blocks are either missing or not populated.
- Priority: critical
- Recommendation: wire all homepage sections from `clone_ready/pages_homepage.json` and related homepage assets so the page no longer has empty placeholder space.

- Page: homepage
- Viewport: narrow/mobile-style comparison
- Area: assets/images
- Live behavior / appearance: many sections render with photos, decorative imagery, logos/icons, and visual backgrounds.
- Local behavior / appearance: several sections appear visually empty or asset-light; dev logs also show image 404s.
- Gap: asset pipeline is incomplete and actively hurting fidelity.
- Priority: critical
- Recommendation: fix missing image paths and map homepage assets from `homepage_all_assets.json`, `assets_banners.json`, `assets_branding.json`, and `assets_icons.json`.

- Page: homepage
- Viewport: narrow/mobile-style comparison
- Area: component richness
- Live behavior / appearance: before/after, quote/testimonial, profile/team, and CTA sections have stronger composition and denser internal content.
- Local behavior / appearance: structural placeholders exist for some sections, but they are visually much thinner and less detailed.
- Gap: content density and styling are still far from live.
- Priority: medium
- Recommendation: after asset wiring, tune section internals (cards, quote blocks, profile blocks, chips/buttons, decorative elements).

- Page: homepage
- Viewport: narrow/mobile-style comparison
- Area: footer
- Live behavior / appearance: footer is integrated with stronger content grouping and branding.
- Local behavior / appearance: footer exists but is still simplified.
- Gap: footer content and visual polish still need a second pass.
- Priority: medium
- Recommendation: keep footer for later pass after hero + missing sections/assets are fixed.

## Browser verification after claimed completion
- Page: homepage
- Viewport: openclaw browser verification after Task 005 claimed DONE
- Area: whole page continuity
- Live behavior / appearance: dense continuous homepage with coherent rhythm and populated sections.
- Local behavior / appearance: major sections exist, but multiple giant whitespace gaps still remain and page flow is visibly broken.
- Gap: Task 004 acceptance is not actually satisfied.
- Priority: critical
- Recommendation: treat whitespace-gap removal as unfinished; inspect each section wrapper/min-height/margin/padding and any missing data-driven render branches.

- Page: homepage
- Viewport: openclaw browser verification after Task 005 claimed DONE
- Area: hero fidelity
- Live behavior / appearance: stronger composition, tighter art direction, better visual balance between imagery and text.
- Local behavior / appearance: improved from the first pass, but still reads as a simplified approximation rather than a close clone.
- Gap: Task 003 is only partially satisfied.
- Priority: medium
- Recommendation: tighten hero spacing, composition, image/text balance, and overlay treatment.

- Page: homepage
- Viewport: openclaw browser verification after Task 005 claimed DONE
- Area: responsive / polish result
- Live behavior / appearance: lower sections remain dense and visually informative in narrow/mobile presentation.
- Local behavior / appearance: mobile/navigation/footer work may have been added, but lower-page density and section internals still feel thin.
- Gap: Task 005 is not ready to be considered DONE.
- Priority: critical
- Recommendation: set Task 005 to `NEEDS_REVIEW` and continue with a focused polish pass after continuity/layout defects are fixed.
