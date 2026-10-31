# 7. Prompt Library (Copy-Paste Starting Points)

Every prompt in this guide is collected here so you can copy, paste, and adapt. Fill in the `[BRACKETS]` with your own facts.

## How to use a prompt well

1. **Give facts first.** The AI cannot guess what you have not told it.
2. **Say "use only these facts."** This stops the AI from inventing things.
3. **Ask for `[INSERT]` markers** when a fact is missing, so you can fill it in later.
4. **Set the tone.** "Warm," "formal," "plain," "confident."
5. **Check everything.** AI drafts are drafts.

## Grant letters

### Prompt G1 — Case statement

```
Write a one-paragraph case statement for my nonprofit. Use only these facts:
Organization: [name]
Mission: [mission]
What you do: [one or two real examples]
Tone: confident, plain English
Length: 4-6 sentences
```

### Prompt G2 — Executive summary

```
Write a 150-word executive summary for a grant proposal. Use only these facts:
[case statement]
Funder: [name]
Amount requested: [amount]
Write in the first person plural ("we"). Do not invent facts.
```

### Prompt G3 — Problem statement

```
Write a 200-word problem statement for a nonprofit grant. Use only these facts:
[problem + example]
[any statistics you have]
Do not invent statistics. If you do not have a number, write "[INSERT STATISTIC]".
```

### Prompt G4 — Budget table

```
Create a budget table from these line items and amounts:
[list items and amounts]
Add a TOTAL row. Format as a Markdown table with columns: Line Item | Amount | Notes.
```

### Prompt G5 — Funder alignment

```
My funder says: "[paste funder's priority statement]"
Rewrite this project description so it clearly shows how the project serves that priority. Keep all facts the same. Do not add new programs.
[project description]
```

## Donor thank-you notes

### Prompt T1 — Basic thank-you

```
Write a warm, sincere thank-you note for a donor. Use only these facts:
Donor: [name]
Gift: $[amount] on [date]
Impact: [one specific thing the gift provides]
Tone: [warm / formal / casual]
Length: 100-150 words
Do not invent facts or relationships.
```

### Prompt T2 — Major donor

```
Write a more personal thank-you note for a major donor. Use only these facts:
[name], [any history you know, e.g. "has supported us for 8 years"]
Gift: $[amount]
Impact: [specific]
Tone: warm and respectful
Length: 150-200 words
Mention their history only if I gave it. Do not invent.
```

### Prompt T3 — Impact sentence

```
Rewrite this sentence to be more specific and human: "[vague sentence]"
Example of what to aim for: "Your gift provides 60 hot meals for seniors this winter."
Keep it under 25 words.
```

### Prompt T4 — Batch from a spreadsheet

```
I have 10 donors. For each, write a 2-line thank-you using only the facts in this table.
Table: [name | amount | date | impact line]
Output one note per donor, separated by "---".
Do not invent any facts.
```

## Event flyers

### Prompt F1 — Full flyer copy

```
I am writing a flyer for a community event. Use only these facts.
Event: [name]
Audience: [who it is for]
Date: [date]
Time: [time]
Location: [address or link]
What happens: [list]
How to register: [instructions]
Contact: [name and email]

Write flyer copy with these parts:
1. Headline (short, catchy)
2. Sub-headline (one sentence)
3. A short description (50-80 words)
4. Bullet list of key details
5. A call to action (how to sign up)

Write in plain, warm English. Do not invent facts, dates, times, or locations.
```

### Prompt F2 — Headline variants

```
Give me 5 headline options for this event: [event name and one-line description].
Mix in: curiosity, benefit to the attendee, and community spirit.
Keep each under 8 words.
```

### Prompt F3 — Short social version

```
Turn this flyer copy into a 3-line social media post plus 3 hashtags:
[flyer copy]
Keep it under 120 characters.
```

### Prompt F4 — Accessibility check

```
Read this flyer copy and tell me:
1. Is every date, time, and location stated clearly?
2. Is the call to action obvious?
3. Is anything missing (registration link, contact, cost)?
List only what is missing or unclear.
```

### Prompt F5 — Clarity rewrite

```
Rewrite this flyer copy to be shorter and clearer. Cut 30% of the words. Keep every fact.
[copy]
```

## Volunteer schedules

### Prompt S1 — Build the schedule

```
Build a volunteer schedule from these facts. Do not invent volunteers.

Event: [name]
Dates: [date range]

Shifts needed:
- [Shift name] | [start] | [end] | volunteers needed: [N]
- ...

Volunteers and their availability (only the shifts they can work):
- [Name] | [available shifts]
- [Name] | [available shifts]

Rules:
- Each shift must have the number of volunteers listed above.
- Do not schedule a volunteer for a shift they cannot work.
- Spread shifts fairly (no one works every shift if they can avoid it).
- If a shift is under-filled, mark it clearly.

Output a table with columns: Date | Shift | Time | Volunteers assigned.
Then list any shifts that are still unfilled.
```

### Prompt S2 — Coverage check

```
Check this schedule for coverage problems. List:
1. Any shift with fewer volunteers than needed.
2. Any volunteer scheduled outside their stated availability.
3. Any volunteer working more than 3 shifts in a row.
[schedule]
```

### Prompt S3 — Reminder batch

```
Write one short reminder message for each shift below. Use only the facts given. One message per shift, separated by "---".
[shift list with date, time, location]
```

### Prompt S4 — Rebalance after a cancellation

```
A volunteer cancelled Shift X. Rebalance the schedule using only the volunteers and their availability I already gave. Show the new schedule and any new gaps.
[schedule]
```

### Prompt S5 — Fairness check

```
Check whether shifts are distributed fairly in this schedule. Show which volunteers work the most and fewest shifts. Suggest one change that would make it fairer, without changing availability.
[schedule]
```

## General writing helpers

### Prompt W1 — Simplify

```
Rewrite this text at a 6th-grade reading level. Keep every fact. Do not add anything.
[text]
```

### Prompt W2 — Tone shift

```
Rewrite this paragraph in a [warm / formal / urgent / casual] tone. Keep all facts.
[paragraph]
```

### Prompt W3 — Spelling and grammar

```
Fix the spelling, grammar, and punctuation in this text. Do not change the meaning or the words.
[text]
```

### Prompt W4 — Summarize

```
Summarize this document in 3 bullets. Only use facts from the document.
[document]
```

## A note on copying prompts

Prompts are starting points. Adjust them to your model and your task. If a model ignores an instruction, say it again, more simply.

## Next step

Back to [01-getting-started.md](01-getting-started.md) or open a planner in `site/`.