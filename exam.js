 // @ts-nocheck
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
 await page.goto('/');

    //Verify titile if contatin a sunstring

    await expect(page).toHaveTitle('Strona główna');
    await expect(page.getByRole('heading', { name: 'Strona główna'})).toBeVisible();
 })

 //Zadanie 1

 