import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { getCredentials } from '../utils/credentials';
import { loginTestData } from '../utils/test-data';

test.describe('Login functionality', () => {
  test('login form loads successfully @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('');
    await loginPage.openLoginDialog();
    await loginPage.expectLoginFormVisible();
  });

  test('user can log in with valid credentials @smoke', async ({ page }) => {
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
    await loginPage.fillCredentials(loginTestData.invalidUsername, credentials.password);
    await loginPage.submit();
    await loginPage.expectLoginError(loginTestData.invalidCredentialsError);
  });

  test('invalid password displays an error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = getCredentials();

    await page.goto('');
    await loginPage.openLoginDialog();
    await loginPage.fillCredentials(credentials.username, loginTestData.invalidPassword);
    await loginPage.submit();
    await loginPage.expectLoginError(loginTestData.invalidCredentialsError);
  });

  test('empty username displays an error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = getCredentials();

    await page.goto('');
    await loginPage.openLoginDialog();
    await loginPage.fillCredentials(loginTestData.emptyUsername, credentials.password);
    await loginPage.submit();
    await loginPage.expectLoginError(loginTestData.invalidCredentialsError);
  });

  test('empty password displays an error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = getCredentials();

    await page.goto('');
    await loginPage.openLoginDialog();
    await loginPage.fillCredentials(credentials.username, loginTestData.emptyPassword);
    await loginPage.submit();
    await loginPage.expectLoginError(loginTestData.invalidCredentialsError);
  });
});