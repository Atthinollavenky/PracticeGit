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

})

//Add Products to the cart
test('Add Product to cart Test', async({ page })=>{

    //Login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('venky567')
await page.locator('#loginpassword').fill('Venky@123')

await page.locator('//button[normalize-space()="Log in"]').click()


await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
await page.locator('//a[normalize-space()="Add to cart"]').click()

page.on('dialog', async dialog=>{

    expect(dialog.message.toConatin('Product added.'))
    await dialog.accept()
    await page.waitForTimeout(5000)



})
//LogOut

await page.locator('#logout2').click()

   await page.waitForTimeout(5000)


})