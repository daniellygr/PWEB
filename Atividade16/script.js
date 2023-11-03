function abrirCurso() {
    var select = document.getElementById("cursos");
    var cursoSelecionado = select.options[select.selectedIndex].text;
    var valorSelecionado = select.options[select.selectedIndex].value;

    if (valorSelecionado === "") {
        alert("Selecione um curso para prosseguir!")
    }
    else {
        if (confirm("Deseja abrir a janela do curso de " + cursoSelecionado + "?")) {
            var novaJanela = window.open("", "Curso", "width=600, height=300");
            novaJanela.document.write("<style>body { background-color: aquamarine; }</style>");
            novaJanela.document.write("<h1>" + cursoSelecionado + "</h1>");
            if (valorSelecionado === "ads") {
                novaJanela.document.write("<p>O tecnólogo em Análise e Desenvolvimento de Sistemas pela cria, projeta, desenvolve e configura programas, softwares e sistemas para inúmeras empresas. Faz auditoria de sistemas para avaliar possíveis erros e falhas. Além disso, o tecnólogo em Análise e Desenvolvimento de Sistemas está apto a prestar consultoria e desenvolver pesquisas</p>");
            }
            else if (valorSelecionado === "eletronica") {
                novaJanela.document.write("<p>O tecnólogo em Eletrônica Automotiva desenvolve módulos eletrônicos para, por exemplo, o controle de motores. Monitora o desempenho dos conjuntos de componentes eletrônicos durante um teste de rodagem. Projeta e programa os equipamentos eletrônicos de um veículo e os sistemas de conforto e conveniência (como sensores que auxiliam o motorista a estacionar).</p>");
            }
            else if (valorSelecionado === "mecanica") {
                novaJanela.document.write("<p>O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia diversos processos, como desenvolvimento e melhoria de produtos. Na gestão de projetos, alia competências das áreas de gestão como qualidade e controle ambiental.</p>");
            }
            else if (valorSelecionado === "qualidade") {
                novaJanela.document.write("<p>O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade e produtividade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade. Elabora e analisa documentação e relatórios de qualidade, considerando normas de qualidade estabelecidas. Desenvolve avaliação sistemática dos procedimentos, práticas e rotinas internas e externas de uma organização. Mobiliza pessoas para agir com qualidade em todas as atividades corporativas. Gerencia e mantém o fluxo de informação e comunicação na empresa. Dissemina a cultura da qualidade e produtividade.</p>");
            }
            else if (valorSelecionado === "empresarial") {
                novaJanela.document.write("<p>O tecnólogo em Gestão Empresarial atua no planejamento de atividades e recursos, na organização do trabalho e na gestão de pessoas – quem é responsável por determinada função, como deve ser o desempenho etc. Controla as atividades e monitora o cumprimento das tarefas. O profissional precisa ter a visão de uma empresa como um todo.</p>");
            }
            else if (valorSelecionado === "logistica") {
                novaJanela.document.write("<p>O tecnólogo em Logística gerencia o fluxo de produtos ou pessoas em uma empresa. Cuida da aquisição, do recebimento, da armazenagem, da distribuição e do transporte de produtos, bem como do controle e processamento de pedidos. Determina, por exemplo, a quantidade e o tipo de veículos necessários para uma entrega. Planeja a organização e a ordem dos produtos dentro de caminhões ou contêineres. Monta o roteiro de entrega dos produtos. Define o melhor local para se fazer um estoque. Pode atuar ainda na ordenação do fluxo de atendimento ao público em hospitais e postos de serviço. Em indústrias e fábricas, determina a disposição de equipamentos e setores de produção, de modo a melhorar a produtividade e evitar desperdício e retrabalho.</p>");
            }
            else if (valorSelecionado === "manufatura") {
                novaJanela.document.write("<p>O tecnólogo em Manufatura Avançada atua como um integrador de tecnologia. Além de projetar e desenvolver projetos de manufatura, o profissional é responsável por agregar novas tecnologias voltadas para a Indústria 4.0. Oferece informações tecnológicas relacionadas às principais técnicas de produção empregadas na indústria mundial, tais como materiais e processos de fabricação, realidade aumentada e virtual, Internet das Coisas, Big Data, entre outros.</p>");
            }
            else if (valorSelecionado === "polimeros") {
                novaJanela.document.write("<p>O tecnólogo em Polímeros trabalha na fabricação dos polímeros. Avalia as características químicas, físicas e mecânicas dos plásticos, tendo em vista suas possíveis aplicações (peças para automóveis, materiais de construção, medicina etc.). É também responsável pelo monitoramento da qualidade e dos processos de reciclagem envolvidos e pela identificação e acompanhamento das variáveis relevantes, inclusive aquelas que se referem ao meio ambiente.</p>");
            }
            else if (valorSelecionado === "metalurgicos") {
                novaJanela.document.write("<p>O tecnólogo em Processos Metalúrgicos trabalha com produtos básicos de metais: aço, ferro fundido, alumínio e suas ligas, cobre, bronze, latão e níquel e suas ligas. Avalia e seleciona equipamentos e processos mais adequados na produção metalúrgica de modo a otimizar a produtividade. Atua tanto no planejamento como na área operacional de indústrias siderúrgicas e metalúrgicas, podendo supervisionar ou coordenar os processos de fabricação de produtos metálicos, como carcaça de automóvel.</p>");
            }
            else if (valorSelecionado === "mecanicos") {
                novaJanela.document.write("<p>O tecnólogo em Projetos Mecânicos desenvolve equipamentos para a indústria mecânica, especialmente máquinas de transporte, como esteiras, elevadores e pontes rolantes para movimentação de cargas. Elabora o projeto mecânico, desde a concepção até a especificação final, inclusive, de fornecedores. Pode atuar também na produção, acompanhando o planejamento e o processo de fabricação, bem como na assistência técnica e nas vendas.</p>");
            }
            else {
                novaJanela.document.write("<p>O tecnólogo em Sistemas Biomédicos planeja, implanta, gerencia e mantém equipamentos clínicos e médico-hospitalares, como respirador artificial, monitores, desfibrilador etc. O tecnólogo é responsável, por exemplo, por checar os equipamentos que serão utilizados durante um procedimento médico. Também pode compor a equipe que atuará durante uma cirurgia. Supervisiona e coordena equipes de manutenção. Assessora a aquisição de equipamentos, orientando quanto às especificações técnicas; executa a instalação e fornece treinamento para os usuários dos aparelhos.</p>");
            }
        }
    }
}