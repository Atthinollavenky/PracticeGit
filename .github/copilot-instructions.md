## Quick orientation for AI code assistants

This repository contains Playwright end-to-end tests. The goal: let an AI assistant be immediately productive—run tests, add/update specs, and follow repository conventions.

Key facts
- Tests live under `tests/` (examples: `tests/example.spec.js`, `tests/AddToCart.saucelabs.spec.js`). A small demo is in `tests-examples/demo-todo-app.spec.js`.
- Configuration is in `playwright.config.js` (important settings: `testDir: './tests'`, `reporter: 'html'`, `trace: 'on-first-retry'`, `headless: false`). CI behavior is driven by `process.env.CI` (forbidOnly, retries, workers).
- The project uses Playwright Test API (import { test, expect } from '@playwright/test').

Commands (use these exact forms)
```
npx playwright test                    # run all tests
npx playwright test tests/             # run tests in tests/
npx playwright test tests/AutoSuggestions.spec.js  # run a single file
npx playwright show-report             # open latest HTML report (playwright-report/index.html)
```

Project conventions & patterns
- Selector style: prefer `page.locator(selector)` with `.first()` when needed, and text selectors like `button:has-text("Add to cart")`.
- Assertion pattern: await visibility then interact. Example: `await expect(page.locator(selector)).toBeVisible();` then `await locator.click();`.
- Extract text safely: `const txt = (await locator.textContent() || '').trim();`.
- File naming: some tests include environment/service hints (e.g. `*.saucelabs.spec.js`)—do not assume extra wiring exists; search the repo before adding service-specific code.

Config notes for editors/agents
- `playwright.config.js` currently sets headed mode (headless: false). To run headless, override via CLI or edit the config.
- dotenv is referenced but commented out in the config—check for a `.env` when adding credential-driven flows.

Adding or changing tests (practical checklist)
1. Create a focused spec under `tests/` that targets one user flow.
2. Use Playwright Test style imports and `page.locator()` conventions used across the repo.
3. Run the specific spec locally with `npx playwright test tests/<file>.spec.js` and attach HTML report output.
4. In PR description, state which user flow is covered and any config changes (reporter/trace/headless) required.

Files to inspect for examples
- `playwright.config.js` — global settings and CI toggles.
- `package.json` — currently no test scripts; prefer adding `"test": "playwright test"` and `"show-report": "playwright show-report"` if you add scripts.
- `tests/` — copy style from nearby specs (selectors, structure).

If any section needs more examples (CI steps, recommended npm scripts, or adding third-party services), tell me what to expand and I will update this file.
