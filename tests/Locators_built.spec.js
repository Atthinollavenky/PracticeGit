const { test, expect } = require('@playwright/test');

test('Built-inLocators', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Wait for logo to be visible
  const logo = page.getByAltText('company-branding');
  await expect(logo).toBeVisible({ timeout: 30000 });

  // Fill login credentials
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  // Click login button
  await page.getByRole('button', { name: 'Login' }).click(); // Use 'name' instead of 'type' for better matching

  //
await expect(await page.getByText('vishwas dsadsasdfs')).toBeVisible();

})