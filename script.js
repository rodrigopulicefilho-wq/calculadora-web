const visor = document.getElementById('visor');

// Adiciona os números ou símbolos ao visor ao clicar no botão
function adicionar(valor) {
  visor.value += valor;
}

// Limpa todo o visor (Botão C)
function limparVisor() {
  visor.value = '';
}

// Apaga apenas o último caractere digitado (Botão ⌫)
function apagar() {
  visor.value = visor.value.slice(0, -1);
}

// Faz o cálculo da expressão matemática quando clica em '='
function calcular() {
  try {
    if (visor.value !== '') {
      visor.value = eval(visor.value);
    }
  } catch (error) {
    visor.value = 'Erro';
    setTimeout(limparVisor, 1500); // Limpa a tela após 1.5 segundo
  }
}