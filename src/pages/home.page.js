import Page from './page';

class HomePage extends Page {
  get pageHeader() { return $$('[alt="Literary Quicksand"]')[0]; }

  constructor() {
    super();
    this.href = '/';
  }

  trait() {
    super.trait(this.href);
    this.pageHeader.waitForVisible();
  }

  navigate() {
    super.navigate(this.href);
    this.trait();
  }
}

export default new HomePage();
