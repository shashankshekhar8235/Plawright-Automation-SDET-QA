import {test, expect} from '@playwright/test';
import HomePageLeft from '../../pages/HomePageLeft';
import UserData from '../../utils/testData';

test.describe("Form Tests @smoke", () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test("Positive of InputFields-Home", async ({page}) => {
        const HomePageLeft1 = new HomePageLeft(page);

        await HomePageLeft1.fillName(UserData.name);
        await HomePageLeft1.fillEmail(UserData.email);
        await HomePageLeft1.fillPhone(UserData.phone);
        await HomePageLeft1.fillAddress(UserData.address);

        await HomePageLeft1.ValidateName(UserData.name);
        await HomePageLeft1.validateEmail(UserData.email);
        await HomePageLeft1.validatePhone(UserData.phone);
        await HomePageLeft1.validateAddress(UserData.address);
        
    })

});
