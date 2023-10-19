var aluno1 = new Object();
        aluno1.ra = "00001234";
        aluno1.nome = "Ken";
        alert("ra = " + aluno1.ra + " nome = " + aluno1.nome);

        var aluno2 = {};
        aluno2.ra = "1234";
        aluno2["nome"] = "Mayara";
        //aluno2.nome "Mayara";
        alert("ra = " + aluno2.ra + " nome = " + aluno2.nome);

        var aluno3 = {
            ra: "1234567",
            nome: "Gabriel"

        };
        alert("ra = " + aluno3.ra + " nome = " + aluno3.nome);

        function Aluno(ra, nome) {
            this.ra = ra;
            this.nome = nome;

            this.MostraDados = function () {
                return "ra = " + this.ra + " nome = " + this.nome;
            }


        }
        var aluno4 = new Aluno("12345", "Danielly");
        alert(aluno4.MostraDados());
        alert(aluno4.nome);

        var aluno5 = {};
        var nome_propriedade = "ra";
        aluno5[nome_propriedade] = "123";
        aluno5['nome'] = "Vitor";
        alert("ra = " + aluno5.ra + " nome = " + aluno5.nome);

        function Aluno2() {
            var ra;
            var nome;
            this.setRa = function (value) {
                this.ra = value;
            }
            this.getRa = function () {
                return this.ra;
            }
            this.setNome = function (value) {
                this.nome = value;
            }
            this.getNome = function() {
                return this.nome;
            }
        }

        var aluno6 = new Aluno2();
        aluno6.setNome("Igor");
        aluno6.setRa("234");
        alert("ra = " + aluno6.getRa() + " nome = " + aluno6.getNome());