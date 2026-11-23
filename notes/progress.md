# Progress log

## Now
<!-- The next chat starts here. Keep this section short and always up to date. -->
- **Current lesson:** Quiz A (not started)
- **Where we stopped:** A3 done. Capstone: `Card` with `title`, `actions?`, `children`, optional `className`; `WindCard`
  uses it; `App` owns the spacing. Playground: prop drilling refactor and the `children` re-render experiment. Milan
  predicted all three re-render cases correctly but didn't report the console output.
- **Next action:** run Quiz A (8–10 questions), then review the Module A capstone code. Re-rate English after the quiz.
- **Quiz A must include (no hints):** A2-4 ❌ (`key={Math.random()}` → remount), A2-6 ❌ (`&&` and `0`), A1-1 🔁 ("React
  element"), A1-3 🔁 (parent ran again → new elements), A3-4 🔁 (what, why, how), A2-7 🔁 (event delegation + root
  container), A1-6 🔁 (mutate vs reassign).
- **Later (Module D):** move the `WindSpot` data type out of the component file (e.g. `src/types.ts`).
- **Tutor note:** before each new exercise, show the syntax with a small example (Milan doesn't know modern React syntax yet).

## Log
Newest first.

| Date | Lesson | Done | Weak spots to revisit |
| --- | --- | --- | --- |
| 2026-11-23 | A3 | `children`, slot props, prop drilling, lifting content up; `children` re-render experiment; capstone: reusable `Card`, `WindCard` uses its slots, spacing moved to `App` | "React element"; `Math.random()` key at runtime; why a child re-renders; full prop drilling answer (what, why, how) |
| 2026-11-19 | A2 | `map` + keys (index/random/data keys, remount), playground index-key experiment; conditions + `0` trap; events, callback props, event delegation, SyntheticEvent; capstone: state, Remove button, `WindSpot` / `WindCardProps` split | `Math.random()` key = remount; "event delegation" name; key = identifier, not index; "React element" still missing |
| 2026-11-18 | A1 | Vite + Tailwind setup; JSX → elements, render vs commit, StrictMode, purity, read-only props; first `WindCard` | JSX answer names; render ×2 / commit ×1; mutate vs reassign |
| 2026-11-18 | Setup | Project, curriculum, rules, git + GitHub | — |

## Quiz scores

| Quiz | Date | Score | Weak spots |
| --- | --- | --- | --- |
