// Import no topo do arquivo usando import
import { test, expect } from '@playwright/test';

test('Entrar no site automationtesting - Home', async ({ page }) => {
  // Acessando a página
  await page.goto('https://demo.automationtesting.in/Index.html');

  // Verificando o título da página
  const titulo = await page.title();
  expect(titulo).toBe('Index');
});
