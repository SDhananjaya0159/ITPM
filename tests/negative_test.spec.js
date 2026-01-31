import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala Negative Scenarios', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/');
    });

    test('Neg_Fun_0001', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await inputBox.fill('mama premio ekak gaththa.');
        await expect(outputBox).toContainText('මම ප්‍රේමියෝ එකක් ගත්තා.');
    });

    test('Neg_Fun_0002', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await inputBox.fill('oya github dhaagaththa kiyanna?');
        await expect(outputBox).toContainText('ඔයා ගිට්හබ් දාගත්තා කියන්න?');
    });

    test('Neg_Fun_0003', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await inputBox.fill('eyaa naqq hena simp kenek.');
        await expect(outputBox).toContainText('එයා නම් හෙන සිම්ප් කෙනෙක්.');
    });

    test('Neg_Fun_0004', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await inputBox.fill('mage laptop eka charge venne nae.');
        await expect(outputBox).toContainText('මගේ ලැප්ටොප් එක චාර්ජ් වෙන්නේ නෑ.');
    });

    test('Neg_Fun_0005', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await inputBox.fill('WhatsApp msg ekak evanna.');
        await expect(outputBox).toContainText('වට්ස්ඇප් ම්ස්ග් එකක් එවන්න.');
    });

    test('Neg_Fun_0006', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await inputBox.fill('oya bitcoin gaththadha?');
        await expect(outputBox).toContainText('ඔයා බිට්කොයින් ගත්තද?');
    });

    test('Neg_Fun_0007', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await inputBox.fill('Netflix account ekak oone.');
        await expect(outputBox).toContainText('නෙට්ෆ්ලික්ස් එකවුන්ට් එකක් ඕනේ.');
    });

    test('Neg_Fun_0008', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await inputBox.fill('Photoshop dhaan karanna bae.');
        await expect(outputBox).toContainText('ෆොටෝෂොප් දැන් කරන්න බෑ.');
    });

    test('Neg_Fun_0009', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        await inputBox.fill('Windows 11 update karanna.');
        await expect(outputBox).toContainText('වින්ඩෝස් 11 අප්ඩේට් කරන්න.');
    });

    test('Neg_Fun_0010', async ({ page }) => {
        const inputBox = page.locator('textarea');
        const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
        const inputLarge = "mage computer eke Windows 11 update karanna giyaama WiFi driver eka weda karanne nae kiyala pennanava. mama YouTube gihin BIOS settings check kalaa thamaa eth prashnaya visadhune nae. mama Software eka uninstall karala ayeth install kalaa eth Error message ekak enava. mata meka fix karaganna barivunoth matath pissu hadhei vagee.";
        await inputBox.fill(inputLarge);
        await expect(outputBox).toContainText('කොම්පියුටර්');
        await expect(outputBox).toContainText('වින්ඩෝස්');
        await expect(outputBox).toContainText('වයිෆයි');
        await expect(outputBox).toContainText('යූටියුබ්');
        await expect(outputBox).toContainText('බයෝස්');
    });

});