import { test } from '@playwright/test';

import { LoginPage } from '../../lib/pages/e2e/login.page';
import logindata from '../resources/data/logindata.json';

// debug: inspect imported LoginPage
console.log('Imported LoginPage:', LoginPage, typeof LoginPage);

test.describe('Practice Test Automation Login', () => {
    let loginPage: LoginPage;
    let page;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('should allow user to login successfully with valid username and password', { tag: '@logInWithValidCred' }, async () => {
        const USERNAME = logindata.data.username.trim();
        const PASSWORD = logindata.data.password;
        await loginPage.enterLoginDetails(USERNAME, PASSWORD);
        await loginPage.click_On_Submit_btn();
        await loginPage.verify_Logged_In_Successfully('Logged In Successfully');
        await loginPage.verify_Logout_Text_Display();
    });

    test('should not allow with incorrect username and valid password', { tag: '@logInWithInvalidCred' }, async () => {
        const USERNAME = logindata.data.invalidusername.trim();
        const PASSWORD = logindata.data.password;
        await loginPage.enterLoginDetails(USERNAME, PASSWORD);
        await loginPage.click_On_Submit_btn();
        await loginPage.verify_Error_Message('Your username is invalid!')
    });

    test('should not allow with valid username and incorrect password', { tag: '@logInWithInvalidCred' }, async () => {
        const USERNAME = logindata.data.username.trim();
        const PASSWORD = logindata.data.invalidpassword;
        await loginPage.enterLoginDetails(USERNAME, PASSWORD);
        await loginPage.click_On_Submit_btn();
        await loginPage.verify_Error_Message('Your password is invalid!')
    });

      test('should not allow with empty username and password', { tag: '@logInWithInvalidCred' }, async () => {
        const USERNAME = "";
        const PASSWORD = "";
        await loginPage.enterLoginDetails(USERNAME, PASSWORD);
        await loginPage.click_On_Submit_btn();
        await loginPage.verify_Error_Message('Your username is invalid!')
    });



});