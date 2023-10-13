// Solicitar al usuario que ingrese una frase
let frase = prompt("Por favor, ingresa una frase:");

// Inicializar un contador para la letra 'a'
let contador = 0;

// Recorrer la frase y contar cuántas veces aparece la letra 'a'
for (let i = 0; i < frase.length; i++) {
    // Convertir cada letra a minúscula para hacer la comparación insensible a mayúsculas y minúsculas
    if (frase[i].toLowerCase() === 'a') {
        contador++;
    }
}

// Mostrar el resultado
console.log(`La letra 'a' aparece ${contador} veces en la frase: "${frase}"`);
