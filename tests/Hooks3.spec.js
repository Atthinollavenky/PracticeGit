const { test, expect } = require('@playwright/test');

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://demoblaze.com/index.html');

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('venky567');
  await page.locator('#loginpassword').fill('Venky@123');
  await page.waitForTimeout(2000);

  await page.locator('//button[normalize-space()="Log in"]').click();
});

test.afterAll(async () => {
  await page.locator('#logout2').click();
});

test('Home Page Test', async () => {

const products = page.locator('.hrefch');
await expect(products).toHaveCount(9);

});