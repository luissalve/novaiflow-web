# Level 2 · Applied — Project Brief: The Team Template Kit

This is your Level 2 deliverable: **a shared kit of reusable prompt templates that any teammate can
use the same way, every time.** It is the move from "everyone improvises" to "we all use the same
proven molds" — your team's first AI *standard*.

You already started the cards in the workshop. Here you gather them into one document, fill the kit to
the minimum size, test each template, and name an owner so it stays current.

> **Deliverable in one line:** a single shared document holding **5 or more tested, reusable prompt
> templates**, each as a card a colleague can pick up and run with no extra help.

---

## Objective

Turn the templates your team built during the workshop into a **team template kit**: a shared,
trustworthy library of reusable templates for the tasks you repeat most.

You'll know you're done when:

- The kit holds **5 or more templates**, covering at least **3 of the 4 types** (email, summary, spreadsheet, image).
- Each template uses **`{variables}`** for the parts that change — never hard-coded details.
- Each template was **tested on two real (non-sensitive) cases** before being added.
- Each card ends with a **check-before-sending** line (human-in-the-loop).
- The kit has a **named owner** and lives in one place the whole team can reach.

This kit is also the foundation for **Level 3 · Advanced**, where these templates get chained into
automated workflows.

---

## Scope

**In scope — the four high-value template types:**

| Type | What it does | Example tasks |
|---|---|---|
| **Email** | Drafts client replies, notices, follow-ups | Late-delivery reply, appointment reminder, quote follow-up |
| **Summary** | Turns long text into key points + next steps | Email thread, meeting notes, long document |
| **Spreadsheet** | Turns messy text into a clean table; explains a formula in plain words | Contact list cleanup, running total, "% of total" |
| **Image** | Briefs a simple graphic or photo | Campaign banner, notice, social post |

**Out of scope for this level:** automation, tool integrations, and multi-step chaining (those are
Level 3). Keep each template to a single, self-contained task.

---

## What to submit — the exact format

One shared document (whatever your team already uses — a doc, a wiki page, a shared note). It contains
a short intro, the **kit owner's name**, and **one card per template**. Each card uses this exact
structure:

```text
Name:                 {short, searchable name}
For which task:       {what it does, in one line}
Template:             {the prompt, with {variables} marked in curly braces}
When to use it:       {the trigger / situation}
Check before sending: {what a person must verify before it goes out}
Language(s):          {EN / ES / both}
Owner:                {who maintains this card}
```

**Field notes:**

- **Name** — short and searchable, so a teammate finds it fast (e.g., "Carrier delay reply").
- **Template** — the complete, ready-to-paste prompt. Use `{curly braces}` for anything that changes each time.
- **When to use it** — the trigger, so a teammate knows *when* to reach for it.
- **Check before sending** — the human-in-the-loop step: what a person must verify before the output is used.

---

## Two filled examples (different roles / industries)

### Example A — Logistics / Dispatch

```text
Name:                 Carrier delay reply
For which task:       Reply to a customer asking why their shipment is late
Template:             Act as a friendly bilingual customer-service rep for a freight company.
                      Draft a reply to {customer} whose shipment is delayed.
                      Context: order {order number}, due {original date}, new ETA {new date},
                      reason {reason}. In {language}, under {length} words, warm and professional,
                      ending with one clear next step.
When to use it:       A customer asks why their shipment is late
Check before sending: Order number, dates and reason are correct; a person reviews before sending
Language(s):          EN / ES
Owner:                Dispatch lead
```

```text
Name:                 Carrier list cleanup
For which task:       Turn a pasted, messy carrier list into a clean table
Template:             Turn the text below into a table with columns {carrier}, {service},
                      {lead time}, {contact}. Sort by {lead time}. Flag any row missing a contact.
                      Context: {paste non-sensitive list}.
When to use it:       You receive a rate sheet or list as plain text and need it organized
Check before sending: Rebuild and check the table in the real spreadsheet; AI describes, you verify
Language(s):          EN
Owner:                Dispatch lead
```

### Example B — Dental clinic / Front desk

```text
Name:                 No-show follow-up
For which task:       Message a patient who missed a routine appointment
Template:             Act as a warm bilingual front-desk coordinator for a dental clinic.
                      Draft a no-show follow-up message to {patient first name}.
                      Context: missed a {appointment type}; offer two reschedule options:
                      {option 1}, {option 2}. In {language}, under {length} words, friendly and
                      respectful, ready to send by text. No medical advice.
When to use it:       A patient misses a routine appointment
Check before sending: Reschedule times are real and open; a person reviews; no medical advice added
Language(s):          EN / ES
Owner:                Front-desk lead
```

