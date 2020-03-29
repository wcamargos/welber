
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//console.log(botaoAdicionar);
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    //console.log("Botão clicado");
})


titulo.addEventListener("click", function(){  //fun
    console.log("Função anônima");
});

// ou assim: titulo.addEventListener("click", mostraMensagem);
//function mostraMensagem(){
//    console.log("Clicou!");}

var form = document.querySelector("#formAdd");
var paciente = obtemPacienteDoFormulario(form);

/*enviado para função abaixo:
var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value; */


//***cria tr e td do paciente - enviado para uma função
/*var pacienteTr = document.createElement("tr");

var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var nomeTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso, altura);

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);*/

var pacienteTr = montaTr(paciente);


//***add paciente na tabela
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);


function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("classe");
    return td;
}