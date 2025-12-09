// @ts-nocheck
import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { ProductsPage } from '../pages/products-page';
import { Carts } from '../pages/carts';

test('full e2e path', async ({ page }) => {
    const mainPage = new MainPage(page);
    const productPage = new ProductsPage(page);
    const cart = new Carts(page);

    const testElement = {
        name: 'Mysz Gamingowa',
        id: 'p4'
    };

    await mainPage.goto();
    await expect(mainPage.productsGrid).toBeVisible();
    await mainPage.openProductByName(testElement.name);

    await productPage.checkPageId(testElement.id);
    await productPage.checkItemTitle(testElement.name);

    await cart.addProductToCart();
    await cart.openCart();
    await cart.verifyIfProductInCart(testElement.name);
    await cart.buyProduct();
});
