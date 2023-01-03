//Ciclo while, calculo de factorial de 10 = 10!;

let numUno = 10;
let numDos = numUno - 1;
let resultado;

let i = numUno

while(i > 1){

    resultado = numUno * numDos;
    numUno = resultado;
    numDos = numDos - 1;
    i--;

}
console.log("El resultado del 10! es = " + resultado);
