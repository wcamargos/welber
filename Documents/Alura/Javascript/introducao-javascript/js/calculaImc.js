
//alert("Olá mundo");
//console.log(document); //console f12
/*console.log(titulo);
console.log(titulo.textContent);
console.log("Fui carregado");*/
//titulo.textContent = "Título Diferente";

var titulo = document.querySelector(".titulo");

var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i<pacientes.length; i++){
    //console.log(pacientes[i])
var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(tdPeso);
console.log(paciente);
console.log("Peso:" + peso);
console.log("Altura:" + altura);

var tdImc = paciente.querySelector(".info-imc")

var imc = (peso / (altura * altura));
console.log("IMC: " + imc);
var validaPeso = true;
var validaAltura = true;

if(peso<0 || peso>200){
    console.log("Peso inválido");
    validaPeso = false;
    tdImc.textContent = "Peso inválido";
    paciente.style.backgroundColor = "Lightcoral";}

if(altura <0 || altura >3.00){
    console.log("Altura inválida");
    validaAltura = false;
    tdImc.textContent = "Altura inválida";
    paciente.style.backgroundColor = "Lightcoral";
}
if(validaPeso && validaAltura){
    //var tdImc = paciente.querySelector(".info-imc");
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc ;

}
function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(1);
}


}

