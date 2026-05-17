const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularBtn = document.getElementById('calcularBtn');
const imcValor = document.getElementById('imcValor');
const imcClassificacao = document.getElementById('imcClassificacao');

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function obterClassificacao(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  }
  if (imc < 25) {
    return 'Peso normal';
  }
  if (imc < 30) {
    return 'Sobrepeso';
  }
  if (imc < 35) {
    return 'Obesidade grau I';
  }
  if (imc < 40) {
    return 'Obesidade grau II';
  }
  return 'Obesidade grau III';
}

calcularBtn.addEventListener('click', () => {
  const peso = parseFloat(pesoInput.value.replace(',', '.'));
  const altura = parseFloat(alturaInput.value.replace(',', '.'));

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    alert('Por favor, informe peso e altura válidos.');
    return;
  }

  const imc = calcularIMC(peso, altura);
  const imcFormatado = imc.toFixed(2);
  const classificacao = obterClassificacao(imc);

  imcValor.textContent = `IMC: ${imcFormatado}`;
  imcClassificacao.textContent = `Classificação: ${classificacao}`;
});
