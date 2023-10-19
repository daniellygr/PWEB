//Função construtora do Triângulo      
function Retangulo(x, y) {

    this.base = x;
    this.altura = y;
            
    this.calculaArea = function() {
        return base * altura;
    };

}

//Entradas
var base = 6;
var altura = 27;


var retangulo = new Retangulo(base, altura);

//Resultado
alert("Área do triângulo = " + retangulo.calculaArea());

///-------///

//Função construtora conta
function Conta() {

    var nomeCorrentista;
    var nomeBanco;
    var conta;
    var saldo;

    this.setNomeCorrentista = function (nome) {
        nomeCorrentista = nome;
    }

    this.setNomeBanco = function (numBanco) {
        nomeBanco = numBanco;
    }

    this.setNumConta = function(numConta) {
        conta = numConta;
    }

    this.setSaldo = function(vSaldo) {
        saldo = vSaldo;
    }
    this.getNomeCorrentista = function() {
        return nomeCorrentista;
    }

    this.getNomeBanco= function(){
        return nomeBanco;
    }

    this.getNumConta = function() {
        return conta;
    }

    this.getSaldo = function () {
        return saldo;
    }
}

function Corrente (saldoEspecial) {

    var saldoEspecial;

    this.setSaldoEspecial = function(saldoEspec) {
        saldoEspecial = saldoEspec;
    }

    this.getSaldoEspecial = function () {
        return saldoEspecial;
    }
}

function Poupanca (juros, dataVencimento) {

    var juros;
    var dataVencimento;


    this.setJuros = function (valJuros) {
        juros = valJuros;
    }
    
    this.setDataVencimento = function (dataVenc) {
        dataVencimento = dataVenc;
    }

    this.getJuros = function() {
        return juros;
    }

    this.getDataVencimento = function () {
        return dataVencimento;
    }
}

Corrente.prototype = new Conta();

var contaCorrente = new Corrente();

contaCorrente.setNomeCorrentista('Danielly');
contaCorrente.setNomeBanco('Itaú');
contaCorrente.setNumConta('2590-00');
contaCorrente.setSaldo('3000,00');
contaCorrente.setSaldoEspecial('100,00');

Poupanca.prototype = new Conta();

var contaPoupanca = new Poupanca();

contaPoupanca.setNomeCorrentista('Isabela');
contaPoupanca.setNomeBanco('Bradesco');
contaPoupanca.setNumConta('217-3');
contaPoupanca.setSaldo('1000,00');
contaPoupanca.setJuros('10,5%');
contaPoupanca.setDataVencimento("18/10/2023");


alert("CONTA CORRENTE - Nome: " + contaCorrente.getNomeCorrentista() + "\n" + 
            "Banco: " + contaCorrente.getNomeBanco() + "\n" +
            "Número da conta: " + contaCorrente.getNumConta() + "\n" +
            "Saldo: R$ " + contaCorrente.getSaldo() + "\n" +
            "Saldo especial: R$ " + contaCorrente.getSaldoEspecial());

alert("CONTA POUPANÇA - Nome: " + contaPoupanca.getNomeCorrentista() + "\n" + 
            "Banco: " + contaPoupanca.getNomeBanco() + "\n" +
            "Número da conta: " + contaPoupanca.getNumConta() + "\n" +
            "Saldo: R$ " + contaPoupanca.getSaldo() + "\n" +
            "Juros: R$ " + contaPoupanca.getJuros() + "\n" +
            "Data de Vencimento: R$ " + contaPoupanca.getDataVencimento());

          