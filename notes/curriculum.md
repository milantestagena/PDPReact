# Curriculum

About 30 lessons, roughly 2–3 hours each. No dates: one lesson at a time, at your pace.
Each module ends with a quiz (interview questions) and a review of your code.

Every lesson has 4 parts:
1. **Concept** — how it works and why (the theory interviewers ask about)
2. **Interview questions** — answered out loud / in writing, in English
3. **Exercise** — small code in `playground/` that proves the concept (often: break it on purpose)
4. **Capstone step** — use it in the sailing dashboard in `capstone/`

Stack: React 19.3, Vite, TypeScript, Tailwind 4, React Router 8, TanStack Query 5, Next.js 16 (module G).

## Module A — The render model
- [x] **A1. Components are functions.** JSX → `createElement` → plain objects. Render vs commit. Props are read-only. Pure components. *Setup: create the capstone with Vite.*
- [ ] **A2. Lists, keys, conditions, events.** Why `key` matters (and why the index is a bad key). `&&` and the `0` trap. Synthetic events.
- [ ] **A3. Composition.** `children`, slot props, lifting content up. Prop drilling and how composition avoids it.
- [ ] **Quiz A**

## Module B — State
- [ ] **B1. State is a snapshot.** `useState`, each render has its own values, batching, updater functions (`n => n + 1`).
- [ ] **B2. Immutable updates.** Objects and arrays in state, why mutation doesn't re-render, referential equality.
- [ ] **B3. Structuring state.** Derived state (don't store it), lifting state up, controlled vs uncontrolled inputs.
- [ ] **B4. Keys reset state, `useReducer`.** When state is preserved or reset (position in the tree). Reducers.
- [ ] **B5. Context.** `createContext`, Provider, when it re-renders consumers, Context vs props vs a store.
- [ ] **Quiz B**

## Module C — Effects and refs
- [ ] **C1. Effects are synchronisation.** `useEffect`, dependencies, cleanup, why StrictMode runs effects twice.
- [ ] **C2. You might not need an effect.** The classic anti-patterns. Fetching in effects and race conditions.
- [ ] **C3. Refs and stale closures.** `useRef`, DOM refs, `ref` as a prop (React 19), the stale closure trap, `useEffectEvent`.
- [ ] **C4. Custom hooks.** Extracting logic, rules of hooks (and why they exist), `useLayoutEffect`, `useSyncExternalStore`.
- [ ] **Quiz C**

## Module D — The real-app stack
- [ ] **D1. Routing.** React Router: nested routes, layouts, params, loaders.
- [ ] **D2. Server state.** TanStack Query: cache, stale time, mutations, invalidation. Server state vs client state.
- [ ] **D3. Forms and Actions.** React Hook Form + Zod; React 19 `<form action>`, `useActionState`, `useFormStatus`, `useOptimistic`.
- [ ] **D4. Global state.** Zustand vs Context vs Redux Toolkit — what each is for (a common interview comparison).
- [ ] **Quiz D**

## Module E — Rendering and performance
- [ ] **E1. Why components re-render.** Reconciliation, the diffing rules, `memo`, `useMemo`, `useCallback`, when they help and when they don't.
- [ ] **E2. React Compiler.** What it memoises automatically, bailouts, what changes in how you write code. DevTools Profiler.
- [ ] **E3. Suspense and errors.** `Suspense`, `lazy`, code splitting, error boundaries, the `use` hook.
- [ ] **E4. Concurrent rendering.** `useTransition`, `useDeferredValue`, priorities. Why this is "interruptible rendering".
- [ ] **Quiz E**

## Module F — TypeScript and testing
- [ ] **F1. Typing React.** Props, `children`, events, generic components, `ComponentProps`, discriminated unions for props.
- [ ] **F2. Testing.** Vitest + React Testing Library + MSW. Testing behaviour, not implementation.
- [ ] **Quiz F**

## Module G — React on the server
- [ ] **G1. CSR, SSR, SSG, RSC.** What each one is, hydration and hydration errors. SSR ≠ Server Components.
- [ ] **G2. Server Components.** `'use client'`, the client/server boundary, why RSCs can't use hooks, bundle size.
- [ ] **G3. Next.js App Router.** Layouts, Server Actions (`'use server'`), caching, streaming. Rebuild a part of the dashboard.
- [ ] **Quiz G**

## Module H — Internals, patterns, interview
- [ ] **H1. Internals.** Fiber, render and commit phases, lanes, how `setState` schedules work.
- [ ] **H2. Patterns.** Compound components, render props, HOCs, portals, controlled components. Class components and lifecycle methods (to read old code).
- [ ] **H3. Accessibility and architecture.** Semantic HTML, focus, ARIA basics; feature-based folders.
- [ ] **H4. Live coding drills.** Classic tasks: autocomplete, `useDebounce`, infinite scroll, a modal, a todo app with filters.
- [ ] **H5. Mock interviews.** Full interview simulations, in English.
