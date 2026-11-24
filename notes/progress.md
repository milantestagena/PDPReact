# Progress log

## Now
<!-- The next chat starts here. Keep this section short and always up to date. -->
- **Current lesson:** B1 (not started). Quiz A done: **6.5 / 10**.
- **Where we stopped:** Quiz A finished and the Module A capstone review was given (no bugs; tsc + eslint clean).
  **Not fixed yet (open):** stable `id` instead of `location` as key, `spot={spot}` instead of `{...data}`,
  initial data in a `const INITIAL_SPOTS` outside the component, `aria-label` on Remove + 🚀, `STRONG_WIND_KNOTS` constant.
  Milan writes these himself; the tutor reviews. Good moment: the start of B1 (the `useState` initial value fits B1).
- **Next action:** start B1. **First, a 10-minute playground experiment for A2-4** (3rd ❌): a list with an `<input>` per
  item + a ticking clock in the parent; try `key={index}`, `key={spot.id}`, `key={Math.random()}`, type in an input, watch
  what survives. Goal: say "re-render ≠ remount; random key → unmount + mount every render" himself.
- **Repeat in Quiz B / warm-ups:** A2-4 ❌, A1-3 🔁 (state in a sibling → the other sibling doesn't re-render),
  A1-7 / A1-4 🔁 (purity: mutating outside vs reading), A2-7 🔁 (root container + SyntheticEvent), A1-6 🔁 (freeze),
  A2-3 🔁 (when index is OK).
- **Tutor note:** Milan answers in short fragments. Ask for full sentences; in interviews, say the "why" unprompted.
- **Later (Module D):** move the `WindSpot` data type out of the component file (e.g. `src/types.ts`).
- **Tutor note:** before each new exercise, show the syntax with a small example (Milan doesn't know modern React syntax yet).

## Log
Newest first.

| Date | Lesson | Done | Weak spots to revisit |
| --- | --- | --- | --- |
| 2026-11-24 | Quiz A | 10 questions, 6.5 / 10; capstone review (no bugs) | `Math.random()` key = remount (3rd ❌); re-render goes down from the state owner, not "same level"; purity = no mutation during render; root container + SyntheticEvent; answers too short, "why" missing |
| 2026-11-23 | A3 | `children`, slot props, prop drilling, lifting content up; `children` re-render experiment; capstone: reusable `Card`, `WindCard` uses its slots, spacing moved to `App` | "React element"; `Math.random()` key at runtime; why a child re-renders; full prop drilling answer (what, why, how) |
| 2026-11-19 | A2 | `map` + keys (index/random/data keys, remount), playground index-key experiment; conditions + `0` trap; events, callback props, event delegation, SyntheticEvent; capstone: state, Remove button, `WindSpot` / `WindCardProps` split | `Math.random()` key = remount; "event delegation" name; key = identifier, not index; "React element" still missing |
| 2026-11-18 | A1 | Vite + Tailwind setup; JSX → elements, render vs commit, StrictMode, purity, read-only props; first `WindCard` | JSX answer names; render ×2 / commit ×1; mutate vs reassign |
| 2026-11-18 | Setup | Project, curriculum, rules, git + GitHub | — |

## Quiz scores

| Quiz | Date | Score | Weak spots |
| --- | --- | --- | --- |
| Quiz A | 2026-11-24 | **6.5 / 10** | A2-4 ❌ (random key → remount; confused with index key); A1-3 ½ ("same level" model); A1-6 ½ (freeze); A2-7 ½ (root container, SyntheticEvent); A1-7 ½ (purity bug); A2-3 ½ (when index is OK). ✅ A1-1, A2-6, A3-4, A1-5 — all were 🔁/❌ before. |
