# Level 1 Workshop Guide — Write Your First Useful Prompt (24 minutes)

This is the facilitator and participant guide for the **24‑minute hands‑on workshop** in Level 1 ·
Fundamentals. By the end, every participant has written one real, useful prompt using the
**Role · Task · Context · Format** formula — the same prompt that becomes the first of their three
deliverable prompts in the project that follows.

The workshop is the heart of the class (40% of the hour). It comes right after the live demo, where
the group already watched a vague prompt turn into a useful one. Here, participants do it themselves
with a real task from their own week — no code, all in plain language, English or Spanish.

---

## At a glance

| Item | Detail |
|---|---|
| Duration | 24 minutes |
| Group size | Up to 5; larger groups split into pairs |
| Goal | Each person leaves with **one finished, reusable prompt** |
| Formula taught | **Role · Task · Context · Format** |
| Feeds into | The 6‑minute project: *3 prompts for your role* |
| Tools | Any approved chat assistant (the one used in the demo) |

---

## Materials checklist

Before the workshop block starts, confirm you have:

- [ ] **Approved chat assistant open** on the facilitator screen (the same one used in the demo).
- [ ] **Participant worksheet** printed or shared digitally (one per person — see the end of this guide).
- [ ] **The formula visible** at all times — on a slide, whiteboard, or printed card: *Role · Task · Context · Format*.
- [ ] **A device per participant** (laptop, tablet, or phone) signed in to the approved tool.
- [ ] **The prompt cheat‑sheet** from `handouts/` within reach.
- [ ] **A "do‑not‑paste" reminder** visible: no PHI, PII, or confidential data in public tools (see Responsible AI below).
- [ ] **A timer** (phone or on‑screen) so the four segments stay on track.
- [ ] **Two pre‑written example prompts** ready in case someone is stuck (one generic, one for the room's main industry).

> **Bilingual note:** Keep both the formula and the worksheet visible in English *and* Spanish.
> If the room is mixed, say each instruction once in each language, or pair a bilingual participant
> with anyone who needs it.

---

## Minute‑by‑minute facilitator script

### 0–2 min · Set up

**Goal:** everyone has their device, the worksheet, and the formula in front of them.

1. "Open the same assistant we just used in the demo. Don't type anything yet."
2. Hand out (or share) the worksheet. Point to the four boxes: **Role, Task, Context, Format**.
3. Say the one rule out loud: *"We never paste anything private — no patient data, no client
   confidential info, no IDs. If your real task needs that, we'll use made‑up sample data today."*
4. Confirm the timer is visible.

**Facilitator tip:** Keep this tight. If a device won't log in, pair that person with a neighbor
rather than stopping the room.

### 2–6 min · Demo recap (model it once)

**Goal:** remind everyone what "good" looks like by building one prompt live, fast.

1. Take a simple, universal task — for example: *"reply to a customer asking where their order is."*
2. Build it out loud, naming each piece as you type:
   - **Role:** "Act as a friendly customer‑service rep for a logistics company."
   - **Task:** "Draft a reply to this customer."
   - **Context:** paste a short, *made‑up* message — "Order #12345, shipped Tuesday, customer asks for an update."
   - **Format:** "Keep it under 80 words, warm and professional, in English."
3. Run it. Read the result aloud.
4. Then refine once, out loud: *"Make it a little shorter and add an apology for the delay."*
5. Land the point: **"You don't have to get it perfect on the first try. You refine. That's the skill."**

```text
Act as a friendly customer-service rep for a logistics company.
Draft a reply to this customer.
Context: Order #12345, shipped Tuesday. Customer asks where it is.
Format: under 80 words, warm and professional, in English.
```

**Facilitator tip:** Resist over‑explaining. Two minutes of theory max — the value is in the next block.

### 6–20 min · Participants build their prompt (the core, 14 min)

**Goal:** each person writes and refines one prompt for a real task from their own week.

Walk the room and coach. Use this internal pacing:

| Sub‑step | ~Time | What participants do | What you say / do |
|---|---|---|---|
| Pick the task | 6:00–8:00 | Choose one real, repeated task (an email, a summary, a reply). | "Pick something you did this week and will do again. Boring is good." |
| Role + Task | 8:00–11:00 | Write "Act as…" + one clear verb (draft, summarize, translate). | Circulate; check every verb is concrete. |
| Add context | 11:00–14:00 | Paste relevant **non‑sensitive** sample data. | Watch for private data; offer fake data substitutes. |
| Ask for format | 14:00–16:00 | Add length, tone, language, structure. | "Tell it *how* you want the answer to look." |
| Run + refine | 16:00–20:00 | Run, read, then improve with one follow‑up. | "Don't restart — refine. Add one instruction." |

**Coaching moves while you circulate:**

- Read over shoulders silently first; only step in when someone stalls for ~30 seconds.
- When you help, ask a question instead of giving the answer: *"What role should it play?"*
- Celebrate the first good refinement out loud so the room hears it: *"Nice — Maria just made the AI shorter on purpose."*
- Keep an eye on the clock; announce "two minutes to your first run" at the 14‑minute mark.

### 20–24 min · Share + refine (4 min)

**Goal:** 2–3 people share, the group learns one improvement each, everyone saves their prompt.

1. Ask **2 or 3 volunteers** to read their task and their prompt (not the AI's full answer — the *prompt*).
2. For each, ask the room: *"What one thing would make this prompt better?"* Take a single suggestion.
3. Have the author apply that one change live and re‑run if time allows.
4. Close the loop: *"Save this prompt on your worksheet. This is prompt #1 of the three you'll keep
   as your deliverable."*
5. Bridge to the project: *"In the next few minutes you'll add two more and you'll walk out with
   your first AI asset."*

**Facilitator tip:** If the room is shy, share one *you* spotted while circulating (with permission)
instead of cold‑calling.

---

## What good looks like

A successful workshop prompt has all four parts and is **reusable** — not a one‑off question.

| Quality | Vague (not yet) | Useful (good) |
|---|---|---|
| Role | *(missing)* | "Act as a bilingual front‑desk coordinator for a clinic." |
| Task | "write something" | "Draft a no‑show follow‑up message." (one clear verb) |
| Context | *(none, or private data)* | "Patient missed a routine cleaning; sample name 'A. López'; offer two reschedule times." |
| Format | *(unspecified)* | "Under 60 words, warm tone, in Spanish, ready to send by text." |
| Reusable? | tied to one specific case | uses `{placeholders}` so it works next week too |

A great Level 1 prompt looks like this:

```text
Act as a bilingual front-desk coordinator for a dental clinic.
Draft a friendly no-show follow-up message to {patient first name}.
Context: missed a {appointment type}; offer these reschedule options: {option 1}, {option 2}.
Format: under 60 words, warm and professional, in {language}, ready to send by text.
```

---

## Common pitfalls and how to coach them

| Pitfall | What you'll see | How to coach it |
|---|---|---|
| **Blank page freeze** | Person stares, types nothing. | Offer a starter task: "What's an email you sent twice this week?" Hand them a pre‑written example to edit. |
| **Too vague** | "write an email" | Point at the formula card: "Which of the four parts is missing? Give it a role." |
| **Pasting private data** | Real names, IDs, patient or client info. | Stop gently, swap in sample data: "Let's use a made‑up name so this is safe to practice with." Reinforce the policy. |
| **One‑off, not reusable** | Prompt only works for today's exact case. | "Replace the specific bits with `{blanks}` you can fill in next time." |
| **Trusting the first answer** | Person accepts output without reading. | "Read it as if you were the customer. Would you send this? Refine one thing." |
| **Over‑refining / rabbit hole** | Person rewrites the prompt 10 times. | "Good enough beats perfect. Save it and add the next one." |
| **No format requested** | Output is a wall of text. | "Tell it the length, tone, and language you want." |
| **Believing facts blindly** | Output states a figure or policy as fact. | "AI can be confidently wrong. A person verifies before it goes out." |

---

## Accessibility & bilingual tips

- **Say it, show it, hand it.** Every instruction goes out three ways: spoken, on screen, and on the
  printed worksheet — so no one depends on hearing alone.
- **Run the room in both languages.** Give each instruction once in English and once in Spanish, or
  let participants choose their language; the assistant works equally in either.
- **Large, high‑contrast text** for the formula card and worksheet. The brand red `#E5002B` is for
  accents only — never as the only way to convey meaning (pair it with a label or icon).
- **Pace for everyone.** Offer "type or dictate" — the assistant accepts either. Let slower typers
  pair up rather than fall behind.
- **No jargon left undefined.** If you must use a term (e.g., "prompt"), define it once: *a prompt is
  simply the instructions you give the assistant.*
- **Pairing is fine.** Two people sharing one screen and one prompt is a valid outcome, not a failure.

---

## Responsible AI in this workshop (reinforce, don't lecture)

Weave these in naturally as you coach — one line each, when the moment is right:

1. **Never paste sensitive data** (PHI, PII, confidential) into public tools without an approved policy.
   *Today we practice with made‑up sample data.*
2. **Human‑in‑the‑loop:** the AI drafts, a person reviews and owns what goes out.
3. **Verify facts & figures:** AI can be confidently wrong — check anything that matters before sending.
4. **Disclose where required** and respect confidentiality.
5. **Company standard over improvisation:** the prompt you save here becomes part of a shared kit.

---

## Participant worksheet — Write your first useful prompt

> Keep this. The prompt you finish here is **prompt #1** of your three‑prompt deliverable.

**1. Pick a real task** you do often (an email, a summary, a reply):

`My task: ________________________________________________`

**2. Build your prompt using the formula.** Fill each box:

| Part | Your wording |
|---|---|
| **Role** — "Act as…" | |
| **Task** — one clear verb (draft, summarize, translate) | |
| **Context** — relevant, **non‑sensitive** info (use sample data) | |
| **Format** — length, tone, language, structure | |

**3. Write it out as one prompt** (use `{curly braces}` for anything you'll fill in next time):

```text
Act as {role}.
{Task — one clear verb} this for me.
Context: {relevant non-sensitive details}.
Format: {length}, {tone}, in {language}, as {bullets / a short paragraph / a table}.
```

**4. Run it. Read it. Refine once.** Write the one change you made:

`My refinement: __________________________________________`

**5. Safety check (tick all):**

- [ ] No private data (no real patient/client names, IDs, or confidential info)
- [ ] A person will review it before it's used
- [ ] I'd be comfortable if a colleague reused this prompt

**6. Save it** — this is prompt #1 of your deliverable:

| | Task | Prompt | When I use it |
|---|---|---|---|
| 1 | | | |

You're ready for the project: add **two more prompts** for your role and you'll walk out with your
first AI asset.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
