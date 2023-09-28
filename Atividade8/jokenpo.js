function selecionarOpcao(jogada) {


    if (jogada === "pedra") {
      
        alert("Você escolheu " + jogada + "!");
        var computador = Math.floor((Math.random() * 3));
        var pedra = Math.floor((Math.random() * 3));

        if (pedra > computador) {
            alert("O computador escolheu tesoura. Você ganhou!");

        }
        else if (pedra < computador) {
            alert("O computador escolheu papel. Você perdeu!");

        }
        else {
            alert("O computador escolheu pedra. Empate!");
        }

    }

    else if (jogada === "papel") {

        alert("Você escolheu " + jogada + "!");
        var computador = Math.floor((Math.random() * 3));
        var papel = Math.floor((Math.random() * 3));

        if (papel > computador) {
            alert("O computador escolheu pedra. Você ganhou!");

        }
        else if (papel < computador) {
            alert("O computador escolheu tesoura. Você perdeu!");

        }
        else
        {
            alert("O computador escolheu papel. Empate!");
        }

    }

    else {

        alert("Você escolheu " + jogada + "!");
        var computador = Math.floor((Math.random() * 3));
        var tesoura = Math.floor((Math.random() * 3));

        if (tesoura > computador) {
            alert("O computador escolheu papel. Você ganhou!");

        }
        else if (tesoura < computador) {
            alert("O computador escolheu pedra. Você perdeu!");

        }
        else {
            alert("O computador escolheu tesoura. Empate!");
        }

    }

}