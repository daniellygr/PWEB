function maiusculas(){
    var checkbox = document.getElementById('maiusculo');
    if (checkbox.checked == true){
      document.forms.atividade.elements.texto.value = document.forms.atividade.elements.texto.value.toUpperCase();
      document.forms.atividade.elements.minusculo.checked = false;
    }
  }
  
  function minusculas(){
    var checkbox = document.getElementById('minusculo');
    if (checkbox.checked == true){
      document.forms.atividade.elements.texto.value = document.forms.atividade.elements.texto.value.toLowerCase();
      document.forms.atividade.elements.maiusculo.checked = false;
    }
  }