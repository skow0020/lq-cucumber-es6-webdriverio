import Header from '../modules/header.module';
import Page from './page';

class CategoryBookLists extends Page {
  get bookListsHeader() { return $$('.title_category')[1]; }

  constructor() {
    super();
    this.href = '/category/book-lists';
  }

  trait() {
    super.trait(this.href);
  }

  navigate() {
    super.navigate(this.href);
    this.trait();
  }

  navigateCategories(category) {
    Header.chooseCategory(category);
    this.bookListsHeader.waitForText();
    this.bookListsHeader.getText().should.be.eql('BOOK LISTS');
  }
}

export default new CategoryBookLists();
