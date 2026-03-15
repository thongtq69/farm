# CLONE_PLAN.md

## Goal
Clone the UI/UX of `https://oakfarm.vn/` in the local project under `E:\farm\farm` with high visual fidelity.

## Execution Order

### Phase 1 — Foundation
- Reconstruct homepage structure from live site + `clone_ready/pages_homepage.json`
- Match global header
- Match global footer
- Confirm homepage assets are wired from `homepage_all_assets.json`

### Phase 2 — Visual Fidelity
- Fix spacing, typography, container widths, image ratios, buttons, cards
- Reproduce sticky header / key visible interactions
- Verify desktop + mobile homepage parity

### Phase 3 — Secondary Pages
- Services pages
- Projects listing/detail patterns
- Team / content pages if needed

### Phase 4 — Polish
- Interaction states
- mobile navigation details
- section-level visual cleanup
- final responsive QA

## Priority Pages
1. Homepage
2. Header / footer / nav shell
3. One representative service page
4. One representative project page
5. Remaining secondary pages

## Evidence Sources
- Live browser inspection
- local browser inspection
- `clone_ready/*.json`
- screenshots / DOM / visual notes

## Success Criteria
- Section order matches live
- Major assets and branding match live
- Typography and spacing feel close in desktop and mobile
- Header/footer/navigation are structurally and visually aligned
- Local no longer shows obvious visual mismatches against live in primary pages
