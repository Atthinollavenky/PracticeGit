const { test, expect } = require('@playwright/test')

test('Home Page Test', async({ page }) =>{


await page.goto('https://demoblaze.com/index.html')

    //Login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('venky567')
await page.locator('#loginpassword').fill('Venky@123')
   await page.waitForTimeout(5000)

await page.locator('//button[normalize-space()="Log in"]').click()


//Home Page

const products=await page.$$('.hrefch')
expect(products).toHaveLength(9)

//LogOut

await page.locator('#logout2').click()

});