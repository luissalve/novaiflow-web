# Solution — Exercise 3: Turn Messy Text into a Clean Table

This is a **model answer**, not the only right answer. A strong text-to-table template (1) returns your
named columns in order, one row per item, (2) marks missing values "TBD" instead of guessing, and (3) is
verified in a real spreadsheet. Use this to check your card and output.

> **For facilitators:** the teachable moment is the rebuild-and-verify step. AI structuring is fast but
> fallible; the spreadsheet — not the chat — is the source of truth.

---

## A model output (run on the sample text)

```text
| Reference | Client            | From  | To           | Pallets | ETA      |
|-----------|-------------------|-------|--------------|---------|----------|
| SH-4471   | Riverside Imports | Miami | Atlanta      | 12      | Thursday |
| SH-4502   | Delgado Trading   | Miami | Tampa        | 8       | Thursday |
| SH-4490   | Coastal Supply    | Miami | Orlando      | 4       | Friday   |
| TBD       | Northside         | Miami | Jacksonville | 2       | Monday   |
```

Plain-words formula explanation (as the AI might give it):

```text
To total the Pallets column: click the empty cell below it, then add up all the pallet cells in that
column. In Excel or Google Sheets you'd type =SUM( then select the pallet cells, e.g. =SUM(E2:E5),
and press Enter. The cell will show 26.
```

---

## Why this works — part by part

| Element | In the model | Why it matters |
|---|---|---|
| **Named columns, fixed order** | Reference, Client, From, To, Pallets, ETA | Drops straight into a spreadsheet, same every time. |
| **One row per item** | 4 shipments → 4 rows | No merged or lost entries. |
| **"TBD" for gaps** | Northside reference = TBD | The missing ref is flagged, not invented. |
| **Sorted** | ETA soonest first (Thu, Thu, Fri, Mon) | Useful order, not the random order it was typed. |
| **Plain formula** | "=SUM(E2:E5) … shows 26" | You can act on it without spreadsheet expertise. |

---

## The verify-in-spreadsheet step (don't skip it)

| Check | In the sample |
|---|---|
| Row count matches item count? | 4 items → 4 rows ✓ |
| Pallet numbers correct? | 12, 8, 4, 2 match the text ✓ |
| Does the total add up? | 12 + 8 + 4 + 2 = **26** ✓ |
| Missing data flagged, not guessed? | Northside ref = TBD ✓ |

Rebuild the table in Excel/Sheets, type the formula yourself, and confirm the total. If the AI's number
and your spreadsheet's number disagree, **the spreadsheet wins**.

---

## Common mistakes and quick fixes

| Mistake | Why it hurts | Fix |
|---|---|---|
| Let the AI invent a missing reference | Wrong data looks official in a table | Rule: "if missing, write TBD — do not guess" |
| Didn't fix the sort | Table is as messy as the input | Add a clear sort rule (e.g. "ETA, soonest first") |
| Trusted the AI's total | AI can miscount | Always compute totals in the spreadsheet |
| Different columns each run | Not reusable | Lock the column names and order in the template |

---

## Rationale (the one big idea)

Turning text into a table is about **structure plus trust**: the template fixes the structure (named
columns, one row per item, a sort rule, "TBD" for gaps), and the spreadsheet provides the trust (you
rebuild and verify there). AI is a fast first-drafter of data, never the final ledger. Lock the
structure, verify the numbers, and you have a card the whole team can reuse safely.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
