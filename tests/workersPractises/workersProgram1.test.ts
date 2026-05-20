import { test, expect } from '@playwright/test';




test('Workers Program - validate Home Page title and URL', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const title: string = await page.title();

    await expect(page).toHaveTitle('Swag Labs');

    await expect(page).toHaveURL('https://www.saucedemo.com/');

});

test('Workers Program - validate dashboard title and URL', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const title: string = await page.title();

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    const dashBoardTitle: string = await page.title();

    console.log('The title of the dashBoardTitle page   is : ', dashBoardTitle, ' and the URL is : ', page.url());

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await expect(page).toHaveTitle('Swag Labs');


});


test('Workers Program - validate dashboard page contents', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const title: string = await page.title();

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await expect(page).toHaveTitle('Swag Labs');

    await expect(page.locator('.title')).toHaveText('Products');

    await expect(page.locator('#react-burger-menu-btn')).toBeVisible();

    await expect(page.locator('.app_logo')).toBeVisible();

    await expect(page.locator('.app_logo')).toHaveText('Swag Labs');

});

