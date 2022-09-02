//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


//funcion que encripta
function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";

    document.getElementById("texto").style.display = "none";

    document.getElementById("texto2").innerHTML = txtcifrado;

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

//funcion que desencripta
function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";

    document.getElementById("texto2").innerHTML = txtcifrado;

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

//funcio que copia el texto
function copy(){

    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("se copio el texto");
}

