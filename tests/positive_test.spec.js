import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala Positive Functional Scenarios 0001-0024', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the translator website before each test
        await page.goto('https://www.swifttranslator.com/');
    });

    test('Pos_Fun_0001 - Informal late night greeting', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('suba raathriyak machan!', { delay: 30 });
        await expect(output).toContainText('සුබ රාත්‍රියක් මචන්!');
    });

    test('Pos_Fun_0002 - Work related request with English terms', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('adha meeting eka cancel karanna puLuvandha?', { delay: 30 });
        await expect(output).toContainText('අද meeting එක cancel කරන්න පුළුවන්ද?');
    });

    test('Pos_Fun_0003 - Complex decision making sentence', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('oyaa enavaanam mama balan innavaa, naethnam mama yanavaa.', { delay: 30 });
        await expect(output).toContainText('ඔයා එනවානම් මම බලන් ඉන්නවා, නැත්නම් මම යනවා.');
    });

    test('Pos_Fun_0004 - Formal invitation suggestion', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('apith ekka yanna enna.', { delay: 30 });
        await expect(output).toContainText('අපිත් එක්ක යන්න එන්න.');
    });

    test('Pos_Fun_0005 - Negative state expression', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('mata kiyanna baehae.', { delay: 30 });
        await expect(output).toContainText('මට කියන්න බැහැ.');
    });

    test('Pos_Fun_0006 - Future travel plan with proper nouns', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('api labana maasee nuvara eLiya yamu.', { delay: 30 });
        await expect(output).toContainText('අපි ලබන මාසේ නුවර එළිය යමු.');
    });

    test('Pos_Fun_0007 - Technology problem with brand names', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('magee Samsung phone eka charge vennee naee.', { delay: 30 });
        await expect(output).toContainText('මගේ Samsung phone එක charge වෙන්නේ නෑ.');
    });

    test('Pos_Fun_0008 - Plural family greeting variation', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('ammalaa thamaa gedhara innee.', { delay: 30 });
        await expect(output).toContainText('අම්මලා තමා ගෙදර ඉන්නේ.');
    });

    test('Pos_Fun_0009 - Multi-word emphatic collocation', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('vathura tika dhenna.', { delay: 30 });
        await expect(output).toContainText('වතුර ටික දෙන්න.');
    });

    test('Pos_Fun_0010 - Joined word variation stress test', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('oyadhannavadha?', { delay: 30 });
        await expect(output).toContainText('ඔයාදන්නවාද?');
    });

    test('Pos_Fun_0011 - Repeat adverb for emphasis', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('ikmanata ikmanata enna.', { delay: 30 });
        await expect(output).toContainText('ඉක්මනට ඉක්මනට එන්න.');
    });

    test('Pos_Fun_0012 - Past tense memory expression', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('mama iiyee kadee giyaa.', { delay: 30 });
        await expect(output).toContainText('මම ඊයේ කඩේ ගියා.');
    });

    test('Pos_Fun_0013 - Numeric date format preservation', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('2026-05-10 venidhaa enna.', { delay: 30 });
        await expect(output).toContainText('2026-05-10 වෙනිදා එන්න.');
    });

    test('Pos_Fun_0014 - Currency request formatting', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('Rs. 500k dhenna puLuvandha?', { delay: 30 });
        await expect(output).toContainText('Rs. 500ක් දෙන්න පුළුවන්ද?');
    });

    test('Pos_Fun_0015 - English abbreviations in command', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('PIN eka SMS karanna.', { delay: 30 });
        await expect(output).toContainText('PIN එක SMS කරන්න.');
    });

    test('Pos_Fun_0016 - Informal street slang conversion', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('siraavata machan?', { delay: 30 });
        await expect(output).toContainText('සිරාවට මචන්?');
    });

    test('Pos_Fun_0017 - Polite response with affirmation', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('ov, eeka hariyatama hari.', { delay: 30 });
        await expect(output).toContainText('ඔව්, ඒක හරියටම හරි.');
    });

    test('Pos_Fun_0018 - Time and place combination', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('10.30 AM venakota station ekata enna.', { delay: 30 });
        await expect(output).toContainText('10.30 AM වෙනකොට station එකට එන්න.');
    });

    test('Pos_Fun_0019 - Multiple punctuation handling', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('ayiyoo!! meeka mokakdha?', { delay: 30 });
        await expect(output).toContainText('අයියෝ!! මේක මොකක්ද?');
    });

    test('Pos_Fun_0020 - Pronoun variation for third person', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        // Combined input as per screenshot content
        await input.pressSequentially('eyaalath ekka kathaa karamu.eyaala', { delay: 30 });
        await expect(output).toContainText('එයාලත් එක්ක කතා කරමු.');
    });

    test('Pos_Fun_0021 - Measurement units with numbers', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('5kg bath oonee.', { delay: 30 });
        await expect(output).toContainText('5kg බත් ඕනේ.');
    });

    test('Pos_Fun_0022 - Formatting with line breaks', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('harima lassanayi', { delay: 30 });
        await expect(output).toContainText('හරිම ලස්සනයි');
    });

    test('Pos_Fun_0023 - Compound sentence with "saha"', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await input.pressSequentially('light eka nivanna saha dora vahan yanna.', { delay: 30 });
        await expect(output).toContainText('light එක නිවන්න සහ දොර වහන් යන්න.');
    });

    test('Pos_Fun_0024 - Large Paragraph Robustness', async ({ page }) => {
        const input = page.locator('textarea');
        const output = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        
        const longText = "api labana sathiye nuvara eLiya yanna loku plaeen ekak hadhaagena thiyennee. mama magee baeeg eka paek karalaa okkoma salli hoyagena redi velaa innee. iita passee nuvara gihin apita hoDHA hotel ekak hoyaaganna puluvan veyi needha kiyalaa mama hithanavaa. nuvara eLiya hena siithala nisaa loku jaekat ekakuth oonee venavaa kiyalaa ammi kiwaa. api trip eka gihin hoDHA fotoos tika aran aapahu gedhara enavaa. oyaalath trip ekata enavaanam mata vahaama kiyanna naethnam apita yanna amaaru veyi.";
        const expected = "අපි ලබන සතියේ නුවර එළිය යන්න ලොකු ප්ලෑන් එකක් හදාගෙන තියෙන්නේ. මම මගේ බෑග් එක පැක් කරලා ඔක්කොම සල්ලි හොයාගෙන රෙඩි වෙලා ඉන්නේ. ඊට පස්සේ නුවර ගිහින් අපිට හොඳ හොටෙල් එකක් හොයාගන්න පුළුවන් වෙයි නේද කියලා මම හිතනවා. නුවර එළිය හෙන සීතල නිසා ලොකු ජැකට් එකකුත් ඕනේ වෙනවා කියලා අම්මි කිව්වා. අපි ට්‍රිප් එක ගිහින් හොඳ ෆොටෝස් ටික අරන් ආපහු ගෙදර එනවා. ඔයාලත් ට්‍රිප් එකට එනවානම් මට වහාම කියන්න නැත්නම් අපිට යන්න අමාරු වෙයි.";
        
        await input.pressSequentially(longText, { delay: 10 });
        await expect(output).toContainText(expected);
    });

});