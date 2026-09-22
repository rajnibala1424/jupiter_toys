import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ShopPage extends BasePage {
  async openShop(): Promise<void> {
    await this.open('./#/shop');
  }

  async expectShopVisible(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'Shop' })).toBeVisible();
  }

  async buyProduct(productName: string): Promise<void> {
    const product = this.page.locator('.product').filter({ hasText: productName });
    await product.getByRole('link', { name: 'Buy' }).click();
  }
}
