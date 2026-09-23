import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ContactPage extends BasePage {
  async openContact(): Promise<void> {
    await this.open('./#/contact');
  }

  async expectFormVisible(): Promise<void> {
    await expect(this.page.getByText('We welcome your feedback')).toBeVisible();
    await expect(this.page.getByLabel('Forename *')).toBeVisible();
    await expect(this.page.getByLabel('Email *')).toBeVisible();
    await expect(this.page.getByLabel('Message *')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Submit' })).toBeVisible();
  }

  async submit(): Promise<void> {
    await this.page.getByRole('link', { name: 'Submit' }).click();
  }

  async fillForm(forename: string, email: string, message: string): Promise<void> {
    await this.page.getByLabel('Forename *').fill(forename);
    await this.page.getByLabel('Email *').fill(email);
    await this.page.getByLabel('Message *').fill(message);
  }

  async fillTelephone(telephone: string): Promise<void> {
    await this.page.getByLabel('Telephone').fill(telephone);
  }

  async expectRequiredFieldErrors(): Promise<void> {
    await expect(this.page.getByText('Forename is required')).toBeVisible();
    await expect(this.page.getByText('Email is required')).toBeVisible();
    await expect(this.page.getByText('Message is required')).toBeVisible();
  }

  async expectInvalidEmailError(): Promise<void> {
    await expect(this.page.getByText('Please enter a valid email')).toBeVisible();
  }

  async expectMessageLengthError(): Promise<void> {
    await expect(this.page.getByText(/message.*(too long|maximum|limit)/i)).toBeVisible();
  }

  async expectInvalidTelephoneError(): Promise<void> {
    await expect(this.page.getByText(/telephone.*(valid|invalid|required)/i)).toBeVisible();
  }

  async expectSubmissionSuccess(forename: string): Promise<void> {
    await expect(
      this.page.getByText(`Thanks ${forename}, we appreciate your feedback.`),
    ).toBeVisible({ timeout: 30000 });
  }
}
