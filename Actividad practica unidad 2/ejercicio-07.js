function doble(N){
    return 2 * N
}

function cuadrado(N){
    return N ** 2
}

function imprimirValores(N){
    var1 = doble(N);
    var2 = cuadrado(N);
    var3 = N + 1;
    console.log(`El doble es ${var1}, el cuadrado es ${var2} y el siguiente es ${var3} del numero ${N}.`)
}
/*
// Función para calcular el siguiente número
function siguienteNumero(numero) {
    return numero + 1;
}

// Función para calcular el doble de un número
function dobleNumero(numero) {
    return numero * 2;
}

// Función para calcular el cuadrado de un número
function cuadradoNumero(numero) {
    return numero * numero;
}

// Función para imprimir el siguiente número, el doble y el cuadrado
function imprimirValores(numero) {
    var siguiente = siguienteNumero(numero);
    var doble = dobleNumero(numero);
    var cuadrado = cuadradoNumero(numero);

    console.log("Número: " + numero);
    console.log("Siguiente: " + siguiente);
    console.log("Doble: " + doble);
    console.log("Cuadrado: " + cuadrado);
}

// Ejemplo de uso de la función imprimirValores con el número 5
imprimirValores(5);
*/