# Level 2 Template Cheat-Sheet — One Page to Keep

Print this, pin it near your desk, and you have Level 2 in one glance. The big idea: stop rewriting
prompts. Build **templates** — prompts with the changing parts marked as `{variables}` — so anyone on
your team can reuse them the same way, every time.

---

## From prompt to template (the move)

A template is just a good prompt with two things added: **`{variables}`** for what changes, and a
**locked frame** (role, tone, language, format) for what stays.

| | One-off prompt | Reusable template |
|---|---|---|
| The changing bits | Typed in directly | Marked as `{variables}` |
| Role, tone, format | Change each time | **Locked** in the template |
| Where it lives | A chat you'll lose | A **card** in the team kit |
| Proven? | Tried once | **Tested on two cases** |

**Build it in four moves:** 1) write a good prompt (Role · Task · Context · Format), 2) mark what
changes as `{variables}`, 3) test it on two different cases, 4) save it as a card.

> **Refine, don't redo.** If a result is almost right, fix the one thing in the same chat — "shorter",
> "warmer", "add a next step" — instead of starting over.

---

## The template card (save every template this way)

```text
Name:                 {short, searchable name}
For which task:       {what it does, in one line}
Template:             {the prompt, with {variables} in curly braces}
When to use it:       {the trigger / situation}
Check before sending: {what a person must verify}
Language(s):          {EN / ES / both}
Owner:                {who maintains this card}
```

---

## 6 ready-to-use templates

Copy one, swap the `{curly brace}` parts, and go. Use **sample (non-sensitive) data** to practice.

**1 · Email reply**
```text
Act as our {role}. Draft a {tone} email to {recipient} about {purpose}.
Key facts: {bullet points}. In {language}, max {length} lines, ending with one clear next step.
```

**2 · Summary (long text → key points + next steps)**
```text
Summarize the text below in {number} key points for {audience}, then list any next steps.
Keep all dates, names and figures exactly as written. Context: {paste non-sensitive text}. In {language}.
```

**3 · Spreadsheet / table (messy text → clean table)**
```text
Turn the text below into a table with columns {col1}, {col2}, {col3}, sorted by {rule}.
Flag any row missing {required field}. Context: {paste non-sensitive data}.
```

**4 · Formula explained in plain words**
```text
Explain, in plain words, a spreadsheet formula for {goal — e.g., a running total / % of total}.
Tell me which cells to use and what each part does. I'll build and check it in my real sheet.
```

**5 · Image brief**
```text
Create a {orientation} image of {subject}, {style} style, colors {palette} with brand red #E5002B accents,
with space for the text "{text}". Keep it simple and on-brand. I will review it before publishing.
```

**6 · Rewrite for tone / translate (EN ⇄ ES)**
```text
Rewrite the text below in a {tone} tone for {audience}, keeping my meaning and all names and numbers exact.
Then give me the {Spanish/English} version. Text: {paste here}.
```

---

## Choosing a model (plain rule)

- **Everyday text** (a short email, a quick rewrite) → any modern assistant is fine; favor **speed**.
- **Long, data-heavy, or higher-stakes** (a big summary, a careful client letter, a table from lots of
  data) → switch to the **"most capable"** mode; favor **quality**.
- **Always verify** facts, figures, names and dates — no matter which model you used.

---

## The 4 checks before anything goes out

Tape these where you can see them. They keep templates helpful *and* safe.

1. **No sensitive data.** Templates use `{variables}`, not real PHI, PII, or confidential info. Never
   paste private data into a public tool without an approved policy.
2. **Human-in-the-loop.** AI drafts; **you** review, fix, and own the result. That's the
   check-before-sending line on every card.
3. **Verify facts & figures.** AI can sound confident and still be wrong. Check any number, name, date,
   or claim against your real records.
4. **Right for images, too.** Before publishing an image, check accuracy, rights/licensing, and brand
   fit (correct colors, text spelled right).

---


— NovAIFlow · AI Training & Enablement · novaiflow.com
