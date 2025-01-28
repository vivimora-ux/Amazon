import { $ } from "@wdio/globals";
import Page from "./page.js";

class Cart extends Page {
  get firstItem() {
    return $("(//div[@class='a-section a-spacing-base'])[1]");
  }
  get price() {
    return $(
      //"#apex_desktop_qualifiedBuybox #corePriceDisplay_desktop_feature_div div[class*=aok-relative]"
      //a-section a-spacing-none aok-align-center aok-relative
      "//div[@id='corePriceDisplay_desktop_feature_div']//div[@class='a-section a-spacing-none aok-align-center aok-relative']"
    );
  }
  get addProduct() {
    return $("#add-to-cart-button");
  }
  get subtotal() {
    return $("#sw-subtotal span[class*=a-offscreen]");
  }
  get priceWhole() {
    return $(
      '//div[@id="corePriceDisplay_desktop_feature_div"]//span[@class="a-price-whole"]'
    );
  }

  get priceFraction() {
    return $(
      '//div[@id="corePriceDisplay_desktop_feature_div"]//span[@class="a-price-fraction"]'
    );
  }

  open() {
    return super.open();
  }
}

export default new Cart();