```text
Name:                 Visit-note summary
For which task:       Summarize a long admin note into key points + next steps
Template:             Summarize the text below in {number} key points for {audience},
                      then list any next steps. Keep all dates and names exactly as written.
                      Context: {paste non-sensitive text}. In {language}.
When to use it:       A long internal note needs a quick, shareable summary
Check before sending: The summary kept the important details and changed no dates, names or figures
Language(s):          EN / ES
Owner:                Office manager
```

> **Note on all four cards:** templates use `{variables}` instead of real order numbers or patient
> names. That is exactly what makes them safe to reuse and safe to share. Never paste real patient or
> client data into a public tool without an approved policy.

---

## Requirements

1. **At least 5 templates**, covering at least **3 of the 4 types** (email, summary, spreadsheet, image).
2. Every template uses **`{variables}`** for the parts that change.
3. Every template was **tested on two real (non-sensitive) cases** before being added.
4. Every card includes a **check-before-sending** line (human-in-the-loop).
5. The kit names an **owner** for the document so it stays current.
6. The kit respects responsible use: **no sensitive data**, verification noted where needed.

---

## Acceptance criteria

The Level 2 project is accepted when **all** of the following are true:

| # | Criterion | How it's checked |
|---|---|---|
| 1 | 5+ templates, 3+ types | Count the cards and their types |
| 2 | Variables marked `{like this}` | Inspect each template |
| 3 | Each tested on 2 real cases | Group confirms during review |
| 4 | Each card has a check-before-sending line | Inspect each card |
| 5 | A teammate can use any card with no extra help | Quick peer test on one card |
| 6 | No sensitive data anywhere in the kit | Scan the document |
| 7 | Kit has a named owner | Check the header/footer |

Meeting all seven earns the **Level 2 certificate** and unlocks Level 3. See
`assessment/rubric.en.md` for how the kit and your participation are scored.

---

## How this builds on prior levels

Your kit is not a fresh start — it grows directly out of Level 1 and points straight at Level 3.

| Level 1 (done) | → | Level 2 (here) | → | Level 3 (next) |
|---|---|---|---|---|
| 3 personal prompts, one row each | → | A shared **team kit** of 5+ templates | → | Templates chained into automated workflows |
| `{placeholders}` you fill in manually | → | Standard `{variables}`, locked tone & format | → | Variables fed automatically between steps |
| "When I use it" notes | → | Cards with when-to-use **and** check-before-sending | → | Trigger conditions for each step |
| One person's assets | → | A team standard with a named owner | → | A documented, tested team workflow |

**Bring your Level 1 prompts to class** — each one is a candidate to convert into a template (mark the
changing parts as `{variables}`, lock the rest, test it twice, and write the card). The cleaner your
three prompts were, the faster your kit comes together.

---

## Suggested timeline

- **In class (12-minute project block):** gather every group's workshop cards into one document; assign an owner.
- **Week 1 after class:** fill the kit to 5+ templates; test each on two real cases.
- **Ongoing:** add a card whenever the team finds a new repeated task. The owner keeps it tidy.

---

## Responsible-use guardrails (mandatory)

- Never paste PHI, PII or confidential data into public tools without an approved policy.
- AI drafts; **a person reviews and owns** every output — that's the check-before-sending line.
- Verify facts, figures, names and dates before anything is sent or published.
- Disclose AI assistance where your industry or client requires it; respect confidentiality and privilege.
- A kit that bakes sensitive data into a template **does not pass**, regardless of how good it looks.

---

## Quick checklist before you submit

1. [ ] 5+ templates in one shared document, covering 3+ types.
2. [ ] Every template uses `{variables}` for the parts that change.
3. [ ] Every template tested on two real, non-sensitive cases.
4. [ ] Every card ends with a check-before-sending line.
5. [ ] A teammate used one card with no extra help.
6. [ ] No sensitive data anywhere in the kit.
7. [ ] The kit names an owner.

That's your team's first AI standard. Well done — see you in Level 3.

---

## Need help?

NovAIFlow can facilitate the kit build on-site or live online, and tailor templates to your
industry (logistics, clinics, law firms, schools, government, real estate, retail, hotels,
construction).

**info@novaiflow.com** · **novaiflow.com** · NovAIFlow, Miami, FL ·
novaiflow.com


---

— NovAIFlow · AI Training & Enablement · novaiflow.com
