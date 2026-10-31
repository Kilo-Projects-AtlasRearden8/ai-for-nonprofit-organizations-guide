# 4. Donor Thank-You Notes with Free AI

A good thank-you note keeps donors giving. AI can write the first draft in seconds. Your personal touch makes it worth reading.

## Why this matters

- 70% of first-time donors never give again — a personal thank-you changes that.
- A prompt thank-you is worse than no thank-you. Take 5 minutes.
- Handwritten or personally-signed notes stand out against mass emails.

## What AI can do

- Write a warm first draft in any tone.
- Personalize many notes from a template.
- Check that you included the gift amount, date, and impact.
- Suggest a subject line.

## What AI cannot do

- Know the donor's preferences, history, or relationship to your cause.
- Replace a real signature or a real memory of the donor.

## The workflow

### Step 1 — Collect your facts (for each donor)

- Donor name (and how they prefer to be addressed).
- Gift amount and date.
- What the gift will do (be specific — "120 meals" beats "help").
- Any personal connection (they volunteered at the gala, they love dogs, etc.).
- How they gave (check, online, stock).

### Step 2 — Write a template with placeholders

Do not ask the AI to invent donor details. Give it a template with blanks.

```
Write a warm thank-you note for a donor. Use ONLY these facts.

Dear [NAME],

Thank you for your gift of $[AMOUNT] on [DATE]. Your support means [ONE SPECIFIC IMPACT].

[OPTIONAL: ONE PERSONAL SENTENCE about the donor or their connection to the cause]

With gratitude,
[YOUR NAME]
[YOUR TITLE]
[ORGANIZATION]
```

### Step 3 — Fill in each donor

Replace each `[PLACEHOLDER]` with real data. Read it out loud. Adjust the tone per donor:

- **Major donor:** longer, more personal, mention their history.
- **First-time donor:** welcome them, tell them what their gift does.
- **Volunteer donor:** thank them for time *and* money.
- **Anonymous donor:** thank the gift, not the name.

### Step 4 — Send

- Email is fine for most donors.
- Handwritten notes for major donors and volunteers.
- Include a specific impact line whenever you can.

## Free-model prompt pack

**Prompt 1 — Basic thank-you**

```
Write a warm, sincere thank-you note for a donor. Use only these facts:
Donor: [name]
Gift: $[amount] on [date]
Impact: [one specific thing the gift provides]
Tone: [warm / formal / casual]
Length: 100-150 words
Do not invent facts or relationships.
```

**Prompt 2 — Major donor**

```
Write a more personal thank-you note for a major donor. Use only these facts:
[name], [any history you know, e.g. "has supported us for 8 years"]
Gift: $[amount]
Impact: [specific]
Tone: warm and respectful
Length: 150-200 words
Mention their history only if I gave it. Do not invent.
```

**Prompt 3 — Impact sentence**

```
Rewrite this sentence to be more specific and human: "[vague sentence]"
Example of what to aim for: "Your gift provides 60 hot meals for seniors this winter."
Keep it under 25 words.
```

**Prompt 4 — Batch from a spreadsheet**

```
I have 10 donors. For each, write a 2-line thank-you using only the facts in this table.
Table: [name | amount | date | impact line]
Output one note per donor, separated by "---".
Do not invent any facts.
```

## Printable planner

Use `site/planner-thankyou.html` to plan your notes.

## Privacy note

Donor names and gift amounts are private. **Use a local model.** Do not paste a donor list into any hosted service. If you must use a hosted model, strip all names and amounts and only ask for sentence structure.

## Next step

[05-event-flyers.md](05-event-flyers.md)