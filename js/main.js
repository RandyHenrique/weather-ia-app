// Selecionando os elementos do seu HTML
const input = document.querySelector('#city-input'); // Usando o ID que está no seu HTML
const botao = document.querySelector('#search-btn');
const campoCidade = document.querySelector('#city-name');
const campoTemp = document.querySelector('#temp');

// Função que dispara ao clicar no botão
botao.addEventListener('click', async () => {
    const cidade = input.value;

    if (cidade) {
        campoCidade.innerText = "Buscando...";
        
        // Chama a função que está no api.js
        const dados = await buscarClima(cidade); 

        if (dados) {
            campoCidade.innerText = dados.cidade;
            campoTemp.innerText = `${dados.temp}°C`;
        } else {
            campoCidade.innerText = "Cidade não encontrada";
            campoTemp.innerText = "--°C";
        }
    } else {
        alert("Por favor, digite uma cidade!");
    }
});