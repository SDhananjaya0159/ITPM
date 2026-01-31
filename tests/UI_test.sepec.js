import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala UI Scenarios', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/');
    });

    test('Pos_UI_0001', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        const inputString = "#%..kohedha yanne?..*&";
        const expectedResult = "#%..කොහෙද යන්නේ?..*&";

        await inputBox.pressSequentially(inputString, { delay: 50 });
        await expect(outputBox).toHaveText(expectedResult);
    });

});