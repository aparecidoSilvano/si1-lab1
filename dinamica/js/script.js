function enter(evt) {
    var key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode :
            evt.which ? evt.which : void 0;

    if (key_code === 13) {
        //verificando se foi informado o nome do conteudo
        if (document.getElementById("conteudo").value === "") {
            void 0;
        }
        
        adiciona(document.getElementById("conteudo").value);
        document.getElementById("conteudo").value = "";
        return true;
    }
}

function adiciona(conteudo) {
    var tbl = document.getElementById("tabela-aprender");
        
    var novaLinha = tbl.insertRow(-1);
    var novaCelula;

    novaLinha.className = "info";

    //Inserindo dados na primeira coluna da nova linha
    novaCelula = novaLinha.insertCell(0);
    novaCelula.innerHTML = conteudo;
    novaCelula.className = "text-left";
    novaCelula.width = 450;

    
  //Inserindo button  add na terceira coluna da nova linha
    novaCelula = novaLinha.insertCell(1);
    novaCelula.innerHTML = "<button class='btn btn-xs btn-success'onclick='adicionaAprendido(this);'>Adicionar</button>";
    novaCelula.className = "text-center";
    novaCelula.width = 25;
    
    
    //Inserindo button Remover na segunda coluna da nova linha
    novaCelula = novaLinha.insertCell(2);
    novaCelula.innerHTML = "<button class='btn btn-xs btn-danger' onclick='remover(this);' >Remover</button>";
    novaCelula.className = "text-center";
    novaCelula.width = 25;

    
}

function remover(obj) {
    var linha = obj.parentNode.parentNode;

    linha.parentNode.deleteRow(linha.sectionRowIndex);
}

function adicionaAprendido(obj) {
    
    var tbl = document.getElementById("tabela-aprendidos");
       
    var conteudo = obj.parentNode.parentNode.getElementsByTagName('td')[0].firstChild.nodeValue;

    var novaLinha = tbl.insertRow(-1);
    var novaCelula;

    novaLinha.className = "success";

    //Inserindo dados na primeira coluna da nova linha
    novaCelula = novaLinha.insertCell(0);
    novaCelula.innerHTML = conteudo;
    novaCelula.className = "text-left";
    novaCelula.width = 470;

    //Inserindo button  excluir na segunda coluna da nova linha
    novaCelula = novaLinha.insertCell(1);
    novaCelula.innerHTML = "<button class='btn btn-xs btn-danger' onclick='remover(this)'>Remover</button>";
    novaCelula.className = "text-center";
    novaCelula.width = 25;

    remover(obj);
}