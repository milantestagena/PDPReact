# A2 — Lists, keys, conditions, events

- **Date:** 2026-11-19 (finished)
- **Status:** done (keys and the `0` trap: re-ask in Quiz A)

## Key ideas

### Lists and keys
- JSX has no loop syntax. An **array of elements** is a valid child, so `array.map()` turns data into elements.
- `key` = a **stable identifier**, unique **among siblings** (not across the whole app).
- The diff on a re-render is 2 steps: **1. match** old ↔ new (by key; without keys, by position), **2. compare**
  the type + props of each pair and update only what changed. The key is used only in step 1. It is **not** a fingerprint of the props.
- With keys, a moved item = a **moved DOM node**. Without keys, an insert at the top looks like "every item changed"
  (N updates + 1 create instead of 1 create).
- Worse than slow: DOM state and component state stay at the **position**. Text typed in SF's input ends up in Boston's card.
  Visible only when items move (insert at the top, delete, sort) **and** have something props don't control (input text, state, focus).
- `key={index}` = **the same as no key** (the index is React's default). It only hides the warning.
  OK only for lists that never reorder and have no state, or for appending at the end.
- **A new key = a new component**: React unmounts the old one (DOM + state lost) and mounts a new one.
  `key={Math.random()}` → everything remounts on every render (worse than no key). `key={JSON.stringify(data)}` → remounts on every data change.
  Changing a key on purpose = resetting a component (B4).
- A missing key = a **dev-only warning in the browser console**. Not an error, not in the terminal, not from TypeScript.
- Generate ids when the data is **created** (in an event handler, e.g. `crypto.randomUUID()`), never in render. Render must be pure.

### When does React compare?
- Only on a **re-render**. The first render (mount) has nothing to compare with.
- React doesn't watch data. A re-render happens when you call a **state setter**, when the parent re-renders, or when context changes.

### Conditional rendering
- `if` + early `return null` · ternary `a ? <A/> : <B/>` · `cond && <A/>`.
- `null`, `undefined`, `true`, `false` render **nothing**. **Numbers and strings render.**
- `a && b` returns `a` itself if it is falsy (**falsy ≠ `false`**). So `{list.length && <List/>}` with `[]` shows **"0"**.
  Fix: `list.length > 0 &&`, `value !== undefined &&`, or a ternary. `&&` is safe when the left side is a real boolean.
- TypeScript does not catch it: `0 | JSX.Element` is a valid thing to render.

### Events
- `onClick={handleClick}`: pass the function. `onClick={handleClick()}` calls it **during render**.
- Arguments: `onClick={() => remove(id)}`.
- Child → parent = a **callback prop** (`onRemove`). Naming: prop `onX`, handler `handleX`.
- Later props override earlier ones: `{...data} onRemove={…}` (spread first, explicit props after).
- **Event delegation:** React attaches **one listener per event type on the root container** (`#root`, React 17+;
  before 17: `document`). It finds the target in its tree and walks up, calling the handlers (it simulates bubbling).
  Why: fewer listeners, nothing to attach/detach when list items come and go; root (not `document`) so several React apps on one page don't clash.
- **SyntheticEvent** = React's cross-browser wrapper with the DOM API (`target`, `preventDefault()`, `stopPropagation()`).
  The real event: `e.nativeEvent`. Event pooling / `e.persist()` was removed in React 17.

## Angular → React
- `@for (item of items; track item.id)` → `{items.map(item => <Item key={item.id} … />)}`. `track` ≈ `key`,
  but Angular requires `track` (compile error), React only warns.
- `@if` → `&&` / ternary / early return.
- `(click)="save()"` → `onClick={save}`. Not `onClick={save()}`.
- `@Output()` + `EventEmitter` → a function prop (`onRemove`).
- Angular change detection checks bindings. React does nothing until a state setter is called.

## Interview questions
| Question | Milan's answer (short) | Verdict |
| --- | --- | --- |
| A1-1 (warm-up) What does JSX compile to? | "JSX object" → "jsx() returns the object" | 🔁 has `jsx()`; still missing "React element" |
| A1-2 (warm-up) Render vs commit; which runs twice in StrictMode? | "Render gets new elements and compares with the old version; commit maps that to the DOM." "Render is called twice." | ✅ |
| A2-1 Why does React need `key`? | "Mandatory, like Angular; every element needs its own identifier." Then: "key is a reference to all the props." After the analogy: "a moved element only changes position; DOM mapping depends on it." | 🔁 got it in the end; not mandatory; say "identifier", not "index" |
| A2-2 Text typed in SF's input, Boston added at the top — where does the text go? | "It stays at the old SF position" (→ Boston). | ✅ |
| A2-3 Why is the index a bad key? | "key={index} doesn't fix it; 0 or 1 means nothing; location means something." | 🔁 right; add the mechanism (SF's key 0 → 1, same as no key) and when it's OK |
| A2-4 `key={Math.random()}` / `JSON.stringify` keys? | "Random = like no key, a bit more cost; stringify changes when data changes." (Was thinking of a page refresh.) | ❌ new key = remount, all state lost on every render |
| A2-5 Why is `crypto.randomUUID()` OK in a handler but `Math.random()` not OK in render? | "Created once per item, stored as its id; Math.random rebuilds on every render." | ✅ |
| A2-6 `{warnings.length && <p/>}` with `[]`? | Predicted `<div></div>`. Later, for `gustKnots && …`: "0 shows '0', undefined shows nothing." | ❌ → ✅ after explanation |
| A2-7 Where does React attach event listeners? | "On each button… no, on a higher element that sees which child triggered it." | 🔁 delegation ✅; forgot the name; missed the root container + SyntheticEvent |

## Code
- `playground/src/App.tsx` — two lists of cities, one with `key={index}`, one with `key={city.id}`, each `<li>` with an `<input>`,
  plus an "Add Boston" button that prepends a city. Proves the index-key bug. (Tailwind import added to `playground/src/index.css`.)
- `capstone/src/App.tsx` — `windData` in `useState<WindSpot[]>`, rendered with `map` + `key={data.location}`,
  `{...data}` then `onRemove={() => removeWindCard(data.location)}`; removal with `prev.filter(...)` (a new array).
- `capstone/src/components/WindCard.tsx` — types split: `WindSpot` (data) + `WindCardProps = WindSpot & { onRemove }`.
  Optional `gustKnots` shown with `!== undefined` (so `0` shows), 🚀 badge with `windSpeedKnots >= 20 &&`, Remove button.

## Mistakes and surprises
- Looked for the `key` warning in the terminal. Vite only serves files; React runs (and warns) in the **browser console**.
- Thought a key is a fingerprint of the props, so React compares keys instead of props. No: key = identity; props are still compared.
- Called the key "just an index". In React, "index" means the array position, which is the bad key. Say "identifier".
- Answered "what does `Math.random()` do" thinking of a page refresh. In interviews, "what happens" means **on a re-render**.
- Experiment v1 "proved" index keys are fine: no `<input>`, and Boston was appended at the **end**. Both conditions for the bug were missing.
- `key={Math.random()}` → ESLint `react-hooks/purity`: "Cannot call impure function during render". A1 purity, enforced by the linter.
- Same `id: 4` on every click → duplicate keys.
- `{warnings.length && …}` with `[]` → predicted nothing, real result "0".
- `onRemove?:` — added `?` only so the data array compiled. The real fix was two types (data vs props). If a type is
  shaped to silence the compiler, it's probably lying.
- Spread after explicit props (`onRemove={…} {...data}`) — the spread could override the handler.
- A button inside `<h2>` → the heading is read as "Location: SF Remove".

## To revisit
- The words: **"event delegation"**, **"stable identifier"**, **"remount"**, **"React element"**.
- `key={Math.random()}` → remount on every render (the A2-4 ❌).
- When is the index OK as a key? (static list, no reorder, no state).
- SyntheticEvent in one sentence.
