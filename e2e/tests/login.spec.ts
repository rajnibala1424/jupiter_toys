import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { getCredentials } from '../utils/credentials';

test.describe('Login functionality', () => {
  test('login form loads successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('');
    await loginPage.openLoginDialog();
    await loginPage.expectLoginFormVisible();
  });

  test('user can log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = getCredentials();

    await page.goto('');
    await loginPage.login(credentials.username, credentials.password);

    await expect(page.getByRole('link', { name: credentials.username })).toBeVisible();
  });

  test('invalid username displays an error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = getCredentials();

    await page.goto('');
    await loginPage.openLoginDialog();
    await loginPage.fillCredentials('invalid-user', credentials.password);
    await loginPage.submit();
    await loginPage.expectLoginError('Your login details are incorrect');
  });

  test('invalid password displays an error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = getCredentials();

    await page.goto('');
    await loginPage.openLoginDialog();
    await loginPage.fillCredentials(credentials.username, 'invalid-password');
    await loginPage.submit();
    await loginPage.expectLoginError('Your login details are incorrect');
  });

  test('empty username displays an error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = getCredentials();

    await page.goto('');
    await loginPage.openLoginDialog();
    await loginPage.fillCredentials('', credentials.password);
    await loginPage.submit();
    await loginPage.expectLoginError('Your login details are incorrect');
  });

  test('empty password displays an error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = getCredentials();

    await page.goto('');
    await loginPage.openLoginDialog();
    await loginPage.fillCredentials(credentials.username, '');
    await loginPage.submit();
    await loginPage.expectLoginError('Your login details are incorrect');
  });
});