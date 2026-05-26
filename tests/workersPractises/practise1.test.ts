import {test,expect, chromium, Browser, Page} from '@playwright/test';


test("Practise Day 1 - validate Home Page title and URL",async() => {

const browser:Browser=await chromium.launch({headless:false});

const page:Page=await browser.newPage();

await page.goto('https://www.saucedemo.com/');

await expect(page).toHaveTitle("Swag Labs");
await expect(page).toHaveURL("https://www.saucedemo.com/");

await page.close();



});

//recommended update is to use Playwright's built-in page fixture instead, 
// which handles browser launch, context creation, page creation, and cleanup automatically.

//The fixture approach gives you automatic isolation, parallel-safe execution, and proper cleanup 
// — with zero boilerplate.


// Who launches the browser?	The worker — one browser per worker process
// Who creates the context?	    The context fixture — one fresh context per test
// Who creates the page?	    The page fixture — one fresh page per test, inside that context
// Who cleans up?	            Playwright's fixture system — automatic teardown in reverse order after each test
// Why 3 of each for 3 parallel tests?	3 workers → 3 browsers; each test → its own context + page = full isolation