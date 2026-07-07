# Exercise 4 — Spot the Risk, Use AI Safely

AI assistants are powerful, but using them carelessly can expose private data, spread wrong
information, or send something no human ever checked. In this exercise you'll play *editor*: you'll
look at **three real-world prompts**, each with a hidden problem, name what's unsafe, and **rewrite
each one safely**. This is the most important habit you'll build in Level 1.

You don't need to memorize rules. You just need to learn to pause and ask: *"Is there sensitive data
here? Is this fact verified? Did a person check it?"*

> **Time:** about 20 minutes · **You need:** the three flawed prompts below and a pen (or a notes
> file). No assistant required to *find* the problems — but you may use one to test your safe rewrites.

---

## The three responsible-AI habits we're testing

| # | Principle | The question to ask |
|---|---|---|
| 1 | **Protect sensitive data** | Does this contain PHI, PII, or confidential info that shouldn't go into a public tool? |
| 2 | **Verify facts & figures** | Is this number/claim confirmed, or are we trusting the AI blindly? |
| 3 | **Human-in-the-loop** | Will a person review and own the result before it's sent or acted on? |

*(PHI = Protected Health Information, like a patient's diagnosis. PII = Personally Identifiable
Information, like a full name with a date of birth or an account number.)*

---

## Your task

For **each** of the three prompts below: (a) write down what's unsafe and **which principle** it
breaks, then (b) **rewrite the prompt** so the task still gets done — but safely.

### Prompt A — the clinic message

```text
Write a reminder text for our patient Maria Gonzalez, DOB 04/12/1985, SSN 234-56-7890,
who has an appointment for her diabetes follow-up on Tuesday at 3pm. Her phone is 305-555-0148.
```

What's unsafe? __________  ·  Which principle? __________

Rewrite it safely below:

```text
(your safe version here)
```

### Prompt B — the "fact" we didn't check

```text
Write a LinkedIn post saying that our shipping service is "the fastest in South Florida,
delivering 100% of packages within 12 hours, with a 99.9% on-time rate."
```

What's unsafe? __________  ·  Which principle? __________

Rewrite it safely below:

```text
(your safe version here)
```

### Prompt C — the message no one will check

```text
Write the final legal disclaimer for our website contract and post it as-is. I'll copy it
straight to the live site. No need to send it to me first.
```

What's unsafe? __________  ·  Which principle? __________

Rewrite it safely below:

```text
(your safe version here)
```

---

## Steps

1. Read each prompt slowly. Ask the three questions from the table.
2. For each, write **one sentence** naming the risk and the principle it breaks.
3. Rewrite each prompt so it gets the job done **without** the risk (remove/replace sensitive data,
   add "draft for my review," ask the AI to flag unverified claims, etc.).
4. Optional: run your safe rewrites in an assistant to confirm they still produce a useful answer.
5. Keep your rewrites — they're a model for how you'll handle real tasks.

> **Hint for rewriting safely:**
> - Replace real personal data with **placeholders** like `{patient first name}` or `[appointment time]`.
> - Ask the assistant to **mark anything it isn't sure of** so you can verify before publishing.
> - End sensitive prompts with **"Produce a draft for me to review — do not treat it as final."**

---

## Success looks like

- [ ] For all three prompts you named the risk **and** the principle it breaks.
- [ ] Prompt A's rewrite contains **no** real PHI/PII (uses placeholders or removes the data).
- [ ] Prompt B's rewrite **avoids stating unverified figures** as fact (or asks to verify first).
- [ ] Prompt C's rewrite keeps a **human review step** before anything is published or sent.
- [ ] Each rewritten prompt still accomplishes the original, legitimate task.

> **Remember (Responsible AI):** the assistant *drafts*; a **person reviews, verifies, and owns** the
> result. Never paste confidential or personal data into a public tool without your company's approved
> policy, and never publish an AI claim you haven't checked. When in doubt, ask before you send.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
