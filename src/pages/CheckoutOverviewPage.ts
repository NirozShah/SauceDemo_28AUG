import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class CheckoutOverviewPage extends BasePage {
  private finishBtn: Locator;
  private successMsg: Locator;

  constructor(page: Page) {
    super(page);
    this.finishBtn = page.locator('[id= "finish"]');
    this.successMsg = page.locator('[class ="complete-header"]');
  }

  async placeOrder() {
    await this.click(this.finishBtn);
    
  }

  async verifyOrderSuccess() {
    await expect(this.successMsg).toHaveText('Thank you for your order!');
     await this.page.screenshot({path: 'test-results/screenshots/saucedemo_order_success.png'});

  }
}
