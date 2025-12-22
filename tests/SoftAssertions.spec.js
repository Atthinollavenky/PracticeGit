const{test,expect}=require('@playwright/test')
const exp = require('constants')

test("SoftAssertions", async({page})=>{

    await page.goto("https://demoblaze.com/index.html")

    //Hard Assertions


   /* await expect(page).toHaveTitle('STORE123')
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
   */  await page.locator('#nava').isVisible()

//Soft Assertions
     await expect(page).toHaveTitle('STORE123')
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
     await page.locator('#nava').isVisible()


})