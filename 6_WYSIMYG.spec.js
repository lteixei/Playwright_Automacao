// Import no topo do arquivo
import { test, expect } from '@playwright/test';

//########################################################
//############################ TinyMCE #################
//########################################################
test('Entrar no site automationtesting - TinyMCE', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/TinyMCE.html');

  await page.fill('xpath=/html/body/section/div[1]/div/div/textarea', 'BRAZIL');
});

//########################################################
//######################## CKEditor ##################
//########################################################
test('Entrar no site automationtesting - CKEditor', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/CKEditor.html', { timeout: 60000 });

// Seleciona o parágrafo do editor
const editor = page.locator('//*[@id="cke_1_contents"]/iframe'); // id do textarea/CKEditor
await editor.click();

// Seleciona todo o texto
await page.keyboard.down('Control');
await page.keyboard.press('KeyA');
await page.keyboard.up('Control');

// Aplica negrito
await page.click('//*[@id="cke_35"]');

});

//########################################################
//#################### SUMMERNOTE ###################
//########################################################
test('Entrar no site automationtesting - SUMMERNOTE', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/SummerNote.html', { timeout: 60000 });

// Seleciona o editor Summernote
  const editor = page.locator('xpath=/html/body/section/div[1]/div/div/div[2]/div[3]/div[2]');

  // Clica para focar
  await editor.click();

  // Digita o texto
  await editor.fill('LEONARDO');

  // Seleciona todo o texto
  await editor.focus();
  await page.keyboard.down('Control');  // ou 'Meta' no Mac
  await page.keyboard.press('KeyA');
  await page.keyboard.up('Control');

  // Aplica negrito e sublinhado
const botao1 = page.locator('xpath=/html/body/section/div[1]/div/div/div[2]/div[2]/div[2]/button[1]');
await botao1.click();

const botao2 = page.locator('xpath=/html/body/section/div[1]/div/div/div[2]/div[2]/div[2]/button[2]');
await botao2.click();
});

//########################################################
//############ CODE MIRROR #####################
//########################################################
test('Entrar no site automationtesting - CODE MIRROR', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/CodeMirror.html', { timeout: 60000 });

// Espera até CodeMirror estar visível
const editor = page.locator('.CodeMirror');
await editor.waitFor({ state: 'visible', timeout: 10000 });

// Clica no editor e digita
await editor.click();
await page.keyboard.type('10/12/1976');
await page.keyboard.press('Enter');
await page.keyboard.type('20/08/1980');
});