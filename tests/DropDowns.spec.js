const{test , expect}=require('@playwright/test')

test("Handle dropdowns", async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");

  //Multiple ways to select options from the dropdown

   // Scroll down by 1000 pixels
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });

  await page.locator("//select[@id='country']").selectOption('India')
  
  await page.waitForTimeout(5000);
   
// Assertions
//1) check number of options in dropdown -Approach-1
 // const options= await page.locator("//select[@id='country']//option") 
  //await expect(options).toHaveCount(10);

//2)check number of options in dropdown -Approach-2
//const options=await page.$$("//select[@id='country']//option")
//console.log("Number of options in dropdown: ", options.length);
//await expect(options.length.toBe(10))


//3)Check presence of value in the dropdown - Approach -1
//const content =await page.locator("//select[@id='country']").textContent();
//await expect(content.includes('India')).toBeTruthy();

//4) Check presence of value in the dropdown - Approach -2 using loop
/*
const options=await page.$$("//select[@id='country']//option")
let status=false;

for(const option of options)
{
   // console.log(await option.textContent());
   
   let value=await option.textContent();
    if(value.includes('France'))
    {
      status=true;
      break;
    }
  }
    expect(status).toBeTruthy();

    */

//5)select option from dropdown using loop


const options=await page.$$("//select[@id='country']//option")
for(const option of options){

    let value=await option.textContent();
    if(value.includes('France'))

    {
      await page.selectOption("//select[@id='country']", {label: value} );
      break;
    }
}
await page.screenshot({ path: 'fullpage.png', fullPage: true });
await page.waitForTimeout(5000);


})