# playwriht_test_ui
This project is an end-to-end (E2E) test automation framework build with [Playwright]. It uses the Page Oject Model design pattern for maintainable and scalable test code.

## Prerequisites 
- Node.js (>=19.x)
- npm (>=10.x)

# key Features
- **playwright** for browser automation 
- **Page Object Model (POM)** for resuable page logic
- **Test data** manage in JSON files
- **custom utility actions** for common interactions

## how to run tests
**install all dependencies:**
 npm install

**run all tests:**
npx playwright test

**Run test in headed mode:**
npx playwright test --headed

**Show html test report:**
npx playwright show-report

**Run a specific test file:**
npx playwright test tests/e2e/login.spec.ts

## writing Tests

Test are located in the `tests` directory. Each test file should have a `.spec.ts` extension.


## configureation

Playwriht configuration is located in `playwright.config.ts`. you can customize browser settings, test directories, and more.

## writing test case 

5-positive and 5-negative test cases located in `context.txt`

