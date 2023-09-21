var nome;
var nota1;
var nota2;
var nota3;

var nome = prompt("Nome do aluno:");
var nota1 = prompt("Nota 1 do aluno:");
var nota2 = prompt("Nota 2 do aluno:");
var nota3 = prompt("Nota 3 do aluno:");

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

alert("A média do " + nome + " é: " + media.toFixed(2));