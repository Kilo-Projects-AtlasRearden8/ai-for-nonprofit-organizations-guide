const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE = path.join(ROOT, "site");
const DOCS = path.join(ROOT, "docs");

const errors = [];
let warnings = 0;

function fail(msg) {
  errors.push(msg);
  console.error("FAIL:", msg);
}
function warn(msg) {
  warnings += 1;
  console.warn("WARN:", msg);
}

// Required site files
const requiredSiteFiles = [
  "index.html",
  "styles.css",
  "grants.html",
  "thankyous.html",
  "flyers.html",
  "schedules.html",
  "privacy.html",
  "prompts.html",
  "planner-grant.html",
  "planner-thankyou.html",
  "planner-flyer.html",
  "planner-schedule.html",
];

console.log("== Build: validating static site ==");

for (const file of requiredSiteFiles) {
  const p = path.join(SITE, file);
  if (!fs.existsSync(p)) {
    fail(`Missing site file: ${file}`);
  } else {
    console.log("OK", file);
  }
}

// Required docs files
const requiredDocs = [
  "01-getting-started.md",
  "02-free-models.md",
  "03-grant-letters.md",
  "04-thank-you-notes.md",
  "05-event-flyers.md",
  "06-volunteer-schedules.md",
  "07-prompt-library.md",
  "08-privacy.md",
];

console.log("\n== Build: validating docs ==");
for (const file of requiredDocs) {
  const p = path.join(DOCS, file);
  if (!fs.existsSync(p)) {
    fail(`Missing docs file: ${file}`);
  } else {
    console.log("OK", file);
  }
}

// Check credit lines exist
const rootFiles = ["README.md", "LICENSE"];
console.log("\n== Build: checking credit lines ==");
for (const f of rootFiles) {
  const p = path.join(ROOT, f);
  const content = fs.readFileSync(p, "utf8");
  if (content.includes("Asdale Dynamics")) {
    console.log("OK", f, "mentions Asdale Dynamics");
  } else {
    fail(`${f} does not mention Asdale Dynamics`);
  }
}

// Check exact LICENSE copyright line
const license = fs.readFileSync(path.join(ROOT, "LICENSE"), "utf8");
const exactLine = "Copyright (c) 2026 Asdale Dynamics, LLC";
if (license.includes(exactLine)) {
  console.log("OK LICENSE exact copyright line");
} else {
  fail("LICENSE missing exact copyright line: " + exactLine);
}

// Check no secrets/keys in files
const secretPatterns = [
  /sk-[A-Za-z0-9]{20,}/,          // OpenAI-style keys
  /ghp_[A-Za-z0-9]{20,}/,         // GitHub tokens
  /AIza[0-9A-Za-z\-_]{35,}/,      // Google API keys
  /-----BEGIN [A-Z ]+PRIVATE KEY-----/, // private keys
];
console.log("\n== Build: scanning for secrets ==");
let secretHits = 0;
function scan(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(full);
    } else if (entry.isFile() && /\.(md|html|css|js|json|txt)$/.test(entry.name)) {
      const content = fs.readFileSync(full, "utf8");
      for (const pat of secretPatterns) {
        if (pat.test(content)) {
          secretHits += 1;
          fail(`Possible secret in ${path.relative(ROOT, full)}`);
        }
      }
    }
  }
}
scan(ROOT);
if (secretHits === 0) {
  console.log("OK no secrets found");
}

// Summary
console.log("\n== Build summary ==");
console.log("Errors:", errors.length);
console.log("Warnings:", warnings);
if (errors.length > 0) {
  process.exit(1);
}
console.log("Build passed.");