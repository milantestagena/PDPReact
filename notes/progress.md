# Progress log

## Now
<!-- The next chat starts here. Keep this section short and always up to date. -->
- **Current lesson:** A3 — Composition (not started)
- **Where we stopped:** A2 done. Capstone: `windData` in `useState<WindSpot[]>`, `map` + `key={location}`, gusts /
  strong-wind conditions, Remove button via `onRemove` callback prop, types split `WindSpot` (data) + `WindCardProps`.
- **Next action:** start A3. A natural opening: a reusable `Card` shell (border, padding, header) that `WindCard` uses
  via `children` — "how do you pass JSX *into* a component?"
- **Warm-up for next time:** A2-4 ❌ (`key={Math.random()}` → remount every render), A1-1 🔁 ("React element"),
  A2-7 🔁 (say "event delegation" + root container), A1-6 🔁 (mutate vs reassign — not re-asked since A1).
- **Later (Module D):** move the `WindSpot` data type out of the component file (e.g. `src/types.ts`).
- **Tutor note:** before each new exercise, show the syntax with a small example (Milan doesn't know modern React syntax yet).

## Log
Newest first.

| Date | Lesson | Done | Weak spots to revisit |
| --- | --- | --- | --- |
| 2026-11-19 | A2 | `map` + keys (index/random/data keys, remount), playground index-key experiment; conditions + `0` trap; events, callback props, event delegation, SyntheticEvent; capstone: state, Remove button, `WindSpot` / `WindCardProps` split | `Math.random()` key = remount; "event delegation" name; key = identifier, not index; "React element" still missing |
| 2026-11-18 | A1 | Vite + Tailwind setup; JSX → elements, render vs commit, StrictMode, purity, read-only props; first `WindCard` | JSX answer names; render ×2 / commit ×1; mutate vs reassign |
| 2026-11-18 | Setup | Project, curriculum, rules, git + GitHub | — |

## Quiz scores

| Quiz | Date | Score | Weak spots |
| --- | --- | --- | --- |
