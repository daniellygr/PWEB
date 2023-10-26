let janela = document.getElementById("janela");
let titulo = document.querySelector(".titulo");

    janela.addEventListener("mouseover", function() {
        janela.src = 'janelaaberta.jfif';
		titulo.textContent = "Janela aberta"
    });

    janela.addEventListener("mouseout", function() {
    	
        janela.src = 'janelafechada.jfif'
		titulo.textContent = "Janela fechada";
	});

    janela.addEventListener("click", function() {
        janela.src = 'janelaquebrada.jfif';
		titulo.textContent = "Janela quebrada"
        
        janela.removeEventListener("mouseover", arguments.callee);
        janela.removeEventListener("mouseout", arguments.callee);
    });