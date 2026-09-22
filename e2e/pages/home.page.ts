import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  async openHome(): Promise<void> {
    await this.open('');
  }

  async expectTitle(): Promise<void> {
    await expect(this.page).toHaveTitle('Jupiter Toys');
  }
}
