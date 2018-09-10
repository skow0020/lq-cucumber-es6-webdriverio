import Page from './page';

class WriteForUsPage extends Page {
  get pageHeader() { return $$('.page-content h2')[0]; }
  get nameInput() { return $$('[name=your-name]')[0]; }
  get emailInput() { return $$('[name=your-email')[0]; }
  get sendButton() { return $$('[value=Send]')[0];  }

  constructor() {
    super();
    this.href = '/contact/write-for-us';
  }

  trait() {
    super.trait(this.href);
    this.pageHeader.waitForText();
    this.pageHeader.getText().should.be.eql('WRITE FOR US');
  }

  navigate() {
    super.navigate(this.href);
    this.trait();
  }

  submitMyInfo() {
    this.nameInput.setValue('MY NAME');
    this.emailInput.setValue('EMAIL@email.com');
    // this.sendButton.click();
  }
}

export default new WriteForUsPage();
