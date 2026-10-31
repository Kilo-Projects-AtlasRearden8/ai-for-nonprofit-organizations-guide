const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE = path.join(ROOT, "site");

const errors = [];

function fail(msg) {
  errors.push(msg);
  console.error("FAIL:", msg);
}

// Verify all HTML files are well-formed enough (have opening/closing html, head, body)
const htmlFiles = fs.readdirSync(SITE).filter(f => f.endsWith(".html"));
console.log("== Test: validating HTML files ==");
for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(SITE, file), "utf8");
  const checks = [
    ["<html", "opening html tag"],
    ["</html>", "closing html tag"],
    ["<head", "head"],
    ["</head>", "closing head"],
    ["<body", "body"],
    ["</body>", "closing body"],
    ['<link rel="stylesheet"', "stylesheet link"],
  ];
  let ok = true;
  for (const [needle, label] of checks) {
    if (!content.includes(needle)) {
      fail(`${file}: missing ${label}`);
      ok = false;
    }
  }
  if (ok) console.log("OK", file);
}

// Verify each page credits Asdale Dynamics
console.log("\n== Test: credit check on all pages ==");
for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(SITE, file), "utf8");
  if (content.includes("Asdale Dynamics")) {
    console.log("OK", file, "credits Asdale Dynamics");
  } else {
    fail(`${file} does not credit Asdale Dynamics`);
  }
}

// Verify MIT copyright in LICENSE
const license = fs.readFileSync(path.join(ROOT, "LICENSE"), "utf8");
if (license.includes("Copyright (c) 2026 Asdale Dynamics, LLC")) {
  console.log("OK LICENSE exact copyright line");
} else {
  fail("LICENSE missing exact copyright line");
}

// Verify README credits Asdale Dynamics
const readme = fs.readFileSync(path.join(ROOT, "README.md"), "utf8");
if (readme.includes("Asdale Dynamics")) {
  console.log("OK README credits Asdale Dynamics");
} else {
  fail("README missing Asdale Dynamics credit");
}

// Verify docs exist
const docsDir = path.join(ROOT, "docs");
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
console.log("\n== Test: docs present ==");
for (const d of requiredDocs) {
  if (fs.existsSync(path.join(docsDir, d))) {
    console.log("OK", d);
  } else {
    fail(`Missing docs: ${d}`);
  }
}

// Verify planners exist
const planners = [
  "planner-grant.html",
  "planner-thankyou.html",
  "planner-flyer.html",
  "planner-schedule.html",
];
console.log("\n== Test: printable planners present ==");
for (const p of planners) {
  if (fs.existsSync(path.join(SITE, p))) {
    console.log("OK", p);
  } else {
    fail(`Missing planner: ${p}`);
  }
}

// Summary
console.log("\n== Test summary ==");
console.log("Errors:", errors.length);
if (errors.length > 0) {
  process.exit(1);
}
console.log("All tests passed.");