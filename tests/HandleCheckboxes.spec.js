const {test, expect} = require('@playwright/test');
test('handle checkboxes', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Scroll down by 1000 pixels
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });

 // await page.waitForTimeout(5000); // Optional: pause to observe scroll




    // Select the checkbox
    await page.locator("//input[@type='checkbox' and  @value='sunday']").check();
    //await page.check("//input[@type='checkbox' and  @value='sunday']");

       // Assert the checkbox is checked    
       
        expect(await page.locator("//input[@type='checkbox' and  @value='sunday']")).toBeChecked();    

       expect(await page.locator("//input[@type='checkbox' and  @value='sunday']").isChecked()).toBeTruthy();
       
         expect(await page.locator("//input[@type='checkbox' and  @value='monday']").isChecked()).toBeFalsy();

    //Multiple checkboxes
    const checkboxeLocators=[
        "//input[@type='checkbox' and  @value='wednesday']",
        "//input[@type='checkbox' and @value='monday']",
        "//input[@type='checkbox' and @value='saturday']"

 
    ];
      for(const locator of  checkboxeLocators) //select multiple checkboxes
        {
            await page.locator(locator).check();


      }

for(const locator of  checkboxeLocators) //unselect multiple checkboxes which are already checked
        {
            if(await page.locator(locator).isChecked() )
          {  await page.locator(locator).uncheck();
          }

      }

       await page.screenshot({ path: 'fullpage.png', fullPage: true });
         await page.waitForTimeout(5000);

})