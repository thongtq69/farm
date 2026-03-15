# BOOTSTRAP_PROMPT_FOR_ANTIGRAVITY.md

Paste the message below into antigravity chat:

---

You are working inside `E:\\farm\\farm`.

From now on, use the coordination files in `E:\\farm\\farm\\coordination\\` as the main operational contract.

Read these files first:
1. `coordination/ANTIGRAVITY_HANDOFF.md`
2. `coordination/CLONE_PLAN.md`
3. `coordination/TASK_BOARD.md`
4. `coordination/ANTIGRAVITY_STATUS.md`

Rules:
- Before starting any task, update `coordination/ANTIGRAVITY_STATUS.md`:
  - `State: IN_PROGRESS`
  - `Current Task: <task id>`
  - `Started At:`
  - `Updated At:`
  - `Files Touched:`
- When blocked, update `coordination/ANTIGRAVITY_STATUS.md` to `BLOCKED` and explain why.
- When a task is finished, update:
  - `coordination/TASK_BOARD.md`
  - `coordination/ANTIGRAVITY_STATUS.md`
- Use `clone_ready/*.json` as the primary content and asset data source unless the live site proves otherwise.
- Follow task acceptance criteria literally.
- Do not rely only on vague prompt interpretation; use the coordination files as source of truth.

Current objective:
- Clone the UI/UX of `https://oakfarm.vn/` as closely as practical.
- Start with homepage, header, footer, and responsive behavior.
- Wait for task updates in `coordination/TASK_BOARD.md` and implement in priority order.

When you have read the files, immediately update `coordination/ANTIGRAVITY_STATUS.md` to show that you are ready.

---
