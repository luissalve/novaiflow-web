# Level 2 · Applied — Training Manual


*Turning prompts into reusable templates your team can rely on.*

Welcome back. If Level 1 taught you to write a clear, one-off prompt, **Level 2 teaches you to stop writing the same prompt twice.** This manual is your companion for **Level 2 · Applied (Intermediate)**, part of the NovAIFlow AI Training & Enablement program. It is written for the same everyday business people — no technical background, no programming, no jargon — and everything is done in plain language, English or Spanish.

This level is two hours long because we go from *using* AI to *standardizing* how your team uses it. You will turn your best prompts into **reusable templates**, learn the handful of patterns behind almost every good result, get fast at writing, summarizing, building tables and briefing images — and assemble it all into a shared **team template kit** that anyone can pick up and use the same way, every time.

> **The whole level in one line:** turn good prompts into reusable molds, then gather those molds into a kit your whole team trusts.

This manual assumes you completed **Level 1 · Fundamentals**. We will recap the essentials in Chapter 1, but we will not re-explain what generative AI is or why a human always reviews the output — those are foundations you already have.

---

## 1. Recap: prompt anatomy in 90 seconds

Everything in this level stands on the Level 1 formula. Here it is, one more time, because we are about to build on it.

> **A good prompt has four parts: Role · Task · Context · Format.**

| Part | The question it answers | Quick example |
|---|---|---|
| **Role** | Who should the AI act as? | "You are a calm logistics coordinator." |
| **Task** | What exactly do you want done? | "Write a delay notice to a client." |
| **Context** | What facts does it need? | "Shipment #4471 is two days late." |
| **Format** | How should the answer look? | "Short email, English, under 120 words." |

You also learned two habits we will lean on constantly:

- **Refine, don't restart.** Stay in the same chat and steer with small instructions ("shorter", "warmer", "add an example") instead of starting over.
- **The human stays in charge.** AI drafts; a person reviews, verifies and owns the result.

If any of that feels shaky, that's fine — it gets sharper the moment you start turning these prompts into templates, which is exactly what Chapter 2 does.

---

## 2. From prompt to template

A **prompt** is something you write once. A **template** is a prompt you write *well, once,* then reuse forever by swapping a few details. That is the single biggest leap in this level.

Think about the emails, notices and summaries you produce each week. Most of them are 90% the same and 10% different. The role is the same. The tone is the same. The language and format are the same. Only a few facts change — a name, a date, a number, the text you paste in. **A template freezes the 90% and leaves blanks for the 10%.**

We mark those blanks with `{curly braces}`. Anything in braces is a variable you fill in; everything else stays exactly as written.

```
Act as a {role} who is {helpful trait}.
{Task} the text below for {audience}.
Context: {paste your non-sensitive details here}.
Return it in {format}, {tone} tone, in {language}, max {length}.
```

The payoff is bigger than saving keystrokes:

| Without a template | With a template |
|---|---|
| Results vary every time you write it | Results are consistent and predictable |
| Each person does it their own way | The whole team produces the same quality |
| You re-explain the same context daily | The context is built in once |
| Onboarding a new hire is slow | A new hire is productive on day one |

**Naming matters.** Give each template a short, searchable name like "Client delay notice" or "Voicemail-to-summary." If your team can't find a template in five seconds, they'll write a new prompt from scratch — and you've lost the benefit. We'll cover naming and storing the kit in Chapter 8.

---

## 3. Prompt patterns that work

Behind almost every good result is one of a few simple **patterns**. You don't need to memorize them as theory — recognize them so you can reach for the right one on purpose.

| Pattern | What it does | Reach for it when… |
|---|---|---|
| **Instruction** | Clear verb + what + how (the Level 1 base) | Most everyday tasks |
| **Example** | "Here's a good one — make more like it" | You want a specific style matched |
| **Step-by-step** | "Do it in steps and show me each step" | The task is long or has stages |
| **Role** | Assign expertise to set tone and vocabulary | Tone and word choice matter |
| **Refine** | Improve instead of redo | The draft is close but not right |

