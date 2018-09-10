import { Given, Then, When } from 'cucumber';

import page from '../../src/pages/contributors.page';

Given('I am on the contributors page', () => {
  page.trait();
});

When('I navigate to the contributors page', () => {
  page.navigate();
});

Then('I can view the info of Joli', () => {
  page.viewContributorInfo();
});
