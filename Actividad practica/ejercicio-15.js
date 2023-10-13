let num = prompt("Por favor ingrese un numero.");
num = parseFloat(num);

if (isNaN(num) ){
    console.log("Por favor, ingresa un número válido.");
} else {
    console.log(`Los divisores de ${num} son: `);

    // Encontrar y mostrar los divisores del número
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}
