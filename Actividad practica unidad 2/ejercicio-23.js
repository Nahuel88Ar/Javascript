function imprimirElementoEnIndice(array, indice) {
    // Verificar si el índice está dentro del rango del array
    if (indice >= 0 && indice < array.length) {
        // Imprimir el valor del elemento en la posición dada
        console.log("El valor en la posición " + (indice) + " es: " + array[indice]);
    } else {
        console.log("El índice está fuera del rango del array.");
    }
}

// Array dado y el índice
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 3;

// Llamar a la función con el array y el índice dado
imprimirElementoEnIndice(array, index);

