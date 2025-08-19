import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // ou o caminho correto dos seus testes
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // outras configurações opcionais, como baseURL, etc.
  },
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
});
