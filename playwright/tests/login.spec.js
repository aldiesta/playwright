import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    //Input credentials
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    //Click login button
    await page.locator('[data-test="login-button"]').click();

    //Assert new page shows products
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('unsuccessful login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    //Input incorrect credentials
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('sauce');

    //Click login button
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');

});