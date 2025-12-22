//const{test, expect} = require('@playwright/test')

import {test, expect} from '@playwright/test'
import { link } from 'fs'

test('Locators', async({page})=>{

   await page.goto("https://www.demoblaze.com/index.html")

   //click on login button  -property

   //await page.locator('id=login2').click()

   await page.click('id=login2')

   //provide username   --CSS

   //await page.locator('#loginusername').fill("pavanol")
   //await page.type('#loginusername','venky567')
      await page.fill('#loginusername','venky567')

      //provide password

      await page.fill("input[id='loginpassword']", 'Venky@123')


       //Click on Login Button

       await page.click("//button[normalize-space()='Log in']")

       //verify logout link presence
       const logoutlink=await page.locator("//a[normalize-space()='Log out']")

       //await page.waitForSelector(await page.locator("//a[normalize-space()='Log out']"))
       await expect(logoutlink).toBeVisible();
       //await page.close()






}



)