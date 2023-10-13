// Solicitar al usuario que ingrese una frase
let frase = prompt("Por favor, ingresa una frase:");

let fraseMinusculas = frase.toLocaleLowerCase(); 
let contador = 0;

// Recorrer la frase y mostrar las vocales que aparecen.
for (let i = 0; i < fraseMinusculas.length; i++) {
    // Convertir cada letra a minúscula para hacer la comparación insensible a mayúsculas y minúsculas
    if (fraseMinusculas[i] === 'a' || fraseMinusculas[i] === 'e' || fraseMinusculas[i] === 'i' || fraseMinusculas[i] === 'o' || fraseMinusculas[i] === 'u') {
        contador++;
    }
}
// Mostrar el resultado
console.log(`Las vocales aparecen ${contador} veces en la frase: "${frase}"`);