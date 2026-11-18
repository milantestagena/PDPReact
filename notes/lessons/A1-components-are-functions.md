# A1 — Components are functions

- **Date:** 2026-11-18 (finished)
- **Status:** done (several answers 🔁 — repeat in Quiz A)

## Key ideas
- JSX compiles to a function call: `jsx('h1', { className, children })` from `react/jsx-runtime`
  (before React 17: `React.createElement` — interviewers still use that name).
- That call returns a **React element**: a plain, immutable JS object (`type`, `props`, `key`, `$$typeof`).
  It's a *description* of UI (the order paper), not a DOM node (the meal).
- `$$typeof` is a Symbol. JSON can't contain Symbols → injected JSON can't pretend to be an element (XSS protection).
- A component is a function: **props in → elements out.**
- Why objects: they are **cheap to create and compare**, so React re-creates the tree on every update, diffs it with the
  previous one and changes **only** what's different in the DOM. And elements aren't tied to the browser
  (react-dom, React Native, test renderer).
- **Render phase** = React calls your component functions (the *whole* body, not only `return`) and compares the result.
  No DOM. Can run many times, can be thrown away.
  **Commit phase** = React applies the differences to the real DOM. Once per update. "Render" ≠ painting the screen.
- **StrictMode** (dev only) runs render **twice** to expose impure components; commit still runs once.
  It also runs effects twice (mount → unmount → mount) — Module C.
- **Pure component:** same props → same output, no side effects during render (no changing outer variables, the DOM,
  props; no requests). Side effects belong in event handlers and effects.
- **Props are read-only.** The parent owns the data; data flows one way (like `@Input()`).
  In dev React does `Object.freeze(props)` — **shallow** and **dev-only**.
  - `props.name = …` → TypeError (mutates the shared object).
  - `({ name }) => { name = … }` → no error (only rebinds a local variable).
  - `({ user }) => { user.name = … }` → **no error, silent bug** (nested object isn't frozen).
- "One component per file" is a team convention, not a React rule. Vite Fast Refresh prefers files that export only
  components (`react-refresh/only-export-components`).

## Angular → React
- `bootstrapApplication(AppComponent)` → `createRoot(el).render(<App />)` in `main.tsx`.
- Angular compiles templates into DOM create/update instructions + change detection checks bindings.
  React **re-runs the whole function and diffs the output.**
- `@Input()` / `input()` → props (one object, first argument of the function).
- `<ng-container>` → Fragment `<> … </>`. `{{ }}` → `{ any JS expression }`.

## Interview questions
| Question | Milan's answer (short) | Verdict |
| --- | --- | --- |
| A1-1 What does JSX compile to? | First: "a DOM element". After the exercise: "some kind of JS objects waiting to be rendered as DOM". | 🔁 right idea, missing the names (`jsx()`, React element) |
| A1-5 Why objects, not DOM nodes? | "Cleaner, shorter, one React feature translates them to DOM." | 🔁 renderer idea OK; missed cheap + diff → minimal DOM changes |
| A1-2 StrictMode: function runs twice, one `<h1>` — why? | "Everything runs twice except the page rendering, don't know why." After a hint: reversed the phases. | 🔁 good observation; link is: render ×2, commit ×1 |
| A1-4 What breaks if render has side effects? | "`document.body.append()` would duplicate." renderCount: predicted "page 2, console 1 2" — correct. "StrictMode is there to check if functions are pure." | ✅ in practice, 🔁 as a spoken definition |
| A1-6 Mutating `props.name` vs reassigning destructured `name` | "props object = by reference and immutable; `name` is a string, passed by value." | 🔁 close; real rule = mutate shared object vs rebind local variable |

## Code
- `playground/src/App.tsx` — logging a JSX value; module-level `renderCount` (impure render under StrictMode);
  `Greeting` (destructured) vs `OtherGreeting` (`props.name = …` → TypeError).
- `capstone/` — Vite + React 19 + TS + Tailwind 4 (`@tailwindcss/vite`).
  `capstone/src/components/WindCard.tsx` with exported `WindCardProps`; `App.tsx` renders 3 hard-coded cards.

## Mistakes and surprises
- Tailwind 4: imported the plugin from `'tailwindcss'` (core engine) instead of `'@tailwindcss/vite'`.
- Forgot `@import "tailwindcss";` in `index.css` → no styles.
- Thought JSX becomes a DOM element — the Elements tab shows the result *after* commit.
- `<h1>Hello, {name}!</h1>` → 3 separate text nodes: `children` is an array.
- Thought the commit phase was the doubled one; it's render.
- `directionDeg: "NW"` shown as "NW°" — the name and the type disagreed.
- Defined `WindCardProps` but kept an inline copy in the function signature.
- `<p>` inside `<h2>` — invalid HTML nesting (React warns; later = hydration errors).
- Code comments (probably autocomplete) said "this line has no effect" — both were wrong. Read generated code.

## To revisit
- Say the JSX answer with the exact names: `jsx()` / `createElement` → React element → `$$typeof`.
- Render vs commit as one clear spoken sentence.
- Mutating vs reassigning (shallow freeze).
- Next lesson starts from the 3 copy-pasted `<WindCard>`s → `map` + `key`.
