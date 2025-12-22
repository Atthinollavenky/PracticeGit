const{test, expect}=require('@playwright/test')
const exp = require('constants')
test('handle inputbox', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

//input box -Full name

await expect(await page.locator('input[placeholder="Enter your full name"]')).toBeVisible()
await expect(await page.locator('input[placeholder="Enter your full name"]')).toBeEmpty()
await expect(await page.locator('input[placeholder="Enter your full name"]')).toBeEditable()
await expect(await page.locator('input[placeholder="Enter your full name"]')).toBeEnabled()

await page.locator('input[placeholder="Enter your full name"]').fill("Vishwas123")
//page.fill('input[placeholder="Enter your full name"]','Vishwas123')

await page.waitForTimeout(5000)

await expect(await page.locator('input[placeholder="Enter your full name"]')).toHaveValue("Vishwas123")

})