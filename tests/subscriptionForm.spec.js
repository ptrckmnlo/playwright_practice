import { test, expect } from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.goto('https://automationexercise.com/');
}); 

test('1. Verify Subscription in home page', async ({ page }) => {
    await expect (page.locator('form.searchform')).toBeVisible();
    await page.locator('#susbscribe_email').fill('pat@test.com');
    await page.locator('button#subscribe').click();
    await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();
})


test('2. Verify Subscription in Cart page', async ({ page }) => {
    await page.getByRole('link', {name: 'Cart'}).click();
    await page.locator('#susbscribe_email').fill('pat@test.com');
    await page.locator('button#subscribe').click();
    await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();
})




/*

Test Case 10: Verify Subscription in home page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down to footer
5. Verify text 'SUBSCRIPTION'
6. Enter email address in input and click arrow button
7. Verify success message 'You have been successfully subscribed!' is visible

Test Case 11: Verify Subscription in Cart page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Cart' button
5. Scroll down to footer
6. Verify text 'SUBSCRIPTION'
7. Enter email address in input and click arrow button
8. Verify success message 'You have been successfully subscribed!' is visible


*/