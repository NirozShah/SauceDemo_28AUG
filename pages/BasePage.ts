// pages/base.page.ts
import { Page, Locator } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async click(locator: string | Locator) {
    if (typeof locator === 'string') {
      await this.page.click(locator);
    } else {
      await locator.click();
    }
  }

  async fill(locator: string | Locator, text: string) {
    if (typeof locator === 'string') {
      await this.page.fill(locator, text);
    } else {
      await locator.fill(text);
    }
  }

  async select(locator: string, value: string) {
    await this.page.selectOption(locator, value);
  }
}