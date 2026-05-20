import { test, expect } from '@playwright/test';

test.use({  
  launchOptions: {
    slowMo: 100
  }
});


test('Completing a Purchase', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

    await page.click('.shopping_cart_link');

    await page.click('[data-test="checkout"]');

    await page.fill('[data-test="firstName"]', 'John');
    await page.fill('[data-test="lastName"]', 'Doe');
    await page.fill('[data-test="postalCode"]', '12345');

    await page.click('[data-test="continue"]');

    const summaryInfo = page.locator('.summary_info');
    await expect(summaryInfo).toBeVisible();

    await page.waitForTimeout(500);

    const itemTotal = page.locator('.summary_subtotal_label');
    await expect(itemTotal).toBeVisible();
    await expect(itemTotal).toContainText('Item total:');

    const tax = page.locator('.summary_tax_label');
    await expect(tax).toBeVisible();
    await expect(tax).toContainText('Tax:');

    const total = page.locator('.summary_total_label');
    await expect(total).toBeVisible();
    await expect(total).toContainText('Total:');

    await page.click('[data-test="finish"]');

    const completeHeader = page.locator('.complete-header');
    await expect(completeHeader).toBeVisible();
    await expect(completeHeader).toHaveText('Thank you for your order!');

    const completeText = page.locator('.complete-text');
    await expect(completeText).toBeVisible();
    await expect(completeText).toContainText('Your order has been dispatched');

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
});