import { expect } from '@playwright/test';

export class Carts {
    constructor(page) {
        this.page = page;

        this.addToCartButton = this.page.getByRole('button', { name: 'Dodaj do koszyka' });
        this.toastSuccess = this.page.locator('.toast-success');

        this.cartButton = this.page.getByTestId('cart-button');
        this.cartPanel = this.page.getByTestId('cart-panel');

        this.itemListInCart = this.page.getByTestId('cart-list');
        this.buyButton = this.page.getByTestId('cart-buy');

        this.buySuccessToast = this.page.getByText('Zakup udany');
    }

    async addProductToCart() {
        await this.addToCartButton.click();
        await expect(this.toastSuccess).toBeVisible();
    }

    async openCart() {
        await this.cartButton.click();
        await expect(this.cartPanel).toBeVisible();
    }

    async verifyIfProductInCart(name) {
        await expect(this.itemListInCart).toContainText(name);
    }

    async buyProduct() {
        await this.buyButton.click();
        await expect(this.buySuccessToast).toBeVisible();
    }
}
