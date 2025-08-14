// Import no topo do arquivo
import { test, expect } from '@playwright/test';

//########################################################
//###################### VIDEO - YOUTUBE #################
//########################################################
test('Entrar no site automationtesting - VIDEO - YOUTUBE', async ({ page }) => {
  // Passo 1: Acessar a página do YouTube
  await page.goto('https://demo.automationtesting.in/Youtube.html');

  // Passo 2: Localiza o iframe do YouTube
const frame = page.frameLocator('iframe[src*="youtube.com"]');

// Espera o botão de play estar visível e clica
await frame.locator('button[aria-label="Play"]').click();
});

//########################################################
//####################### VIDEO - VIMEO ##################
//########################################################
test('Entrar no site automationtesting - VIDEO - VIMEO', async ({ page }) => {
  // Passo 1: Acessar a página do Vimeo
  await page.goto('https://demo.automationtesting.in/Vimeo.html');

  // Passo 2: Injetar a API do Vimeo e dar play
  await page.addScriptTag({ url: 'https://player.vimeo.com/api/player.js' });

  await page.evaluate(() => {
    const iframe = document.querySelector('iframe[src*="vimeo.com"]');
    const player = new Vimeo.Player(iframe);
    player.play();
  });

  // Passo 3: Espera alguns segundos para o vídeo começar (opcional)
  await page.waitForTimeout(5000);
});
