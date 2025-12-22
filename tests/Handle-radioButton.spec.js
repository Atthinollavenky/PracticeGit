const { test, expect } = require('@playwright/test');

test('handle radio button', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Check male radio button
  await page.locator("//input[@type='radio' and @id='male']").check();

  // Assert it's checked
  await expect(page.locator("//input[@type='radio' and @id='male']")).toBeChecked();

  // Assert using isChecked()
  expect(await page.locator("//input[@type='radio' and @id='male']").isChecked()).toBeTruthy();
  expect(await page.locator("//input[@type='radio' and @id='female']").isChecked()).toBeFalsy();
   
  expect
  await page.waitForTimeout(5000);
})