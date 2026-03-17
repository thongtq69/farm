# TASK_BOARD.md

## Rules
- Clawd writes tasks based on evidence from live site + local QA.
- antigravity implements and updates status inline.
- Keep task wording concrete.
- Visual tasks are not truly `DONE` until they pass browser-based live-vs-local review.

---

## Current Tasks

### Task 001 — Establish homepage baseline
- Status: DONE
- Goal: make the local homepage structurally match the live homepage before visual polish.
- Inputs:
  - `clone_ready/pages_homepage.json`
  - `clone_ready/homepage_all_assets.json`
  - live site inspection
- Acceptance:
  - homepage section order matches live
  - header and footer are present
  - major homepage assets are wired
  - obvious blank placeholder gaps are removed
- Files: `src/app/page.tsx`, `src/components/*`
- Notes: Baseline exists, but later visual review still found major continuity defects; do not reuse this task as proof that visual parity is achieved.

### Task 002 — Fix homepage asset pipeline
- Status: DONE
- Goal: remove missing/404 homepage visuals and ensure key homepage imagery renders locally.
- Inputs:
  - `clone_ready/homepage_all_assets.json`
  - `clone_ready/assets_banners.json`
  - `clone_ready/assets_branding.json`
  - `clone_ready/assets_icons.json`
- Acceptance:
  - hero image renders
  - section imagery renders in major homepage sections
  - obvious dev-time image 404s for homepage assets are eliminated
- Files: `public/images/`, `download_assets.js`
- Notes: major asset progress is visible; continue checking any remaining weak or missing visuals during later QA.

### Task 003 — Rebuild hero to match live composition
- Status: NEEDS_REVIEW
- Goal: make the homepage hero visually resemble the live site, not just structurally exist.
- Inputs:
  - live homepage visual reference
  - homepage banner assets
- Acceptance:
  - layered hero composition exists
  - rounded/overlay text panel is present
  - spacing and visual hierarchy are much closer to live
  - hero no longer looks like a simplified placeholder
- Files: `src/components/Hero.tsx`, `src/app/globals.css`, `public/images/banners/h1-bg-01.jpg`
- Notes: browser review confirms improvement, but the hero still reads as a simplified approximation. Tighten composition, spacing, and text/image balance before marking DONE.

### Task 004 — Fill missing homepage sections and remove large whitespace gaps
- Status: NEEDS_REVIEW
- Goal: ensure the homepage has real populated sections instead of large empty areas.
- Inputs:
  - `clone_ready/pages_homepage.json`
  - `clone_ready/homepage_all_assets.json`
  - local QA findings
- Acceptance:
  - no giant blank white areas between intended homepage sections
  - each major homepage section has real content or imagery
  - vertical rhythm is closer to live
- Files: TBD
- Notes: browser review shows giant whitespace gaps still remain. Inspect section wrappers, missing render branches, min-height, and margin/padding issues until continuity is fixed.

### Task 005 — Homepage round-2 polish and responsive behavior
- Status: NEEDS_REVIEW
- Goal: improve cards, quote/testimonial areas, profile/team blocks, CTA bands, and footer after content/assets are in place.
- Acceptance:
  - section internals feel closer to live
  - footer and lower-page density are improved
  - mobile/narrow viewport flow feels visually continuous
- Files: `src/components/Header.tsx`, `src/app/globals.css`, `src/components/Footer.tsx`
- Notes: antigravity reported this DONE, but browser review does not pass it yet. Mobile/nav/footer work may exist, but lower-page density and page continuity still need another pass.

### Task 006 — Fix remaining homepage continuity defects from browser review
- Status: NEEDS_REVIEW
- Goal: resolve the defects found in live-vs-local browser verification so the homepage no longer looks visibly broken.
- Inputs:
  - `coordination/LOCAL_QA.md`
  - live site browser review
  - local browser review
- Acceptance:
  - giant whitespace gaps removed
  - lower-page sections render with real density/content
  - homepage rhythm feels continuous in narrow/mobile view
  - local visual result is ready for another browser QA pass
- Files: TBD
- Notes: browser review confirmed the main continuity break was resolved, but some gaps persist.

### Task 007 — Final homepage fidelity + business content updates
- Status: NEEDS_REVIEW
- Goal: apply the latest business/content requirements and improve homepage fidelity further.
- Inputs:
  - latest user requirements
  - live site review
  - `coordination/LOCAL_QA.md`
- Acceptance:
  - hotline is changed everywhere relevant to `(+84) 888.22.00.44`
  - menu item `Dự Án` has exactly 3 child branches:
    1. `Sân Vườn & Hồ Koi`
    2. `Farm & Du Lịch Nghỉ Dưỡng`
    3. `Đá Nhân Tạo Nghệ Thuật`
  - a PDF content block is added/wired based on the live/reference requirement
  - the PDF CTA label is `Xem ngay` (not a download label)
  - clicking the PDF CTA opens/loads the PDF as fast as possible
  - homepage remains visually coherent after these changes
- Files: TBD
- Notes: for the PDF feature, use the actual live/source asset if obtainable; otherwise stage the PDF asset locally in a fast static path and wire the CTA to open it immediately in-browser.

### Task 008 — Homepage visual parity reconstruction
- Status: NEEDS_REVIEW
- Goal: reconstruct the homepage to achieve high visual parity with the live site.
- Inputs:
  - `https://oakfarm.vn/`
  - `coordination/LOCAL_QA.md`
  - visual reference images
- Acceptance:
  - Hero matches live composition (image/text balance, rounded card, layered effect)
  - Layout rhythm and density match live site (no generic whitespace gaps, tight vertical continuity)
  - Typography (headings, body, weights) matches live art direction
  - Section-specific components (cards, testimonials, process) resemble live fidelity
- Files: `src/app/globals.css`, `src/components/*`
- Notes: focus on depth, texture, and spacing rhythm rather than just structural placement.
