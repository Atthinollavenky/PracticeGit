import { test, expect } from '@playwright/test';

import {LoginPageTest} from '../pages/LoginTest';

import {HomePageTest} from '../pages/HomePage';

import {CartPageTest} from '../pages/CartPage';

test('POM Test', async ({ page }) => {
  // Create LoginPage instance
  const login = new LoginPageTest(page);

  // Navigate to login page
  await login.gotoLoginPage();

  // Perform login
  await login.login('venky567', 'Venky@123');

  // Wait for modal to close or page update
  await page.waitForTimeout(3000);


  

  // Assertion: check if "Welcome" message appears
 // const welcomeText = page.locator('#nameofuser'); 
 // await expect(welcomeText).toHaveText('Welcome venky567');


//HOME PAGE

const home=new HomePageTest(page);
await home.addProductToCart('Nexus 6')
await page.waitForTimeout(3000);
await home.gotoCart();

//CART PAGE

const cart=new CartPageTest(page);
await page.waitForTimeout(3000);
const status=await cart.checkProductInCart('Nexus 6')
expect(await status).toBe(true);




})
