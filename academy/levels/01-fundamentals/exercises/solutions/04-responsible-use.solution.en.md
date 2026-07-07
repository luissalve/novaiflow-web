# Solution — Exercise 4: Spot the Risk, Use AI Safely

This is the answer key for the three flawed prompts. For each one we name **what's unsafe**, **which
principle it breaks**, and give a **safe rewrite** that still gets the legitimate job done. The whole
point of Level 1's responsible-AI habit lives here.

> **For facilitators:** accept any rewrite that (a) removes the real risk and (b) still completes the
> task. The exact wording will vary; the safety move must be present.

---

## Prompt A — the clinic message

**Original (unsafe):**

```text
Write a reminder text for our patient Maria Gonzalez, DOB 04/12/1985, SSN 234-56-7890,
who has an appointment for her diabetes follow-up on Tuesday at 3pm. Her phone is 305-555-0148.
```

**What's unsafe:** It pastes real **PHI/PII** — full name, date of birth, Social Security number,
phone, and a health condition (diabetes) — into a public AI tool.
**Principle broken:** #1 — *Protect sensitive data.* (The SSN is especially egregious and is never
needed for a reminder.)

**Safe rewrite:**

```text
Role: Act as a friendly front-desk assistant at a clinic.
Task: Write a short, warm appointment-reminder text.
Context: The patient has a routine follow-up. Use placeholders I'll fill in myself; do not invent
personal details. Don't mention any medical condition.
Format: Under 40 words, friendly, in English.
Template to follow:
"Hi {first name}, this is a friendly reminder of your appointment on {day} at {time} with {clinic
name}. Reply YES to confirm or call us to reschedule. See you soon!"
```

**Why it's safe:** no real PHI/PII leaves the building — you fill the placeholders in your own system,
and the health condition is omitted.

---

## Prompt B — the "fact" we didn't check

**Original (unsafe):**

```text
Write a LinkedIn post saying that our shipping service is "the fastest in South Florida,
delivering 100% of packages within 12 hours, with a 99.9% on-time rate."
```

**What's unsafe:** It asks the AI to publish **specific numbers and superlatives** ("fastest," "100%,"
"99.9%") as fact, with no evidence they're true. Publishing unverified or false claims can mislead
customers and create legal exposure.
**Principle broken:** #3 — *Verify facts & figures.* (The AI will happily write confident numbers that
may be wrong.)

**Safe rewrite:**

```text
Role: Act as a marketing assistant for a freight company.
Task: Draft a LinkedIn post highlighting our fast, reliable shipping.
Context: Focus on the customer benefit (speed and dependability). Do NOT invent statistics or
superlatives. If you include any figure, mark it [VERIFY] so I can confirm it before posting.
Format: Under 80 words, upbeat but honest, in English.
```

**Why it's safe:** it bans invented stats and flags anything numeric for human verification before it
goes live.

---

## Prompt C — the message no one will check

**Original (unsafe):**

```text
Write the final legal disclaimer for our website contract and post it as-is. I'll copy it
straight to the live site. No need to send it to me first.
```

**What's unsafe:** It treats AI output as **final, publishable legal text** with **no human review** —
on a contract, no less. AI can produce plausible-sounding but wrong or non-compliant legal language.
**Principle broken:** #2 — *Human-in-the-loop* (and overlaps with #4, *disclose/respect legal review*).

**Safe rewrite:**

```text
Role: Act as a legal-writing assistant.
Task: Draft a plain-language website disclaimer for me to review — this is a DRAFT, not final text.
Context: It's for a small business website contract page. Flag anything that may need a lawyer's
review. Do not present it as legal advice.
Format: A clearly labeled DRAFT, in English, with a note: "Have a qualified attorney review before
publishing."
```

**Why it's safe:** it forces a draft + human/lawyer review step before anything reaches the live site.

---

## The three habits at a glance

| Prompt | Principle broken | The safe move |
|---|---|---|
| A — clinic | #1 Protect sensitive data | Replace real PHI/PII with placeholders; omit the condition. |
| B — shipping stats | #3 Verify facts & figures | Ban invented numbers; flag any figure `[VERIFY]`. |
| C — legal disclaimer | #2 Human-in-the-loop | Make it a labeled DRAFT; require human/lawyer review. |

---

## Rationale (the habit that protects you)

Speed is the temptation; safety is the discipline. Before you press send, run the three-question check:
**Is there sensitive data here? Is this fact verified? Did a person review it?** If any answer is "no,"
fix it first. The assistant drafts — a **person reviews, verifies, and owns** the result. That single
pause prevents almost every serious AI mistake a small business can make.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
