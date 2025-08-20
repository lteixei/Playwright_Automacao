# 🎯 Automação de Testes com Playwright

Este repositório apresenta uma base profissional para automação de testes utilizando **Playwright**, uma ferramenta moderna e robusta desenvolvida pela Microsoft que permite testar aplicações web de forma rápida, estável e com suporte nativo a múltiplos navegadores.

O objetivo é fornecer um ponto de partida completo para criação de testes automatizados, seguindo boas práticas e padrões recomendados.

---

## 🚀 Por que utilizar Playwright?

- ✅ Execução **multi-browser** (Chromium, Firefox e WebKit)  
- ✅ Suporte nativo a **paralelismo** e **gravação de vídeo**  
- ✅ Esperas inteligentes (auto-wait) — **sem uso de sleep**  
- ✅ Fácil integração com **CI/CD**  
- ✅ API moderna e intuitiva  

---

## 🧰 Tecnologias Utilizadas

| Ferramenta       | Descrição                              |
|------------------|-----------------------------------------|
| Playwright       | Framework principal para automação      |
| Python           | Linguagem utilizada nos testes          |
| Pytest           | Orquestração e execução dos testes      |
| Playwright Test  | Runner com relatórios e paralelismo     |

---

## ⚙️ Pré-Requisitos

- ✅ Python 3.10+ instalado  
- ✅ Node.js instalado (para instalar os navegadores Playwright)  
- ✅ Git instalado  
- ✅ Ambiente virtual (recomendado)

---

## 📦Criar e ativar o ambiente virtual:  
### Criar ambiente virtual
python -m venv venv

### Windows
venv\Scripts\activate

### Linux / Mac
source venv/bin/activate

---

## 📦 Instalação  
### Instalação das Dependências Python 
pip install playwright pytest  

### Instalar os Navegadores Suportados 
playwright install  

---

## ▶️ Executando os Testes 
pytest  

### 📦 Especificar um arquivo de teste 
pytest tests/test_login.py  

### 📦 Executar testes em modo headless = false (exibir navegador) 
pytest --headed  

### 📦 Gerar relatório em HTML 
pytest --html=report.html  

---

## 🗂️ Estrutura Sugerida  

📦 playwright-automation/  
├── 📁 tests/                   # Casos de testes  
│   ├── test_login.py  
│   └── test_cadastro.py  
├── 📁 pages/                   # Page Objects  
│   ├── login_page.py  
│   └── cadastro_page.py  
├── 📁 utils/                   # Helpers, fixtures, dados de teste  
├── requirements.txt  
└── README.md  

---

## ✅ Boas Práticas  

| Dica                           | Explicação                                     |
|--------------------------------|------------------------------------------------|
| Utilize Page Object Model      | Para melhor organização e reuso de elementos   |
| Trabalhe com fixtures          | Para dados dinâmicos ou login reutilizável     |
| Use o modo trace               | Facilita debugging com gravação passo a passo  |
| Configure CI/CD                | Para rodar testes automaticamente em cada PR   |
| Não use sleep()                | O Playwright já possui auto-wait embutido      |

---

## 🔎 Exemplo de Teste

from playwright.sync_api import Page  
  
def test_login(page: Page):  
    page.goto("https://exemplo.com")  
    page.fill("#username", "usuario_teste")  
    page.fill("#password", "senha123")  
    page.click("#login")  
    page.wait_for_selector("text=Bem-vindo")  

---

## 🤝 Contribuição

Contribuições são bem-vindas!  
Abra uma Issue ou envie um Pull Request com melhorias, novos cenários ou exemplos de integração.

---

## 🤝 Boas práticas para contribuições:  
📌 Escreva código limpo, legível e documentado.  
📌 Teste suas mudanças antes de enviar o Pull Request.  
📌 Mantenha a consistência com o estilo e padrões do projeto.  
📌 Discuta melhorias ou dúvidas antes de implementar grandes mudanças.

---

## 👩‍💻 Contato
- Informações	
- Nome	Leonardo da Motta Teixeira  
- Cargo	QA Engineer / Gestor / Tester-Sênior  
- LinkedIn	www.linkedin.com/in/leonardo-da-motta-teixeira-3584734b  
- E-mail	lteixei@hotmail.com  

---

## 📝 Licença

- Este projeto está licenciado sob a MIT License.
