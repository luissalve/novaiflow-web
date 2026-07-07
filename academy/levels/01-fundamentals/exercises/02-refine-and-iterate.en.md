# Exercise 2 — Refine and Iterate

A first prompt rarely gives you the perfect answer — and that's normal. The real skill is **talking
back to the assistant**: looking at what came out, deciding what's missing, and asking again with a
little more detail. In this exercise you'll take a deliberately weak prompt and improve it in **two
rounds**, watching the answer get sharper each time.

Think of it like editing a draft with a coworker: you don't start over, you nudge.

> **Time:** about 15 minutes · **You need:** any chat AI assistant and the weak prompt below.

---

## The scenario

Your manager asks you to "send something to clients about our new Saturday hours." You open the
assistant and type the first thing that comes to mind:

```text
Write an email about our new hours.
```

It's vague. The assistant has to guess everything — your business, the tone, the actual hours, who
it's for. The result will be generic. Let's fix that, step by step.

---

## Your task

Improve the weak prompt above through **two refinements**. Each round, you add the part of the
**Role · Task · Context · Format** scaffold that was missing, then send again and compare.

### Round 0 — the weak prompt (run it as-is)

```text
Write an email about our new hours.
```

Send it. Notice what the assistant *guessed* or got wrong. Write down 2 things you'd change.

### Round 1 — add Context and Role (fill in and run)

```text
Role: Act as a {your role, e.g. office manager at a {your business type}}.
Task: Write a short email to clients announcing new Saturday hours.
Context: {the real facts — your business name or type, the new hours, when they start, why it's
good news for clients, the tone you want}.
```

Send it. Better? Now find what's still off — maybe it's too long, or the wrong language, or has no
subject line.

### Round 2 — add Format and constraints (fill in and run)

```text
Role: Act as a {your role}.
Task: Write a short email to clients announcing new Saturday hours.
Context: {the real facts, same as Round 1}.
Format: {now pin it down — e.g. under 100 words, with a subject line, friendly tone, in English;
end with an invitation to book}.
```

Send it. This is your finished prompt. Compare all three answers side by side.

---

## Steps

1. Run the **Round 0** weak prompt. Note 2 problems with the answer.
2. Run **Round 1** with your real Context and Role filled in. Note what improved and what's still off.
3. Run **Round 2** with Format and constraints added.
4. Line up the three answers. Write one sentence on *why* each round got better.
5. Save the Round 2 prompt — it's reusable for any future announcement.

> **Tip:** You don't always have to rewrite the whole prompt. You can also just reply in the chat:
> *"Make it shorter and add a subject line."* The assistant remembers the conversation. Try both
> ways and keep whichever feels faster for you.

---

## Success looks like

- [ ] You ran **three** versions (Round 0, 1, 2) and can see the answers getting better.
- [ ] By Round 2 the prompt has all four parts: **Role · Task · Context · Format**.
- [ ] The final answer matches your real situation (correct hours, business, tone, language).
- [ ] You can explain in one sentence *what* each refinement added.
- [ ] You'd be comfortable sending the Round 2 result **after a quick human review**.

> **Remember (Responsible AI):** iterating means *you* keep judging the output — the assistant is not
> the final authority. A person reviews and owns the email before it goes out.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
