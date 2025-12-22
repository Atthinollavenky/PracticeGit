const { test, expect } = require('@playwright/test');

test('Auto Suggestions', async({page})=> {
   

    await page.goto("https://www.redbus.in/");
    
    
    await page.waitForSelector("(//div[@class='srcDestWrapper___e67e69'])[1]")
    await page.locator("(//div[@class='srcDestWrapper___e67e69'])[1]").click();
      page.setDefaultTimeout(5000)
    //await page.locator("(//div[@class='srcDestWrapper___e67e69'])[1]").fill('Hyderabad');

    (await page.waitForSelector("(//div[contains(text(), 'Hyderabad' )])[1]")).fill();

    const fromCityoptions=await page.$$("(//div[contains(text(), 'Hyderabad' )])[1]")
    for(let options of fromCityoptions)
    {
        const value = await options.textContent();

       if(value.includes("Anand Vihar"))

{
            await options.click();
            break;
}
    }



})
