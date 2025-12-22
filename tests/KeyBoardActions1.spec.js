// ...existing code...
const { test, expect } = require('@playwright/test')

test('KeyBoard Actions1', async ({ page }) => {
  await page.goto('https://gotranscript.com/text-compare')

 /* const input = page.locator('[name="text1"]')
  await expect(input).toBeVisible()
  await input.fill('Hi My Friend')
*/

   await page.type('[name="text1"]','Automationtest')
  //Ctrl + A - Select the text
   
await page.keyboard.press('Control+A')

  //Ctrl + C -copy the text
  
  await page.keyboard.press('Control+C')

  //Tab
await page.keyboard.down('Tab')
await page.keyboard.up('Tab')

  //Ctrl + V

await page.keyboard.press('Control+V')


   await page.waitForTimeout(5000)

  })
// ...existing code...