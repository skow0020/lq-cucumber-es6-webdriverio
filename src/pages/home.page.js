import Page from './page';

class HomePage extends Page {
  get pageHeader() { return $$('[alt="Literary Quicksand"]')[0]; }

  constructor() {
    super();
    this.href = 'literaryquicksand';
  }

  trait() {
    browser.waitUntil(() => {
      return browser.getUrl().includes(this.href);
    }, 15000, 'Homepage did not load');
    
    this.pageHeader.waitForVisible();
  }

  navigate() {
    super.navigate(this.href);
    this.trait();
  }
}

export default new HomePage();