### The example pattern — show, don't just tell

The fastest way to get the *style* you want is to hand the AI a good example and ask for more like it.

```
Here is one of our product blurbs we like:
"{paste one short, on-brand example}"

Write {3} more in the same voice and length for these products:
{list the products and one key fact each}.
```

### The step-by-step pattern — for anything with stages

When a task has parts, ask the AI to work through them in order. You catch mistakes earlier and the result is more complete.

```
Help me prepare a client update in three steps.
Step 1: list the key facts I should cover from the notes below.
Step 2: draft a short, warm email using those facts.
Step 3: give me a one-line Spanish summary I can text.

Notes: {paste non-sensitive notes}.
```

### Combining patterns

Real templates often blend two patterns — a **role** plus an **instruction**, or an **example** plus a **format**. Start simple; add a pattern only when the result needs it. More instruction is not always better. If a plain instruction gives you what you need, stop there.

---

## 4. Choosing the right approach

You will sometimes have a choice between a fast, everyday assistant and a "most capable" mode (often labeled with words like *Pro*, *Advanced*, or a higher model name). You do **not** need to understand the technology to choose well. Use this plain-language rule:

| Your task | Use this |
|---|---|
| A short email, a quick translation, a simple list | Any modern assistant — the fast one is fine |
| A long document to summarize, careful reasoning, lots of data | The "most capable" mode |
| Anything with figures, legal wording, or that goes to a client | The most capable mode — **and** a human verifies |

Three things to keep in mind, in plain terms:

1. **Speed vs. care.** Fast modes are great for volume; capable modes are better when accuracy and nuance matter. Match the mode to the stakes.
2. **Privacy is about the tool, not the mode.** A more capable mode is still a public tool unless your company says otherwise. The sensitive-data rule (Chapter 9) applies regardless.
3. **Always verify the facts.** No mode removes the need to check names, numbers, dates, figures and legal language. The smarter the model sounds, the more convincingly it can be wrong.

When in doubt, draft in the fast mode, then ask the capable mode to review or tighten the important parts.

---

## 5. Writing and rewriting

The most common use of AI at work is plain writing — and templates make it consistent. Here are the moves you'll use daily.

### Draft from bullet points

Don't stare at a blank page. Dump the facts as rough bullets and let the AI shape them.

```
Act as a {role} with a {warm, professional} voice.
Turn these bullet points into a {short email} for {audience}, in {language}:
- {fact}
- {fact}
- {fact}
End with {a clear next step}.
```

### Rewrite for tone

Have a draft that's almost right? Don't redo it — reshape it.

```
Rewrite the text below to be {more concise / warmer / more formal}.
Keep all the facts the same. Do not add anything new.

{paste your draft}
```

### Translate while keeping voice (EN ⇄ ES)

```
Translate the message below into {Spanish}. Keep the meaning and a
{friendly, professional} tone. Do not translate proper names or product
codes. Then give me one line on anything that didn't translate cleanly.

{paste the message}
```

### Keep the company voice consistent

This is where a template earns its keep across a team. Bake your voice into the role and an example, and everyone's output sounds like one company instead of ten different people.

```
Act as a writer for {Company}. Our voice is {clear, warm, no hype}.
Here is an on-brand example: "{paste one}".
Now write {what you need} in that same voice.
```

---

## 6. Summarizing long documents

Summaries are one of AI's strongest, most reliable uses — turning a long thread, contract, report or set of meeting notes into something a busy person can act on in 30 seconds.

The key is to **ask for a fixed shape**: a set number of points, who it's for, and whether you want next steps. A fixed shape is what makes a summary a reusable template instead of a one-off.

```
Summarize the text below for {a busy manager}.
Give me exactly {5} key points as bullets, then a separate line:
"Next step:" with the single most important action.
Keep figures and names exactly as written. In {language}.

{paste the non-sensitive long text}
```

