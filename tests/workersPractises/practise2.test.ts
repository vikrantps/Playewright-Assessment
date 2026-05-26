// Suppose you have 3 test files and Playwright is configured with workers: 3 (the default is half your CPU cores):

// Worker	Browser     Instance	Test	BrowserContext	    Page
// Worker 1	Browser #1 (Chromium)	Test A	Context #1 (fresh)	Page #1
// Worker 2	Browser #2 (Chromium)	Test B	Context #2 (fresh)	Page #2
// Worker 3	Browser #3 (Chromium)	Test C	Context #3 (fresh)	Page #3

// Key points:

// 1 Worker = 1 Browser process. If you have 3 workers running in parallel, there are 3 separate browser processes.
// 1 Test = 1 new BrowserContext + 1 new Page. Even if Worker 1 runs Test A then Test D sequentially, each test gets a brand-new context and page.

// BrowserContext is the isolation boundary — separate cookies, localStorage, sessions, cache. It's like an incognito window.
// The Built-in Fixture Chain
// Playwright's @playwright/test provides a hierarchy of fixtures that auto-manage the lifecycle:

// Fixture	Scope	    What It Provides	                  Lifecycle
// browser	Per worker	A Browser instance (e.g., Chromium)	  Launched once when the worker starts; closed when the worker ends
// context	Per test	A BrowserContext (isolated session)	  Created before each test; closed after each test
// page	    Per test	A Page inside the context	          Created before each test; closed after each test
// When you destructure { page }, Playwright resolves the full chain:

// Need page → requires context
// Need context → requires browser
// Need browser → requires a worker with a launched browser
// All teardown happens in reverse order automatically.



import { test, expect } from '@playwright/test';

// Destructure all three to see them individually
test("See all three fixtures-1", async ({ browser, context, page }) => {

  console.log('Browser type:', browser.browserType().name());  // "chromium"
  console.log('Context pages:', context.pages().length);        // 1 (the page fixture)
  console.log('Page URL:', page.url());                         // "about:blank"

  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle("Swag Labs");

});

//ven though both tests may run on the same worker (same browser process), 
// each gets a new context and page. Test 2 has zero knowledge of what Test 1 did
//  — no login session, no cookies, no localStorage carries over.

test("See all three fixtures - 2", async ({ browser, context, page }) => {

  console.log('Browser type:', browser.browserType().name());  // "chromium"
  console.log('Context pages:', context.pages().length);        // 1 (the page fixture)
  console.log('Page URL:', page.url());                         // "about:blank"

  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle("Swag Labs");

});


test("See all three fixtures - 3", async ({ browser, context, page }) => {

  console.log('Browser type:', browser.browserType().name());  // "chromium"
  console.log('Context pages:', context.pages().length);        // 1 (the page fixture)
  console.log('Page URL:', page.url());                         // "about:blank"

  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle("Swag Labs");

});

test("See all three fixtures - 4", async ({ browser, context, page }) => {

  console.log('Browser type:', browser.browserType().name());  // "chromium"
  console.log('Context pages:', context.pages().length);        // 1 (the page fixture)
  console.log('Page URL:', page.url());                         // "about:blank"

  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle("Swag Labs");

});