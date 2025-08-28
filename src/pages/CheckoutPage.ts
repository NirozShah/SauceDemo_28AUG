import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class CheckoutPage extends BasePage {
  private firstName: Locator;
  private lastName: Locator;
  private postalCode: Locator;
  private continueBtn: Locator;

    constructor(page: Page) {
      super(page);
    this.firstName = page.locator('[id="first-name"]');
    this.lastName = page.locator('[id="last-name"]');
    this.postalCode = page.locator('[id="postal-code"]');
    this.continueBtn = page.locator('[id="continue"]');
  }

    async fillCheckoutDetails(fname: string, lname: string, zip: string) {
      await this.fill(this.firstName, fname);
      await this.fill(this.lastName, lname);
      await this.fill(this.postalCode, zip);    
      await this.click(this.continueBtn); 
    await this.page.screenshot({ path: 'test-results/screenshots/saucedemo_checkout.png' });
  }
}