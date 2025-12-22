const{test , expect}= require('@playwright/test')

test('Handling DatePicker', async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");

   // await page.fill('#datepicker', '11/08/2025')
   
   //date picker

   const year="2026"
   const month="October"
   const date="08"
    await page.click('#datepicker');

   while(true)
    {
        const currentYear=await page.locator('.ui-datepicker-year').textContent()
        const currentMonth=await page.locator('.ui-datepicker-month').textContent()
         
        if(currentYear== year && currentMonth==month)
        {
            break;
        }
       await page.locator('[title="Next"]').click()//next
  //await page.lcocator('[title="Prev"]').click()//previous
    }

    const dates = 
    await page.$$("//a[@class='ui-state-default']")
    

//dat selection using loop
   /* for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click();
            break;
                await page.waitForTimeout(5000);

        }
    }*/

        //Date selection without loop

        await page.click("//a[@class='ui-state-default'][text()='9']")

    await page.waitForTimeout(5000);

})