import { chromium , test} from "@playwright/test";

test ('Test create page manually', async ({page}) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto("http://google.com");

})