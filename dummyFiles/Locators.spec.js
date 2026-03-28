const {test,expect} = require ('@playwright/test');

test("Locators", async ({page}) => {

    await page.goto("https://www.demoblaze.com/index.html")

    // PROPERTY AS A LOCATOR
    await page.click('id=login2')
    await page.locator('id=login2').click

    // CSS SELECTOR AS A LOCATOR
    await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername', 'pavanol')
    await page.type('#loginusername')
    await page.fill("input[id='loginpassword']", 'test@123')

    // XPATH AS A LOCATOR
    await page.click("//button[normalize-space()='Log in']")

    const logoutlink = await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutlink).toBeVisible();
    await page.close();
})