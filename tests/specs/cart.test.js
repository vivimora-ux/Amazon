import { browser, expect } from "@wdio/globals";
import Home from "../pageobjects/home.page.js";
import Cart from "../pageobjects/cart.page.js";

import allureReporter from "@wdio/allure-reporter";

describe("Adding item to cart", () => {
  before(async () => {
    // 01 - Amazone Home Page
    await browser.url("/");
    await browser.setWindowSize(1312, 848);
    await expect(browser).toHaveUrl("https://www.amazon.ca/");
    await expect(browser).toHaveTitle(
      "Amazon.ca: Low Prices – Fast Shipping – Millions of Items"
    );
    await expect(Cart.header).toMatchElementSnapshot("amazon-index", 10);

    // 02 - Search Feature
    await Home.searchInput.addValue("lego");
    await Home.searchIcon.click();
    await expect(Home.searchResults).toHaveText('"lego"');
    await expect(Cart.headerVendor).toMatchElementSnapshot(
      "logo-header-vendor"
    );
    allureReporter.addFeature("Feature_name");
    allureReporter.addSeverity("critical");
  });

  // 03 - Click on the First Product & Extract Product Page Price
  it("Add to Cart", async () => {
    await expect(Cart.firstItem).toExist();
    await Cart.firstItem.click();
    await expect(Cart.price).toExist();

    await browser.execute(
      "document.querySelector('.aok-offscreen').className = ''"
    );

    const productPriceList = Cart.price.getText();
    const productPrice = Array.isArray(productPriceList)
      ? productPriceList[0]
      : productPriceList;
    console.log("PRICE", productPrice);

    // 04 - Add the Product to the Cart
    await expect(Cart.addProduct).toExist();
    await Cart.addProduct.click();

    await expect(Cart.addedToCart).toHaveText("Added to cart");

    const productSubtotal = await Cart.subtotal.getText();
    console.log("subtotal", productSubtotal);

    // if (productPrice === productSubtotal) {
    //   console.log("The Same");
    //   console.log("Product Price", productPrice);
    //   console.log("Product Subtotal Price", productSubtotal);
    // } else if (productPrice === productSubtotal) {
    //   console.log("Not the same");
    //   console.log("Product Price", productPrice);
    //   console.log("Product Subtotal Price", productSubtotal);
    // } else {
    //   //  block of code to be executed if the condition1 is false and condition2 is false
    // }
  });

  // 04 -
});
