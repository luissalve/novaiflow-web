# Exercise 1 — Build a Reusable Template

In Level 1 you wrote good one-off prompts. Now we make them **reusable**. A *template* is a prompt with
the changeable parts turned into fill-in-the-blanks — written as `{variables}` in curly braces — so
that you (or any teammate) can run the same high-quality task every time, just by swapping a few words.

In this exercise you'll take a recurring email or letter you write often and turn it into a clean,
shareable template. This is the first card in your **team template kit** — your Level 2 deliverable.

> **Time:** about 15 minutes · **You need:** any chat AI assistant and one email or letter you send
> repeatedly (a client reply, a notice, a follow-up, a quote cover letter, a welcome message).

---

## What makes a template different from a prompt

| One-off prompt | Reusable template |
|---|---|
| Written for one situation, then thrown away | Written once, reused for every similar case |
| Facts baked into the text | Facts pulled out as `{variables}` you fill in |
| Only you know how to repeat it | A teammate can use it with no explanation |
| Quality varies each time | Quality is consistent every time |

The trick: **lock** the parts that stay the same (role, tone, structure, language) and **open up** the
parts that change (names, dates, the specific reason) as `{variables}`.

---

## The scenario

Pick **one** recurring message from your real week. Examples by industry:

| Your world | A recurring email/letter to templatize |
|---|---|
| Logistics / freight | A shipment-status update to a client |
| Clinic (front desk) | An appointment-confirmation message |
| Law firm | A "we received your documents" acknowledgment |
| School | A schedule-change notice to parents |
| Real estate | A reply to a new lead asking about a listing |
| Retail | A response to a customer asking about an order |
| Hotel | A reply to a guest's special request before arrival |
| Construction | A short "today's site update" note to the owner |

Choose something with **no sensitive data** in the template itself — sensitive details get filled in
later, by hand, following your company policy.

---

## Your task

Build one reusable template for that message. Use the **Role · Task · Context · Format** scaffold, but
this time turn every changeable detail into a `{variable}`.

### Fill-in scaffold

```text
Role: Act as a {role, e.g. friendly account manager at a freight company}.
Task: Write a {tone} email to {recipient} about {purpose}.
Context: Key facts — {fact 1}; {fact 2}; {fact 3}. Audience: {who they are}. Things to avoid: {e.g. hype, jargon}.
Format: {length, e.g. under 120 words}, {structure, e.g. subject line + 2 short paragraphs}, in {language}.
End with: {a clear next step or sign-off}.
```

### Worked starting point (don't copy — adapt to your message)

```text
Role: Act as a friendly account manager at a freight company.
Task: Write a {tone} email to {client name} about the status of their shipment {reference number}.
Context: Key facts — current status is {status}; expected delivery {date}; reason for any change is {reason}.
Audience: a regular client who values quick, honest updates. Avoid jargon and over-promising.
Format: Under 120 words, with a subject line and two short paragraphs, in {language}.
End with: an offer to help and a clear next step.
```

---

## Steps

1. Choose your one recurring message.
2. Write it once as a normal prompt with **real-but-non-sensitive** sample facts, and run it.
3. Now find every part that *changes case to case* — names, dates, the reason, the language — and
   replace each with a `{variable}`.
4. Lock the parts that *never* change: the role, the tone, the structure, the language rule.
5. Test your template by filling the `{variables}` with **two different** sample cases. Does it produce
   a good draft both times without you having to rewrite the structure?
6. Give it a short name (e.g. "Shipment-status email") and save it. This is your first kit card.

---

## Success looks like

- [ ] Every part that changes case-to-case is marked as a `{variable}` — nothing important is hard-coded.
- [ ] The fixed parts (role, tone, format, language) are locked into the template text.
- [ ] You tested it with **two** different sample cases and both drafts were usable after a quick review.
- [ ] A teammate could fill in the `{variables}` and run it **without asking you anything**.
- [ ] The template itself contains **no** sensitive data (names, account numbers, confidential details).

> **Remember (Responsible AI):** the template *drafts*; **a person reviews and owns** every message
> before it's sent. Fill sensitive details by hand following your company policy — never bake real
> personal or confidential data into a shared template.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
