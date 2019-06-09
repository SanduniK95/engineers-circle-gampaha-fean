import { ExternalProjectPage } from './externalproject.po';
import { browser } from 'protractor';

describe('Request project tests', () => {
  let page: ExternalProjectPage;

  beforeEach(() => {
    page = new ExternalProjectPage();
    page.navigateTo();
  });

  it('Request project form should be valid', () => {
    page.getFullNameTextbox().sendKeys('Axl Heck');
    page.getEmailTextbox().sendKeys('axlisawesome@gmail.com');
    page.getProjectTitleTextbox().sendKeys('Neighbourhood cleanup');
    page.getDescriptionTextbox().sendKeys('Do you wanna join us for a neighbourhood cleanup?');

    let form = page.getForm().getAttribute('class');

    expect(form).toContain('ng-valid');
  });

  it('Request project form should be invalid', () => {
    page.getFullNameTextbox().sendKeys('');
    page.getEmailTextbox().sendKeys('');
    page.getProjectTitleTextbox().sendKeys('');
    page.getDescriptionTextbox().sendKeys('');

    let form = page.getForm().getAttribute('class');

    expect(form).toContain('ng-invalid');
  });
});