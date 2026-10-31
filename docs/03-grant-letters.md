# 3. Grant Letters with Free AI

Grants are paperwork, and paperwork is where AI shines. Free AI can help you **structure, draft, and polish** a grant proposal — but you supply the facts, the budget, and the funder's requirements.

## What AI can do for grants

- Turn your notes into a narrative case statement.
- Match your language to the funder's priorities.
- Expand a one-sentence idea into a full proposal section.
- Check that your budget table matches your narrative.
- Format headings, tables, and page numbers.

## What AI cannot do

- Know your funder's specific guidelines (you must read them).
- Produce accurate numbers (you must fill in the budget).
- Guarantee a win (no one can).

## The workflow

### Step 1 — Gather your facts (before you touch AI)

Collect these first. AI can only rearrange what you give it.

- Funder name and their current grant guidelines.
- Your organization's legal name, mission, tax ID, and contact.
- The project name and summary (one or two sentences).
- The problem you are solving, with one or two real examples.
- Your goals and how you will measure them.
- The budget (income and expenses).
- The timeline (start date, end date, reporting date).
- Key people (program director, finance contact).

### Step 2 — Write a one-paragraph "case statement"

A case statement is your organization's story in one paragraph. It is the seed of every grant.

> *Example (filled in):*
> "Haven Community Kitchen has served hot meals to food-insecure residents of River County for 14 years. Last year we provided 42,000 meals. This grant will expand our weekend pantry program from 200 households to 400, reducing wait times by 50% and adding a nutrition education workshop."

### Step 3 — Prompt the AI

Copy your case statement and facts into the model. Use a prompt like this:

```
I am writing a grant proposal for a nonprofit. Use only the facts I give you.

Organization: [name]
Mission: [mission]
Funder priority: [paste the funder's stated priority]
Project: [project name and summary]
Problem: [what problem, with your example]
Goal: [what you will achieve]
Budget: [total amount]
Timeline: [start, end, reporting date]

Write a grant proposal with these sections:
1. Executive Summary (150 words)
2. Problem Statement (200 words)
3. Project Description (300 words)
4. Goals and Evaluation
5. Budget Overview (use a table)
6. Timeline

Write in plain, confident English. Do not invent facts, numbers, or programs that I did not provide. If I did not give you a fact, write "[INSERT]".
```

### Step 4 — Fill the gaps

The AI will leave `[INSERT]` markers. Fill each one with a real fact.

### Step 5 — Check before you send

- [ ] Every number matches your budget sheet.
- [ ] Every date matches the funder's deadline.
- [ ] The tone matches the funder's style (some want formal, some want direct).
- [ ] You followed the funder's exact page limit and format.
- [ ] A real human read it out loud.

## Free-model prompt pack

Use any of these with your local model (Ollama) or a free hosted model.

**Prompt 1 — Executive summary**

```
Write a 150-word executive summary for a grant proposal. Use these facts:
[case statement]
Funder: [name]
Amount requested: [amount]
Use these facts only. Do not invent. Write in the first person plural ("we").
```

**Prompt 2 — Problem statement**

```
Write a 200-word problem statement for a nonprofit grant. Use these facts:
[problem + example]
[any statistics you have]
Do not invent statistics. If you do not have a number, write "[INSERT STATISTIC]".
```

**Prompt 3 — Budget table**

```
Create a budget table with these line items and amounts:
[list items and amounts]
Add a TOTAL row. Format as a Markdown table with columns: Line Item | Amount | Notes.
```

**Prompt 4 — Funder alignment**

```
My funder says: "[paste funder's priority statement]"
Rewrite this project description so it clearly shows how the project serves that priority. Keep all facts the same. Do not add new programs.
```

## Printable planner

Use `site/planner-grant.html` to plan your grant on paper (or print to PDF).

## Privacy note

Grant budgets can be sensitive. **Use a local model (Option A) for the budget section.** Do not paste donor lists, individual giving history, or private financial details into any hosted service.

## Next step

[04-thank-you-notes.md](04-thank-you-notes.md)