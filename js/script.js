function calculo_i() {
    
    var valor1 = document.getElementById("input_v").value;
    var valor2 = document.getElementById("input_r").value;
    var resultado = parseFloat(valor1) / parseFloat(valor2);
    document.getElementById("calculo_i").innerHTML = resultado;
}

function calculo_r() {
    
    var valor1 = document.getElementById("input_v").value;
    var valor2 = document.getElementById("input_i").value;
    var resultado = parseFloat(valor1) / parseFloat(valor2);
    document.getElementById("calculo_r").innerHTML = resultado;
}

function calculo_v() {
    
    var valor1 = document.getElementById("input_r").value;
    var valor2 = document.getElementById("input_i").value;
    var resultado = parseFloat(valor1) * parseFloat(valor2);
    document.getElementById("calculo_v").innerHTML = resultado;
}

function limpar_i(){
    document.getElementById("input_v").value;
    document.getElementById("input_v").value= '';
    document.getElementById("input_r").value;
    document.getElementById("input_r").value= '';

    document.getElementById("calculo_i").value;
    document.getElementById("calculo_i").innerHTML= '';

 }
 function limpar_v(){
  
    document.getElementById("input_r").value;
    document.getElementById("input_r").value= '';
    document.getElementById("input_i").value;
    document.getElementById("input_i").value= '';
    document.getElementById("calculo_v").value;
    document.getElementById("calculo_v").innerHTML= '';

 }
 
function limpar_r(){
    document.getElementById("input_v").value;
    document.getElementById("input_v").value= '';
    document.getElementById("input_i").value;
    document.getElementById("input_i").value= '';
    document.getElementById("calculo_r").value;
    document.getElementById("calculo_r").innerHTML= '';
 }