
function calcularPeso(){


    //entrada
    let valorMetro = document.getElementById("Altura").value;
    let kilo = document.getElementById("Peso").value;


    //processo
    let valorKilo = (kilo * valorMetro) / 100;

    let valorFinal = kilo / valorMetro;


    //saida
    document.getElementById("IMC").textContent = "valor final:" + valorFinal
    document.getElementById("Categoria de peso").textContent = "Categoria:" + valorFinal

    let imc = peso / (altura * altura);

 }