const{test, expect}= require('@playwright/test');

test('Handling Table', async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

const table = await page.locator('#productTable')

//Total no of rows & columns

    const columns = await table.locator('thead tr th')
    console.log("Total no of columns: " , await columns.count());
    expect (await columns.count()).toBe(4);

   const rows= await table.locator('tbody tr')
    console.log('Total no of rows:', await rows.count());
    expect (await rows.count()).toBe(5);
 

    //2) select check box for product 4

     /*  const machedRow= rows.filter({
          has: page.locator('td'),
          hasText: 'Smartwatch'
       })

      await machedRow.locator('input').check();

       await page.waitForTimeout(5000);
*/

//3) Select multiple products by Re-usable functions

/*await selectProduct( rows,page,'Smartwatch');
await selectProduct( rows,page,'Tablet');
await selectProduct( rows,page,'Wireless Earbuds');

await page.waitForTimeout(5000);

// Re-usable function
async function selectProduct( rows,page,productName){

    const machedRow= rows.filter({
        has: page.locator('td'),
        hasText: productName
     }) 
    }*/

     //4) print all product details using Loop

     /*for(let i=0; i< await rows.count(); i++)
       {
         const row=rows.nth(i);

         const tds= row.locator('td');
         for(let j=0;j< await tds.count()-1;j++)
         {
            console.log (await tds.nth(j).textContent());
         }


        }*/

         //5) read all data from multiple pages in the table

      const pages = await page.locator('.pagination li a')
       console.log('Number of pages in the table:', await pages.count())

       for(let p=0;p<await pages.count();p++)
       {
        if(p>0)
        {
            await pages.nth(p).click() 
        }
      for(let i=0; i< await rows.count(); i++)
       {
         const row=rows.nth(i);

         const tds= row.locator('td');
         for(let j=0;j< await tds.count()-1;j++)
         {
            console.log (await tds.nth(j).textContent());
         }


        }


       }

})