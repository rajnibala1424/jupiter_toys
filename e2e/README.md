# Jupiter Toys E2E Tests

Playwright and TypeScript end-to-end tests for https://jupiter.cloud.planittesting.com/#/.

## Setup

From this `e2e` directory, install dependencies and browser binaries:

```powershell
npm install
npx playwright install
```

## Run tests

Run the test suite on Chromium, Firefox, and WebKit:

```powershell
npm run test
```

The HTML report can be opened with:

```powershell
npm run test:report
```

The live site title is `Jupiter Toys` (with an `e`), so the title assertion uses the site's actual title rather than the `Jupitor Toys` spelling in the original request.
