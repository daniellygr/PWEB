var numero1;
var numero2;

numero1 = prompt("Digite um número:");
numero2 = prompt("Digite outro número");

var soma = parseFloat(numero1) + parseFloat(numero2);
var diferenca = parseFloat(numero1) - parseFloat(numero2);
var produto = parseFloat(numero1) * parseFloat(numero2);
var divisao = parseFloat(numero1) / parseFloat(numero2);
var resto = parseFloat(numero1) % parseFloat(numero2);

alert(`Soma: ${soma} \nSubtração: ${diferenca} \nProduto: ${produto} \nDivisão: ${divisao.toFixed(2)} \nResto: ${resto}`)
