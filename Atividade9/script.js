var idade,
    media = 0, 
    cont = 0,
    sexo,
    opiniao,
    maisVelho = 0,
    maisNovo = 150, 
    qtdPessimo = 0,
    percBomOtimo = 0,
    qtdMulheres = 0,
    qtdHomens = 0;


function addDados(){

    if (cont < 45) {

        if (document.getElementById('idade').value == '') {
            alert("O campo idade deve ser preenchido")
        }
        else if (document.getElementById('feminino').checked == false && document.getElementById('masculino').checked == false) {
            alert("Selecione o sexo do entrevistado")            
        }
        else if ((document.getElementById('otimo').checked == false) && (document.getElementById('bom') == false) && (document.getElementById('regular') == false) && (document.getElementById('pessimo') == false)) {
            alert("Indique a sua avaliação sobre o filme.")
           
        }
        else{
            dadosIdade()
            dadosSexo()
            dadosOpiniao()
            limpar()
            cont++            
            document.getElementById('contador').
            innerText = 'Pessoas entrevistadas ' + cont + '/45'          
        }

    }
    else {
        alert("Limite Total de pesquisas necessárias. Clique em resultados") 
    }

}

function dadosIdade() {     
    idade = Number.parseInt(document.getElementById('idade').value)
    media += parseFloat(idade, 2)

    if(idade > maisVelho) {
        maisVelho = idade;
    }

    if (idade < maisNovo) {
        maisNovo = idade;
    }

}

function dadosSexo() {
    if (document.querySelector('#feminino').checked == true) {
        qtdMulheres++ 
    }

    if (document.querySelector('#masculino').checked == true) {
        qtdHomens++
    }
}

function dadosOpiniao(){

    if (document.querySelector('#otimo').checked == true
        || document.querySelector('#bom').checked == true) {
        percBomOtimo++ 
    }

    if (document.querySelector('#pessimo').checked == true) {
        qtdPessimo++
    }
}

function limpar() {
    document.getElementById('idade').value = ""
    document.querySelector('#feminino').checked = false
    document.querySelector('#masculino').checked = false
    document.querySelector('#otimo').checked = false
    document.querySelector('#bom').checked = false
    document.querySelector('#regular').checked = false
    document.querySelector('#pessimo').checked = false
    document.getElementById('h2').innerText =""
    document.getElementById('p').innerText =""

}

function finalizar() {    
    if (cont == 0) {
        alert("Não existem opiniões inseridas!")
    }
    else if (cont < 45) {
        document.getElementById('h2').innerText = "Resultado parcial"
        document.getElementById('p').innerText = `Média das idades: ${media/cont}\nIdade do mais velho: ${maisVelho}\nIdade do mais novo: ${maisNovo}\nQuantidade de avaliações "Péssimo": ${qtdPessimo}\nPercentual de opiniões "Bom ou Otimo": ${(100*percBomOtimo/cont)}%\nQuantidade de mulheres: ${qtdMulheres}\nQuantidade de homens: ${qtdHomens}`
    }
    else {
        document.getElementById('h2').innerText = "Resultado final"
        document.getElementById('p').innerText = `Média das idades: ${media/cont}\nIdade do mais velho: ${maisVelho}\nIdade do mais novo: ${maisNovo}\nQuantidade de avaliações "Péssimo": ${qtdPessimo}\nPercentual de opiniões "Bom ou Otimo": ${(100*percBomOtimo/cont)}%\nQuantidade de mulheres: ${qtdMulheres}\nQuantidade de homens: ${qtdHomens}`
    }

    
}