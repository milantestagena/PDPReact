---
name: start-lesson
description: Start or continue a React lesson in a new chat. Reads the progress files and picks up where the last session stopped.
disable-model-invocation: true
---

Start a tutoring session. Follow CLAUDE.md (English only, English note at the end of every reply).

1. Read `notes/progress.md` (the "Now" section first), `notes/curriculum.md`, and `notes/english.md`
   (the focus list — watch for those mistakes today).
2. If the current lesson has a file in `notes/lessons/`, read it to see what was already covered.
3. Look at the current state of `capstone/` and `playground/` (git log, recent changes) so you know what Milan built.
4. Warm up with 2 questions from `notes/interview-bank.md`, picking ❌ and 🔁 first, from earlier lessons.
   Wait for the answers, give feedback, and update their status.
5. Then continue the current lesson from "Where we stopped". If the last lesson is done, start the next unchecked
   lesson in the curriculum. A new lesson = create `notes/lessons/<ID>-<short-name>.md` from `_template.md`.

Arguments (optional): $ARGUMENTS — e.g. a lesson ID like "B2" to jump to it, or "no warm-up".
