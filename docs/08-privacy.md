# 8. Privacy-Safe Workflow

This guide is built around one promise: **your data stays on your computer.** Here is how to keep it that way.

## The three data zones

| Zone | What goes in | Where it runs |
| --- | --- | --- |
| **Public** | Event flyers, public schedules, published thank-yous (no private data) | Anywhere |
| **Internal** | Budgets, volunteer lists, donor names, internal plans | Local model only |
| **Secret** | Tax IDs, bank details, passwords, personal addresses | Never in AI |

## Rules for every task

### Grant letters
- Budgets and financial details are **internal**. Use a local model.
- Do not paste your full donor database or individual giving history.
- Funder guidelines are usually public — safe to share.

### Donor thank-you notes
- Names and amounts are **internal**. Use a local model.
- If you must use a hosted model, strip names and amounts and only ask for sentence structure.
- Never send a donor list to any service.

### Event flyers
- Public by nature. Safe for hosted models.
- Do not put staff or volunteer personal phone numbers on a flyer.

### Volunteer schedules
- Names, contact details, and availability are **internal**. Use a local model.
- Do not paste a volunteer list into a hosted service.

## How to use a hosted model safely

1. Strip all names, amounts, phone numbers, and addresses.
2. Replace them with placeholders: `[ORGANIZATION]`, `[AMOUNT]`, `[VOLUNTEER A]`.
3. Ask the model to work on structure only.
4. Fill in the real data yourself, on your computer.

## Local model setup (the private path)

1. Install Ollama from [ollama.com](https://ollama.com).
2. Pull a writing model:

```bash
ollama pull llama3.2
```

3. Run it:

```bash
ollama run llama3.2
```

4. Paste your prompt. The whole conversation stays on your machine.

## Checklist before you send anything

- [ ] No names or amounts sent to a hosted service.
- [ ] No API keys or secrets in any file.
- [ ] Sensitive drafts saved only on your computer.
- [ ] A real human read the final document.
- [ ] You have consent to share any personal information that appears.

## This repository's privacy promise

This repository contains **no secrets, no API keys, and no personal data**. It is safe to copy, share, and print. All examples use fictional organizations and placeholder data.

## Next step

Back to [01-getting-started.md](01-getting-started.md) or open a planner in `site/`.