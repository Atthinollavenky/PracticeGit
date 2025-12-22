const{test, expect}= require('@playwright/test');

test('Alert with OK', async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    //Enabling alert handling
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm'); // Check if it's an alert dialog
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); // Accept the alert  
    })
   
    await page.click("//button[normalize-space()='Alert']")
     
    //await expect(page.locator(//p)) 
    
    await page.waitForTimeout(5000)

      
});