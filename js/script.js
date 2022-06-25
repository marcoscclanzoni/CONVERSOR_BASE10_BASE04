
function calculo_r() {
    
    var valor1 = document.getElementById("input_v").value;
    var resultado = parseFloat(valor1)  * 0.4
    document.getElementById("calculo_r").innerHTML = resultado.toFixed(2);
}

function calculo_v() {
    
    var valor2 = document.getElementById("input_i").value;
    var resultado = parseFloat(valor2) / 0.4
    document.getElementById("calculo_v").innerHTML = resultado.toFixed(2);
}

 function limpar_v(){
  
    document.getElementById("input_i").value;
    document.getElementById("input_i").value= '';
    document.getElementById("calculo_v").value;
    document.getElementById("calculo_v").innerHTML= '';

 }
 
function limpar_r(){
    document.getElementById("input_v").value;
    document.getElementById("input_v").value= '';
    document.getElementById("calculo_r").value;
    document.getElementById("calculo_r").innerHTML= '';
 }