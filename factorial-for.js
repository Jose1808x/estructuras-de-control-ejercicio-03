//Ciclo for, calculo de Factorial de 10 = 10!;

let numUno = 10;
let numDos = numUno - 1;
let resultado;

for(i = numUno; i > 1; i--){

    resultado = numUno * numDos;
    numUno = resultado;
    numDos = numDos -1;

}
console.log("El resultado del 10! es = " + resultado);

