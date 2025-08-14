// Import no topo do arquivo
import { test, expect } from '@playwright/test';
import path from 'path';

//########################################################
//############################ DYNAMIC DATA #################
//########################################################
test('Entrar no site automationtesting - Dynamic Data', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/DynamicData.html');

  await page.click('//*[@id="save"]', { timeout: 30000 });
  await page.click('//*[@id="save"]', { timeout: 30000 });
  await page.click('//*[@id="save"]', { timeout: 30000 });
});

//########################################################
//############################ FILE DOWNLOAD TXT #################
//########################################################
test('Entrar no site automationtesting - File Download TXT', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html');

  // Preenche o campo
  await page.click('xpath=//*[@id="textbox"]');
  await page.type('xpath=//*[@id="textbox"]', 'BRAZIL', { delay: 100 });

  // Dispara evento manualmente
  await page.evaluate(() => {
    const el = document.getElementById('textbox');
    el.dispatchEvent(new Event('input', { bubbles: true }));
  });

  // Espera o botão habilitar
  const botaoTxt = page.locator('xpath=//*[@id="createTxt"]');
  await expect(botaoTxt).toBeEnabled({ timeout: 15000 });

  // Clica para gerar link
  await botaoTxt.click();

  // Espera pelo link e baixa
  const linkDownload = page.locator('xpath=//*[@id="link-to-download"]');
  await linkDownload.waitFor({ state: 'visible', timeout: 10000 });
  await linkDownload.click();
});

//########################################################
//############################ FILE DOWNLOAD PDF #################
//########################################################
test('Entrar no site automationtesting - File Download PDF', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html');

  // Preenche o campo PDF
  await page.click('xpath=//*[@id="pdfbox"]');
  await page.type('xpath=//*[@id="pdfbox"]', 'BRAZIL', { delay: 100 });

  // Dispara evento manualmente
  await page.evaluate(() => {
    const el = document.getElementById('pdfbox');
    el.dispatchEvent(new Event('input', { bubbles: true }));
  });

  // Espera o botão habilitar
  const botaoPdf = page.locator('xpath=//*[@id="createPdf"]');
  await expect(botaoPdf).toBeEnabled({ timeout: 15000 });

  // Clica para gerar link
  await botaoPdf.click();

  // Espera pelo link e baixa
  const linkDownloadPdf = page.locator('xpath=//*[@id="pdf-link-to-download"]');
  await linkDownloadPdf.waitFor({ state: 'visible', timeout: 10000 });
  await linkDownloadPdf.click();
});

//########################################################
//############################ FILE UPLOAD #################
//########################################################
test('Entrar no site automationtesting - File Upload', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileUpload.html');

  // Caminho absoluto do arquivo
  const arquivo = path.resolve('C:/Users/Leonardo/OneDrive/Documents/info.pdf');

  // Faz upload
  await page.setInputFiles('input[type="file"]', arquivo);
});

//########################################################
//############################ JQUERY PROGRESS BAR #################
//########################################################
test('Entrar no site automationtesting - JQuery Progress Bar', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/JqueryProgressBar.html');

  // Inicia barra
  await page.click('xpath=//*[@id="downloadButton"]', { timeout: 15000 });

  // Fecha modal
  await page.click('xpath=/html/body/div[2]/div[3]/div/button');
});

//########################################################
//############################ LOADER #################
//########################################################
test('Entrar no site automationtesting - Loader', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Loader.html');

  // Dispara loader
  await page.click('xpath=//*[@id="loader"]', { timeout: 100000 });

  // Fecha modal
  await page.click('xpath=//*[@id="myModal"]/div/div/div[3]/button[1]');
});

//########################################################
//############################ MODALS #################
//########################################################
test('Entrar no site automationtesting - Modals', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Modals.html');

  // Bootstrap modal
  await page.click('xpath=/html/body/section/div[1]/div[1]/div/div[2]/a');

  // Rolar até o fim
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Fechar modal
  await page.click('xpath=//*[@id="myModal"]/div/div/div[2]/button');

  // Multiple modals
  await page.click('xpath=/html/body/section/div[1]/div[2]/div/div[2]/a');
  await page.click('xpath=//*[@id="myModalMulti"]/div/div/div[3]/a');
  await page.click('xpath=//*[@id="myModal2"]/div/div/div[6]/a[1]');
  await page.click('xpath=//*[@id="myModalMulti"]/div/div/div[4]/a[1]');
});

//########################################################
//############################ PROGRESS BAR #################
//########################################################
test('Entrar no site automationtesting - Progress Bar', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/ProgressBar.html');

  await page.click('//*[@id="cricle-btn"]', { timeout: 100000 });
});
