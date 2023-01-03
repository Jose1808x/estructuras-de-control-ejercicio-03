//Ciclo while con bifurcacion if y sentencia break en calculo de factorial de 10 = 10!;

let numUno = 10;
let numDos = numUno - 1;
let resultado;

let i = numUno

while(i > 1){
    resultado = numUno * numDos;
    numUno = resultado;
    numDos = numDos - 1;

        if(numDos === 3){
            break;
        }

    i--;
}

console.log("El resultado del 10! con una salida en el numero 3 es = " + resultado);