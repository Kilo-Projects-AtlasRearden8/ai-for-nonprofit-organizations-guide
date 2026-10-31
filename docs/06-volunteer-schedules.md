# 6. Volunteer Schedules with Free AI

Scheduling volunteers is half organization, half people-work. AI helps with the organization. You handle the people part.

## What AI can do

- Turn a list of shifts into a schedule grid.
- Check for coverage gaps.
- Suggest balanced shifts (not the same person every time).
- Write shift reminder messages.
- Rebalance a schedule when someone cancels.

## What AI cannot do

- Know who is actually available (you must give it availability).
- Know who has training or certifications (you must tell it).
- Contact volunteers for you (you still send the message).
- Respect real-life constraints (childcare, transportation, health) unless you tell it.

## The workflow

### Step 1 — Gather your facts

Collect this before prompting:

- Dates and times of the event or program.
- Shifts (start and end time for each).
- Number of volunteers needed per shift.
- Each volunteer's availability (which shifts they can work).
- Any training or role requirements (e.g., "cash handling needs training").
- A contact person for questions.

### Step 2 — Give the AI a clean input

Do not send a messy list. Use a table.

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

### Step 3 — Check the schedule

AI can make mistakes. Check before you send it out:

- [ ] Every shift has the required number of volunteers.
- [ ] No one is scheduled for a shift they cannot work.
- [ ] No one works more than [X] shifts total (set your own limit).
- [ ] Every volunteer knows their shift (send reminders).
- [ ] There is a backup contact if someone calls in sick.

### Step 4 — Send reminders

Use a prompt to draft reminder messages:

```
Write a friendly shift reminder for volunteers. Use only these facts:
Event: [name]
Date: [date]
Time: [time]
Location: [address]
What to bring: [items]
Tone: warm and short
Do not invent details.
```

### Step 5 — Handle changes

When someone cancels, ask the AI to rebalance:

```
A volunteer cancelled Shift X. Rebalance the schedule using only the volunteers and their availability I already gave. Show the new schedule and any new gaps.
```

## Free-model prompt pack

**Prompt 1 — Build the schedule** (see Step 2).

**Prompt 2 — Coverage check**

```
Check this schedule for coverage problems. List:
1. Any shift with fewer volunteers than needed.
2. Any volunteer scheduled outside their stated availability.
3. Any volunteer working more than 3 shifts in a row.
[schedule]
```

**Prompt 3 — Reminder batch**

```
Write one short reminder message for each shift below. Use only the facts given. One message per shift, separated by "---".
[shift list with date, time, location]
```

**Prompt 4 — Fairness check**

```
Check whether shifts are distributed fairly in this schedule. Show which volunteers work the most and fewest shifts. Suggest one change that would make it fairer, without changing availability.
[schedule]
```

## Printable planner

Use `site/planner-schedule.html` to plan your schedule on paper.

## Privacy note

Volunteer schedules contain people's names and contact details. **Use a local model.** Do not paste a volunteer list into a hosted service. If you use a hosted model, strip names and only ask about structure.

## Next step

[07-prompt-library.md](07-prompt-library.md)