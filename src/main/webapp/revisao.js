function exibeNome(){
    var elNome = document.getElementById("txtNome");
    var strNome = elNome.value;
    var elDisplay = document.getElementById("display");
    elDisplay.innerText = strNome;
}

function novoContato(){
    var elListaContatos = document.getElementById("listaContatos");

    var labelContato = document.createElement("label");
    labelContato.innerText="Contato:";

    var inputContato = document.createElement("input");
    var btnExc = document.createElement("input");
    btnExc.setAttribute("type", "button");
    btnExc.setAttribute("value", "-");
    btnExc.onclick=function (){

        elListaContatos.removeChild(divLinha);

    };
    var br = document.createElement("br");

    var divLinha = document.createElement("div");

    divLinha.appendChild(labelContato);
    divLinha.appendChild(inputContato);
    divLinha.appendChild(btnExc);
    divLinha.appendChild(br);

    elListaContatos.appendChild(divLinha);
}