function encontrarPalabraMasLarga(frase) {
    // Dividir la frase en palabras
    let palabras = frase.split(' ');

    // Inicializar la variable para almacenar la palabra más larga
    let palabraMasLarga = palabras[0];

    // Iterar sobre las palabras y encontrar la palabra más larga
    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    // Devolver la palabra más larga encontrada
    return palabraMasLarga;
}

// Ejemplo de uso de la función
let x = "Tutorial de desarrollo web";
let resultado = encontrarPalabraMasLarga(x);
console.log(resultado);  // Esto imprimirá "Desarrollo"
