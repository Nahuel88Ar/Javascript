let frase = prompt("Por favor, ingresa una frase:");

let fraseMinusculas = frase.toLocaleLowerCase(); 
let contador = 0;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;

// Recorrer la frase y mostrar las vocales que aparecen.
for (let i = 0; i < fraseMinusculas.length; i++) {
    if (fraseMinusculas[i] === 'a') {
        contador++;
    } else if (fraseMinusculas[i] === 'e'){
        contador1++;
    } else if (fraseMinusculas[i] === 'i'){
        contador2++;
    }else if (fraseMinusculas[i] === 'o'){
        contador3++;
    }else if (fraseMinusculas[i] === 'u'){
        contador4++;
    } 
}
// Muestra el resultado
/*
if (contador > 0) {
    console.log(`La vocal "a" aparece ${contador} veces en la frase: "${frase}"`);
} else if (contador1 > 0){
    console.log(`La vocal "e" aparece ${contador1} veces en la frase: "${frase}"`);
} else if (contador2 > 0){
    console.log(`La vocal "i" aparece ${contador2} veces en la frase: "${frase}"`);
}else if (contador3 > 0){
    console.log(`La vocal "o" aparece ${contador3} veces en la frase: "${frase}"`);
}else if (contador4 > 0){
    console.log(`La vocal "u" aparece ${contador4} veces en la frase: "${frase}"`);
} 
*/
// Muestra el resultado
console.log(`La vocal 'a' aparece ${contador} veces.`);
console.log(`La vocal 'e' aparece ${contador1} veces.`);
console.log(`La vocal 'i' aparece ${contador2} veces.`);
console.log(`La vocal 'o' aparece ${contador3} veces.`);
console.log(`La vocal 'u' aparece ${contador4} veces.`);
// Si no se encontraron vocales, mostrar un mensaje adecuado
if (contador === 0 && contador1 === 0 && contador2 === 0 && contador3 === 0 && contador4 === 0) {
    console.log("No se encontraron vocales en la frase.");
} 