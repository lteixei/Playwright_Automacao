// Import no topo do arquivo
import { test, expect } from '@playwright/test';

//#####################################################################
//######################## DRAG AND DROP - STATIC #####################
test('Entrar no site automationtesting - DRAG AND DROP - STATIC', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Static.html');

  const dropArea = page.locator('//*[@id="droparea"]');

  const obj1 = page.locator('//*[@id="angular"]');
  await obj1.dragTo(dropArea);
  await page.waitForTimeout(500);

  const obj2 = page.locator('//*[@id="mongo"]');
  await obj2.dragTo(dropArea);
  await page.waitForTimeout(500);

  const obj3 = page.locator('//*[@id="node"]');
  await obj3.dragTo(dropArea);
  await page.waitForTimeout(500);
});

//#####################################################################
//######################## DRAG AND DROP - DYNAMIC ####################
test('Entrar no site automationtesting - DRAG AND DROP - DYNAMIC', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Dynamic.html', { timeout: 20000 });

  const dropArea = page.locator('//*[@id="droparea"]');

  const obj1 = page.locator('//*[@id="angular"]');
  await obj1.dragTo(dropArea);
  await page.waitForTimeout(500);

  const obj2 = page.locator('//*[@id="mongo"]');
  await obj2.dragTo(dropArea);
  await page.waitForTimeout(500);

  const obj3 = page.locator('//*[@id="node"]');
  await obj3.dragTo(dropArea);
  await page.waitForTimeout(500);
});

//#####################################################################
//##################### SELECTABLE - DEFAULT ##########################
test('Entrar no site automationtesting - SELECTABLE DEFAULT', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Selectable.html', { timeout: 20000 });

  await page.locator('//*[@id="Default"]/ul/li[1]').click();
  await page.locator('//*[@id="Default"]/ul/li[3]').click();
  await page.locator('//*[@id="Default"]/ul/li[5]').click();
  await page.locator('//*[@id="Default"]/ul/li[7]').click();
});

//#####################################################################
//##################### SELECTABLE - SERIALIZE ########################
test('Entrar no site automationtesting - SELECTABLE SERIALIZE', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Selectable.html');

  await page.keyboard.down('Control');
  await page.locator('//*[@id="Default"]/ul/li[1]').click();
  await page.locator('//*[@id="Default"]/ul/li[3]').click();
  await page.locator('//*[@id="Default"]/ul/li[5]').click();
  await page.locator('//*[@id="Default"]/ul/li[7]').click();
  await page.keyboard.up('Control');
});

//#####################################################################
//######################## RESIZABLE ##################################
test('Entrar no site automationtesting - RESIZABLE', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Resizable.html');

  const handle = page.locator('//*[@id="resizable"]/div[3]');
  const box = await handle.boundingBox();

  if (!box) throw new Error('Não foi possível localizar o handle de resize');

  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 + 50, box.y + box.height / 2, { steps: 10 });
  await page.mouse.up();
});
