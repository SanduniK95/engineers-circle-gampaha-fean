import { browser, by, element } from 'protractor';

export class SigninPage {
  
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/sign-in');
  }

  getEmailTextbox() {
    return element(by.name('userName'));
  }

  getPasswordTextbox() {
    return element(by.name('userPassword'));
  }

  getForm() {
    return element(by.css('#loginForm'));
  }

  getSubmitButton() {
    return element(by.css('#btnSubmit'));
  }
}