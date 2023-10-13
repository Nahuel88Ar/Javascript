// Solicitar al usuario que ingrese la nota
let nota = parseFloat(prompt("Por favor, ingresa tu nota: "));
const NOTA_MAXIMA = 10

// Verificar si la nota es válida
while (nota <= 0  || nota > NOTA_MAXIMA || isNaN(nota)){
    nota = parseInt(prompt("ERROR. ¿Tu nota de examen (entre 1 y 10)?"))
}
if (nota >= 0 && nota <= 3) {
    calificacion = "Muy deficiente";
} else if (nota > 3 && nota <= 5) {
        calificacion = "Insuficiente";
} else if (nota > 5 && nota <= 6) {
        calificacion = "Suficiente";
} else if (nota > 6 && nota <= 7) {
    calificacion = "Bien";
} else if (nota > 7 && nota <= 9) {
    calificacion = "Notable";
} else {
    calificacion = "Sobresaliente";
}

// Mostrar la calificación
console.log(`Tu calificación es: ${calificacion}`);
