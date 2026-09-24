import { test } from '@playwright/test';
import { ContactPage } from '../pages/contact.page';
import { contactTestData } from '../utils/test-data';

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
    const { forename, email, message } = contactTestData.invalidEmail;

    await contactPage.openContact();
    await contactPage.fillForm(forename, email, message);
    await contactPage.submit();
    await contactPage.expectInvalidEmailError();
  });

  test('form submits successfully with valid data @smoke', async ({ page }) => {
    const contactPage = new ContactPage(page);
    const { forename, email, message } = contactTestData.validSubmission;

    await contactPage.openContact();
    await contactPage.fillForm(forename, email, message);
    await contactPage.submit();
    await contactPage.expectSubmissionSuccess(forename);
  });

  test('message field rejects messages over the maximum length', async ({ page }) => {
    const contactPage = new ContactPage(page);
    const { forename, email, message } = contactTestData.longMessage;

    await contactPage.openContact();
    await contactPage.fillForm(forename, email, message);
    await contactPage.submit();
    await contactPage.expectMessageLengthError();
  });

  test('form accepts special characters in the name and message', async ({ page }) => {
    const contactPage = new ContactPage(page);
    const { forename, email, message } = contactTestData.specialCharacters;

    await contactPage.openContact();
    await contactPage.fillForm(forename, email, message);
    await contactPage.submit();
    await contactPage.expectSubmissionSuccess(forename);
  });

  test('telephone field rejects an invalid phone number', async ({ page }) => {
    const contactPage = new ContactPage(page);
    const { forename, email, message, telephone } = contactTestData.invalidTelephone;

    await contactPage.openContact();
    await contactPage.fillForm(forename, email, message);
    await contactPage.fillTelephone(telephone);
    await contactPage.submit();
    await contactPage.expectInvalidTelephoneError();
  });
});
