import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class CartPage extends BasePage {
  private checkoutBtn: Locator;
  
  
  constructor(page: Page) {
    super(page);
    this.checkoutBtn = page.locator('[id="checkout"]');
  }

    async proceedToCheckout() {
      await this.click(this.checkoutBtn);
  }
    }