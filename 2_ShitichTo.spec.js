// Import no topo do arquivo
import { test, expect } from '@playwright/test';

//########################################################
//############################ ALERT #####################
//########################################################
test('Entrar no site automationtesting - ALERTAS', async ({ page }) => {
  // Passo 1: Acessar a página inicial da Automation Testing
  await page.goto('https://demo.automationtesting.in/');

  // Passo 2: Pular a página inicial
  await page.click('//*[@id="btn2"]');

  // Passo 3: Entrar no menu SwitchTo
  await page.click('//*[@id="header"]/nav/div/div[2]/ul/li[4]/a', { timeout: 20000 });

  // Passo 4: Entrar no SubMenu Alert
  await page.click('//*[@id="header"]/nav/div/div[2]/ul/li[4]/ul/li[1]/a', { timeout: 20000 });

  // Passo 5: Clicar no link "Alert with OK"
  await page.locator("xpath=//a[@href='#OKTab']").click();

  // Passo 6: Clicar no botão que dispara o alert
  await page.click('//*[@id="OKTab"]/button', { timeout: 20000 });

  // Passo 7: Escutar o evento de diálogo (popup) e verificar o texto correto
  page.once('dialog', async (dialog) => {
    const message = dialog.message();  // Captura o texto do popup
    console.log(`Texto do popup: ${message}`);  // Exibe o texto no console (para depuração)

    // Verificar se a mensagem contém o texto esperado
    expect(message).toContain('I am an alert box!'); // Texto correto do popup

    // Passo 8: Fechar o popup clicando no botão "OK"
    await dialog.accept();
  });

  // Passo 9: Aguardar até que o popup apareça e ser tratado
  await page.waitForTimeout(2000); // Aguarda o popup aparecer e ser tratado


  //############################ ALERT WITH OK & CANCEL ############################
  //########################################################

  // Passo 1: Clicar no link "Alert with OK & Cancel"
  await page.locator("xpath=//html/body/div[1]/div/div/div[1]/div[1]/ul/li[2]/a").click({ timeout: 30000 });

  // Passo 2: Esperar até o botão "Alert with OK & Cancel" estar visível e clicável
  await page.locator('//*[@id="CancelTab"]/button').waitFor({ state: 'visible', timeout: 30000 });

  // Passo 3: Escutar o evento de diálogo (popup) e verificar o texto correto
  page.once('dialog', async (dialog) => {
    const message = dialog.message();  // Captura o texto do popup
    console.log(`Texto do popup: ${message}`);  // Exibe o texto no console (para depuração)

    // Verificar se a mensagem contém o texto esperado
    expect(message).toContain('Press a Button !'); // Texto correto do popup

    // Passo 4: Fechar o popup clicando no botão "OK"
    await dialog.accept();
  });

  // Passo 5: Aguardar até que o popup apareça e ser tratado
  await page.waitForTimeout(2000); // Aguarda o popup aparecer e ser tratado


  //############################ ALERT WITH TEXTBOX ############################
  //########################################################

  // Passo 1: Clicar no link "Alert with Textbox"
  await page.locator("xpath=//html/body/div[1]/div/div/div[1]/div[1]/ul/li[3]/a").click({ timeout: 30000 });

  // Passo 2: Esperar até o botão "Alert with Textbox" estar visível e clicável
  await page.locator('//*[@id="Textbox"]/button').waitFor({ state: 'visible', timeout: 30000 });

  // Passo 3: Escutar o evento de diálogo (popup) e verificar o texto correto
  page.once('dialog', async (dialog) => {
    const message_2 = dialog.message();  // Captura o texto do popup
    console.log(`Texto do popup: ${message_2}`);  // Exibe o texto no console (para depuração)

    // Verificar se a mensagem contém o texto esperado para o alert "Textbox"
    expect(message_2).toContain('Please enter your name'); // Texto correto do popup

    // Passo 4: Inserir o texto no campo do prompt
    await dialog.accept('Leonardo da Motta Teixeira'); // Preenche o campo do prompt

    // Passo 5: Fechar o popup clicando no botão "OK"
    await dialog.accept();
  });

  // Passo 6: Aguardar até que o popup apareça e ser tratado
  await page.waitForTimeout(2000); // Aguarda o popup aparecer e ser tratado
});

