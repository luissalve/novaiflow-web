# Exercise 3 — Turn Messy Text into a Clean Table

A lot of useful information arrives as a wall of text: a pasted email, a list someone typed in a hurry,
notes from a phone call. AI is great at pulling that mess apart into a neat **table** with named
columns — ready to drop into a spreadsheet. In this exercise you'll write a template that turns messy
text into a clean, sorted table, and you'll learn to ask the AI to explain a spreadsheet formula in
plain words. This becomes a card in your **team template kit**.

> **Time:** about 15 minutes · **You need:** any chat AI assistant, your spreadsheet program (Excel or
> Google Sheets), and one messy list (use the sample below if you don't have one).

---

## Why this is worth a template

| By hand | With a table template |
|---|---|
| Re-typing and re-aligning columns | AI structures it in seconds |
| Easy to miss or mistype a value | Consistent columns every time |
| Different shape each time | Same named columns, same sort order |
| Formula questions go unanswered | AI explains the formula in plain words |

Important: the AI **describes** the table and the formula — **you rebuild and verify** it in your real
spreadsheet. AI can miscount; the spreadsheet is the source of truth.

---

## The scenario

Pick a kind of messy text you regularly turn into rows and columns. Examples by role:

| Your world | Messy text to turn into a table |
|---|---|
| Logistics / freight | A pasted list of shipments with refs, clients and ETAs |
| Retail | A supplier's product list in a paragraph |
| Real estate | Notes on several properties you viewed |
| Construction | A list of materials and quantities from a site note |
| School | Sign-ups or RSVPs typed into one message |
| Hotel | A batch of guest requests from different emails |

### Sample messy text (use this if you don't have one)

```text
ok here's the run for thursday: Riverside Imports ref SH-4471 leaving Miami going to Atlanta, 12 pallets,
ETA thursday. Coastal Supply SH-4490 Miami to Orlando 4 pallets eta friday. then we've got Delgado
Trading, that's SH-4502, Miami to Tampa, 8 pallets, also thursday. oh and Northside, ref pending, miami
to jacksonville, 2 pallets, probably monday.
```

---

## Your task

Build a reusable **text-to-table** template, run it on the sample (or your own text), then ask for a
plain-words formula explanation.

### Fill-in scaffold

```text
Role: Act as a careful data assistant.
Task: Turn the messy text below into a clean table.
Columns (in this order): {col 1, e.g. Reference}, {col 2, e.g. Client}, {col 3, e.g. From}, {col 4, e.g. To}, {col 5, e.g. Pallets}, {col 6, e.g. ETA}.
Rules: One row per item. If a value is missing, write "TBD" — do not guess. Keep every number and name exactly as written. Sort by {sort rule, e.g. ETA, soonest first}.
Format: A Markdown table only, in {language}.

Then, in plain words, explain the spreadsheet formula I'd use to {goal, e.g. total the Pallets column}.

Messy text:
{paste non-sensitive text here}
```

---

## Steps

1. Decide your **column names and order**, and your **sort rule**.
2. Paste the sample (or your own non-sensitive text) and run the template.
3. Read the table: is there **one row per item**? Are missing values marked "TBD," not invented?
4. **Rebuild the table in your spreadsheet** and spot-check 2–3 values against the original text.
5. Try the formula the AI described (e.g. a column total) in your spreadsheet and confirm the result.
6. Save the template (without the pasted text) as a kit card named "Text → table — [your use]."

---

## Success looks like

- [ ] The table has your **named columns in the order you asked**, one row per item.
- [ ] Missing values are marked **"TBD"** — nothing was invented to fill a gap.
- [ ] Every number and name in the table **matches the source text exactly**.
- [ ] You **rebuilt it in your real spreadsheet** and spot-checked a few values.
- [ ] The formula the AI explained actually produces the right result when you try it.

> **Remember (Responsible AI):** the AI **describes** structure and formulas — **you verify** them in
> the real spreadsheet, because AI can miscount or mislabel. Use **non-sensitive** data only, and a
> person owns the final table before anyone relies on it.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
