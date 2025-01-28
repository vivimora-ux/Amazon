import { browser, expect } from "@wdio/globals";
import Home from "../pageobjects/home.page.js";
import Cart from "../pageobjects/cart.page.js";

describe("Adding item to cart", () => {
  // 01 - Amazone Home Page
  it("Open URL, verify url & tittle", async () => {
    await browser.url("/");
    await expect(browser).toHaveUrl("https://www.amazon.ca/");
    await expect(browser).toHaveTitle(
      "Amazon.ca: Low Prices – Fast Shipping – Millions of Items"
    );
  });

  // 02 - Search Feature
  it("Search Content & Verify text", async () => {
    await Home.searchInput.addValue("diaper genie");
    await Home.searchIcon.click();
    await expect(Home.searchResults).toHaveText('"diaper genie"');
  });

  // 03 - Pick first item from result
  it("Pick Item", async () => {
    await expect(Cart.firstItem).toExist();
    await Cart.firstItem.click();
    await expect(Cart.price).toExist();

    //const wholePrice = await Cart.priceWhole.getText();
    //const fractionPrice = await Cart.priceFraction.getText();
    //const fullPrice = `${wholePrice}.${fractionPrice}`;
    //console.log("Price", fullPrice);
    // Remove hidden class
    await browser.execute(
      "document.querySelector('.aok-offscreen').className = ''"
    );
    const productPrice = await Cart.price.getText();
    console.log("Price", productPrice);

    // Remove hidden class & comparation
    // await browser.execute(
    //   "document.querySelector('.a-offscreen').className = ''"
    // );
    // const deliveryPrice = await Cart.finalPrice.getText();
    // console.log("Final Price", finalPrice);
    // Cart.price.isEqual(Cart.finalPrice);
    await expect(Cart.addProduct).toExist();
    await Cart.addProduct.click();

    const productSubtotal = await Cart.subtotal.getText();
    // console.log("SUBTOTAL", productSubtotal);
    // await expect(Cart.subtotal).toExist();
    // productPrice.isEqual(productSubtotal);

    if (productPrice === productSubtotal) {
      console.log("The Same");
      console.log("Product Price", productPrice);
      console.log("Product Subtotal Price", productSubtotal);

      elseif;
      console.log("Not the same");
      console.log("Product Price", productPrice);
      console.log("Product Subtotal Price", productSubtotal);
    }
  });

  // 04 -
});
