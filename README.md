# Jupiter Toys Playwright Automation

Playwright end-to-end automation framework for the Jupiter Toys website:

https://jupiter.cloud.planittesting.com/#/

The project is written in TypeScript and follows the Page Object Model (POM) design pattern. Test cases are separated from page locators and reusable browser actions so the framework is easier to maintain.

## Framework

- Playwright Test: browser automation and test runner
- TypeScript: typed test and page-object implementation
- Page Object Model: reusable page actions and selectors
- dotenv: loads local login credentials from an ignored file
- HTML reporter: test results, screenshots, videos, and traces for failures

## Project Structure

```text
jupitertoys_ai/
├── e2e/
│   ├── pages/
│   │   ├── base.page.ts       # Shared page functionality
│   │   ├── cart.page.ts       # Cart page actions and assertions
│   │   ├── contact.page.ts    # Contact form actions and assertions
│   │   ├── home.page.ts       # Home page actions and assertions
│   │   ├── login.page.ts      # Login actions and assertions
│   │   └── shop.page.ts       # Shop page actions and assertions
│   ├── prompts/               # Test-case prompts used during generation
│   ├── tests/                 # Playwright test specifications
│   ├── utils/
│   │   ├── credentials.ts     # Secure credential loader
│   │   └── test-data.ts       # Shared test data
│   ├── .env.cred              # Local credentials; ignored by Git
│   ├── .env.example           # Safe credentials template
│   ├── playwright.config.ts   # Playwright configuration
│   ├── package.json           # Scripts and dependencies
│   └── tsconfig.json          # TypeScript configuration
└── README.md
```

## Page Object Model

Each page object receives Playwright's `Page` instance and exposes business-level methods. For example:

```ts
const cartPage = new CartPage(page);
await cartPage.openCart();
await cartPage.expectTotalVisible();
```

The test describes the behavior, while selectors and page interactions remain in the related page object.

## Installation

From the `e2e` directory:

```powershell
cd C:\Users\rbala\Documents\jupitertoys_ai\e2e
npm install
npx playwright install
```

## Credentials

Create `e2e/.env.cred` locally:

```env
JUPITER_USERNAME=your-username
JUPITER_PASSWORD=your-password
```

The file is ignored by Git through the `.env.*` rule. Never commit `.env.cred` or place real credentials in `.env.example`. If credentials were ever committed, rotate them immediately because removing a file does not remove it from Git history.

## Running Tests

Run all tests on every configured browser:

```powershell
npm test
```

Run the smoke suite containing the major user journeys:

```powershell
npm run test:smoke
```

Run the complete regression suite. This includes both smoke and non-smoke tests:

```powershell
npm run test:regression
```

Smoke tests are identified with the `@smoke` tag in the test title. Tests without
that tag are still included in regression runs.

Run a specific test file:

```powershell
npx playwright test tests/contact.spec.ts
npx playwright test tests/login.spec.ts
npx playwright test tests/cart.spec.ts
```

Run tests in one browser:

```powershell
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run with the browser visible:

```powershell
npm run test:headed
```

Run a specific test by name:

```powershell
npx playwright test tests/login.spec.ts --grep "valid credentials"
```

## Reports and Debugging

The configured HTML reporter opens a report after a test run. To open it manually:

```powershell
npm run test:report
```

For local failed tests, the framework retains screenshots, videos, and traces. CI does not retain videos and does not open the HTML report automatically. Keep any uploaded CI artifacts access-controlled and short-lived. Open a trace with:

```powershell
npx playwright show-trace test-results/<trace-file>.zip
```

## Validation

Run the TypeScript compiler without emitting files:

```powershell
npx tsc --noEmit
```

Use `npm ci` in CI so the committed lockfile controls dependency versions, and run `npm audit` as part of dependency updates.

## Git and Secrets

Generated dependencies, reports, Playwright MCP output, and environment files are excluded through `.gitignore`. Before committing, verify that `.env.cred` does not appear in the staged files:

```powershell
git status
git check-ignore -v e2e/.env.cred
```

## Notes

- The website uses hash-based routes such as `#/shop`, `#/contact`, and `#/cart`.
- The configured browsers are Chromium, Firefox, and WebKit.
- Some negative tests may fail when the live website does not implement the validation described by the test case. Such failures identify application behavior that needs review.
