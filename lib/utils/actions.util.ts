import { type Locator } from '@playwright/test';

const DEFAULT_TIMEOUT = 60000;
//const DEFAULT_EXPECT_TIMEOUT = 60000;

class ActionsUtil {
    async type_Like_Human(
        locator: Locator,
        text: string,
        delay: number = 0,
        clear: boolean = false,
        timeout: number = DEFAULT_TIMEOUT
    ) {
        if (clear) await locator.clear();
        await locator.pressSequentially(text, {
            delay: delay,
            timeout: timeout,
        });
    }
}
export default new ActionsUtil();