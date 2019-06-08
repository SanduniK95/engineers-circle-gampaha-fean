import { SigninPage } from './signin.po';
import { browser } from 'protractor';

describe('Sign in tests', () => {
    let page: SigninPage;

    beforeEach(() => {
        page = new SigninPage();
        page.navigateTo();
    });

    it('Sign in form should be valid', () => {
        page.getEmailTextbox().sendKeys('engineer.circle.gampaha@gmail.com');
        page.getPasswordTextbox().sendKeys('123456');

        let form = page.getForm().getAttribute('class');

        expect(form).toContain('ng-valid');
    });

    it('Sign in form should be invalid', () => {
        page.getEmailTextbox().sendKeys('');
        page.getPasswordTextbox().sendKeys('');

        let form = page.getForm().getAttribute('class');

        expect(form).toContain('ng-invalid');
    });

    it('Should set email value to local storage', () => {
        page.getEmailTextbox().sendKeys('engineer.circle.gampaha@gmail.com');
        page.getPasswordTextbox().sendKeys('123456');

        page.getSubmitButton().click();

        let valLocalStorage = browser.executeScript("return window.localStorage.getItem('LoggedInUser');");
        expect(valLocalStorage).toEqual('engineer.circle.gampaha@gmail.com');
    });
});