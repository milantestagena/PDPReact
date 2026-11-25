# Progress log

## Now
<!-- The next chat starts here. Keep this section short and always up to date. -->
- **Current lesson:** B2 (not started). B1 done 2026-11-25.
- **Where we stopped:** B1 finished (snapshot, update queue, updater fn, batching, lazy initializer, derived-state
  preview). Capstone: strong-wind toggle, `INITIAL_SPOTS`, `STRONG_WIND_KNOTS` — reviewed, no bugs, tsc + eslint clean.
  **Open review items:** stable `id` key instead of `location` (do it in B2: add `id` to `WindSpot` + `INITIAL_SPOTS`),
  `spot={spot}` instead of `{...data}`, `aria-label` on Remove + 🚀, rename `constants/WindCard.ts` / `WindSpot.ts`
  (PascalCase looks like a component), `const visibleSpots` above `return`, updater param name.
- **Next action:** start B2 (immutable updates). Natural link: `INITIAL_SPOTS` is a shared module object, so mutating
  state (`push`) would also mutate the constant. Use that as the opening "what breaks" question. Then the `id` key item.
  Optional: `KeyExperiment.tsx` was never created (he reasoned the answers correctly); suggest running the random key once.
- **Repeat in Quiz B / warm-ups:** A2-4 🔁 (say "remount"; `JSON.stringify` key not asked yet), A2-7 🔁 (say
  "SyntheticEvent"), B1-1 🔁 (same closure → 1, 2, 3), batching why + React 18, `useState(() => fn)`,
  A1-7 / A1-4 🔁 (purity), A1-6 🔁 (freeze), A2-3 🔁 (when index is OK), A2-1 🔁.
- **Tutor note:** Milan answers in short fragments. Ask for full sentences; in interviews, say the "why" unprompted.
- **Later (Module D):** move the `WindSpot` data type out of the component file (e.g. `src/types.ts`).
- **Tutor note:** before each new exercise, show the syntax with a small example (Milan doesn't know modern React syntax yet).

## Log
Newest first.

| Date | Lesson | Done | Weak spots to revisit |
| --- | --- | --- | --- |
| 2026-11-25 | B1 | Warm-up (A1-3 ✅, A2-7 🔁, random key first correct); `let` vs `useState` playground; snapshot found in his own console; update queue, updater fn, batching, lazy initializer, derived-state preview; capstone: strong-wind toggle, `INITIAL_SPOTS`, `STRONG_WIND_KNOTS` | B1-1 closure part; batching "why"; "remount" word; SyntheticEvent name; skips parts of multi-part questions; fragments unless pushed |
| 2026-11-24 | Quiz A | 10 questions, 6.5 / 10; capstone review (no bugs) | `Math.random()` key = remount (3rd ❌); re-render goes down from the state owner, not "same level"; purity = no mutation during render; root container + SyntheticEvent; answers too short, "why" missing |
| 2026-11-23 | A3 | `children`, slot props, prop drilling, lifting content up; `children` re-render experiment; capstone: reusable `Card`, `WindCard` uses its slots, spacing moved to `App` | "React element"; `Math.random()` key at runtime; why a child re-renders; full prop drilling answer (what, why, how) |
| 2026-11-19 | A2 | `map` + keys (index/random/data keys, remount), playground index-key experiment; conditions + `0` trap; events, callback props, event delegation, SyntheticEvent; capstone: state, Remove button, `WindSpot` / `WindCardProps` split | `Math.random()` key = remount; "event delegation" name; key = identifier, not index; "React element" still missing |
| 2026-11-18 | A1 | Vite + Tailwind setup; JSX → elements, render vs commit, StrictMode, purity, read-only props; first `WindCard` | JSX answer names; render ×2 / commit ×1; mutate vs reassign |
| 2026-11-18 | Setup | Project, curriculum, rules, git + GitHub | — |

## Quiz scores

| Quiz | Date | Score | Weak spots |
| --- | --- | --- | --- |
| Quiz A | 2026-11-24 | **6.5 / 10** | A2-4 ❌ (random key → remount; confused with index key); A1-3 ½ ("same level" model); A1-6 ½ (freeze); A2-7 ½ (root container, SyntheticEvent); A1-7 ½ (purity bug); A2-3 ½ (when index is OK). ✅ A1-1, A2-6, A3-4, A1-5 — all were 🔁/❌ before. |
