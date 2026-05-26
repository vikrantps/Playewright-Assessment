import { test, expect } from '@playwright/test';

test('Validate product sorting by price', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await page.selectOption('.product_sort_container', 'lohi');

    const prices = await page.locator('.inventory_item_price').allTextContents();
    const numericPrices = [];

    console.log('Original price list (as strings):', prices);

    for (const price of prices) {
        const priceWithoutDollar = price.replace('$', '');
        const priceAsNumber = parseFloat(priceWithoutDollar);
        numericPrices.push(priceAsNumber);
    }

    for (let i = 0; i < numericPrices.length - 1; i++) {
        const currentPrice = numericPrices[i];
        const nextPrice = numericPrices[i + 1];
        console.log(`Comparing: ${currentPrice} <= ${nextPrice} ? ${currentPrice <= nextPrice}`);

        expect(currentPrice).toBeLessThanOrEqual(nextPrice);
    }

    console.log('\nFinal sorted prices (low to high):', numericPrices);


    await page.screenshot({ path: 'sorted-products.png', fullPage: true });

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
});