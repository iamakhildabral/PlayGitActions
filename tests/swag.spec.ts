import {test, expect} from '@playwright/test';

test("Check Title ", async ({page})=>{
    await page.goto('https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en');
    await expect(page).toHaveTitle("Google News");
    await expect(page).toHaveURL(/home/); 
})