# STATUS

## What was built

A beginner manual and static HTML site: **AI for nonprofits and volunteer groups**, covering grant letters, donor thank-you notes, event flyers, and volunteer schedules with free, privacy-safe AI models. Includes printable planners.

### Files
- `LICENSE` — MIT, copyright line exactly `Copyright (c) 2026 Asdale Dynamics, LLC`
- `README.md` — project overview, credits Asdale Dynamics, LLC
- `package.json` — scripts: `build`, `test`, `serve`
- `docs/` — 8 Markdown manual chapters:
  - 01-getting-started.md — AI basics in plain English
  - 02-free-models.md — local / free hosted / browser models
  - 03-grant-letters.md — grant proposal workflow + prompts
  - 04-thank-you-notes.md — donor thank-you workflow + prompts
  - 05-event-flyers.md — flyer copy + layout rules
  - 06-volunteer-schedules.md — shift grids + reminders
  - 07-prompt-library.md — copy-paste prompt pack
  - 08-privacy.md — privacy-safe workflow (data zones, local-first)
- `site/` — static HTML site:
  - index.html (landing page + planner links)
  - grants.html, thankyous.html, flyers.html, schedules.html, privacy.html, prompts.html
  - planner-grant.html, planner-thankyou.html, planner-flyer.html, planner-schedule.html (printable planners)
  - styles.css
- `scripts/build.js` — validates site/docs/credits, scans for secrets
- `scripts/test.js` — validates HTML structure, credits, docs, planners

### Credits
- Author / publisher: Asdale Dynamics, LLC (credited in README.md, LICENSE, and every HTML page)
- License: MIT

## How to run it

```bash
# Install nothing required (static files). Optional: npm install for script tooling.
npm install

# Validate the site and docs
npm run build

# Run tests
npm run test

# Serve the site locally (opens http://localhost:8000)
npm run serve
```

Or open `site/index.html` directly in any browser. Each planner page prints via Ctrl/Cmd + P or saves as PDF.

## Verification results

```
$ npm run build   -> Build passed. Errors: 0, Warnings: 0
$ npm run test    -> All tests passed. Errors: 0
```

Checks performed:
- All 12 site HTML files exist and are structurally valid (html/head/body/stylesheet)
- All 8 docs markdown files exist
- Every HTML page credits Asdale Dynamics, LLC
- LICENSE contains exact copyright line `Copyright (c) 2026 Asdale Dynamics, LLC`
- README.md credits Asdale Dynamics, LLC
- No API keys, secrets, or private keys detected in any tracked file
- All 4 printable planner pages present

## Known gaps

- The manual is Markdown-only; HTML task pages are hand-written summaries rather than auto-generated from Markdown (build script validates but does not convert Markdown to HTML).
- No automated spell-check or link-check beyond structural validation.
- No `.github/workflows` (intentionally omitted per instructions).
- Not registered with any AI provider; model names (Ollama, llama3.2, etc.) are informational only.
- Examples use fictional organizations and placeholder data; no real personal data included.
- Intended scope: nonprofit manual + static site only. Other LLC interests (agents/MCP, KDP, bookkeeping, healthcare aids, FFXIV/chess) are noted in the README context but not built in this release.
