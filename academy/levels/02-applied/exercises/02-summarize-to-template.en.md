# Exercise 2 — Summarize a Long Document into a Template

Long emails, multi-page documents and meeting notes eat up your day. AI is excellent at compressing
them — but only if you tell it **exactly what shape** you want back. The secret is a *summary template*:
instead of asking "summarize this," you ask for a fixed structure (key points, decisions, action
items, dates) every single time. Same input messiness, same clean output, every time.

In this exercise you'll build a reusable summary template and run it on a realistic long text. The
result becomes a card in your **team template kit**.

> **Time:** about 15 minutes · **You need:** any chat AI assistant and one long, **non-sensitive**
> document or email thread (use the sample below if you don't have one handy).

---

## Why a template beats "just summarize it"

| "Summarize this" | A summary template |
|---|---|
| You get whatever shape the AI feels like | You get the same sections every time |
| Important details (dates, owners) often dropped | You name the sections you can't lose |
| Hard to scan | Built to be scanned in 10 seconds |
| You re-explain what you want each time | The structure is written once |

The move: decide the **fixed sections** you always need, and turn the changeable input into a
`{paste text here}` variable.

---

## The scenario

Pick a recurring "long thing" you have to digest. Examples by role:

| Your world | A long text to summarize on repeat |
|---|---|
| Logistics / freight | A long carrier email thread about a delay |
| Clinic (admin) | Multi-message back-and-forth about scheduling (non-clinical) |
| Law firm | A 3-page letter or a meeting memo |
| School | Notes from a staff or parent meeting |
| Government | Minutes from a council/committee meeting |
| Construction | A daily site report or an RFI thread |
| Hotel | A long guest-services email chain |

### Sample long text (use this if you don't have one)

```text
From: Ops <ops@example.com>
Hi team — quick recap of the carrier call this morning. The Miami-to-Atlanta lane is running about a
day behind because of weekend weather. Carrier says trucks should be back on normal schedule by
Wednesday. Two shipments are affected: SH-4471 (Riverside Imports) now expected Thursday, and SH-4490
(Coastal Supply) now expected Friday. Riverside already asked for daily updates, so let's send one each
morning. Coastal hasn't asked but we should flag it proactively. Billing wants to know if the delay
triggers any service credits — Dana to check the contract by end of day Tuesday. Also, the carrier
raised fuel surcharges effective next month; we need to review our quotes before then. Let's regroup
Wednesday after the trucks are back.
```

---

## Your task

Build a reusable **summary template**, then run it on the sample (or your own text).

### Fill-in scaffold

```text
Role: Act as a precise assistant who summarizes for {audience, e.g. a busy operations manager}.
Task: Summarize the text below into the fixed structure shown, keeping all dates, names and figures exact.
Structure:
- Bottom line: {1 sentence}
- Key points: {number} bullets, each under 15 words
- Decisions made: bullets (or "none")
- Action items: who · what · by when
- Open questions / risks: bullets (or "none")
Rules: Do not invent anything. If something isn't stated, write "not stated." Keep every figure and date unchanged.
Format: In {language}. Plain language, easy to scan.

Text to summarize:
{paste non-sensitive text here}
```

---

## Steps

1. Decide the **fixed sections** you always want (the scaffold above is a strong default).
2. Paste the sample text (or your own non-sensitive text) into the `{paste…}` slot and run it.
3. Check the summary against the source: are all **names, dates and figures** exact and unchanged?
4. Did it invent anything? If yes, add or tighten the "Do not invent" rule and re-run.
5. Save the template (without the pasted text) as a kit card named "Summary — [your use]."

---

## Success looks like

- [ ] The summary comes back in your **fixed structure** every time (bottom line, key points, decisions, actions, risks).
- [ ] **Every** name, date and figure matches the source exactly — nothing changed or invented.
- [ ] Action items clearly show **who · what · by when**.
- [ ] Anything not in the source is marked "not stated," not guessed.
- [ ] The template (minus the pasted text) is saved and reusable by a teammate.

> **Remember (Responsible AI):** only paste **non-sensitive** text into a public tool unless your
> company policy allows otherwise. AI can drop or change a figure — **verify every number and date**
> against the original. The AI drafts the summary; **a person confirms it's accurate** before it's used.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
