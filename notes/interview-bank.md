# Interview question bank

Every interview question asked in lessons and quizzes. Quizzes pick from here, with priority for 🔁 and ❌.

Status: ⬜ not asked yet · ✅ solid · 🔁 partly right, ask again · ❌ wrong, ask again

| ID | Lesson | Question | Status | Last asked | Notes |
| --- | --- | --- | --- | --- | --- |
| A1-1 | A1 | What does JSX compile to, and what does a component actually return? | 🔁 | 2026-11-18 | First guess: "a DOM element". After the exercise: "JS objects waiting to be rendered as DOM" — right idea; still name jsx()/createElement, React element, $$typeof. |
| A1-2 | A1 | What is the difference between the render phase and the commit phase? | 🔁 | 2026-11-18 | Asked via StrictMode: saw "runs twice, DOM once" but could not say why (render runs twice, commit once). Got that append() in render duplicates. After a hint, said "commit = the duplicated part" (reversed) and "render = what is in return()" (it is the whole function body). Then: "StrictMode is there just to check if functions are pure" — good. Predicted renderCount: screen 2, console 1 2 — correct. |
| A1-3 | A1 | When a parent re-renders, does a child re-render if its props didn't change? Why? | ⬜ | — | |
| A1-4 | A1 | Why must a component be pure? What breaks if it isn't? | 🔁 | 2026-11-18 | Answered through exercises: append() in render duplicates; predicted renderCount 2 under StrictMode. Ask for a clean spoken definition. |
| A1-5 | A1 | Why does React work with element objects instead of creating DOM nodes directly? | 🔁 | 2026-11-18 | Said "cleaner, and one feature translates them to DOM" (renderer idea). Missed: cheap to create and compare → diff → minimal DOM updates. |
| A1-6 | A1 | Why are props read-only? What happens if you mutate them, and why does `({ name }) => { name = … }` not throw? | 🔁 | 2026-11-18 | Found it by experiment. Model "object = by reference, string = by value" is close; the real rule is mutating the shared props object vs reassigning a local variable. Freeze is shallow + dev-only. |
