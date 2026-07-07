# Solution — Exercise 1: Build a Reusable Template

This is a **model answer**, not the only right answer. A strong template always (1) marks every
case-to-case detail as a `{variable}`, (2) locks the role, tone, structure and language, and (3) works
for two different cases with no rewriting. Use this to check your own card.

> **For facilitators:** reward any template a teammate could run cold. The test is reusability, not
> elegance. If they had to explain it verbally, it isn't finished yet.

---

## A model template (shipment-status email)

```text
Role: Act as a friendly account manager at a freight company.
Task: Write a {tone} email to {client name} about the status of their shipment {reference number}.
Context: Key facts — current status is {status}; expected delivery {date}; reason for any change is {reason}.
Audience: a regular client who values quick, honest updates. Avoid jargon and over-promising.
Format: Under 120 words, with a subject line and two short paragraphs, in {language}.
End with: an offer to help and a clear next step.
```

### Filled in with sample case A

> {tone} = reassuring · {client name} = Riverside Imports · {reference number} = SH-4471 ·
> {status} = held at port · {date} = this Thursday · {reason} = a customs inspection · {language} = English

### A response this might produce

```text
Subject: Update on shipment SH-4471 — expected Thursday

Hi Riverside Imports team,

A quick update on SH-4471: it's currently held at the port for a routine customs inspection. Based on
what we're seeing, we expect it to clear and reach you this Thursday.

I'll keep watching it closely and let you know the moment it's released. If there's anything you need
from us in the meantime, just reply here and I'll jump on it.

Best regards,
[Your name]
```

---

## Why this works — part by part

| Part | In the model | Why it matters |
|---|---|---|
| **Variables** | `{client name}`, `{reference number}`, `{status}`, `{date}`, `{reason}`, `{language}` | These are the only things that change per case — pulling them out is what makes it reusable. |
| **Locked role** | "friendly account manager at a freight company" | The voice stays consistent no matter who runs it. |
| **Locked guardrails** | "Avoid jargon and over-promising" | Keeps quality and tone steady across the whole team. |
| **Locked format** | "Under 120 words, subject line, two paragraphs" | Every output comes back the same usable shape. |
| **Locked closing** | "offer to help and a clear next step" | Ensures the email always ends with an action. |

---

## Common mistakes and quick fixes

| Mistake | Why it hurts | Fix |
|---|---|---|
| Left a real client name in the template | Now it's not reusable (and may leak data) | Replace with `{client name}` |
| No `{language}` variable | Stuck in one language; can't serve EN + ES clients | Add `{language}` to the format line |
| Variables but no locked tone | Output drifts in tone every run | Lock the role and "avoid…" guardrails |
| Only tested once | You don't know if it generalizes | Always test with **two** different cases |

---

## Rationale (the one big idea)

A template is a prompt with the **changeable parts pulled out** and the **standard parts locked in**.
That single move turns your personal skill into a team asset: anyone can get your quality without your
help. Every other exercise in Level 2 builds on this — and the kit you assemble at the end is just a
collection of well-made cards like this one.

And always: the template drafts — **a person reviews and owns** what gets sent.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
