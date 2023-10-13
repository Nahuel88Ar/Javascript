let cadenas = [];
let continuar = true;

// Solicitar cadenas de texto hasta que el usuario pulse "cancelar"
while (continuar) {
    let cadena = prompt("Por favor, ingresa una cadena de texto (o pulsa 'cancelar' para salir): ");
    if (cadena === null) {
        continuar = false; // Cambiar el estado para salir del bucle
    } else {
        cadenas[cadenas.length] = cadena; // Añadir la cadena al array sin usar push
    }
}

// Concatenar las cadenas con un guión
let resultado = cadenas.join("-");

// Mostrar el resultado
console.log("Cadenas concatenadas con guión: " + resultado);
