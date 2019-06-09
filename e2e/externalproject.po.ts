import { browser, by, element } from 'protractor';

export class ExternalProjectPage {
  
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/request-project');
  }

  getFullNameTextbox() {
    return element(by.name('fullName'));
  }

  getEmailTextbox() {
    return element(by.name('email'));
  }

  getProjectTitleTextbox() {
    return element(by.name('projectTitle'));
  }

  getDescriptionTextbox() {
    return element(by.name('description'));
  }

  getForm() {
    return element(by.css('.contact-form'));
  }

  getSubmitButton() {
    return element(by.css('#btnSubmit'));
  }
}