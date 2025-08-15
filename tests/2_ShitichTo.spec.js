import { test, expect } from '@playwright/test';

//########################################################
//############################ ALERT #####################
//########################################################
test('Entrar no site automationtesting - ALERT DEFAULT', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/');
  await page.click('//*[@id="btn2"]');
  await page.click('//*[@id="header"]/nav/div/div[2]/ul/li[4]/a');
  await page.click('//*[@id="header"]/nav/div/div[2]/ul/li[4]/ul/li[1]/a');
  await page.locator("xpath=//a[@href='#OKTab']").click();
  await page.click('//*[@id="OKTab"]/button');

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
  });

  await page.waitForTimeout(2000);
});

test('Entrar no site automationtesting - ALERT WITH OK & CANCEL', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');
  await page.locator("xpath=//ul/li[2]/a[text()='Alert with OK & Cancel ']").click();
  await page.locator('//*[@id="CancelTab"]/button').click();

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Press a Button !');
    await dialog.accept(); // ou .dismiss() se quiser testar o botão "Cancel"
  });

  await page.waitForTimeout(2000);
});

test('Entrar no site automationtesting - ALERT WITH TEXTBOX', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');
  await page.locator("xpath=//ul/li[3]/a[text()='Alert with Textbox ']").click();
  await page.locator('//*[@id="Textbox"]/button').click();

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Please enter your name');
    await dialog.accept('Leonardo da Motta Teixeira');
  });

  await page.waitForTimeout(2000);
});

//########################################################
//############################ WINDOWS ###################
//########################################################
test('Entrar no site automationtesting - WINDOWS', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');

  const tabbedTab = page.getByRole('link', { name: 'Tabbed ' });
  await tabbedTab.waitFor({ state: 'visible', timeout: 10000 });
  await tabbedTab.click();

  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('#Tabbed > a > button'),
  ]);

  console.log('Nova janela foi aberta. URL: ' + newPage.url());
  await newPage.close();
  expect(newPage.isClosed()).toBeTruthy();
});


//########################################################
//############################ SEPARATE WINDOWS ###################
//########################################################
test('Abrir janela separada e fechar', async ({ page }) => {
  // 1. Acessa a página
  await page.goto('https://demo.automationtesting.in/Windows.html');

  // 2. Clica no menu lateral: "Open New Separate Windows"
  await page.locator('xpath=/html/body/div[1]/div/div/div/div[1]/ul/li[2]/a').click();

  // 3. Aguarda o botão aparecer
  const button = page.locator('xpath=//*[@id="Seperate"]/button');
  await button.waitFor({ state: 'visible', timeout: 10000 });

  // 4. Aguarda a nova janela abrir após clicar no botão
  const [popup] = await Promise.all([
    page.waitForEvent('popup', { timeout: 10000 }),
    button.click(),
  ]);

  // 5. Fecha a nova janela
  await popup.close();

  // 6. Verifica se a janela foi fechada com sucesso (opcional)
  expect(popup.isClosed()).toBeTruthy();
});


//########################################################
//############################ MULTIPLE WINDOWS ###################
//########################################################
test('Abrir janela múltipla e fechar', async ({ page }) => {
  // 1. Acessa a página
  await page.goto('https://demo.automationtesting.in/Windows.html');

  // 2. Clica no menu lateral: "Open New Multiple Windows"
  await page.locator('xpath=/html/body/div[1]/div/div/div/div[1]/ul/li[3]/a').click();

  // 3. Aguarda o botão aparecer
  const button = page.locator('xpath=//*[@id="Multiple"]/button');
  await button.waitFor({ state: 'visible', timeout: 10000 });

  // 4. Clica no botão e espera uma nova aba abrir
  const [popup] = await Promise.all([
    page.waitForEvent('popup', { timeout: 10000 }),
    button.click(),
  ]);

  // 5. Fecha a nova aba
  await popup.close();

  // 6. Verifica se foi fechada com sucesso (opcional)
  expect(popup.isClosed()).toBeTruthy();
});

//########################################################
//############################ IFRAME ####################
//########################################################
test('Entrar no site automationtesting - IFRAME', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.locator("xpath=//a[text()='Single Iframe ']").click();

  const iframeElement = page.frameLocator('#singleframe');
  const input = iframeElement.locator('input');
  await input.waitFor({ state: 'visible' });
  await input.fill('Leonardo');
  const inputValue = await input.inputValue();
  expect(inputValue).toBe('Leonardo');
});

test('Entrar no site automationtesting - IFRAME DENTRO DE IFRAME', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.locator("xpath=//a[text()='Iframe with in an Iframe']").click();

  const outerFrame = page.frameLocator("iframe[src='MultipleFrames.html']");
  const innerFrame = outerFrame.frameLocator("iframe[src='SingleFrame.html']");
  const input = innerFrame.locator('input');
  await input.waitFor({ state: 'visible' });
  await input.fill('Leonardo');
  const inputValue = await input.inputValue();
  expect(inputValue).toBe('Leonardo');
});
