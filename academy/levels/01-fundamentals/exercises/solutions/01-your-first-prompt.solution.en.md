# Solution — Exercise 1: Your First Useful Prompt

This is a **model answer**, not the only right answer. There is no single perfect prompt — but a strong
one always names a **Role**, a **Task**, the **Context**, and a **Format**. Use this to check your own
work and to see the small details that make a prompt land.

> **For facilitators:** the goal of Exercise 1 is confidence, not perfection. Reward any prompt that
> has all four scaffold parts and produces a usable draft.

---

## A model prompt (logistics example)

```text
Role: Act as a helpful logistics coordinator at a freight company.
Task: Write a short, calm email to a client letting them know their shipment is delayed.
Context: The shipment is 2 days late due to a port backlog. The client is a regular who values
quick, honest updates. We now expect delivery this Thursday. Tone: professional and reassuring.
Format: A short email under 120 words, with a subject line, in English. End with a clear next step.
```

### A response this might produce

```text
Subject: Update on your shipment — new delivery Thursday

Hi James,

I wanted to reach out personally about your shipment. Due to a backlog at the port, it's running
about two days behind schedule. We now expect it to reach you this Thursday.

I know timing matters, so I'll keep an eye on it and confirm the moment it's out for delivery. Thank
you for your patience — please reply if there's anything I can do in the meantime.

Best regards,
[Your name]
```

---

## Why this works — part by part

| Part | In the model | Why it matters |
|---|---|---|
| **Role** | "logistics coordinator at a freight company" | Sets the voice and expertise — the email sounds like the right person wrote it. |
| **Task** | "Write a short, calm email… delayed" | One clear job. The assistant isn't guessing what you want. |
| **Context** | "2 days late… port backlog… regular client… Thursday" | The facts make the draft specific and true to your situation, not generic. |
| **Format** | "under 120 words, subject line, English, clear next step" | Controls length, shape, and language so the output is ready to use. |

---

## Common mistakes and quick fixes

| Mistake | Why it hurts | Fix |
|---|---|---|
| "Write an email to a client." | Too vague — the assistant invents everything. | Add Context: what happened, who, when, the tone. |
| No Format given | You get a 300-word essay when you wanted 3 lines. | Always state length and shape. |
| Wrong language | Output comes back in English when you needed Spanish. | Add "in Spanish" (or EN/ES) to Format. |
| Included a real account number | Sensitive data in a public tool. | Use a placeholder like `{order number}`. |

---

## Rationale (the one big idea)

A prompt is a **brief**, not a magic spell. The clearer you are about *who* should answer, *what* you
need, *with what facts*, and *in what shape*, the closer the first draft lands. Everything else in this
course builds on this scaffold.

And always: the assistant drafts — **you review and own** what gets sent.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
