const { test, expect } = require('@playwright/test');

test('Bootstrap dropdown', async ({ page }) => {

      test.setTimeout(60000);

  await page.goto('https://www.w3schools.com/bootstrap5/bootstrap_dropdowns.php')
await page.waitForSelector("(//button[normalize-space(text()='Dropdown button')])[1]")
  // Click the first dropdown button
  await page.locator("(//button[normalize-space(text()='Dropdown button')])[1]").click();

  // Locate the visible dropdown menu
  //const options = page.locator("//ul[@class='dropdown-menu show']/li");

  // Optional: Assert number of options
 //await expect(options).toHaveCount(3); // Adjust count based on actual items
  
 //2) 
// const options=await page.$$("//ul[@class='dropdown-menu show']/li")
 //await expect(options.length).toBe(3);

 //3)select options from dropdown

 const options=await page.$$("ul[class='dropdown-menu show'] li a");

 for(const option of options){

   const value =  await option.textContent();
   console.log("Option value:",value);    
}



  // Take a screenshot
  await page.screenshot({ path: 'bootstrapdropdown.png', fullPage: true });

  // Wait for observation
   
          await page.waitForTimeout(5000);


})