import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala Positive Scenarios', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the translator website before each test
        await page.goto('https://www.swifttranslator.com/');
    });

    test('Pos_Fun_0001 - Daily Greeting Phrases', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('oyaata kohomadha?');
        await expect(outputBox).toContainText('ඔයාට කොහොමද?');

        await inputBox.fill('oyaa adha gedhara enavadha?');
        await expect(outputBox).toContainText('ඔයා අද ගෙදර එනවද?');
    });

    test('Pos_Fun_0002 - Compound sentence with conjunctions', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('mama kadeyata yanavaa saha badu aran enavaa.');
        await expect(outputBox).toContainText('මම කඩේට යනවා සහ බඩු අරන් එනවා.');
    });

    test('Pos_Fun_0003 - Complex sentence with cause/effect', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('vahina nisaa ada mata eliyata yanna baehe.');
        await expect(outputBox).toContainText('වහින නිසා අද මට එළියට යන්න බැහැ.');
    });

    test('Pos_Fun_0004 - Polite request form', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('karunaakarala mata udhavu karanna.');
        await expect(outputBox).toContainText('කරුණාකරලා මට උදව් කරන්න.');
    });

    test('Pos_Fun_0005 - Mixed language with Brand names', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('mage Samsung phone eka charge venne nae.');
        await expect(outputBox).toContainText('මගේ Samsung phone එක charge වෙන්නේ නෑ.');
    });

    test('Pos_Fun_0006 - Informal slang expression', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('ela machan! supiri!!');
        await expect(outputBox).toContainText('එල මචන්! සුපිරි!!');
    });

    test('Pos_Fun_0007 - Future tense with plural pronouns', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('api labana mase nuvara eliya yamu.');
        await expect(outputBox).toContainText('අපි ලබන මාසේ නුවර එළිය යමු.');
    });

    test('Pos_Fun_0008 - Repeated word for emphasis', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('ikmanata ikmanata enna.');
        await expect(outputBox).toContainText('ඉක්මනට ඉක්මනට එන්න.');
    });

    test('Pos_Fun_0009 - Past tense memory', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('mama iye kade giya.');
        await expect(outputBox).toContainText('මම ඊයේ කඩේ ගියා.');
    });

    test('Pos_Fun_0010 - Numeric and Date formatting', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('2024-05-10 venidha enna.');
        await expect(outputBox).toContainText('2024-05-10 වෙනිදා එන්න.');
    });

    test('Pos_Fun_0011 - Currency request', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('Rs. 500k dhenna puluvandha?');
        await expect(outputBox).toContainText('Rs. 500k දෙන්න පුළුවන්ද?');
    });

    test('Pos_Fun_0012 - English abbreviations', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('PIN eka SMS karanna.');
        await expect(outputBox).toContainText('PIN එක SMS කරන්න.');
    });

    test('Pos_Fun_0013 - Informal late night greeting', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('suba rathriyak machan!');
        await expect(outputBox).toContainText('සුබ රාත්‍රියක් මචන්!');
    });

    test('Pos_Fun_0014 - Time and Place combination', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('10.30 AM veneddhi station ekata enna.');
        await expect(outputBox).toContainText('10.30 AM වෙනකොට station එකට එන්න.');
    });

    test('Pos_Fun_0015 - Multiple Punctuation handling', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('ayyo!! meka mokakdha?');
        await expect(outputBox).toContainText('අයියෝ!! මේක මොකක්ද?');
    });

    test('Pos_Fun_0016 - Measurement units', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('5kg bath oone.');
        await expect(outputBox).toContainText('5kg බත් ඕනේ.');
    });

    test('Pos_Fun_0017 - Plural family variation', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('ammalaa thamaa gedhara inne.');
        await expect(outputBox).toContainText('අම්මලා තමා ගෙදර ඉන්නේ.');
    });

    test('Pos_Fun_0018 - Pronoun variation third person', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('eyalath ekka katha karamu.');
        await expect(outputBox).toContainText('එයාලත් එක්ක කතා කරමු.');
    });

    test('Pos_Fun_0019 - Stress test (No spaces)', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('oyadhannavadha?');
        await expect(outputBox).toContainText('ඔයාදන්නවාද?');
    });

    test('Pos_Fun_0020 - Suggestion with future tense', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('api heta meheta eyi.');
        await expect(outputBox).toContainText('අපි හෙට මෙහෙට එයි.');
    });

    test('Pos_Fun_0021 - Mixed English work request', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('WhatsApp message ekak dhenna.');
        await expect(outputBox).toContainText('WhatsApp message එකක් දෙන්න.');
    });

    test('Pos_Fun_0022 - Suggestion for social group', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('eyalath ekka katha karamu.');
        await expect(outputBox).toContainText('එයාලත් එක්ක කතා කරමු.');
    });

    test('Pos_Fun_0023 - Multi-word collocation', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        await inputBox.fill('poddak inna.');
        await expect(outputBox).toContainText('පොඩ්ඩක් ඉන්න.');
    });

    test('Pos_Fun_0024 - Large Input Content Robustness', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        const largeInput = "api labana sathiye nuvara eliya yanna loku plan ekak hadhagena thiyenne. mama mage bag eka pack karala okkoma salli hoyagena ready vela inne. eeta passe nuvara gihin apita hoda hotel ekak hoyaganna puluvan veyi needha kiyala mama hithanava.";
        const expectedOutput = "අපි ලබන සතියේ නුවර එළිය යන්න ලොකු ප්ලෑන් එකක් හදාගෙන තියෙන්නේ. මම මගේ බෑග් එක පැක් කරලා ඔක්කොම සල්ලි හොයාගෙන රෙඩි වෙලා ඉන්නේ. ඊට පස්සේ නුවර ගිහින් අපිට හොඳ හොටෙල් එකක් හොයාගන්න පුළුවන් වෙයි නේද කියලා මම හිතනවා.";

        await inputBox.fill(largeInput);
        await expect(outputBox).toContainText(expectedOutput);
    });

    test('Pos_UI_0001 - Special characters preservation', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

        const inputString = "#%..kohedha yanne?..*&";
        const expectedResult = "#%..කොහෙද යන්නේ?..*&";

        // Using pressSequentially to observe UI real-time behavior
        await inputBox.pressSequentially(inputString, { delay: 50 });

        await expect(outputBox).toHaveText(expectedResult);
    });

});