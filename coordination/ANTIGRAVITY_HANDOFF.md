# ANTIGRAVITY_HANDOFF.md

Purpose: single source of truth for coordination between Clawd (planner / live inspector / QA) and antigravity (coding executor) while cloning `https://oakfarm.vn/` inside `E:\farm\farm`.

---

## Roles

### Clawd
Owns:
- reading `clone_ready/` data
- inspecting the live site (`oakfarm.vn`)
- inspecting the local build via browser relay
- extracting UI structure, visual notes, interaction states, and acceptance criteria
- writing task specs and QA findings into these coordination files

### antigravity
Owns:
- implementing code changes in `src/`, `public/`, config, and related project files
- wiring scraped content/assets into the app
- fixing issues listed by Clawd
- updating status in the task tracker when a task is done / blocked / partially done

---

## Ground Rules

1. Do not rely on vague prompts alone.
2. Treat these coordination files as the operational contract.
3. Prefer concrete acceptance criteria over general phrases like "make it closer".
4. Use `clone_ready/*.json` as the content/asset truth source unless live inspection proves a mismatch.
5. For visual fidelity, prefer live `oakfarm.vn` over assumptions.
6. When unsure, capture evidence first, then implement.

---

## Working Sources

### Live source
- `https://oakfarm.vn/`

### Local project root
- `E:\farm\farm`

### Data source
- `E:\farm\farm\clone_ready`

Priority JSON files:
1. `pages_homepage.json`
2. `homepage_all_assets.json`
3. `assets_banners.json`
4. `assets_branding.json`
5. `assets_icons.json`
6. `pages_services.json`
7. `pages_projects.json`

---

## Coordination Files

- `coordination/ANTIGRAVITY_HANDOFF.md` -> overall rules and workflow
- `coordination/CLONE_PLAN.md` -> page priorities and execution phases
- `coordination/LIVE_CAPTURE_NOTES.md` -> observations from the real website
- `coordination/LOCAL_QA.md` -> live vs local mismatch notes
- `coordination/TASK_BOARD.md` -> actionable tasks with status
- `coordination/SUPPORT_NOTES.md` -> ad-hoc operational notes for non-project blockers/popups/issues encountered during execution

---

## Workflow Loop

1. Clawd inspects live + local
2. Clawd writes/updates:
   - `LIVE_CAPTURE_NOTES.md`
   - `LOCAL_QA.md`
   - `TASK_BOARD.md`
3. antigravity reads `TASK_BOARD.md` and implements tasks in priority order
4. antigravity marks task status updates in `TASK_BOARD.md`
5. Clawd re-checks local and writes the next QA pass

---

## Task Status Convention

Use exactly one of these statuses per task:
- `TODO`
- `IN_PROGRESS`
- `BLOCKED`
- `DONE`
- `NEEDS_REVIEW`

---

## Output Standard for antigravity

For each finished task, antigravity should update the task item with:
- what changed
- files touched
- anything still not matched

Format:
- Status: `DONE`
- Files: `src/...`, `public/...`
- Notes: short factual summary

---

## Initial Objective

Rebuild the Oakfarm website so the local project visually matches the live site as closely as practical, starting with:
1. homepage
2. global header/footer/navigation
3. responsive behavior
4. service/project listing and representative detail pages

---

## Immediate Next Step

Clawd will populate:
- `CLONE_PLAN.md`
- `TASK_BOARD.md`

Then begin live/local QA rounds.
