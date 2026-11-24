# Quiz A — Module A: the render model

- **Date:** 2026-11-24 (finished)
- **Status:** done. Score **6.5 / 10**

## Key ideas
- JSX compiles to a `jsx()` call. It returns a **React element**: a plain object that *describes* the UI, not a DOM node.
- **Re-render ≠ remount.** A re-render calls the component again and keeps its DOM and state. A remount destroys
  them and builds new ones. The `key` decides which one happens.
- `key={Math.random()}` gives a new key on every render, so nothing ever matches: every item is unmounted + mounted, and
  DOM, state, typed text and focus are lost. That's worse than an index key.
- A re-render starts at the component that **owns the state** and goes **down** through its whole subtree. It never goes
  sideways: if the state lives in a sibling, the other sibling doesn't re-render.
- **Pure render:** the same props give the same output. *Reading* outside values is fine; *changing* anything that existed
  before the render (a module-level array, props) is the bug. StrictMode's double render shows it early.
- Props are frozen in dev (shallow, dev-only), so mutating `props.x` throws. Reassigning a destructured local doesn't.
- React attaches one listener per event type on the **root container** (`<div id="root">`); handlers get a
  **SyntheticEvent** (a cross-browser wrapper; the native event is in `e.nativeEvent`).

## Interview questions
| Question | Milan's answer (short) | Verdict |
| --- | --- | --- |
| A1-1: What does JSX compile to, what does a component return? | "React element, which is created by jsx()" | ✅ 1 |
| A1-6: `props.label = …` throws, `label = …` doesn't. Why? | "A mutates the props object, B reassigns a local variable; not a good idea in both cases" | ½ (no freeze; B is legal) |
| A1-3: Parent's state changes; does `Child` with the same props re-render? | "Yes, same level… everything under `<>` re-renders" | ½ (owner → down, not level) |
| A2-4: `key={Math.random()}`, typed text, parent re-renders | "All re-rendered, text stays in the old position" | ❌ 0 (that's the index key) |
| A2-6: `{warnings.length && …}` for 2 and `[]`; fix | "2 warnings / 0 / `length > 0`" | ✅ 1 (say the why) |
| A2-7: Where are listeners attached? SyntheticEvent? | "On the App element… higher in the hierarchy, on the React root" | ½ (root container; no SyntheticEvent) |
| A3-4: Prop drilling: what, why, how | "Passing props through components that don't need them, coupling them; a skeleton, pass props where needed" | ✅ 1 |
| A1-7: Find the bug: `push` to an outside array in render | "Calculation before return" → "the array is outside, so it's impure" | ½ (mutation is the bug; no output prediction) |
| A1-5: Why element objects instead of DOM nodes? | "Cheaper to compare objects than to update the DOM" | ✅ 1 |
| A2-3: When is `key={index}` OK? | "When new elements go to the end" | ½ (also: never reordered/filtered/removed, no id) |

## Code
- No new code. Review of the Module A capstone (`capstone/src/App.tsx`, `components/Card.tsx`, `components/WindCard.tsx`):
  no bugs, tsc + eslint clean.
- Open review items: stable `id` key instead of `location`; `spot={spot}` instead of `{...data}`; initial data in
  `const INITIAL_SPOTS` outside the component; `aria-label` on Remove and the 🚀; `STRONG_WIND_KNOTS` constant;
  names `spots` / `spot`.

## Mistakes and surprises
- Mixed up the random key with the index key, for the 3rd time. The missing idea is re-render vs remount.
- "Same level" / "under the fragment" picture for re-renders. Counter-example: `CounterButton` with its own state →
  `Child` doesn't re-render.
- The `map(x => { …; return … })` block body was new ("return in return"). It's just a function inside a function.
- "Outside the function = impure" isn't quite it: constants from outside are fine; mutation during render is the bug.
- Most ½ points came from short answers. In an interview, add the "why" without being asked.

## To revisit
- A2-4: playground experiment with index / id / random keys + a ticking clock, then explain it out loud.
- A1-3 with state in a sibling component.
- Purity definition in one sentence: "same input → same output, no changes to anything outside during render".
- Root container + SyntheticEvent; props freeze (shallow, dev-only); full rule for the index key.
