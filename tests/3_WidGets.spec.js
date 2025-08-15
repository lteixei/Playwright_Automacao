// Import no topo do arquivo
import { test, expect } from '@playwright/test';


//########################################################
//############################ ACCORDION #################
//########################################################
test('Entrar no site automationtesting - ACCORDION', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Accordion.html');

  await page.locator('//*[@id="Functionality"]/div/div/div/div[1]/div[1]').click();
  await page.locator('//*[@id="Functionality"]/div/div/div/div[2]/div[1]').click();
  await page.locator('//*[@id="Functionality"]/div/div/div/div[3]/div[1]').click({ timeout: 30000 });
  await page.locator('//*[@id="Functionality"]/div/div/div/div[4]/div[1]').click({ timeout: 30000 });
});

//########################################################
//######################## AUTOCOMPLETE ##################
//########################################################
test('Entrar no site automationtesting - AUTOCOMPLETE', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/AutoComplete.html', { timeout: 60000 });

  await page.fill('input.ui-autocomplete-input', 'BRAZIL');

  const brazilOption = page.locator('xpath=/html/body/section/div[1]/div[2]/div[2]/ul/li/a');
  await brazilOption.waitFor({ state: 'visible', timeout: 5000 });
  await brazilOption.click();
});

//########################################################
//#################### DATEPICKER HOJE ###################
//########################################################
test('Entrar no site automationtesting - DATEPICKER HOJE', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Datepicker.html', { timeout: 60000 });

  await page.locator('xpath=/html/body/section/div[1]/div/div/form/div[2]/div[2]/img').click();
  await page.locator('xpath=//*[@id="ui-datepicker-div"]/table/tbody/tr[3]/td[5]/a').click();
});

//########################################################
//############ DATEPICKER NASCIMENTO #####################
//########################################################
test('Entrar no site automationtesting - DATEPICKER NASCIMENTO', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Datepicker.html', { timeout: 60000 });

  await page.fill('xpath=//*[@id="datepicker2"]', '10/12/1976');
});

//########################################################
//########################### SLIDER #####################
//########################################################
test('Entrar no site automationtesting - SLIDER', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Slider.html');

  const sliderHandle = page.locator('#slider .ui-slider-handle');
  const box = await sliderHandle.boundingBox();

  if (!box) throw new Error('Não conseguiu localizar o slider');

  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 + 50, box.y + box.height / 2, { steps: 10 });
  await page.mouse.up();
});
