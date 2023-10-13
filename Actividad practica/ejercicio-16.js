// Solicitar al usuario que ingrese dos números
let numero1 = parseInt(prompt("Por favor, ingresa el primer número: "));
let numero2 = parseInt(prompt("Por favor, ingresa el segundo número: "));

// Verificar si los números son válidos
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Por favor, ingresa números válidos.");
} else {
    console.log(`Los divisores comunes de ${numero1} y ${numero2} son:`);

    // Encontrar y mostrar los divisores comunes de los dos números
    for (let i = 1; i <= Math.min(numero1, numero2); i++) {
        if (numero1 % i === 0 && numero2 % i === 0) {
            console.log(i);
        }
    }
}

