import { Given } from 'cucumber';
import page from '../../src/pages/home.page';

Given('I am on the home page', () => {
  page.trait();
});
