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
