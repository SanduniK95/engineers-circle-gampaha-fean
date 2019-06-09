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

        expect(form).toContain('ng-valid');
    });
});