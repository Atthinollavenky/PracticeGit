const{test,expect}=require('@playwright/test')

test("Handle dropdowns", async({page}) => {
 await page.goto("https://testautomationpractice.blogspot.com/")

 // Scroll down by 1000 pixels
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });

 //Select multiple options from multi select dropdown
await page.selectOption("//select[@id='colors']",['white','Green','Blue']);

//Assertions
//1)check number of options in dropdowns

//await page.locator("//select[@id='colors']")
//await expect(options).toHaveCount(5)

//2)check the number of options in dropdown using JS handles

//const options=await page.$$("//select[@id='colors']")
//console.log("Number of options:",options.length);

await page.screenshot({ path: 'fullpage.png', fullPage: true });

await page.waitForTimeout(5000);
}
)