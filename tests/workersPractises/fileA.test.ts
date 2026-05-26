import { test, expect } from '@playwright/test';

// ============================================================
// FILE A — All 3 tests here run on WORKER 1

// in playwright.config.ts  workers: 2, // exactly 2 workers = 2 browsers in parallel

// ============================================================

// For EACH test below, Playwright does this automatically:
//
//   SETUP (in order):
//     1. Worker 1 already has a Browser (launched once per worker)
//     2. Create a NEW BrowserContext (fresh cookies, storage)
//     3. Create a NEW Page inside that context
//
//   TEST RUNS...
//
//   TEARDOWN (reverse order):
//     3. Close Page        ← first thing closed
//     2. Close Context     ← second thing closed
//     1. Browser stays open (shared across tests in this worker)
//        Browser closes when Worker 1 finishes ALL its tests

test('A1 - Login page title', async ({ page }) => {
  // "page" fixture is ALREADY created for you (step 3 of setup)
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
  console.log('Test A1 done');
  // After this: Page closed → Context closed (reverse order)
});

test('A2 - Login page URL', async ({ page }) => {
  // A brand NEW page + context was created for this test
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  console.log('Test A2 done');
  // After this: Page closed → Context closed (reverse order)
});

test('A3 - Username field is visible', async ({ page }) => {
  // Again, a brand NEW page + context
  await page.goto('https://www.saucedemo.com/');
  const usernameField = page.locator('#user-name');
  await expect(usernameField).toBeVisible();
  console.log('Test A3 done');
  // After this: Page closed → Context closed (reverse order)
  // Worker 1 is now DONE → Browser also closes
});


// Summary Table for Beginners
// Concept	       What it is	                                         Lifetime
// Worker	         A separate Node.js process	                         Lives for all tests in one file
// Browser	       Chromium/Firefox/WebKit instance	                   One per worker (shared across tests in that worker)
// Context	       Like an incognito window (fresh cookies, storage)	 Created fresh per test, closed after test
// Page	           A single tab	                                       Created fresh per test inside the context, closed first



// npx playwright test tests/workersPractises/fileA.test.ts tests/workersPractises/fileB.test.ts --workers=2
//Yes, the --workers CLI flag overrides the workers value set in playwright.config.ts.
//CLI flags always take highest priority over config file values.