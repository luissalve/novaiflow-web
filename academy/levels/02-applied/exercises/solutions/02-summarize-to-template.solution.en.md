# Solution — Exercise 2: Summarize a Long Document into a Template

This is a **model answer**, not the only right answer. A strong summary template (1) returns the same
fixed sections every time, (2) keeps every name, date and figure exact, and (3) marks anything missing
as "not stated" instead of guessing. Use this to check your card and your output.

> **For facilitators:** the highest-value habit here is verification. Praise participants who catch a
> dropped or altered figure — that's the skill that prevents real mistakes.

---

## A model output (run on the sample text)

```text
Bottom line: The Miami–Atlanta lane is ~1 day behind from weekend weather; normal schedule expected by Wednesday.

Key points:
- Two shipments affected by the delay.
- SH-4471 (Riverside Imports) now expected Thursday.
- SH-4490 (Coastal Supply) now expected Friday.
- Carrier fuel surcharges rise next month.

Decisions made:
- Send Riverside a daily update each morning.
- Flag the delay to Coastal proactively (they haven't asked).

Action items:
- Dana · check the contract for service-credit eligibility · by end of day Tuesday.
- Team · review quotes against new fuel surcharges · before next month.
- Team · regroup on the lane · Wednesday (after trucks are back).

Open questions / risks:
- Whether the delay triggers service credits (pending Dana's contract check).
```

---

## Why this works — part by part

| Element | In the model | Why it matters |
|---|---|---|
| **Fixed sections** | Bottom line / Key points / Decisions / Actions / Risks | Same shape every run — instantly scannable. |
| **Exact figures** | SH-4471 → Thursday, SH-4490 → Friday | Dates and IDs carried over untouched. |
| **Owners + deadlines** | "Dana · …· by end of day Tuesday" | Action items are actionable, not vague. |
| **No invention** | Only facts from the source appear | "Do not invent" rule keeps it trustworthy. |
| **Reusable** | Template saved without the pasted text | A teammate fills the `{paste}` slot and goes. |

---

## The verification step (the part people skip)

After the AI returns the summary, do a 30-second cross-check against the source:

| Check | In the sample |
|---|---|
| Right shipment → right date? | SH-4471 = Thursday ✓ · SH-4490 = Friday ✓ |
| Right owner on each action? | Dana owns the contract check ✓ |
| Any number changed? | "about a day behind" kept as-is ✓ |
| Anything invented? | No credits "confirmed" — correctly left as a pending risk ✓ |

If any check fails, fix the template's rules ("keep figures exact," "mark missing as not stated") and
re-run — don't hand-patch the output and move on.

---

## Common mistakes and quick fixes

| Mistake | Why it hurts | Fix |
|---|---|---|
| Asked for a "short summary" with no structure | Output shape changes every time | Specify the exact sections |
| Didn't verify figures | A swapped date can reach a client | Cross-check names/dates/numbers every time |
| Let it state a guess as fact | Confidently wrong info spreads | Add "if not stated, write 'not stated'" |
| Pasted a confidential document | Sensitive data in a public tool | Use non-sensitive text or follow company policy |

---

## Rationale (the one big idea)

A good summary template does two jobs at once: it **fixes the shape** so output is always scannable, and
it **fences in the facts** so the AI can't quietly change a date or invent a decision. The structure
saves you time; the rules ("keep figures exact," "don't invent") keep you safe. The human still
verifies — but now there's far less to check.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
