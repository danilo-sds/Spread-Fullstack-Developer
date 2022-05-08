//Pega o id do span
var curretNumberWrapper = document.getElementById('currentNumber');
//Inicia em 0
var currentNumber = 0;

//Quando for clicado, vai adicionar 1 no span
function inclement() {
    currentNumber++;
    curretNumberWrapper.innerHTML = currentNumber;
}

//Quando for clicado, vai subtrair 1 no span
function decrement() {
    currentNumber--;
    curretNumberWrapper.innerHTML = currentNumber;
}