//console.log('Hello, world');
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//btn.addEventListener('click', btnOnClick);

form.addEventListener('submit',sumarInputs)

function sumarInputs(event){
    event.preventDefault();
    let sumaInputs;
    if(isNaN(input1.value) || isNaN(input2.value)){
        sumaInputs = input1.value + input2.value;
        pResult.innerText = "Concatenación: " + sumaInputs;
    }
    else{
    sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
    }
}