let formulario = document.querySelector('form');

let cxNome    = document.querySelector('#nome');
let cxIdade   = document.querySelector('#idade');
let cxPeso    = document.querySelector('#peso');
let cxAltura  = document.querySelector('#altura');

let btnEnviar = document.querySelector('#btnEnviar');
let btnLimpar = document.querySelector('#btnLimpar');

let resultado = document.querySelector('#resultadoImc');

btnEnviar.addEventListener('click', function(event){
    event.preventDefault();
   
       let nome    = cxNome.value;
       let idade   = cxIdade.value;
       let peso    = cxPeso.value;
       let altura  = cxAltura.value;
    
    
    let imc = (peso / (altura * altura)).toFixed(1);
    
    resultado.value = imc;

    if(imc < 18.5){
        document.querySelector('.aviso').innerHTML = `${nome} está: Abaixo do peso` ;
    } else if( imc <= 24.9){
        document.querySelector('.aviso').innerHTML = `${nome} está com: Peso normal`;
    } else if(imc <= 29.9){
        document.querySelector('.aviso').innerHTML = `${nome} está: Acima do peso`;
    } else if(imc <= 34.9){
        document.querySelector('.aviso').innerHTML = `${nome} está com: Obesidade classe I`;
    } else if(imc <= 39.9){
        document.querySelector('.aviso').innerHTML = `${nome} está com: Obesidade classe II`;
    } else {
        document.querySelector('.aviso').innerHTML = `${nome} está com: Obesidade classe III`;
    }
})
