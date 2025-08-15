@echo off
cd /d %~dp0

echo Instalando dependências...
call npm ci

echo Executando testes Playwright...
call npx playwright test

echo Gerando relatório Allure...
call allure generate -c -o allure-report
