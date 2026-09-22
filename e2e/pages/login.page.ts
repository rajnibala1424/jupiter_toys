import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  async openLoginDialog(): Promise<void> {
    await this.page.getByRole('link', { name: 'Login' }).click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.openLoginDialog();
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
