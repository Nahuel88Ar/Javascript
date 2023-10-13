// Solicitar al usuario que ingrese un número
let numero = parseInt(prompt("Por favor, ingresa un número: "));

// Verificar si el número es válido
if (isNaN(numero) || numero <= 1) {
    console.log("Por favor, ingresa un número válido mayor que 1.");
} else {
    let esPrimo = true;

    // Verificar si el número es primo
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
        }
    }

    // Mostrar el resultado
    if (esPrimo) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }
}

