# AI for Nonprofits and Volunteer Groups

A beginner manual and static website that shows how nonprofits, volunteer groups, and small charities can use **free, privacy-safe AI** to write grant letters, donor thank-you notes, event flyers, and volunteer schedules.

Everything here is local-first, printable, and designed to work without handing your data to a third party.

> **Copyright (c) 2026 Asdale Dynamics, LLC** — MIT licensed. See [LICENSE](LICENSE).
>
> This project is an independent educational guide. It is not affiliated with, endorsed by, or sponsored by any AI model provider. All brand names are used for identification purposes only.

## Who this is for

- Nonprofit staff who write grants, thank donors, or plan events.
- Volunteer coordinators who build schedules and flyers.
- Small charities with no IT budget.
- Anyone who wants plain-English, step-by-step AI help — the way a friend would explain it.

## What's inside

| Folder | What it is |
| --- | --- |
| `docs/` | The full beginner manual, in Markdown. Read it, print it, or copy it into your own docs. |
| `site/` | A static HTML version of the manual plus printable planners. Open `site/index.html` in any browser. |
| `scripts/` | Build and test scripts. |

## The four tasks this guide covers

1. **Grant letters** — draft and refine grant proposals with free AI.
2. **Donor thank-you notes** — warm, personal, and fast.
3. **Event flyers** — layout and copy for community events.
4. **Volunteer schedules** — shift planning, coverage, and reminders.

## Free models (no API key, no billing)

You can do all four tasks with free, open models. Nothing here requires a paid account or a secret key.

- **Local models (run on your own computer)** — Ollama, LM Studio, llama.cpp. No data leaves your machine. Best for privacy.
- **Free hosted models** — Hugging Face, GitHub Models, Google Gemini (free tier), Mistral. Good for quick drafts.
- **Browser models** — Chrome's built-in AI (Gemini Nano), WebGPU. Zero install.

A rule of thumb: **draft with free AI, then read it yourself and fix it before it goes out.** AI is a fast assistant, not a final authority.

## Privacy-safe by design

- No account sign-ups required for the local path.
- No API keys, no secrets, no personal data committed to this repository.
- Sensitive details (names, amounts, addresses) stay on your computer.
- This guide never stores or transmits your drafts.

## Quick start

```bash
# 1. Install (nothing required — it's all static files)
npm install

# 2. Build the static site
npm run build

# 3. Run the tests
npm run test

# 4. Serve the site locally
npm run serve
# Then open http://localhost:8000
```

Or just open `site/index.html` directly in your browser.

## Printable planners

Each planner is a single, print-friendly HTML page:

- `site/planner-grant.html` — grant letter planner (outline, checklist, budget table).
- `site/planner-thankyou.html` — donor thank-you planner.
- `site/planner-flyer.html` — event flyer planner (copy grid, layout guide).
- `site/planner-schedule.html` — volunteer schedule planner (shift grid, coverage tracker).

Print any page with **Ctrl/Cmd + P**. Set the printer to "Save as PDF" if you want a digital copy.

## How to use this guide

1. Read `docs/01-getting-started.md` — AI basics in plain English.
2. Read `docs/02-free-models.md` — which free model to use for what.
3. Pick your task: `docs/03-grant-letters.md`, `docs/04-thank-you-notes.md`, `docs/05-event-flyers.md`, or `docs/06-volunteer-schedules.md`.
4. Open the matching planner in `site/` and fill it in.
5. Use the prompts in `docs/07-prompt-library.md` as starting points.

## Credits

- **Author:** Asdale Dynamics, LLC
- **License:** MIT — see `LICENSE`. Copyright (c) 2026 Asdale Dynamics, LLC.
- AI explanations are written for beginners, in the style of *The Massive AI Manual* by Dylan Asdale.

## Disclaimer

This guide is for education and writing assistance only. It is not legal, financial, tax, or medical advice. Always verify grant requirements with your funder, and have a human review final submissions.