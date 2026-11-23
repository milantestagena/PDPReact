# A3 — Composition

- **Date:** 2026-11-23 (finished)
- **Status:** done

## Key ideas
- `children` is a normal prop. JSX between a component's tags arrives in `props.children`.
- A **slot prop** is any prop that holds JSX (`actions={<button />}`). Technically it is the same as `children`; `children` only has nicer syntax.
- The **parent** creates the `children` elements before the wrapper runs. The wrapper receives ready React elements and only decides where they go.
- **Rule:** a re-render re-creates the elements a component **creates**, not the ones it **receives**. So if a wrapper's own state changes, its `children` are the same object and React can skip them.
- If the **parent that created** `children` re-renders, it creates new elements, so that content re-renders too, even with the same prop values. By default, React doesn't compare props (`memo` changes this, E1).
- **Prop drilling** is passing props through components that don't use them. Those components become coupled to the data, and one change affects every level.
- **Composition avoids it ("lifting content up"):** the component that owns the data creates the element and passes it down as `children` or a slot prop.

## Angular → React
- `<ng-content>` → `{children}`.
- `<ng-content select="[header]">` → a slot prop such as `header={<h2 />}`.
- Difference: Angular creates projected components even if the slot isn't shown. In React, `children` is only a description, so a child component doesn't run unless it is actually rendered.
- `ng-content` is a smaller feature in Angular. In React, `children` is used every day: layouts, modals, `Suspense`, error boundaries, Context and Query providers.

## Interview questions
| Question | Milan's answer (short) | Verdict |
| --- | --- | --- |
| Warm-up A1-1: What does JSX compile to, and what does a component return? | "JSX object"; then asked for the answer | 🔁 re-ask without hints |
| Warm-up A2-4: What happens with `key={Math.random()}`? | "Nothing, lint won't allow it" (true: `react-hooks/purity`); then asked for the runtime answer | ❌ re-ask without hints |
| A1-3: Parent re-renders, child's props are the same. Does the child re-render? | Predicted "both" re-render. Reason: "the first element changed" | 🔁 right result; the real reason is that the parent ran again and created new elements |
| A3-1: Who creates the `<h2>` in `<Panel><h2/></Panel>`? What is in `children`? | "SettingsPage; a React element" (after seeing the compiled code). Then predicted `CounterA` / `CounterB` correctly | ✅ |
| A3-2: Does `Card` need an `onRemove` prop if the button is in `children`? | "No need, it's related to WindCard" | ✅ |
| A3-3: `children` vs a slot prop: technical difference? | "No difference, both are just props" | ✅ |
| A3-4: What is prop drilling, why is it a problem, how does composition avoid it? | "Passing props through components that don't use them, composition avoids it" | 🔁 definition right; add the why and the how |

**Full answer to A3-4:** "Prop drilling is passing props through components that don't use them. It's a problem because those components become coupled to data they don't care about, and one change affects every level. Composition avoids it because the component that owns the data creates the element and passes it down as `children` or a slot prop."

## Code
- `capstone/src/components/Card.tsx`: reusable shell. Owns the base styles; has `title`, `actions?`, `children`, optional `className`.
- `capstone/src/components/WindCard.tsx`: uses `<Card>`, with `title` and `actions` slot props and the wind details as `children`.
- `capstone/src/App.tsx`: the list owns the spacing (`flex flex-col gap-4`).
- `playground/src/Drilling.tsx`: `Page` / `Header` / `Avatar` without prop drilling (solution shown by the tutor).
- `playground/src/ChildrenRender.tsx`: experiment showing who re-renders (`CounterA`, `CounterB`, parent button).

## Mistakes and surprises
- "What happens?" in an interview means at runtime too: the linter is a good first sentence, but not the whole answer.
- `className="{props.className}"` is a literal string (Angular `class="{{x}}"` habit). JSX: quotes = string, braces = expression, never both.
- `props?.actions`: `?.` guards the object on the left (`props`, never null), not the property. `undefined` already renders nothing.
- `mb-4` on `WindCard`: a reusable component shouldn't set its own outer margin. The parent layout owns the spacing.
- Thought composition would be rarely used, as in Angular. In React, it is everywhere.

## To revisit
- Say "`jsx()` call → React element" without a hint.
- Say "new key → unmount + mount → DOM and state lost" without a hint.
- Give all three parts of the prop drilling answer: what, why, how.
- Explain a child re-render by "the parent ran again and created new elements".