Two honest cautions, because summaries have a known weakness:

- **Summaries drop nuance.** A short version loses detail by design. For anything important — a contract clause, a medical note, a legal deadline — read the original, not just the summary.
- **Figures and names must survive intact.** Tell the AI to keep them exactly as written, and still spot-check them. A summary that rounds "$4,471" to "about $4,500" can cause real problems.

A useful refinement: after the summary, ask *"What did you leave out that I might need?"* — it often surfaces a detail worth keeping.

---

## 7. Messy text into clean tables and spreadsheets

A huge amount of office pain is **unstructured text** — a wall of notes, an email thread, a pasted list — that you wish were a tidy table. AI is excellent at this first pass.

### Turn a mess into a table

```
Turn the text below into a clean table with columns:
{Name | Date | Status | Next step}.
One row per item. If a value is missing, write "—".
Sort by {Date, soonest first}.

{paste or list the messy information}
```

### Get a formula explained in plain words

You don't write code here — but you can ask the AI to *describe* a spreadsheet formula in plain language and tell you where it goes.

```
In plain words, explain how to make a spreadsheet column that shows
{a running total of the Amount column}. Tell me the formula to type and
which cell to put it in. Assume the data starts in row {2}.
```

One rule makes this safe and reliable:

> **AI describes the table or formula; a person builds and checks it in the real spreadsheet.**

The AI can't see your actual file, so treat its table as a draft you paste in and verify, and its formula as instructions you type and test on real numbers. Never trust a total it produces without checking it against the source.

---

## 8. Generating images and writing image briefs

You can create simple graphics and photos — for a campaign, a notice, a social post — by describing what you want in words. The skill here is writing a clear **image brief**, the same way you'd brief a designer.

A good brief covers five things:

| Element | What to specify | Example |
|---|---|---|
| **Subject** | What is in the image | "A delivery van at a loading dock" |
| **Style** | Photo, illustration, flat graphic, etc. | "Clean flat illustration" |
| **Colors** | Palette, including brand red | "White background, accents in `#E5002B`" |
| **Format** | Size / orientation | "Square, for Instagram" |
| **Text on image** | Exact words, if any | 'The headline reads "Weekend Sale"' |

```
Create an image of {subject}, in a {style} style.
Colors: {palette}; use brand red {#E5002B} for accents.
Format: {square / landscape}, suitable for {use}.
{Include the text "{exact words}". / No text on the image.}
Keep it simple and uncluttered.
```

Three guardrails for images, because they go out in public:

1. **Check accuracy.** AI images often get hands, text spelling, logos and counts wrong. Read every word in the image.
2. **Respect rights.** Don't ask for real logos, copyrighted characters, or a real person's likeness.
3. **Confirm brand fit.** Only `#E5002B` is the NovAIFlow red. A person approves before anything is published.

Many teams use AI images mainly for **internal drafts and mood-boards**, then have a designer finalize anything customer-facing. That's a perfectly good use of the tool.

---

## 9. Responsible use, applied to templates

You already know the five principles from Level 1. At this level they stop being abstract and become **lines you write into every template card.** The kit *is* how responsible use scales across a team.

| Principle | How it lives in a template |
|---|---|
| **No sensitive data** in public tools without policy | The template uses sample data; the card notes the policy |
| **Human-in-the-loop** | Every card ends with a "Check before sending" line |
| **Verify facts and figures** | The card flags exactly what must be confirmed |
| **Disclose where required** | The card notes if AI use must be disclosed |
| **Company standard over improvisation** | The kit itself is the standard |

The single most important habit at this level: **every template ends with a review step.** A template that drafts a client email but doesn't remind the user to verify the shipment number is an unfinished template. The "Check before sending" line is not optional — it's what makes the kit safe to hand to anyone.

---

## 10. Assembling the team template kit

