import { browser, element, by } from 'protractor';

export class MaterialDashboardAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-landing h1')).getText();
  }
}
