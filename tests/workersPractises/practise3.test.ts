import { test, expect, firefox, Browser, BrowserContext, Page, Locator } from '@playwright/test';

test("Practise 3 - Multi-context isolation with Firefox", async () => {

  console.log("----------------------------------------------Step 1: Launch the Browser (Top Level)-------------------------------------");

  // This starts a Firefox process on your machine (like double-clicking the Firefox icon)
  const browser: Browser = await firefox.launch({ headless: false });

  console.log("-------------------Step 2: Create Two Isolated Contexts (Middle Level)---------------");


  // Context 1 = User A's session (own cookies, own storage)
  const browserContext1: BrowserContext = await browser.newContext();

  // Context 2 = User B's session (completely separate from User A)
  const browserContext2: BrowserContext = await browser.newContext();


  console.log("---------------Step 3: Open Pages / Tabs (Bottom Level)-------");


  // Page 1 belongs to Context 1 (User A's tab)
  const page1: Page = await browserContext1.newPage();

  // Page 2 belongs to Context 2 (User B's tab)
  const page2: Page = await browserContext2.newPage();

  console.log("-----------------------------------------------------------------------------------");


  // --- User A (page1) ---
  await page1.goto("https://www.firstcry.com/m/register?ref2=registerlink&URL=https://www.firstcry.com/cashcoupons");

  const emailInput1: Locator = page1.locator("#usrname");
  const passwordInput1: Locator = page1.locator("#usremail");
  const MobileInput1: Locator = page1.locator("#usrmb");

  await emailInput1.fill("test@example.com");
  await passwordInput1.fill("password123");
  await MobileInput1.fill("password1234567890");

  console.log("-----------------------------------------------------------------------------------");


  // --- User B (page2) — completely separate session ---
  await page2.goto("https://www.firstcry.com/m/register?ref2=registerlink&URL=https://www.firstcry.com/cashcoupons");

  const emailInput2: Locator = page2.locator("#usrname");
  const passwordInput2: Locator = page2.locator("#usremail");
  const MobileInput2: Locator = page2.locator("#usrmb");

  await emailInput2.fill("test@example.com");
  await passwordInput2.fill("password123");
  await MobileInput2.fill("password1234567890");

  console.log("-------------------------------Step 5: Cleanup (Close everything bottom-up)----------------------------------------------------");


  await browserContext1.close();  // Close User A's session
  await browserContext2.close();  // Close User B's session
  await browser.close();          // Close the Firefox process

});


// Step	Code	                       What it creates
// 1	firefox.launch()	           One browser process
// 2	browser.newContext()	       Isolated session (like incognito)
// 3	context.newPage()	           A tab inside that session
// 4	page.goto() / page.fill()	   Navigate and interact
// 5	.close()	Cleanup bottom →   up