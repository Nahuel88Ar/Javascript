function imprimirElementosRepetidos(array) {
    const frecuencias = {};
    const elementosRepetidos = [];

    array.forEach(elemento => {
        frecuencias[elemento] = (frecuencias[elemento] || 0) + 1;
        if (frecuencias[elemento] === 2) {
            elementosRepetidos.push(elemento);
        }
    });

    console.log("Elementos repetidos: " + elementosRepetidos.join(","));
}

// Array dado
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

// Llamar a la función con el array dado
imprimirElementosRepetidos(array);
