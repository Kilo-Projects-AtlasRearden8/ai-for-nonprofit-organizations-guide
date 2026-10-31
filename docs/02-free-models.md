# 2. Free Models: No API Key, No Billing

You can do every task in this guide with a **free** model. There are three ways to run them. Pick the one that fits your comfort level and your privacy needs.

## Option A — Local (run on your own computer)

The model runs on your machine. Nothing leaves your computer. This is the most private option.

**Best for:** grant drafts with sensitive budgets, donor data, internal planning.

| Tool | What it does | Free? |
| --- | --- | --- |
| [Ollama](https://ollama.com) | Download and run models with one command. | Yes |
| [LM Studio](https://lmstudio.ai) | Click-to-run models with a friendly GUI. | Yes |
| [llama.cpp](https://github.com/ggerganov/llama.cpp) | Run models on CPU, no install needed for some. | Yes |

### Quick start (Ollama, macOS/Windows/Linux)

1. Install Ollama from ollama.com.
2. Open a terminal and run:

```bash
ollama pull llama3.2
```

3. Then run it:

```bash
ollama run llama3.2
```

4. Type your prompt. Done.

**Recommended free models for writing:**

- `llama3.2` (3B) — fast, good at letters and emails.
- `qwen2.5` — strong at structured tasks like schedules and forms.
- `phi-3` — small, quick, good on older laptops.

> **Tip:** If your computer is slow, pick a 3B model instead of 7B. It is usually "good enough" for drafting.

## Option B — Free hosted (run in your browser or online)

The model runs on someone else's server. Your prompt travels over the internet. Good for quick drafts that are not sensitive.

**Best for:** event flyers, volunteer schedules, brainstorming.

| Service | Free tier | Notes |
| --- | --- | --- |
| [Hugging Face](https://huggingface.co) | Yes | Big library of free models. |
| [GitHub Models](https://github.com/models) | Yes | Free access to many open models. |
| [Mistral](https://mistral.ai) | Yes | Free chat and API tier. |
| Google Gemini | Free tier | Good at formatting and long context. |

> **Privacy note:** Free hosted services may log prompts. Do not paste donor names, addresses, or private financial data into them.

## Option C — Browser (no install at all)

The model runs inside your browser, with no download and no account.

**Best for:** quick, one-off tasks on any computer.

- **Chrome's built-in AI (Gemini Nano)** — on Chrome 127+, behind a flag.
- **WebGPU models** — run small models in-browser via WebGPU.

> **Limitation:** Browser models are small. They are fine for short letters and lists, less so for long grant drafts.

## How to pick

| Your task | Best option |
| --- | --- |
| Grant letter (sensitive budget) | **A — Local** |
| Donor thank-you (personal) | **A — Local** (or B if you have no private data) |
| Event flyer | **B — Free hosted** or **C — Browser** |
| Volunteer schedule | **B — Free hosted** or **C — Browser** |
| Learning / experimenting | **B — Free hosted** (fastest to start) |

## Safety and privacy checklist

- [ ] No API keys or secrets in any file.
- [ ] No donor names, addresses, or amounts sent to hosted models.
- [ ] Sensitive drafts saved only on your computer.
- [ ] Final documents reviewed by a human before sending.

## Next step

Open [03-grant-letters.md](03-grant-letters.md) and try your first task.