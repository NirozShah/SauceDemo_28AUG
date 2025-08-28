import { Locator, Page , expect } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class ProductsPage extends BasePage {
    private cartLink: Locator;
    private cartBadge: Locator;
  
    constructor( page: Page) {
    super(page);

  this.cartLink = this.page.locator(".shopping_cart_link");
  this.cartBadge = page.locator(".shopping_cart_badge");
  }
  async addItemToCart(itemNames: Array<string> | string) {
    const item = this.page.locator(`.inventory_item:has-text("${itemNames}")`);
     await this.click(item.locator('button[class="btn btn_primary btn_small btn_inventory "]'));
     
  }
 async addTwoItems(item1: string, item2: string) {
    await this.addItemToCart(item1);
    await this.addItemToCart(item2);
 }
    async verifyCartBadge(expectedCount: string) {
        await expect(this.cartBadge).toHaveText(expectedCount);
    }   
    
  async goToCart() {
    await this.click(this.cartLink);
  }
}

