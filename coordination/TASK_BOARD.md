# TASK_BOARD.md

## Rules
- Clawd writes tasks based on evidence from live site + local QA.
- antigravity implements and updates status inline.
- Keep task wording concrete.

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
- Notes: Baseline established, logic and order match live.

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
- Notes: 310 assets successfully downloaded and mapped to correct public paths.


### Task 003 — Rebuild hero to match live composition
- Status: DONE
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
- Notes: Hero composition matches live site with layered garden background and translucent panel.

### Task 004 — Fill missing homepage sections and remove large whitespace gaps
- Status: DONE

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
- Notes: this can be tackled section by section after baseline wiring.

### Task 005 — Homepage round-2 polish and responsive behavior
- Status: DONE

- Goal: improve cards, quote/testimonial areas, profile/team blocks, CTA bands, and footer after content/assets are in place.
- Acceptance:
  - section internals feel closer to live
  - footer and lower-page density are improved
- Files: TBD
- Notes: do not start until Tasks 001-004 are substantially complete.
