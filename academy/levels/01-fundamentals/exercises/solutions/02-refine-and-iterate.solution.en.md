# Solution — Exercise 2: Refine and Iterate

This model walks through the same three rounds your learners ran, so they can compare. The lesson isn't
the final email — it's *seeing the prompt improve* as each missing scaffold part is added.

> **For facilitators:** ask learners to read all three answers aloud in order. The jump in quality is
> the teaching moment.

---

## Round 0 — the weak prompt

```text
Write an email about our new hours.
```

**What the assistant has to guess:** the business, the hours themselves, the audience, the tone, the
length, the language. A typical result is a generic, hollow email with `[Business Name]` and
`[insert hours]` placeholders — proof that the prompt didn't supply enough.

**Two problems a learner should notice:** (1) it doesn't know the actual hours, (2) it doesn't know
who it's for or what tone to use.

---

## Round 1 — add Context and Role

```text
Role: Act as the office manager at Sunny Smiles Dental, a small clinic in Miami.
Task: Write a short email to clients announcing new Saturday hours.
Context: Starting June 14, we're open Saturdays 9am–1pm for cleanings and check-ups. Clients have
asked for weekend slots, so this is good news. Friendly, welcoming tone.
```

**What improved:** the email is now true to the business and the offer. **What's still off:** no length
limit (it may run long), no subject line, no explicit call to action, and the language isn't pinned.

---

## Round 2 — add Format and constraints

```text
Role: Act as the office manager at Sunny Smiles Dental, a small clinic in Miami.
Task: Write a short email to clients announcing new Saturday hours.
Context: Starting June 14, we're open Saturdays 9am–1pm for cleanings and check-ups. Clients have
asked for weekend slots, so this is good news. Friendly, welcoming tone.
Format: Under 100 words, with a subject line, in English. End with an invitation to book online.
```

### A response this might produce

```text
Subject: Good news — we're now open Saturdays!

Hi there,

You asked, and we listened! Starting June 14, Sunny Smiles Dental is open Saturdays from 9am to 1pm
for cleanings and check-ups. Now it's even easier to fit your visit into a busy week.

Ready to grab a weekend slot? Book online anytime at [link], or give us a call.

See you soon,
The Sunny Smiles team
```

---

## Why each round got better

| Round | What was added | Effect |
|---|---|---|
| 0 → 1 | **Context + Role** | Email becomes specific and true to the business instead of generic. |
| 1 → 2 | **Format + constraints** | Output is the right length, has a subject line and a clear call to action, in the right language — ready to send after a quick review. |

---

## The big idea: iterating is a conversation

You rarely nail a prompt on the first try, and you don't have to. Two fast moves get you there:

1. **Rewrite** the prompt with the missing part added (what we did above), or
2. **Reply in the chat** — e.g. *"Shorter, add a subject line, and end with a booking link."* The
   assistant remembers the thread, so a one-line nudge often does the job.

Either way, **you** stay the judge: you decide when it's good enough, you review it, and you own the
final email before it goes out.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
