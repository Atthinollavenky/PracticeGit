const { test, expect } = require('@playwright/test')

test('Single File', async({page})=>{

await page.goto('https://www.foundit.in/')

await page.waitForSelector('')
await page.locator('').click()



})