# playwright_test_ui
This project is an end-to-end (E2E) test automation framework build with [Playwright]. It uses the Page Oject Model design pattern for maintainable and scalable test code.

## Prerequisites
- Node.js (recommended >= 18)
- npm (or `pnpm`/`yarn`)
- Install dependencies: `npm install`

## Key features
- Playwright test runner (`@playwright/test`) for reliable browser automation
- Page Object Model located under `lib/pages` to encapsulate page logic
- Test files under `tests/e2e` using `.spec.ts` naming convention
- Test data in `resources/data/*.json`
- Utility helpers under `lib/utils` (actions, helpers)
- Playwright config in `playwright.config.ts` for baseURL, projects, and reporters

## Repository structure (important files/folders)
- `playwright.config.ts` - Playwright configuration and global settings
- `tests/e2e/` - Test specs (example: `login.spec.ts`)
- `lib/pages/` - Page objects (e.g. `lib/pages/e2e/login.page.ts`)
- `lib/pages/commoon/` - Shared base pages or common components
- `lib/utils/` - Reusable helper functions (typing helper, wrappers)
- `resources/data/` - Test data JSON files (e.g. `logindata.json`)
- `playwright-report/` - Generated Playwright HTML report (after a run)

## How tests are organized
- Each test file is a suite of related tests (Playwright `test.describe`).
- Page objects expose operations (e.g. `enterLoginDetails`, `click_On_Submit_btn`) that tests call.
- Tests should avoid direct selector access and use page object methods instead.

## Common commands
Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/e2e/login.spec.ts
```

Run tests in headed mode (show browser):

```bash
npx playwright test --headed
```

Show HTML report:

```bash
npx playwright show-report
```

List discovered tests (useful when Playwright reports "No tests found"):

```bash
npx playwright test --list
```

Run Playwright with debug UI (inspector):

```bash
npx playwright test --debug
```

## Writing page objects
- Put page classes under `lib/pages/<area>/` and export them (use named export `export class LoginPage` and/or `export default LoginPage`).
- Constructor should accept a Playwright `Page` instance and store locators as `page.locator(...)`.
- Page objects should expose high-level async methods for actions and assertions.

Example constructor signature:

```ts
export class LoginPage {
	constructor(private page: Page) {}
}
```

## Conventions
- Test files: `*.spec.ts` under `tests/`
- Page objects: `lib/pages/...` with methods named like `enterUsername`, `clickSubmit`.
- Test data: `resources/data/*.json` and imported in tests.

 ## test cases 

5-positive and 5-negative test cases written in `context.txt`


playwright-framework/
│
├── tests/
│   ├── ui/
│   │   └── login.spec.ts
│   ├── api/
│   │   └── user.api.spec.ts
│
├── pages/                # Page Object Model
│   └── login.page.ts
│
├── fixtures/
│   └── testData.json
│
├── utils/
│   └── helpers.ts
│
├── playwright.config.ts
├── package.json
└── README.md

