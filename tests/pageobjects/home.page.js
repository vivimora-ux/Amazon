import { $ } from "@wdio/globals";
import Page from "./page.js";

class Home extends Page {
  get searchInput() {
    return $("#twotabsearchtextbox");
  }
  get searchIcon() {
    return $("#nav-search-submit-button");
  }
  get searchResults() {
    return $(".a-color-state.a-text-bold");
  }
  get searchDropdown() {
    return $("#nav-flyout-searchAjax");
  }
  get searchDropdownItem() {
    return $("#sac-suggestion-row-5-cell-1");
  }
  open() {
    return super.open();
  }
}

export default new Home();
