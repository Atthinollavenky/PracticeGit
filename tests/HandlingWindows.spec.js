const {test, expect, chromium} = require('@playwright/test')

test('Handling Windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    
    const page1 = await context.newPage()
    const page2 = await context.newPage()
 
    const allPages= context.pages()
    console.log("No of pages: "+allPages.length)

    await page1.goto('https://demoblaze.com/index.html')
     await expect(page1).toHaveTitle("STORE")

     await page1.waitForTimeout(3000);
    await page2.goto('https://testautomationpractice.blogspot.com/')
    await expect(page2).toHaveTitle("Automation Testing Practice") 

    await page1.bringToFront();
    await page1.waitForTimeout(3000)
    

})