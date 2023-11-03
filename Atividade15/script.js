function validarFormulario(form) {

    //Valida o campo de nome
    var nome = document.formulario.elements['nome'].value;
    if (nome.length < 10) {
        alert("O campo 'nome' deve ter no mínimo 10 caracteres.");
        return false;
    }

    //Valida o campo de email
    var email = document.formulario.elements['email'].value;
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert("O campo 'e-mail' deve conter os caracteres '@' e '.'.");
        return false;
    }

    // Valida o campo de comentário
    var comentario = document.formulario.elements['comentario'].value;
    if (comentario.length < 20) {
        alert("O campo 'comentário' deve ter no mínimo 20 caracteres.");
        return false;
    }

    // Valida o campo de pesquisa
    if (document.getElementById('sim').checked) {
        alert("Volte sempre a esta página!");
    }

    else if (document.getElementById('nao').checked) {
        alert("Que bom que você voltou a visitar esta página!");
    }
    else {
        alert("Por favor, preencha a pesquisa!");
        return false;
    }
}