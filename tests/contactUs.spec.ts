import { test, expect } from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.goto('https://automationexercise.com/');
});  

test('Verify Contact Us Form submission is successful', async ({ page }) => {
    await page.getByRole('link', {name: 'Contact Us'}).click();
    await page.waitForURL(/contact_us/);

    // dialog
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('Press OK to proceed!');
        await dialog.accept();
    });

    // get in touch form
    await expect(page.locator('div.contact-form')).toBeVisible();
    await page.locator('input[data-qa="name"]').fill('John Doe');
    await page.locator('input[data-qa="email"]').fill('john.doe@test.com');
    await page.locator('input[data-qa="subject"]').fill('Hello World!');
    await page.locator('textarea[data-qa="message"]').fill('Hello World! Test only!');
    await page.locator('input[name="upload_file"]').setInputFiles("./upload/test.png"); // upload file
    await page.getByRole('button', {name: 'Submit'}).click()
    
    // success message
    await expect (page.locator('div.alert-success').nth(0)).toContainText('Success! Your details have been submitted successfully.')
})



/*

Test Case 6: Contact Us Form
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully

*/