const {test,expect} = require ('@playwright/test');

test("Multiple Elemets Locator", async ({page}) =>{

    await page.goto("https://www.demoblaze.com/index.html");

    const links = await page.$$('a');

    for(const link of links){

        const linktext = await link.textContent()
        console.log(linktext)

    }

    const products = await page.$$("//div[@id='tbody']//div//h4/a")
    page.waitForSelector("//div[@id='tbody']//div//h4/a")  //waiting for the element to laod

    for(const product of products){

        const prodName = await product.textContent()
        cosnole.log(prodName)

    }

})