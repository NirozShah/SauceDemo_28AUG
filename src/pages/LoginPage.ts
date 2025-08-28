import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class LoginPage extends BasePage{
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginBtn: Locator;

    constructor( page: Page) {  
      super(page);
    this.usernameInput = page.locator('[id="user-name"]');
    this.passwordInput = page.locator('[id="password"]');
    this.loginBtn = page.locator('[id="login-button"]');

    }

  async goto(url: string) {
   await this.page.goto(url);
  
  }

  async login(username: string, password: string) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginBtn);

      //verify login worked by checking for the title of the page
      const Pagetitle =  await this.page .title();
       await expect(Pagetitle).toEqual("Swag Labs");
       await this.page.screenshot({path: 'test-results/screenshots/saucedemo_login.png'});
  }

}