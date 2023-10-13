// Función para calcular el doble de un número
function dobleNumero(numero) {
    return numero * 2;
}

// Función para calcular el siguiente número
function siguienteNumero(numero) {
    return numero + 1;
}

// Función para imprimir el doble del siguiente.
function imprimirElDobleDelSiguiente(numero) {

    var siguiente = siguienteNumero(numero)
    var dobledelsiguiente = dobleNumero(siguiente);

    console.log(`El doble del siguiente número a ${numero} es ${dobledelsiguiente}.`);
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

// Función para imprimir el doble del siguiente número
function imprimirElDobleDelSiguiente(numero) {
    var siguiente = siguienteNumero(numero);
    var dobleDelSiguiente = dobleNumero(siguiente);
    console.log("El doble del siguiente número a " + numero + " es: " + dobleDelSiguiente);
}

// Ejemplo de uso de la función imprimirElDobleDelSiguiente con el número 5
imprimirElDobleDelSiguiente(5);
*/


