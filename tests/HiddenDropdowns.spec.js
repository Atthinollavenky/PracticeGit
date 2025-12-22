const{test,expect}= require('@playwright/test');

test('Hidden Dropdowns', async({page})=> {

    
await page.waitForTimeout(5000);
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.locator("//input[@name='username']").fill("Admin");
await page.locator("//input[@name='password']").fill("admin123");
await page.locator("//button[@type='submit']").click();

await page.locator("//span[normalize-space()='PIM']").click();
await page.locator("//div[@class='oxd-table-filter']//div[6]//div[1]//div[2]//div[1]//div[1]//div[1]").click();

await page.waitForTimeout(5000);

const options=await page.$$("//div[@role='listbox']//span")

for(let option of options)
{
    const jobTitle=await option.textContent();
    //console.log(jobTitle);
    
    if(jobTitle.includes("QA Engineer"))
    {
        await option.click();

    }

}

})