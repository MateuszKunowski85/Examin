import { expect } from '@playwright/test';

export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.itemTitle = this.page.getByTestId('item-title');
    }

    async checkPageId(id) {
        await expect(this.page).toHaveURL(new RegExp(`${id}\.html$`));
    }

    async checkItemTitle(name) {
        await expect(this.itemTitle).toHaveText(name);
    }
}

