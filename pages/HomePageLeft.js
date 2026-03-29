import BasePage from "./BasePage";
import {expect} from '@playwright/test';

export default class HomePageLeft extends BasePage{
    constructor(page){
        super(page);

        this.NameInput = "#name";
        this.EmailInput = "#email";
        this.PhoneInput = "#phone";
        this.AddressInput = "#textarea";
    }

    // -----------------ACTIONS-----------------------------

    async fillName(name){
        await this.page.fill(this.NameInput, name);
    }

    async fillEmail(email){
        await this.page.fill(this.EmailInput, email);
    }

    async fillPhone(phone){
        await this.page.fill(this.PhoneInput, phone);
    }

    async fillAddress(address){
        await this.page.fill(this.AddressInput, address);
    }

     // -----------------VALIDATIONS-----------------------------

    async ValidateName(value){
        await expect(this.page.locator(this.NameInput)).toHaveValue(value);
    }

    async validateEmail(value) {
        await expect(this.page.locator(this.EmailInput)).toHaveValue(value);
    }

    async validatePhone(value) {
        await expect(this.page.locator(this.PhoneInput)).toHaveValue(value);
    }

    async validateAddress(value) {
        await expect(this.page.locator(this.AddressInput)).toHaveValue(value);
    }
}