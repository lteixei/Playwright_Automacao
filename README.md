<img width="544" height="92" alt="image" src="https://github.com/user-attachments/assets/fdae7595-341b-4593-af24-92c82d025e36" />

Este projeto demonstra como usar o Playwright para automatizar testes de navegador.

## Instalação

1.  Clone o repositório: `git clone [URL do repositório]`
2.  Instale as dependências: `npm install`
3.  Configure o Playwright: `npx playwright install`

## Uso

```javascript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  // ... Interaja com a página ...
  await browser.close();
})();

## Dicas
ESCREVER NO CAMPO
  await page.fill('xpat="]', 'Playwright'); //escrever
  
ESPERAR A PÁGINA PARA SELECIONAR
  await page.waitForSelector('xpat="]', { timeout: 30000 });

ESPERAR ATÉ O OBJETO ESTAR VISIVEL
  await page.waitForSelector('xpat="]', { state: 'visible', timeout: 60000 });

VERIFICAR SE O CONTEÚDO CONTEM DETERMINADA PALAVRA
  const conteudo = await page.locator('xpat="]');
  await expect(conteudo).toContainText('xpat="]');

VERIFICAR SE O LINK ESTÁ VISIVEL
  const linkTestAutomation = await page.locator('xpat="]');
  await expect(linkTestAutomation).toBeVisible();

IMPRIMIR
console.log('Nova janela multiple foi aberta, depois fechada. URL: ' + newPage_3.url());

RODAR TESTES 
npx playwright test
Isso é "headless" por padrão, então você não vê nada.
Para ver o navegador abrindo e os testes acontecendo:
Escreva dessa forma
npx playwright test --headed
1️⃣ Modo Headed (navegador visível)
Isso abre o navegador real durante o teste.
