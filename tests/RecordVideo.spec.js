import{test,expect} from '@playwright/test'

test('Record Video of a page', async({page})=>{

    await page.goto('https://demoblaze.com/index.html')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('venky567')
    await page.locator('#loginpassword').fill('Venky@123')
    await page.locator('//button[normalize-space()="Log in"]').click();
    
    await expect(page.locator('#logout2')).toBeVisible()


})