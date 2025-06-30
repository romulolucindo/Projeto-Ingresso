// Quantidade de ingressos disponiveis.
let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;


// Function para verificar/comprar ingressos.
function comprar() {
  let tipoIngresso = document.getElementById('tipo-ingresso').value;
  let quantidade = parseInt(document.getElementById('qtd').value, 10);

  // Verificador se é menor que 0
  if (!quantidade || quantidade < 1) {
    alert('Digite um valor válido');
    return;
  }
  // Verificador se é ainda tem ingressos
  if (qtdInferior == 0 && qtdPista == 0 && qtdSuperior == 0) {
    alert('TODOS OS INGRESSOS ESTÃO ESGOTADOS!!')
    return;
  }

  //// Switch com a condicional verificando cada case.
  switch (tipoIngresso) {
    case 'pista':
      if (quantidade <= qtdPista) {
        alert("Ingresso Comprado com sucesso");
        qtdPista -= quantidade;
      } else alert("Ingresso Esgotado");
      break;

    case 'superior':
      if (quantidade <= qtdSuperior) {
        alert("Ingresso Comprado com sucesso");
        qtdSuperior -= quantidade;
      } else alert("Ingresso Esgotado");
      break;

    case 'inferior':
      if (quantidade <= qtdInferior) {
        alert("Ingresso Comprado com sucesso");
        qtdInferior -= quantidade;

      } else alert("Ingresso Esgotado");
      break;
  }
  // Exibe o valor atualizado na tela, qtd que tinha menos a qtd que comprou.
  document.getElementById('qtd-pista').textContent = qtdPista;
  document.getElementById('qtd-superior').textContent = qtdSuperior;
  document.getElementById('qtd-inferior').textContent = qtdInferior;
}
