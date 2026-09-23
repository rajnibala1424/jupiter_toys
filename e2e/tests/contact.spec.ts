import { test } from '@playwright/test';
import { ContactPage } from '../pages/contact.page';

test.describe('Contact Us form', () => {
  test('contact form loads successfully @smoke', async ({ page }) => {
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

  test('form submits successfully with valid data @smoke', async ({ page }) => {
    const contactPage = new ContactPage(page);
    const forename = 'TestUser';

    await contactPage.openContact();
    await contactPage.fillForm(forename, 'test.user@example.com', 'I need help.');
    await contactPage.submit();
    await contactPage.expectSubmissionSuccess(forename);
  });

  test('message field rejects messages over the maximum length', async ({ page }) => {
    const contactPage = new ContactPage(page);
    const longMessage = 'x'.repeat(1000);

    await contactPage.openContact();
    await contactPage.fillForm('TestUser', 'test.user@example.com', longMessage);
    await contactPage.submit();
    await contactPage.expectMessageLengthError();
  });

  test('form accepts special characters in the name and message', async ({ page }) => {
    const contactPage = new ContactPage(page);
    const forename = 'Test !@#$%^&*()';

    await contactPage.openContact();
    await contactPage.fillForm(forename, 'test.user@example.com', 'Feedback !@#$%^&*()');
    await contactPage.submit();
    await contactPage.expectSubmissionSuccess(forename);
  });

  test('telephone field rejects an invalid phone number', async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.openContact();
    await contactPage.fillForm('TestUser', 'test.user@example.com', 'I need help.');
    await contactPage.fillTelephone('12345');
    await contactPage.submit();
    await contactPage.expectInvalidTelephoneError();
  });
});
