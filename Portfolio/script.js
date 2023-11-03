function sobre() {
    var paragrafo1 = document.getElementById("principal");
    var paragrafo2 = document.getElementById("secundario");
    var paragrafo3 = document.getElementById("final")

    paragrafo1.textContent = "Olá. Sou a Danielly!";
    paragrafo2.textContent = "Tenho 28 anos e moro em Sorocaba - SP.";
    paragrafo3.textContent = "Gosto muito de aprender coisas novas e por isso estou fazendo outra faculdade! Sou uma futura programadora.";

    var imagem = document.getElementById("imagemConteudo");
    imagem.src = "imagem/sobre.jpg";
    imagem.rel = "Oi!";

    var imagem1 = document.getElementById("imagemBox");
    imagem1.src = "imagem/programadora.png";
}

function formacao() {
    var paragrafo1 = document.getElementById("principal");
    var paragrafo2 = document.getElementById("secundario");
    var paragrafo3 = document.getElementById("final")

    paragrafo1.textContent = "(2014 - 2019): Engenharia de Alimentos - USP";
    paragrafo2.textContent = "(2022 - 2025): Análise e Desenvolvimento de Sistemas - FATEC";
    paragrafo3.textContent = "Me formei em 2019 em Engenharia de Alimentos e atuo na área desde então. Iniciei outra graduação no ano passado.";

    var imagem = document.getElementById("imagemConteudo");
    imagem.src = "imagem/formacao.jpg";
    imagem.rel = "Estudos";

    var imagem1 = document.getElementById("imagemBox");
    imagem1.src = "imagem/diploma.png";
}

function experiencia() {
    var paragrafo1 = document.getElementById("principal");
    var paragrafo2 = document.getElementById("secundario");
    var paragrafo3 = document.getElementById("final")

    paragrafo1.textContent = "(2018 - 2018): Controle de Qualidade - Monama Orgânicos";
    paragrafo2.textContent = "(2019 - presente): Pesquisa e Desenvolvimento - Sweetmix";
    paragrafo3.textContent = "Desenvolvo produtos e, ao contrário do que muita gente pensa, Engenharia de Alimentos não é tipo nutrição rs";

    var imagem = document.getElementById("imagemConteudo");
    imagem.src = "imagem/experiencia.jpg";
    imagem.rel = "Trabalho";

    var imagem1 = document.getElementById("imagemBox");
    imagem1.src = "imagem/ped.png";
}

function cursos() {
    var paragrafo1 = document.getElementById("principal");
    var paragrafo2 = document.getElementById("secundario");
    var paragrafo3 = document.getElementById("final")

    paragrafo1.textContent = "2022 - Figma";
    paragrafo2.textContent = "2023 - Bootcamp Santander (Java)";
    paragrafo3.textContent = "2023 - 2024: Bootcamp Embraer Social Tech (Análise de Dados)";

    var imagem = document.getElementById("imagemConteudo");
    imagem.src = "imagem/contato.jpg";
    imagem.rel = "Contato";

    var imagem1 = document.getElementById("imagemBox");
    imagem1.src = "imagem/cursos.gif";
}

function contato() {
    var paragrafo1 = document.getElementById("principal");
    var paragrafo2 = document.getElementById("secundario");
    var paragrafo3 = document.getElementById("final");

    var espaco1 = document.createTextNode("\u00A0");
    var espaco2 = document.createTextNode("\u00A0");

    paragrafo1.textContent = "Esse é o meu ";
    var link1 = document.createElement("a");
    link1.href = "https://www.linkedin.com/in/daniellyrocha/";
    link1.textContent = "Linkedin";
    paragrafo1.appendChild(espaco1);
    paragrafo1.appendChild(link1);
    link1.style.color = "purple";

    paragrafo2.textContent = "E esse é o meu ";
    var link2 = document.createElement("a");
    link2.href = "https://github.com/daniellygr";
    link2.textContent = "Github";
    paragrafo2.appendChild(espaco2);
    paragrafo2.appendChild(link2);
    link2.style.color = "purple";

    paragrafo3.textContent = "E-mail: daniellyrochag@gmail.com";

    var imagem = document.getElementById("imagemConteudo");
    imagem.src = "imagem/hobbie.jpg";
    imagem.rel = "Ligar";



    var imagem1 = document.getElementById("imagemBox");
    imagem1.src = "imagem/obrigada.png";

}