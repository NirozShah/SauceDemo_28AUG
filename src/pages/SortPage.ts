import { Page , Locator } from "@playwright/test";

export class SortPage {
  private sortDropdown: Locator;


  constructor(private page: Page) {
    this.sortDropdown = page.locator('.product_sort_container');
  }

   async sortByLowToHigh() {
    await this.sortDropdown.selectOption("lohi"); 
    // SauceDemo uses value="lohi" for Low → High
  }

  async verifySortedLowToHigh() {
    const prices = await this.page.$$eval('.inventory_item_price', els =>
      els.map(el => parseFloat(el.textContent!.replace("$", "")))
    );
    // check if array is sorted
    for (let i = 0; i < prices.length - 1; i++) {
      if (prices[i] > prices[i + 1]) {
        throw new Error(`Prices not sorted correctly: ${prices}`);
      }
    }
    await this.page.screenshot({path: 'test-results/screenshots/saucedemo_sorted_products.png'}); 
  }
}