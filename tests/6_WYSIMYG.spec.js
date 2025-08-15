// Import no topo do arquivo
import { test, expect } from '@playwright/test';

//########################################################
//######################## CKEditor ######################
//########################################################
test('Entrar no site automationtesting - CKEditor', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/CKEditor.html', { timeout: 60000 });

  // O editor do CKEditor está dentro de um iframe
  const frame = page.frameLocator('iframe[title="Rich Text Editor, editor1"]'); // Ajuste o seletor se necessário
  const body = frame.locator('body');

  // Clica no corpo do editor para focar
  await body.click();

  // Seleciona todo o texto dentro do iframe
  await frame.locator('body').press('Control+a'); // 'Meta+a' se for Mac

  // Aplica negrito (clicar no botão fora do iframe)
  await page.locator('#cke_35').click();
});

//########################################################
//####################### SUMMERNOTE #####################
//########################################################
test('Entrar no site automationtesting - SUMMERNOTE', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/SummerNote.html', { timeout: 60000 });

  // O editor Summernote tem uma div contenteditable
  const editor = page.locator('div.note-editable');

  // Foca e digita o texto
  await editor.click();
  await editor.fill('LEONARDO');

  // Seleciona todo o texto
  await editor.press('Control+a'); // 'Meta+a' para Mac

  // Aplica negrito e sublinhado pelos botões
  await page.locator('button.note-btn-bold').click();
  await page.locator('button.note-btn-underline').click();
});

//########################################################
//######################## CODE MIRROR ###################
//########################################################
test('Entrar no site automationtesting - CODE MIRROR', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/CodeMirror.html', { timeout: 60000 });

  const editor = page.locator('.CodeMirror');

  // Espera o editor estar visível
  await editor.waitFor({ state: 'visible', timeout: 10000 });

  // Clica no editor para focar
  await editor.click();

  // Digita dentro do editor (usar keyboard.type com delays para simular digitação)
  await page.keyboard.type('10/12/1976');
  await page.keyboard.press('Enter');
  await page.keyboard.type('20/08/1980');
});
