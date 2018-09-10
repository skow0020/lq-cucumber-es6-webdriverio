import { Given, Then, When } from 'cucumber';

import page from '../../src/pages/writeForUs.page';

Given('I am on the write for us page', () => {
  page.trait();
});

When('I navigate to the write for us page', () => {
  page.navigate();
});

Then('I can submit my info', () => {
  page.submitMyInfo();
});
