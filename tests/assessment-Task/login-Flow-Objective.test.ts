import { test, expect } from '@playwright/test';

test('Automating a Login Flow', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const productsTitle = page.locator('.title');
    await expect(productsTitle).toBeVisible();
    await expect(productsTitle).toHaveText('Products');
    

    await page.screenshot({ path: 'successful-login.png' });
});