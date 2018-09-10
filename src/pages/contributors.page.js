import Page from './page';
import should from 'should'; // eslint-disable-line no-unused-vars

class ContributorsPage extends Page {
  get pageHeader() { return $$('.page-content h1')[0]; }
  get contributorJoli() { return $('=Joli'); }

  constructor() {
    super();
    this.href = '/contributors';
  }

  trait() {
    super.trait(this.href);
    this.pageHeader.waitForText();
    this.pageHeader.getText().should.be.eql('Meet The LQ Contributors');
  }

  navigate() {
    super.navigate(this.href);
    this.trait();
  }

  viewContributorInfo(){
    this.contributorJoli.click();
    super.trait('/contributors/joli');
  }
}

export default new ContributorsPage();
