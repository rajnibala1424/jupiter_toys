import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  async openLoginDialog(): Promise<void> {
    await this.page.getByRole('link', { name: 'Login' }).click();
  }

  async expectLoginFormVisible(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(this.page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(this.page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Login' })).toBeVisible();
  }

  async fillCredentials(username: string, password: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  async submit(): Promise<void> {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.openLoginDialog();
    await this.fillCredentials(username, password);
    await this.submit();
  }

  async expectLoginError(message: string): Promise<void> {
    await expect(this.page.getByText(message)).toBeVisible();
  }
}
