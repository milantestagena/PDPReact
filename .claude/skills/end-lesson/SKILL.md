---
name: end-lesson
description: Close a tutoring session. Saves lesson notes, progress, interview answers and English progress, then commits and pushes.
disable-model-invocation: true
---

Close the tutoring session so the next chat can continue without this conversation.

1. **Lesson notes:** fill in `notes/lessons/<ID>-<short-name>.md` (from `_template.md`): key ideas, the interview
   questions asked with Milan's answers and a verdict, code written (paths), mistakes and surprises, things to revisit.
   Write it for Milan to re-read before an interview: short, plain English, no filler.
2. **Interview bank:** add every new question to `notes/interview-bank.md` and update status + "Last asked"
   for every question asked today.
3. **Progress:** update the "Now" section of `notes/progress.md` (current lesson, exactly where we stopped,
   the next action, anything left open). Add a row to the log (newest first). Tick finished lessons in
   `notes/curriculum.md`.
4. **English:** update the focus list in `notes/english.md` — new recurring mistakes in, fixed ones out.
   Re-rate only after a module quiz or when asked.
5. **Git:** commit everything (notes and Milan's code) with a short message like "A1: components and JSX",
   and push to origin. Milan has approved commit + push as part of this command.
6. Reply with a 3-line summary: what was done, what's next, one thing to review before the next session.
   Then the English note.

Arguments (optional): $ARGUMENTS — e.g. "no push".
