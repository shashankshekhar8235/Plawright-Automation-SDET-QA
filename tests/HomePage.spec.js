const {test,expect} = require ('@playwright/test');

test('Homepage', async ({page}) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const pageTitle = page.title();
  console.log("Page title is: ", pageTitle);

  await expect(page).toHaveTitle('STORE');

  const pageUrl = page.url();
  console.log("Page URL is: ", pageUrl);

  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

  await page.close();
})

// npx playwright test 
// npx playwright test Mytest.spec.js
// npx playwright test Mytest.spec.js --project=chromium
// npx playwright test Mytest.spec.js --project=chromium --headed
// npx playwright test Mytest.spec.js --project=chromium --headed --debug