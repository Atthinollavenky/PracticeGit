// @ts-check
import { test, expect } from '@playwright/test';

test('adds product to cart on Saucedemo', async ({ page }) => {
  // Go to Sauce Demo
  await page.goto('https://www.saucedemo.com');

  // Login with standard user
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Wait for product list to appear
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Pick the first product and store its name
  const firstProduct = page.locator('.inventory_item').first();
  const productNameRaw = (await firstProduct.locator('.inventory_item_name').textContent()) || '';
  const productName = productNameRaw.trim();

  // Add the first product to the cart
  await firstProduct.locator('button:has-text("Add to cart")').click();

  // Verify the cart badge shows 1
  const badge = page.locator('.shopping_cart_badge');
  await expect(badge).toHaveText('1');

  // Open the cart and verify the product is listed
  await page.click('.shopping_cart_link');
  await expect(page.locator('.cart_item .inventory_item_name')).toHaveText(productName);
});
