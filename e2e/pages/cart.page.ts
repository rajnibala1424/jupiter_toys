import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  async openCart(): Promise<void> {
    await this.open('./#/cart');
  }

  async expectCartVisible(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'Cart' })).toBeVisible();
  }

  async expectProductInCart(productName: string): Promise<void> {
    await expect(this.page.getByText(productName)).toBeVisible();
  }
}
