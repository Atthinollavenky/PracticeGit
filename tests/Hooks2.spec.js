const { test, expect } = require('@playwright/test');

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://demoblaze.com/index.html');

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('venky567');
  await page.locator('#loginpassword').fill('Venky@123');
  await page.waitForTimeout(2000);

  await page.locator('//button[normalize-space()="Log in"]').click();
});

test.afterEach(async () => {
  await page.locator('#logout2').click();
});

test('Home Page Test', async () => {
  const products = page.locator('.hrefch');
  await expect(products).toHaveCount(9);
});

// Add Products to the cart
test('Add Product to cart Test', async () => {
  // Attach dialog handler before clicking
  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  });

  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
  await page.locator('//a[normalize-space()="Add to cart"]').click();
  await page.waitForTimeout(2000);
});