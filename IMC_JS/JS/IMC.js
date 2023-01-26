var calcular = document.getElementById('calcular');

function imc () {
    var nome = document.getElementById ('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var resultado = document.getElementById('resultado');
    
    if (nome !== '' && altura !== '' && peso !== '') {
    
    var imc = (peso / (altura*altura))

    let classificacao = "";

    if (imc < 18.5){
        classificacao = "abaixo do peso. Você precisa comer mais.";
    } else if (imc > 18.5 && imc < 25){
        classificacao = "no peso ideal. Parabéns!!!.";
    } else if (imc > 25){
        classificacao = "acima do peso.";
    }

    resultado.textContent = `${nome} seu IMC é ${imc} e você está ${classificacao}`;

    }else{
    resultado.textContent = 'Preencha todos os campos!';
    }
}
calcular.addEventListener('click', IMC);