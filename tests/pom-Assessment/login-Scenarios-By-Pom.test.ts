<<<<<<< HEAD
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage/loginPage';

test.describe('Login Page Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });



    test('should be able to login with valid credentials successfully', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');

        await loginPage.clickLoginButton();

        await loginPage.waitForPageLoad();

        const pageTitle = await loginPage.getPageTitle();
        expect(pageTitle).toBe('Swag Labs');

        const currentUrl = await loginPage.getPageUrl();
        expect(currentUrl).toBe('https://www.saucedemo.com/inventory.html');

        const isProductsTitleVisible = await loginPage.isProductsTitleVisible();
        expect(isProductsTitleVisible).toBe(true);

        const productsTitleText = await loginPage.getProductsTitleText();
        expect(productsTitleText).toBe('Products');

        const isAppLogoVisible = await loginPage.isAppLogoVisible();
        expect(isAppLogoVisible).toBe(true);

        const appLogoText = await loginPage.getAppLogoText();
        expect(appLogoText).toBe('Swag Labs');

        const isCartVisible = await loginPage.isShoppingCartLinkVisible();
        expect(isCartVisible).toBe(true);

        const isBurgerMenuVisible = await loginPage.isBurgerMenuButtonVisible();
        expect(isBurgerMenuVisible).toBe(true);

        const isBurgerMenuEnabled = await loginPage.isBurgerMenuButtonEnabled();
        expect(isBurgerMenuEnabled).toBe(true);

        const isFirstItemVisible = await loginPage.isFirstInventoryItemVisible();
        expect(isFirstItemVisible).toBe(true);

        const itemsCount = await loginPage.getInventoryItemsCount();
        expect(itemsCount).toBe(6);

        const isFooterVisible = await loginPage.isFooterVisible();
        expect(isFooterVisible).toBe(true);

        console.log('Successful login verified with all assertions passed');

    });

    test('should display error for invalid credentials', async ({ page }) => {
        await loginPage.login('invalid_user', 'wrong_password');
        await loginPage.clickLoginButton();

        const isErrorVisible = await loginPage.isErrorMessageVisible();
        expect(isErrorVisible).toBe(true);

        const errorMessage = await loginPage.getErrorMessage();
        console.log('Error for invalid credentials:', errorMessage);

        expect(errorMessage).toContain('Username and password do not match');
    });

    test('should display error for empty credentials', async ({ page }) => {
        await loginPage.clickLoginButton();

        const isErrorVisible = await loginPage.isErrorMessageVisible();
        expect(isErrorVisible).toBe(true);

        const errorMessage = await loginPage.getErrorMessage();
        console.log('Error for empty credentials:', errorMessage);

        expect(errorMessage).toContain('Username is required');
    });

    test.afterAll(() => {
        console.log('===================================\n');
    });
=======
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage/loginPage';

test.describe('Login Page Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });



    test('should be able to login with valid credentials successfully', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');

        await loginPage.clickLoginButton();

        await loginPage.waitForPageLoad();

        const pageTitle = await loginPage.getPageTitle();
        expect(pageTitle).toBe('Swag Labs');

        const currentUrl = await loginPage.getPageUrl();
        expect(currentUrl).toBe('https://www.saucedemo.com/inventory.html');

        const isProductsTitleVisible = await loginPage.isProductsTitleVisible();
        expect(isProductsTitleVisible).toBe(true);

        const productsTitleText = await loginPage.getProductsTitleText();
        expect(productsTitleText).toBe('Products');

        const isAppLogoVisible = await loginPage.isAppLogoVisible();
        expect(isAppLogoVisible).toBe(true);

        const appLogoText = await loginPage.getAppLogoText();
        expect(appLogoText).toBe('Swag Labs');

        const isCartVisible = await loginPage.isShoppingCartLinkVisible();
        expect(isCartVisible).toBe(true);

        const isBurgerMenuVisible = await loginPage.isBurgerMenuButtonVisible();
        expect(isBurgerMenuVisible).toBe(true);

        const isBurgerMenuEnabled = await loginPage.isBurgerMenuButtonEnabled();
        expect(isBurgerMenuEnabled).toBe(true);

        const isFirstItemVisible = await loginPage.isFirstInventoryItemVisible();
        expect(isFirstItemVisible).toBe(true);

        const itemsCount = await loginPage.getInventoryItemsCount();
        expect(itemsCount).toBe(6);

        const isFooterVisible = await loginPage.isFooterVisible();
        expect(isFooterVisible).toBe(true);

        console.log('Successful login verified with all assertions passed');

    });

    test('should display error for invalid credentials', async ({ page }) => {
        await loginPage.login('invalid_user', 'wrong_password');
        await loginPage.clickLoginButton();

        const isErrorVisible = await loginPage.isErrorMessageVisible();
        expect(isErrorVisible).toBe(true);

        const errorMessage = await loginPage.getErrorMessage();
        console.log('Error for invalid credentials:', errorMessage);

        expect(errorMessage).toContain('Username and password do not match');
    });

    test('should display error for empty credentials', async ({ page }) => {
        await loginPage.clickLoginButton();

        const isErrorVisible = await loginPage.isErrorMessageVisible();
        expect(isErrorVisible).toBe(true);

        const errorMessage = await loginPage.getErrorMessage();
        console.log('Error for empty credentials:', errorMessage);

        expect(errorMessage).toContain('Username is required');
    });

    test.afterAll(() => {
        console.log('===================================\n');
    });
>>>>>>> f63f501 (Initial commit)
});