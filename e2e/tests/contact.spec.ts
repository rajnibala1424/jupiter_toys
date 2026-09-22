import { test } from '@playwright/test';
import { ContactPage } from '../pages/contact.page';

test.describe('Contact Us form', () => {
  test('contact form loads successfully', async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.openContact();
    await contactPage.expectFormVisible();
  });

  test('required fields are validated', async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.openContact();
    await contactPage.submit();
    await contactPage.expectRequiredFieldErrors();
  });

  test('email format is validated', async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.openContact();
    await contactPage.fillForm('Test User', 'invalidemail', 'I need help.');
    await contactPage.submit();
    await contactPage.expectInvalidEmailError();
  });

  test('form submits successfully with valid data', async ({ page }) => {
    const contactPage = new ContactPage(page);
    const forename = 'TestUser';

    await contactPage.openContact();
    await contactPage.fillForm(forename, 'test.user@example.com', 'I need help.');
    await contactPage.submit();
    await contactPage.expectSubmissionSuccess(forename);
  });
});
