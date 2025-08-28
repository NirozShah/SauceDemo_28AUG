import { test , expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import { SortPage}  from "../pages/SortPage";
import { checkoutDetails, PageURL, products, users } from "../utils/testData";


test("SauceDemo - Place an Order with 2 items", async ({ page }) => {
  const login = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const overview = new CheckoutOverviewPage(page);
  const sort = new SortPage(page);


   // navigate to SauceDemo
   await login.goto(PageURL.Url);

   
   //click login
    await login.login(users.username, users.password);
    
   //verify login worked by checking for the title of the page
   const Pagetitle =  await page .title();
   await expect(Pagetitle).toEqual("Swag Labs");
   await page.screenshot({path: 'test-results/screenshots/saucedemo_login.png'});

// Add first two products to cart
    await productsPage.addTwoItems(products.item1, products.item2);

      // Verify cart badge shows "2"
    await productsPage.verifyCartBadge("2");
    await productsPage.goToCart();


   //checkout
  await cart.proceedToCheckout();

   // Fill customer info
  await checkout.fillCheckoutDetails(
    checkoutDetails.firstName,
    checkoutDetails.lastName,
    checkoutDetails.postalCode
  );

 
// finish order and verify success message
  await overview.placeOrder();
  await overview.verifyOrderSuccess();
 

   // navigate to home page
await page.locator('[id="back-to-products"]').click();

//  Select "Price (low to high)" from sort dropdown and verify sorted successfully
await sort.sortByLowToHigh();
await sort.verifySortedLowToHigh();

});
