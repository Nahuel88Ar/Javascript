let suma = 0;
let continuar = true;

// Solicitar números hasta que el usuario pulse "cancelar"
while (continuar) {
    let input = prompt("Por favor, ingresa un número (o pulsa 'cancelar' para salir): ");

    // Salir del bucle si se pulsa "cancelar"
    if (input === null) {
        continuar = false;
    } else {
        // Convertir el input a número y verificar si es un número válido
        let numero = parseFloat(input);
        if (isNaN(numero)) {
            // Mostrar un alert si no es un número válido
            alert("Por favor, ingresa un número válido.");
        } else {
            // Sumar el número al total si es válido
            suma += numero;
        }
    }
}

// Mostrar la suma total
alert(`La suma total de los números introducidos es: ${suma}`);
