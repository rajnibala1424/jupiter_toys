import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('home page has the Jupiter Toys title @smoke', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.openHome();
  await homePage.expectTitle();
});
