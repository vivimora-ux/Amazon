import { $ } from "@wdio/globals";
import Page from "./page.js";

class Cart extends Page {
  get firstItem() {
    return $("(//div[@class='a-section a-spacing-base'])[1]");
  }
  get price() {
    return $(
      "//div[@id='corePriceDisplay_desktop_feature_div']//div[@class='a-section a-spacing-none aok-align-center aok-relative']"
    );
  }
  get addedToCart() {
    return $(".a-size-medium-plus.a-color-base.sw-atc-text.a-text-bold ");
  }
  get addProduct() {
    return $("#add-to-cart-button");
  }
  get subtotal() {
    return $("#sw-subtotal span[class*=a-offscreen]");
  }
  // get priceWhole() {
  //   return $(
  //     '//div[@id="corePriceDisplay_desktop_feature_div"]//span[@class="a-price-whole"]'
  //   );
  //}

  get priceFraction() {
    return $(
      '//div[@id="corePriceDisplay_desktop_feature_div"]//span[@class="a-price-fraction"]'
    );
  }
  // Visual Testing
  get header() {
    return $("#navbar-main");
  }
  get headerVendor() {
    return $("//div[@class='a-section a-spacing-none _c2Itd_header_11hwK']");
  }
  open() {
    return super.open();
  }
}

export default new Cart();
