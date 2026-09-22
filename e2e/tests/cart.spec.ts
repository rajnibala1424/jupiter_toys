import { expect, test } from '@playwright/test';
import { CartPage } from '../pages/cart.page';
import { ShopPage } from '../pages/shop.page';

test.describe('Cart functionality', () => {
  test('cart page loads successfully', async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.openCart();
    await cartPage.expectCartVisible();
    await page.getByRole('link', { name: /Cart \(\d+\)/ }).isVisible();
  });

  test('added product is listed in the cart', async ({ page }) => {
    const shopPage = new ShopPage(page);
    const cartPage = new CartPage(page);

    await shopPage.openShop();
    const productName = await shopPage.buyFirstProduct();
    await cartPage.openCart();
    await cartPage.expectProductInCart(productName);
  });

  test('user can remove a product from the cart', async ({ page }) => {
    const shopPage = new ShopPage(page);
    const cartPage = new CartPage(page);

    await shopPage.openShop();
    const productName = await shopPage.buyFirstProduct();
    await cartPage.openCart();
    await cartPage.removeProduct(productName);
    await cartPage.expectEmptyCartMessage();
  });

  test('user can update product quantity in the cart', async ({ page }) => {
    const shopPage = new ShopPage(page);
    const cartPage = new CartPage(page);

    await shopPage.openShop();
    const productName = await shopPage.buyFirstProduct();
    await cartPage.openCart();
    await cartPage.updateProductQuantity(productName, 2);
    await cartPage.expectProductInCart(productName);
    await cartPage.expectTotalVisible();
  });

  test('user can add multiple products and proceed to checkout', async ({ page }) => {
    const shopPage = new ShopPage(page);
    const cartPage = new CartPage(page);

    await shopPage.openShop();
    const firstProduct = await shopPage.buyFirstProduct();
    await shopPage.buyProduct((await page.locator('.product').nth(1).locator('h4, h3, .product-name').first().innerText()).trim());
    await cartPage.openCart();
    await cartPage.expectProductInCart(firstProduct);
    await cartPage.checkout();
  });

  test('empty cart cannot proceed to checkout', async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.openCart();
    await cartPage.expectEmptyCartMessage();
    await expect(page.getByRole('link', { name: /check ?out/i })).toHaveCount(0);
  });

  test('cart displays the total price', async ({ page }) => {
    const shopPage = new ShopPage(page);
    const cartPage = new CartPage(page);

    await shopPage.openShop();
    await shopPage.buyFirstProduct();
    await cartPage.openCart();
    await cartPage.expectTotalVisible();
  });

  test('checkout link redirects to the checkout screen', async ({ page }) => {
    const shopPage = new ShopPage(page);
    const cartPage = new CartPage(page);

    await shopPage.openShop();
    await shopPage.buyFirstProduct();
    await cartPage.openCart();
    await cartPage.checkout();
    await expect(page).toHaveURL(/#\/checkout/);
  });
});