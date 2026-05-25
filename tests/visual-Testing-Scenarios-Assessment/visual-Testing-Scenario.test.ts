<<<<<<< HEAD
import { test, expect } from '@playwright/test';

test('Visual test for inventory page', async ({ page }) => {
  // Login to reach inventory page
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  
  // Wait for inventory page to load
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  await page.waitForLoadState('networkidle');
  
  // Take screenshot and compare with baseline
  await expect(page).toHaveScreenshot('inventory-page.png', {
    fullPage: true,
    maxDiffPixels: 100
  });
});


test('Visual test with different viewport sizes', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  
  // Desktop view
  await page.setViewportSize({ width: 1920, height: 1080 });
  await expect(page).toHaveScreenshot('inventory-desktop.png');
  
  // Tablet view
  await page.setViewportSize({ width: 768, height: 1024 });
  await expect(page).toHaveScreenshot('inventory-tablet.png');
  
  // Mobile view
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page).toHaveScreenshot('inventory-mobile.png');
=======
import { test, expect } from '@playwright/test';

test('Visual test for inventory page', async ({ page }) => {
  // Login to reach inventory page
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  
  // Wait for inventory page to load
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  await page.waitForLoadState('networkidle');
  
  // Take screenshot and compare with baseline
  await expect(page).toHaveScreenshot('inventory-page.png', {
    fullPage: true,
    maxDiffPixels: 100
  });
});


test('Visual test with different viewport sizes', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  
  // Desktop view
  await page.setViewportSize({ width: 1920, height: 1080 });
  await expect(page).toHaveScreenshot('inventory-desktop.png');
  
  // Tablet view
  await page.setViewportSize({ width: 768, height: 1024 });
  await expect(page).toHaveScreenshot('inventory-tablet.png');
  
  // Mobile view
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page).toHaveScreenshot('inventory-mobile.png');
>>>>>>> f63f501 (Initial commit)
});