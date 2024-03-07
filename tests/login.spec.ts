import { test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://automationexercise.com/');
});   

test('1. Verify login user with correct email and password', async ({ page }) => {
    await page.getByRole('link', {name: ' Signup / Login'}).click();
    await page.waitForURL(/login/);
    await expect(page.locator('.login-form')).toBeVisible();

    // Login form:
    await page.locator('input[data-qa="login-email"]').fill('pat1@test.com');
    await page.locator('input[data-qa="login-password"]').fill('test');
    await page.getByRole('button', {name: 'Login'}).click();

    // Verify as log in user:
    await expect (page.getByText(/Logged in as/)).toBeVisible();
})

test('2. Verify login user with incorrect email and password', async ({ page }) => {
    await page.getByRole('link', {name: ' Signup / Login'}).click();
    await page.waitForURL(/login/);
    await expect(page.locator('.login-form')).toBeVisible();

    // Login form:
    await page.locator('input[data-qa="login-email"]').fill('pat2@test.com');
    await page.locator('input[data-qa="login-password"]').fill('abc');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect (page.getByText('Your email or password is incorrect!')).toBeVisible();
})

test('3. Verify logout user flow', async ({ page }) => {
    await page.getByRole('link', {name: ' Signup / Login'}).click();
    await page.waitForURL(/login/);
    await expect(page.locator('.login-form')).toBeVisible();

    // Login form:
    await page.locator('input[data-qa="login-email"]').fill('pat1@test.com');
    await page.locator('input[data-qa="login-password"]').fill('test');
    await page.getByRole('button', {name: 'Login'}).click();

    // Verify as log in user:
    await expect (page.getByText(/Logged in as/)).toBeVisible();

    // Logout
    await page.getByRole('link', {name: 'Logout'}).click()
    await expect (page.getByText(/Logged in as/)).toBeHidden();

})



/* 

Test Case 2: Login User with correct email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible

Test Case 3: Login User with incorrect email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible

Test Case 4: Logout User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Logout' button
10. Verify that user is navigated to login page

*/

