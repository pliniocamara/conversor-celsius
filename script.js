// Seleciona elementos do HTML que irão ser manipulados, guardando-os em variáveis 
const button = document.querySelector('button');
const temperaturaSelecionada = document.querySelector('select');
const celsius = document.querySelector('#celsius');
const resultado = document.querySelector('span');

// Função que altera o texto do botão de acordo com a temperatura selecionada (questão 3 - DESAFIO)
function alteraBotao() {
    if (temperaturaSelecionada.value === 'fahrenheit') {
        button.innerHTML = 'Converter para °F';
    } else if (temperaturaSelecionada.value === 'kelvin') {
        button.innerHTML = 'Converter para K';
    } else {
        button.innerHTML = 'Converter para ...';
    }
}

// Função que realiza a conversão de celsius para a temperatura selecionada.
function celsiusToFahrenheitOrKelvin() {
    if (temperaturaSelecionada.value === 'fahrenheit') {
        if (celsius.value === '') celsius.value = 0;
        resultado.style.color = 'green';
        resultado.innerHTML = `${(celsius.value * 1.8 + 32).toFixed(1)} °F`;
    } else if (temperaturaSelecionada.value === 'kelvin') {
        if (celsius.value === '') celsius.value = 0;
        resultado.style.color = 'green';
        resultado.innerHTML = `${(parseFloat(celsius.value) + 273.15).toFixed(2)} K`;
    } else {
        resultado.style.color = 'red';
        resultado.innerHTML = "Favor, selecionar a temperatura a ser convertida no campo 'Selecione a unidade'";
    }
}

// Chama a função 'celsiustoFahrenheitOrKelvin' a partir do click do botão no HTML
button.addEventListener('click', celsiusToFahrenheitOrKelvin);

// Chama a função 'alteraBotao' a partir da mudança de seleção da temperatura
temperaturaSelecionada.addEventListener('change', alteraBotao);