//########################################################
//############################ WINDOWS ###################
//########################################################
test('Entrar no site automationtesting - WINDOWS', async ({ page }) => {
  // Passo 1: Acessar a página de Janela do Automation Testing
  await page.goto('https://demo.automationtesting.in/Windows.html');

  // Passo 2: Clicar no Open New Tabbed Windows
  await page.locator("xpath=//html/body/div[1]/div/div/div/div[1]/ul/li[1]/a").click();

  // Passo 3: Clicar no botão _blank e esperar até a nova aba abrir
  const [newPage] = await Promise.all([ 
    page.waitForEvent('popup', { timeout: 60000 }),  // Espera até 60 segundos para o popup
    page.click('//*[@id="Tabbed"]/a/button', { timeout: 60000 })
  ]);

  // Log para verificar se a nova aba foi aberta
  console.log('Nova janela foi aberta, depois fechada. URL: ' + newPage.url());

  // Passo 4: Fechar a nova janela
  await newPage.close();

  // Passo 5: Verificar se a janela foi fechada (opcional)
  expect(newPage.isClosed()).toBeTruthy();


  //############################ Separate Windows ############################
  //########################################################
  // Passo 1: Clicar no Open New Separate Windows
  await page.locator("xpath=//html/body/div[1]/div/div/div/div[1]/ul/li[2]/a").click({ timeout: 30000 });

  // Passo 2: Esperar até o botão "Separate" estar visível e clicável
  const [newPage_2] = await Promise.all([ 
    page.waitForEvent('popup', { timeout: 60000 }),  // Espera até 60 segundos para o popup
    page.click('//*[@id="Seperate"]/button', { timeout: 60000 })
  ]);

  // Log para verificar se a nova aba foi aberta
  console.log('Nova janela separada foi aberta, depois fechada. URL: ' + newPage_2.url());

  // Passo 3: Fechar a nova janela
  await newPage_2.close();

  // Passo 4: Verificar se a janela foi fechada (opcional)
  expect(newPage_2.isClosed()).toBeTruthy();


  //############################ Multiple Windows ############################
  //########################################################
  // Passo 1: Clicar no Open New Multiple Windows
  await page.locator("xpath=//html/body/div[1]/div/div/div/div[1]/ul/li[3]/a").click({ timeout: 30000 });

  // Passo 2: Esperar até o botão "Multiple" estar visível e clicável
  const [newPage_3] = await Promise.all([ 
    page.waitForEvent('popup', { timeout: 60000 }),  // Espera até 60 segundos para o popup
    page.click('//*[@id="Multiple"]/button', { timeout: 60000 })
  ]);

  // Log para verificar se a nova aba foi aberta
  console.log('Nova janela multiple foi aberta, depois fechada. URL: ' + newPage_3.url());

  // Passo 4: Fechar a nova janela
  await newPage_3.close();

  // Passo 5: Verificar se a janela foi fechada (opcional)
  expect(newPage_3.isClosed()).toBeTruthy();
});

//########################################################
//############################ IFRAME ####################
//########################################################
test('Entrar no site automationtesting - IFRAME', async ({ page }) => {
  // Passo 1: Acessar a página de iframe do Automation Testing
  await page.goto('https://demo.automationtesting.in/Frames.html');

  // Passo 2: Clicar no Single IFrame
  await page.locator("xpath=//html/body/section/div[1]/div/div/div/div[1]/div/ul/li[1]/a").click();

  // Passo 3: Aguardar o iframe carregar completamente
  const iframeElement = await page.locator('//*[@id="singleframe"]');
  
  // Aguardar o iframe estar visível
  await iframeElement.waitFor({ state: 'visible', timeout: 60000 });

  // Passo 4: Obter o conteúdo do iframe
  const iframe = iframeElement.contentFrame();

  // Passo 5: Garantir que o input dentro do iframe esteja visível e carregado
  const input = iframe.locator('input');
  await input.waitFor({ state: 'visible', timeout: 60000 });  // Garantindo que o input esteja visível

  // Passo 6: Localizar o campo de input dentro do iframe e preencher com 'Leonardo'
  await input.fill('Leonardo');

  // Passo 7: Verificar se o valor foi preenchido corretamente
  const inputValue = await input.inputValue();
  expect(inputValue).toBe('Leonardo');


//########################## IFRAME_2 ####################
//########################################################
  // Passo 1: Clicar no Single IFrame_2
  await page.locator("xpath=//html/body/section/div[1]/div/div/div/div[1]/div/ul/li[1]/a").click();

  // Passo 2: Aguardar o iframe estar visível e acessível
  const iframeElement_2 = await page.locator('xpath=//*[@id="singleframe"]');
  await iframeElement_2.waitFor({ state: 'visible', timeout: 60000 });

  // Passo 3: Obter o conteúdo do iframe
  const iframe_2 = await iframeElement_2.contentFrame();

  // Passo 4: Localizar o campo de input dentro do iframe
  const inputLocator = iframe_2.locator('xpath=//html/body/section/div/div/div/input');

  // Passo 5: Garantir que o input dentro do iframe esteja visível
  await inputLocator.waitFor({ state: 'visible', timeout: 60000 });

  // Passo 6: Preencher o campo com 'Leonardo'
  await inputLocator.fill('Leonardo');

  // Passo 7: Verificar se o valor foi preenchido corretamente
  const inputValue_2 = await inputLocator.inputValue();
  expect(inputValue_2).toBe('Leonardo');
});