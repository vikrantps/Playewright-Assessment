import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;
  private readonly errorCloseButton: Locator;
  private readonly productsTitle: Locator;
  private readonly appLogo: Locator;
  private readonly shoppingCartLink: Locator;
  private readonly burgerMenuButton: Locator;
  private readonly productSortContainer: Locator;
  private readonly inventoryItems: Locator;
  private readonly footer: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
    this.errorCloseButton = page.locator('[data-test="error-close-button"]');
    this.productsTitle = page.locator('.title');
    this.appLogo = page.locator('.app_logo');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
    this.burgerMenuButton = page.locator('#react-burger-menu-btn');
    this.productSortContainer = page.locator('[data-test="product_sort_container"]');
    this.inventoryItems = page.locator('.inventory_item');
    this.footer = page.locator('.footer');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
  }

  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.textContent() || '';
  }

  async isErrorMessageVisible(): Promise<boolean> {
    return await this.errorMessage.isVisible();
  }

  async closeErrorMessage(): Promise<void> {
    if (await this.errorCloseButton.isVisible()) {
      await this.errorCloseButton.click();
    }
  }

  async isLoginButtonEnabled(): Promise<boolean> {
    return await this.loginButton.isEnabled();
  }

  async getUsernameInputValue(): Promise<string> {
    return await this.usernameInput.inputValue();
  }

  async getPasswordInputValue(): Promise<string> {
    return await this.passwordInput.inputValue();
  }

  async clearInputs(): Promise<void> {
    await this.usernameInput.clear();
    await this.passwordInput.clear();
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async getPageUrl(): Promise<string> {
    return this.page.url();
  }

   async isProductsTitleVisible(): Promise<boolean> {
    return await this.productsTitle.isVisible();
  }
  
  async getProductsTitleText(): Promise<string> {
    return await this.productsTitle.textContent() || '';
  }
  
  async isAppLogoVisible(): Promise<boolean> {
    return await this.appLogo.isVisible();
  }
  
  async getAppLogoText(): Promise<string> {
    return await this.appLogo.textContent() || '';
  }
  
  async isShoppingCartLinkVisible(): Promise<boolean> {
    return await this.shoppingCartLink.isVisible();
  }
  
  async isBurgerMenuButtonVisible(): Promise<boolean> {
    return await this.burgerMenuButton.isVisible();
  }
  
  async isBurgerMenuButtonEnabled(): Promise<boolean> {
    return await this.burgerMenuButton.isEnabled();
  }
    
  async isFirstInventoryItemVisible(): Promise<boolean> {
    return await this.inventoryItems.first().isVisible();
  }
  
  async getInventoryItemsCount(): Promise<number> {
    return await this.inventoryItems.count();
  }
  
  async isFooterVisible(): Promise<boolean> {
    return await this.footer.isVisible();
  }

  async waitForInventoryPage(): Promise<void> {
    await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
  }

}