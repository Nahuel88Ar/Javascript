// Solicitar al usuario que ingrese su edad
let edad = parseInt(prompt("Por favor, ingresa tu edad: "));

// Verificar si la edad es válida
if (isNaN(edad) || edad < 0) {
    console.log("Por favor, ingresa una edad válida.");
} else {
    // Verificar si la persona puede conducir
    if (edad >= 18) {
        console.log("¡Felicidades! Ya puedes conducir.");
    } else {
        console.log("Lo siento, aún no puedes conducir. Debes esperar hasta los 18 años.");
    }
}