This is your deliverable, and it's simpler than it sounds. A **template kit** is one shared document holding a collection of **template cards** — and a card is just five short lines plus a couple of labels.

### The template card

```
Name:                 {short, searchable name}
For which task:       {what it does, in one line}
Template:             {the prompt, with {variables} in curly braces}
When to use it:       {the trigger or situation}
Check before sending: {what a person must verify}
Language(s):          {EN / ES / both}
Owner:                {who maintains this card}
```

### A worked card

```
Name:                 Client shipment notice
For which task:       Tell a client their shipment ships tomorrow
Template:             Act as a logistics coordinator. Draft a {tone} email
                      to {client} noting shipment {number} ships {date}.
                      Include the tracking number {tracking}. In {language},
                      max {length} lines.
When to use it:       Outbound shipment confirmed, before cut-off
Check before sending: Shipment number, date and tracking number are correct
Language(s):          EN / ES
Owner:                Dispatch lead
```

### Three rules that keep a kit trustworthy

1. **Test before you add.** A template earns its place only after it works on **two real (non-sensitive) cases** without big edits.
2. **Name an owner.** The kit needs one person responsible for keeping it current, or it rots.
3. **Keep it alive.** Add a card whenever the team finds a new repeated task; retire cards that go stale.

A good kit is small at first — five solid cards beat fifty mediocre ones. It grows naturally as your team spots more repeated work.

---

## 11. Choosing the right approach — a quick decision guide

Put it together. When a task lands on your desk, run it through this:

1. **Is this a one-off or a repeat?** Repeat → make (or reuse) a template. One-off → just prompt it.
2. **Which template type fits?** Email · Summary · Spreadsheet · Image — or plain writing.
3. **What are the stakes?** High → use the most capable mode and verify carefully.
4. **Any sensitive data?** Yes → stop; use sample data or an approved tool.
5. **Did a person review it?** Always yes before it leaves your screen.

That five-question reflex is the real skill of Level 2. The templates make you fast; these questions keep you safe.

---

## 12. Quick FAQ

**Do I still not need to code?**
Correct — nothing here is programming. A template is just a well-written prompt with a few blanks. You type in plain English or Spanish.

**How many templates should the kit have?**
Start with five strong ones across at least three types. Quality beats quantity. The kit grows over time.

**What if a template gives a different result each run?**
Lock it down: be specific about tone, length and format, and give an example. Vague templates wander; specific ones hold steady.

**Can the AI build the spreadsheet for me?**
It describes the table and explains the formula; you build and verify it in the real file. It can't see or change your actual spreadsheet.

**Are AI images safe to publish?**
Only after a person checks accuracy, rights and brand fit. Use them freely for internal drafts; review carefully before anything goes public.

---

## 13. One-page cheat sheet

Keep this at your desk. It's the whole level on a page.

| Topic | Remember this |
|---|---|
| **Core idea** | Don't write the same prompt twice — make a template |
| **Template** | A good prompt with `{variables}` for the parts that change |
| **Patterns** | Instruction · Example · Step-by-step · Role · Refine |
| **Writing** | Draft from bullets, rewrite for tone, translate keeping voice |
| **Summaries** | Ask for a fixed shape; keep figures and names intact |
| **Tables** | AI drafts the table; you build and check it in the real sheet |
| **Images** | Brief subject · style · colors (`#E5002B`) · format · text |
| **Model choice** | Fast for everyday; "most capable" for long, data-heavy, high-stakes |
| **Always** | A person reviews; no sensitive data; verify facts |

**The reusable template starter:**

```
Act as a {role} who is {helpful trait}.
{Task} the text below for {audience}.
Context: {paste your non-sensitive details}.
Return it in {format}, {tone} tone, in {language}, max {length}.
```

**The template card, in one breath:**
*Name · For which task · Template · When to use it · Check before sending · Language(s) · Owner.*

---


— NovAIFlow · AI Training & Enablement · novaiflow.com
