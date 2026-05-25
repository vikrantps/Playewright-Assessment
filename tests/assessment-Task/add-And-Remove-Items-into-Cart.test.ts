<<<<<<< HEAD
import { test, expect } from '@playwright/test';

test('Add and Remove Items from Cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

    await page.click('.shopping_cart_link');

    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(2);

    const backpack = page.locator('.inventory_item_name').filter({ hasText: 'Sauce Labs Backpack' });
    await expect(backpack).toBeVisible();

    const bikeLight = page.locator('.inventory_item_name').filter({ hasText: 'Sauce Labs Bike Light' });
    await expect(bikeLight).toBeVisible();

    await page.click('[data-test="remove-sauce-labs-backpack"]');

    await expect(cartItems).toHaveCount(1);
    await expect(bikeLight).toBeVisible();
    await expect(backpack).not.toBeVisible();

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
=======
import { test, expect } from '@playwright/test';

test('Add and Remove Items from Cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

    await page.click('.shopping_cart_link');

    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(2);

    const backpack = page.locator('.inventory_item_name').filter({ hasText: 'Sauce Labs Backpack' });
    await expect(backpack).toBeVisible();

    const bikeLight = page.locator('.inventory_item_name').filter({ hasText: 'Sauce Labs Bike Light' });
    await expect(bikeLight).toBeVisible();

    await page.click('[data-test="remove-sauce-labs-backpack"]');

    await expect(cartItems).toHaveCount(1);
    await expect(bikeLight).toBeVisible();
    await expect(backpack).not.toBeVisible();

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
>>>>>>> f63f501 (Initial commit)
});