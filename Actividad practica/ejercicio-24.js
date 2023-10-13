// Solicitar al usuario que ingrese un número
var numero = prompt("Por favor, ingresa un número:");

// Convertir la entrada del usuario a un número entero
numero = parseInt(numero);

// Verificar si el usuario ingresó un número válido
if (!isNaN(numero) && numero > 0) {
    // Construir la pirámide inversa
    for (var i = numero; i >= 1; i--) {
        var linea = "";
        for (var j = 1; j <= i; j++) {
            linea += i;
        }
        console.log(linea);
    }
} else {
    // Mostrar un mensaje de error si el usuario no ingresó un número válido
    console.log("Por favor, ingresa un número válido y mayor que cero.");
}
