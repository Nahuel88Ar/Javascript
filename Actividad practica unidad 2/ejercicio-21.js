//Esta funcion es mas corta y simple.
let array = []

function encontrarNumeroMasBajo(array) {
    if (array.length === 0) {
        console.log("El array está vacío.");
        return;
    }

    let numeroMasBajo = Math.min(...array);
    console.log("El número más bajo en el array es: " + numeroMasBajo);
}

/*
function encontrarNumeroMasBajo(array) {
    // Verificar si el array está vacío
    if (array.length === 0) {
        console.log("El array está vacío.");
        return;
    }

    // Inicializar el número más bajo con el primer elemento del array
    let numeroMasBajo = array[0];

    // Iterar a través del array para encontrar el número más bajo
    for (let i = 1; i < array.length; i++) {
        if (array[i] < numeroMasBajo) {
            // Si el elemento actual es menor que el número más bajo, actualizar el número más bajo
            numeroMasBajo = array[i];
        }
    }

    // Imprimir el número más bajo en la consola
    console.log("El número más bajo en el array es: " + numeroMasBajo);
}
*/

// Ejemplo de uso de la función con un array
//let miArray = [8, 3, 11, 2, 5, 9];
//encontrarNumeroMasBajo(miArray); // Esto imprimirá "El número más bajo en el array es: 2"


