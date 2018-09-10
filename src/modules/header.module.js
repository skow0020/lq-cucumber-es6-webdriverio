import Page from '../pages/page';

class HeaderModule extends Page {
  get header() { return $('.menu_post_header'); }
  get categories() { return $('=CATEGORIES'); }

  trait() {
    this.header.waitForVisible();
  }

  chooseCategory(category)
  {
    this.categories.click();
    browser.click(`=${category}`);
  }
}

export default new HeaderModule();
