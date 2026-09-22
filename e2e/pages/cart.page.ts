import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  async openCart(): Promise<void> {
    await this.open('./#/cart');
  }

  async expectCartVisible(): Promise<void> {
    await expect(
      this.page.getByText(/Your cart is empty|There is \d+ item/),
    ).toBeVisible();
  }

  async expectProductInCart(productName: string): Promise<void> {
    await expect(this.page.getByText(productName)).toBeVisible();
  }

  async removeProduct(productName: string): Promise<void> {
    const row = this.page.locator('tr').filter({ hasText: productName });
    await row.locator('[title="Remove Item"] a').click();
  }

  async updateProductQuantity(productName: string, quantity: number): Promise<void> {
    const row = this.page.locator('tr').filter({ hasText: productName });
    await row.getByRole('spinbutton').fill(String(quantity));
    await row.getByRole('spinbutton').press('Tab');
  }

  async expectTotalVisible(): Promise<void> {
    await expect(this.page.getByText(/Total:/)).toBeVisible();
  }

  async checkout(): Promise<void> {
    await this.page.getByRole('link', { name: 'Check Out', exact: true }).click();
  }

  async expectEmptyCartMessage(): Promise<void> {
    await expect(this.page.getByText(/empty|no items/i)).toBeVisible();
  }
}
