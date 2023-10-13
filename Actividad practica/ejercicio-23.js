// Definir la variable para almacenar la pirámide
var piramide = "";

// Iterar del 1 al 30
for (var i = 1; i <= 30; i++) {
    // Construir el número repetido i veces y agregar un salto de línea
    piramide += String(i).repeat(i) + "\n";
}

// Mostrar la pirámide en la consola
console.log(piramide);
