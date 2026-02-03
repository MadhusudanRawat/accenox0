import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

test('capture screenshots for responsiveness', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Verify content
  const title = await page.title();
  console.log('Page title:', title);
  const h1 = await page.locator('h1').first().innerText();
  console.log('H1 text:', h1);

  // Wait for images and animations to stabilize
  await page.waitForTimeout(5000);

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(2000); // Wait for layout and animations to settle

    // Screenshot hero
    await page.screenshot({ path: `screenshots/hero-${vp.name}.png`, fullPage: false });

    // Scroll and capture middle
    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `screenshots/middle-${vp.name}.png`, fullPage: false });

    // Scroll and capture bottom
    await page.evaluate(() => window.scrollTo(0, 4000));
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `screenshots/bottom-${vp.name}.png`, fullPage: false });

    // If mobile, test the menu
    if (vp.name === 'mobile') {
      const menuButton = page.getByLabel('Toggle menu');
      if (await menuButton.isVisible()) {
        await menuButton.click();
        await page.waitForTimeout(1000); // Animation
        await page.screenshot({ path: `screenshots/mobile-menu.png` });

        // Close it
        await menuButton.click();
        await page.waitForTimeout(500);
      }
    }
  }
});
