// Iterar del 1 al 500
for (var i = 1; i <= 500; i++) {
    // Verificar si es múltiplo de 4 y/o 9
    var esMultiploDe4 = i % 4 === 0;
    var esMultiploDe9 = i % 9 === 0;

    // Imprimir el número y marcar si es múltiplo de 4 y/o 9
    console.log(i + (esMultiploDe4 ? " (Múltiplo de 4)" : "") + (esMultiploDe9 ? " (Múltiplo de 9)" : ""));

    // Mostrar una línea horizontal cada 5 líneas
    if (i % 5 === 0) {
        console.log("————————————————————");
    }
}
