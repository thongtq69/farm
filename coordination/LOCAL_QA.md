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
- Page: homepage / PDF CTA
- Viewport: local browser verification
- Area: PDF viewer / `Xem ngay`
- Live behavior / appearance: PDF-oriented CTA should open a valid PDF document in-browser.
- Local behavior / appearance: opening `oakfarm-profile.pdf` shows a browser PDF error: the document cannot be loaded.
- Gap: the staged local PDF asset is invalid/corrupted and not a real PDF payload.
- Priority: critical
- Recommendation: replace `public/docs/oakfarm-profile.pdf` with a valid PDF binary file copied/downloaded in binary mode, then re-test the browser viewer.

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

## Visual parity review — why the current local homepage still fails against live
- Page: homepage
- Viewport: live vs local full-page comparison
- Area: overall art direction
- Live behavior / appearance: cohesive premium farm-design landing page with strong brand atmosphere, layered imagery, and intentional section rhythm.
- Local behavior / appearance: assembled functional page with content blocks present but still reading as a generic implementation rather than a close clone.
- Gap: overall visual identity and polish are still substantially behind the live site.
- Priority: critical
- Recommendation: stop treating remaining work as minor polish; rebuild key sections toward visual parity.

- Page: homepage
- Viewport: live vs local full-page comparison
- Area: hero
- Live behavior / appearance: hero has strong layered composition, richer visual balance, more intentional overlay treatment, and premium first-screen impact.
- Local behavior / appearance: hero is improved but still simplified, flatter, and less visually convincing.
- Gap: first impression still fails parity.
- Priority: critical
- Recommendation: rebuild hero composition, tighten spacing, improve image/text balance, and match overlay/card treatment more closely.

- Page: homepage
- Viewport: live vs local full-page comparison
- Area: spacing / vertical rhythm
- Live behavior / appearance: section spacing is deliberate and fluid; the page breathes without feeling empty.
- Local behavior / appearance: spacing is inconsistent and still feels template-like; some areas are too loose while others are compressed.
- Gap: rhythm system is not cloned successfully.
- Priority: critical
- Recommendation: define and apply a tighter spacing system section-by-section.

- Page: homepage
- Viewport: live vs local full-page comparison
- Area: service / farm type cards
- Live behavior / appearance: cards feel branded, image-led, and compositionally tight.
- Local behavior / appearance: cards are serviceable but still generic and less premium.
- Gap: card system lacks live-site character.
- Priority: medium
- Recommendation: refine image ratios, padding, title hierarchy, shadows/borders, and section framing.

- Page: homepage
- Viewport: live vs local full-page comparison
- Area: projects / before-after / testimonial / companion sections
- Live behavior / appearance: these sections act as major visual anchors with confident density and hierarchy.
- Local behavior / appearance: the sections exist, but several still feel thin or mechanically rendered.
- Gap: anchor sections do not yet carry the same visual weight.
- Priority: critical
- Recommendation: increase section density, refine typography, improve internal spacing, and make each anchor section feel intentional rather than merely present.

- Page: homepage
- Viewport: live vs local full-page comparison
- Area: typography hierarchy
- Live behavior / appearance: headings, body text, and supporting copy follow a stronger hierarchy and rhythm.
- Local behavior / appearance: typography works functionally but does not match the strength or cadence of the live site.
- Gap: text system weakens overall fidelity.
- Priority: medium
- Recommendation: tune heading sizes, weights, line-height, paragraph width, and spacing between text elements.

- Page: homepage
- Viewport: live vs local full-page comparison
- Area: footer / lower-page finish
- Live behavior / appearance: lower page closes with a denser, more polished, more integrated finish.
- Local behavior / appearance: lower page is improved, but still lacks some of the integrated premium finish seen on live.
- Gap: final third of page still underperforms visually.
- Priority: medium
- Recommendation: polish footer/contact/lower-page composition after hero and main section rhythm are improved.
