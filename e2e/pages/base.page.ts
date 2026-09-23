import { Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async open(path = ''): Promise<void> {
    await this.page.goto(path);
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.getByRole('link', { name: 'Login' }).click();
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
