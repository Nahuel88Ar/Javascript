function invertirNumero(numero) {
    // Convertir el número a cadena, invertir la cadena y luego convertirla de nuevo a número
    let numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
    return numeroInvertido;
}

// Ejemplo de uso de la función
let x = 32443;
let resultado = invertirNumero(x);
console.log(resultado);  // Esto imprimirá 34423
