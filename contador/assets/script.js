//Pega o id do span
var curretNumberWrapper = document.getElementById('currentNumber');
//Inicia em 0
var currentNumber = 0;

//Quando for clicado, vai adicionar 1 no span
function inclement() {
    if (currentNumber <= 9) {
        currentNumber++;
        curretNumberWrapper.innerHTML = currentNumber;
    }
}

//Quando for clicado, vai subtrair 1 no span
function decrement() {
    if (currentNumber > 0) {
        currentNumber--;
        curretNumberWrapper.innerHTML = currentNumber;
    }
}