const {test,expect} = require('@playwright/test')

    test('Assertions', async({page})=>{
    
        //open page url

        await page.goto('https://demo.nopcommerce.com/register')

        //expect(page).to Have a URL

        await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

        //expect (page).tO HaveTitle

        await expect(page).toHaveTitle('nopCommerce demo store. Register')

        //expect locator.ToBeVisible()
        const logo=page.locator("img[alt='nopCommerce demo store']")
        await expect(logoElement).toBeVisible()

    //expect(Locator).toBeEnabled()
const searchStoreBox=await page.locator('#small-searchterms')
await expect(searchStoreBox).toBeEnabled()

//check box

const newsLetterCheckbox=page.locator('#Newsletter')
await expect(newsLetterCheckbox).toBeChecked()

//expect(locator).toHaveAttribute
const regButton=await page.locator('#register-button')
await expect(regButton).toHaveAttribute('type','submit')

//expect(locator).toHaveText()
const newsLetterLabel=page.locator('label[for="Newsletter"]')
await expect(newsLetterLabel).toHaveText('Newsletter')

//expect(locator).toContainText()  element contains text
await expect(await page.locator('.page-tilte h1')).toContainText('Reg')

//expect(locator).toHaveValue()   Input has a value
 
const emailInput=await page.locator('Emial')
await emailInput.fill('test@demoi.com')
await expect(emailInput).toHaveValue('test@demo.com')

//10) expect(locator).toHaveCount() List of elements has given lenghth

const options=await page.locator('select[name="DateOfBirthMonth"] option')
await expect(options).toHaveCount(13)

    })

