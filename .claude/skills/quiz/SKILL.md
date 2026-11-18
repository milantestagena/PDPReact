---
name: quiz
description: Run an interview-style React quiz — for the end of a module, or a quick review anytime.
disable-model-invocation: true
---

Run a quiz like a real interviewer. Follow CLAUDE.md (English only, English note at the end of every reply).

1. Scope: $ARGUMENTS — a module letter ("A"), a lesson ID ("B3"), or empty = the last finished module.
   Use "quick" in the arguments for 4 questions instead of 8–10.
2. Pick the questions from `notes/interview-bank.md` and the lesson notes in `notes/lessons/`:
   about half from the scope, the rest from earlier ❌ / 🔁 questions. Add new questions too:
   "what does this code log?", "find the bug", "why does this re-render?". These are the classic interview formats.
3. **One question at a time.** Wait for the answer. Give feedback: what was right, what was missing, the ideal
   short answer an interviewer wants to hear. Then the next question.
4. At the end: a score (e.g. 7/10), the weak spots, and an updated status for each question in the interview bank.
   Record the score in `notes/progress.md` → "Quiz scores".
5. If this was a module quiz: re-rate English in `notes/english.md` (add a row to the ratings table).
   Then a code review of the module's capstone work — bugs first, then React anti-patterns, then style.
