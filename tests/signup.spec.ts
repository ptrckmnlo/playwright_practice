import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://automationexercise.com/');
});    

test('1. Verify registration is successful', async ({page}) => { 
    await page.getByRole('link', {name: ' Signup / Login'}).click();
    await page.waitForURL(/login/);
    await expect (page.locator('.signup-form')).toBeVisible();

    // Signup form:
    await page.locator('input[data-qa="signup-name"]').fill('psmtest');
    await page.locator('input[data-qa="signup-email"]').fill('pat@mail.com');
    await page.getByRole('button', {name: 'Signup'}).click();
    await page.waitForURL(/signup/);
    
    // Enter amount info:
    await page.getByLabel('Mr.').check();
    await page.locator('input[data-qa="password"]').fill('test');
    await page.locator('select[data-qa="days"]').selectOption('12');
    await page.locator('select[data-qa="months"]').selectOption('November');
    await page.locator('select[data-qa="years"]').selectOption('1993');
    await page.getByLabel('Sign up for our newsletter!').check();
    await page.getByLabel('Receive special offers from our partners!').check();

    // Address info:
    await page.locator('input[data-qa="first_name"]').fill('Patrick');
    await page.locator('input[data-qa="last_name"]').fill('Test');
    await page.locator('input[data-qa="company"]').fill('Test Hello!');
    await page.locator('input[data-qa="address"]').fill('test');
    await page.locator('select[data-qa="country"]').selectOption('Singapore');
    await page.locator('input[data-qa="state"]').fill('Hello');
    await page.locator('input[data-qa="city"]').fill('World!');
    await page.locator('input[data-qa="zipcode"]').fill('1234');
    await page.locator('input[data-qa="mobile_number"]').fill('123456789');
    await page.getByRole('button', {name: 'Create Account'}).click();

    // Registration success:
    await expect (page.getByText('ACCOUNT CREATED!')).toBeVisible();
    await expect (page.getByText('Congratulations! Your new account has been successfully created!')).toBeVisible();
    await page.locator('a[data-qa="continue-button"]').click();

    // Verify as log in user:
    await expect (page.getByText('Logged in as')).toBeVisible();

    // Delete account:
    await page.getByRole('link', {name:'Delete Account'}).click();
    await expect (page.getByText('Your account has been permanently deleted!')).toBeVisible();
    await page.locator('a[data-qa="continue-button"]').click();
    await expect (page.getByRole('link', {name: ' Signup / Login'})).toBeVisible();

});

test('2. Verify registration with existing email address', async ({ page }) => {
    await page.getByRole('link', {name: ' Signup / Login'}).click();
    await page.waitForURL(/login/);
    await expect (page.locator('.signup-form')).toBeVisible();

    await page.locator('input[data-qa="signup-name"]').fill('Test');
    await page.locator('input[data-qa="signup-email"]').fill('pat1@test.com');
    await page.getByRole('button', {name: 'Signup'}).click();
    await expect (page.getByText('Email Address already exist!')).toBeVisible();
})



/* 
Test Case 1: Register User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button


Test Case 5: Register User with existing email
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible
*/