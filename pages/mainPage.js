import { expect } from '@playwright/test';

export class MainPage {
    constructor(page) {
        this.page = page;
        this.productsGrid = this.page.getByTestId('products-grid');
    }

    async goto() {
        await this.page.goto('/');
    }

    async openProductByName(name) {
        await this.page.getByRole('link', { name }).click();
    }
}