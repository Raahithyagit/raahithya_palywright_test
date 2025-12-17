import { Locator, Page, expect } from '@playwright/test';
import actions from '../../utils/actions.util';
import { BasePage } from '../common/base.page';

export class LoginPage extends BasePage {
    private readonly page: Page;
    private readonly txtbox_UserName: Locator;
    private readonly txtbox_Password: Locator;
    private readonly btn_Submit: Locator;
    private readonly success_txt_Msg: Locator;
    private readonly error_msg_Invalid_User: Locator;


    constructor(page: Page) {
        super();
        this.page = page;
        this.txtbox_UserName = page.locator('#username');
        this.txtbox_Password = page.locator('#password');
        this.btn_Submit = page.locator('#submit');
        this.success_txt_Msg = page.locator('.post-title');
        this.error_msg_Invalid_User = page.locator('#error');
    }

    async goto() {
        await this.page.goto('/practice-test-login');
    }

    async enterUsername(username: string) {
        await actions.type_Like_Human(this.txtbox_UserName, username, 200);
    }

    async enterPassword(password: string) {
        await actions.type_Like_Human(this.txtbox_Password, password, 200);
    }

    async click_On_Submit_btn() {
        await this.btn_Submit.click();
    }

    async verify_Logout_Text_Display() {
        this.page.locator('.wp-block-button_link:has-text("Log out")').isVisible()
    }

    async verify_Logged_In_Successfully(successmsg: string = '') {
        await expect(this.error_msg_Invalid_User).toContainText(successmsg);
    }

    async verify_Error_Message(errorMsg: string = ''){
        await expect(this.error_msg_Invalid_User).toContainText(errorMsg)
    }

    async enterLoginDetails(username: string = '', password: string = '') {
        await this.page.context().clearCookies();
        await this.goto()
        await this.enterUsername(username);
        await this.enterPassword(password);
    }
}

export default LoginPage;
