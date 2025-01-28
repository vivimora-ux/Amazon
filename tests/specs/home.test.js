import { expect } from "@wdio/globals";
import Home from "../pageobjects/home.page.js";

describe("Amazone Home Page", () => {
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
    await Home.searchInput.addValue("technic lego sets");
    await Home.searchIcon.click();
    await expect(Home.searchResults).toHaveText('"technic lego sets"');
  });

  //03 - Dropdown
  it("Open Dropdown, select item & Verify text", async () => {
    await Home.searchInput.click();
    await expect(Home.searchDropdown).toBeDisplayed();
    await expect(Home.searchDropdownItem).toExist();
    await Home.searchDropdownItem.click();
    await expect(Home.searchResults).toHaveText('"technic lego sets mercedes"');
  });
});
