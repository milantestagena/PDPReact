# B1 — State is a snapshot

- **Date:** 2026-11-25 (finished)
- **Status:** done

## Key ideas
- A component is a function that React calls again on every render. A local `let` variable has two problems:
  changing it **doesn't trigger** a render, and a render **resets** it (`let x = 0` runs again).
- `useState` keeps the value **outside** the function (React stores it next to the component) and gives you a setter
  that **schedules** a re-render.
- **State is a snapshot.** Each render has its own state, and it's a `const`, so it can't change during that render.
  `setX` doesn't change the variable. Handlers created in a render see that render's values, so
  `setClicks(...); console.log(clicks)` logs the **old** value.
- **Update queue:** `setX(value)` queues "replace with value"; `setX(prev => …)` queues "take the latest and…".
  On the next render React runs the queue in order. `setScore(score + 1)` ×3 → 1; `setScore(s => s + 1)` ×3 → 3;
  `setScore(score + 5); setScore(s => s + 1)` → 6.
- Use the **updater form** when the new value depends on the old one (counters, toggles, lists), especially with several
  updates in a row or code that runs later.
- **Batching:** React waits until the handler finishes, then renders **once** with all updates. It's faster, and the
  user never sees a half-updated UI. Since **React 18** it batches everywhere (`setTimeout`, promises), not only in
  React event handlers.
- **Initial value** is used on the first render only, but `useState(load())` still **calls** `load` on every render.
  **Lazy initializer** `useState(load)` → called once (twice in dev StrictMode). It must be pure, with no arguments.
  A module-level constant needs no lazy initializer: it's created once, and passing a reference is free.
  To *store a function* in state: `useState(() => fn)`.
- **Derived state (preview of B3):** if you can calculate it from state/props, don't store it. A stored filtered copy
  gets out of sync (Remove updates only the source). In Milan's words: **"we save the rule, not the temp data."**

## Angular → React
- Angular: a component is a class **instance** that lives on; `this.clicks` keeps its value and change detection reads
  it. React: no instance, the function runs from zero each time; `useState` is "React, keep this value for me".
- Derived state ≈ a `computed()` signal / a getter, not a field you copy by hand in `ngOnChanges`.

## Interview questions
| Question | Milan's answer (short) | Verdict |
| --- | --- | --- |
| Warm-up A1-3: `CounterButton` owns state, `Child` is a sibling — who re-renders? | "Only CounterButton, because it owns the state" | ✅ |
| Warm-up A2-7: where are listeners? SyntheticEvent? | "Never heard of it" → after explanation: "React listens on the root container and wraps native events" | 🔁 |
| Warm-up A2-4: index / id / random key (reasoned, didn't run) | id stays with Tarifa; index stays at position 0; random "matches nothing, input value is lost" | 🔁 (first correct! say "remount") |
| B1-1: `let clicks`, click 3× — screen, console, why? | "Screen 0, console 1 2 3; nothing triggers a re-render" | 🔁 (missed: same variable in the closure) |
| B1-2: `setClicks()` then `console.log(clicks)` shows the old value — why? | "clicks is from the old render; state updates on the next render" | ✅ |
| B1-3: `setScore(score+1)` ×3 vs updater ×3; how many renders? | "1, an instruction for the next render; 3, the function saves the temp result"; later "1 render, React batches" | ✅ |
| B1-4: `setScore(score+5); setScore(s => s+1)` | "Snapshot 0 → 5 → 5+1 = 6" | ✅ (in fragments) |
| B1-5: `useState(load())` vs `useState(load)`, 5 renders | "5 — we execute it; 1 — we pass the function itself" | ✅ |
| B1-6: why not store the filtered list in state? | "The copy gets out of sync, the removed spot stays visible; we save the rule, not temp data" | ✅ (2nd try) |

## Code
- `playground/src/StateVsVariable.tsx` — a `let count` next to `useState` clicks in one handler: shows the variable
  resetting on each render, and the console showing the state "one behind" (the snapshot).
- `capstone/src/App.tsx` — "Show strong wind only" toggle (boolean state, updater form), list filtered during render.
- `capstone/src/constants/WindSpot.ts` — `INITIAL_SPOTS` moved out of `App`.
- `capstone/src/constants/WindCard.ts` — `STRONG_WIND_KNOTS = 20`, used in `App` and `WindCard`.
- Review: no bugs, tsc + eslint clean. Style: rename the constants files (PascalCase looks like a component, e.g.
  `constants/wind.ts`); pull the filter out into `const visibleSpots` above `return`; updater param name `showStrongOnly`
  ≠ state `strongWindOnly` (use the same name or `prev`).

## Mistakes and surprises
- ESLint `react-hooks/immutability` (React Compiler rules) flags reassigning a local variable in a handler:
  "Cannot reassign variable after render completes". The tooling knows locals don't survive renders.
- The console was "one behind" the screen in his own experiment, and that's how he found the snapshot idea himself.
- Used the updater form before it was taught (he knew it from the capstone `filter`).
- Skipped part of a question twice (the closure part of B1-1, "how many renders") — answer every part.
- Still answers in fragments unless pushed; full sentences came when asked ("The screen stays 0 because…").

## To revisit
- B1-1: why the console shows 1, 2, 3 — same closure, same variable, because nothing re-rendered.
- Batching: say the why (performance, no half-updated UI) + React 18 change.
- `useState(() => fn)` to store a function in state.
- Random key: use the word **remount**; run `KeyExperiment.tsx` once (not created yet).
- A2-7: say "SyntheticEvent" + `e.nativeEvent`.
