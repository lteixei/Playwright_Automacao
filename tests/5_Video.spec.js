// Import no topo do arquivo
import { test, expect } from '@playwright/test';


//########################################################
//###################### VIDEO - YOUTUBE #################
//########################################################
test('Entrar no site automationtesting - VIDEO - YOUTUBE', async ({ page }) => {
  // Passo 1: Acessar a página do YouTube
  await page.goto('https://demo.automationtesting.in/Youtube.html');

  // Passo 2: Localizar o iframe do YouTube
  const frame = page.frameLocator('iframe[src*="youtube.com"]');

  // Esperar o botão de play estar visível e clicar
  const playButton = frame.locator('button[aria-label="Play"]');
  await playButton.waitFor({ state: 'visible', timeout: 10000 });
  await playButton.click();
});

//########################################################
//####################### VIDEO - VIMEO ##################
//########################################################
test('Entrar no site automationtesting - VIDEO - VIMEO', async ({ page }) => {
  // Passo 1: Acessar a página do Vimeo
  await page.goto('https://demo.automationtesting.in/Vimeo.html');

  // Passo 2: Injetar a API do Vimeo e dar play dentro do iframe
  await page.addScriptTag({ url: 'https://player.vimeo.com/api/player.js' });

  // Aguardar o iframe do Vimeo estar carregado
  const iframeHandle = await page.waitForSelector('iframe[src*="vimeo.com"]', { timeout: 10000 });

  await page.evaluate((iframe) => {
    const player = new Vimeo.Player(iframe);
    player.play();
  }, iframeHandle);

  // Passo 3: Esperar alguns segundos para o vídeo começar (opcional)
  await page.waitForTimeout(5000);
});
