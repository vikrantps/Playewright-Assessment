import { test, expect } from '@playwright/test';

// ============================================================
// FILE B — All 3 tests here run on WORKER 2 (in parallel with File A)
// ============================================================

test('B1 - Password field is visible', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const passwordField = page.locator('#password');
  await expect(passwordField).toBeVisible();
  console.log('Test B1 done');
  // Teardown: Page closed → Context closed
});

test('B2 - Login button exists', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginButton = page.locator('#login-button');
  await expect(loginButton).toBeVisible();
  console.log('Test B2 done');
  // Teardown: Page closed → Context closed
});

test('B3 - Error on empty login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#login-button').click();
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  console.log('Test B3 done');
  // Teardown: Page closed → Context closed
  // Worker 2 is now DONE → Browser also closes
});


// // Your original code in practise1.test.ts manually launches a browser and creates a page — this works but you must handle cleanup yourself.

// With fixtures (using async ({ page })) — Playwright handles everything: launch, create, and teardown in reverse order automatically.

// Reverse teardown ensures inner resources (page) are cleaned up before outer resources (context, browser) — preventing orphaned pages or memory leaks.

// Worker count is controlled in playwright.config.ts via workers property. Default is half your CPU cores. You can set it explicitly: