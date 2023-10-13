// Solicitar al usuario que ingrese una frase
let frase = prompt("Por favor, ingresa una frase:");

let fraseMinusculas = frase.toLocaleLowerCase(); 
let vocales = "";

// Recorrer la frase y mostrar las vocales que aparecen.
for (let i = 0; i < fraseMinusculas.length; i++) {
    // Convertir cada letra a minúscula para hacer la comparación insensible a mayúsculas y minúsculas
    if (fraseMinusculas[i].toLowerCase() === 'a' || fraseMinusculas[i].toLocaleLowerCase() === 'e' || fraseMinusculas[i].toLocaleLowerCase() === 'i' || fraseMinusculas[i].toLocaleLowerCase() === 'o' || fraseMinusculas[i].toLocaleLowerCase() === 'u') {
        vocales += fraseMinusculas[i] + " ";
    }
}

// Mostrar las vocales encontradas
if (vocales !== ""){
    console.log("Las vocales en la frase son: " + vocales);
} else {
    console.log("No se encontraron vocales en la frase.");
}
