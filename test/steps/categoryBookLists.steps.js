import { Given, Then, When } from 'cucumber';

import page from '../../src/pages/categoryBookLists.page';

Given('I am on the book lists page', () => {
  page.trait();
});

When('I navigate to the book lists page', () => {
  page.navigate();
});

Then('I can navigate to the Book Lists category', () => {
  page.navigateCategories('Book Lists');
});
