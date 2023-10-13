function capitalizarPrimerasLetras(cadena) {
    // Dividir la cadena en palabras
    let palabras = cadena.split(' ');

    // Iterar sobre las palabras y capitalizar la primera letra de cada palabra
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }

    // Unir las palabras nuevamente en una cadena y devolver el resultado
    return palabras.join(' ');
}

// Ejemplo de uso de la función
let x = "prince of persia";
let resultado = capitalizarPrimerasLetras(x);
console.log(resultado);  // Esto imprimirá "Prince Of Persia"
