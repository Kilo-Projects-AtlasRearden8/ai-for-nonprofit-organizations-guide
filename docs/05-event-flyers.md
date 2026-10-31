# 5. Event Flyers with Free AI

Flyers are copy and layout. AI handles the copy fast; you handle the layout and the design rules. This page covers both.

## What AI can do

- Write event copy (title, hook, details, call to action).
- Suggest headline variants.
- Organize details into a clean list.
- Rewrite copy at different lengths (short social post vs. full flyer).
- Check that every essential detail is present.

## What AI cannot do

- Design the actual layout (use a free tool for that — see below).
- Know your branding (colors, logo, fonts) unless you tell it.
- Produce a print-ready file by itself.

## The workflow

### Step 1 — Gather your facts

Before prompting, collect:

- Event name (exact title).
- Who it is for (audience).
- Date and time (with time zone if relevant).
- Location (address, room, link).
- What will happen (agenda or highlights).
- Who is speaking, hosting, or performing.
- How to register (URL, phone, email, walk-ins welcome).
- A contact person and their details.
- Your logo, brand colors, and fonts (if any).

### Step 2 — Write the core copy

Use a prompt like this:

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

### Step 3 — Get headline variants

```
Give me 5 headline options for this event: [event name and one-line description].
Mix in: curiosity, benefit to the attendee, and community spirit.
Keep each under 8 words.
```

### Step 4 — Layout with a free tool

AI cannot design the page. Use one of these **free** tools:

| Tool | Best for |
| --- | --- |
| [Canva](https://www.canva.com) | Drag-and-drop flyer templates. Free tier is generous. |
| [Microsoft Publisher](https://www.microsoft.com) | If you have Microsoft 365. |
| [LibreOffice Draw](https://www.libreoffice.org) | Free, offline, print-ready. |
| [Google Slides](https://slides.google.com) | Free, easy to share and print. |

**Design rules that make any flyer work:**

1. One message per flyer. Do not cram everything in.
2. Date, time, and location in **large, bold** text.
3. A single, clear call to action ("Register at URL" or "Walk-ins welcome").
4. Your logo in the corner, consistent colors.
5. High contrast (dark text on light background).
6. Print at 100% scale, not "fit to page."

### Step 5 — Check before you print or post

- [ ] Date and time are correct.
- [ ] Location is correct and the address is not a P.O. box for a physical event.
- [ ] Registration link works (click it).
- [ ] Contact email is one you monitor.
- [ ] Text is readable at a small size (squint test).
- [ ] A second person read it.

## Free-model prompt pack

**Prompt 1 — Full flyer copy** (see Step 2 above).

**Prompt 2 — Short version (for social media)**

```
Turn this flyer copy into a 3-line social media post plus 3 hashtags:
[flyer copy]
Keep it under 120 characters.
```

**Prompt 3 — Accessibility check**

```
Read this flyer copy and tell me:
1. Is every date, time, and location stated clearly?
2. Is the call to action obvious?
3. Is anything missing (registration link, contact, cost)?
List only what is missing or unclear.
```

**Prompt 4 — Rewriting for clarity**

```
Rewrite this flyer copy to be shorter and clearer. Cut 30% of the words. Keep every fact.
[copy]
```

## Printable planner

Use `site/planner-flyer.html` to plan your flyer.

## Privacy note

Flyers are public by design. Do not put anyone's personal phone number or email on a flyer unless they have agreed to be a public contact.

## Next step

[06-volunteer-schedules.md](06-volunteer-schedules.md)