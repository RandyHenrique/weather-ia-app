 🌤️ AI Weather Flow - Aplicativo de Clima

Este projeto é um aplicativo de clima simples que utiliza a API **Open-Meteo** para buscar dados meteorológicos em tempo real. O diferencial deste projeto foi o fluxo de desenvolvimento focado no uso de assistentes de Inteligência Artificial.

## 🤖 IAs Utilizadas
Durante o desenvolvimento, utilizei as seguintes ferramentas para auxiliar na lógica, depuração e autocompletar:
* **ChatGPT**: Planejamento da estrutura e lógica da API.
* **Tabnine**: Autocompletar de código em tempo real no VS Code.
* **Qodo Gen**: Análise de qualidade de código e sugestões de melhoria.

## 🛠️ Estrutura do Projeto
A estrutura de pastas recomendada pelas IAs foi:
- `weather-app/`
    - `index.html` (Interface)
    - `css/style.css` (Estilização)
    - `js/api.js` (Conexão com Open-Meteo)
    - `js/main.js` (Interação do usuário)

## 🚀 Como Executar
1. Clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Digite o nome de uma cidade para ver a temperatura atual.

## 🧠 Reflexão sobre o uso de IAs
*(Nesta seção, você deve completar com sua experiência pessoal após terminar o código)*
- **Qual IA foi mais clara?** - **Como o Tabnine ajudou na produtividade?**
## 🤖 Relato de Experiência com IA

### Teste do Tabnine (Autocompletar)
Durante o desenvolvimento no arquivo `main.js`, ao começar a digitar a captura do input, o **Tabnine** sugeriu o uso de `document.querySelector('.input')`. 
* **Observação:** Notei que a IA priorizou um seletor de classe moderno em vez do tradicional `getElementById`. Aceitei a sugestão para testar a agilidade da ferramenta.

### Teste do Qodo Gen (Análise de Código)
Utilizei o **Qodo Gen** para analisar a função de busca no arquivo `api.js`.
* **Resultado:** A ferramenta forneceu uma explicação clara sobre como as funções assíncronas (`async/await`) lidam com as respostas da API Open-Meteo.

### Comparação com ChatGPT
O **ChatGPT** foi utilizado como mentor para estruturar as pastas do projeto (`css`, `js`, `assets`), garantindo que o fluxo de trabalho seguisse as melhores práticas de organização.
- **O Qodo Gen sugeriu algo que eu não tinha pensado?**