// Crear un array con las edades de los estudiantes
let edadesEstudiantes = [18, 20, 19, 22, 21, 23, 19, 20, 18, 24];

/*
// Inicializar un índice para usar en el bucle while
let indice = 0;

// Iterar el array usando un bucle while
while (indice < edadesEstudiantes.length) {
    let edades = edadesEstudiantes[indice]
    if (edades%2 === 0){
    // Imprimir las edades pares en la consola
    console.log("Edad del estudiante: " + edades);
    // Incrementar el índice para pasar al siguiente elemento en el array
    indice++;
    }
}
*/

for (let indice = 0; indice < edadesEstudiantes.length; indice++) {
    const edades = edadesEstudiantes[indice]
    if (edades % 2 === 0){
        // Imprimir las edades pares en la consola
        console.log("Edad del estudiante: " + edades);
    }
}


/*
// Crear un array con las edades de los estudiantes
let edadesEstudiantes = [18, 20, 19, 22, 21, 23, 19, 20, 18, 24];

// Iterar el array usando un bucle for y agregar un condicional para imprimir solo números pares
for (let i = 0; i < edadesEstudiantes.length; i++) {
    // Verificar si la edad es par utilizando el operador de módulo (%)
    if (edadesEstudiantes[i] % 2 === 0) {
        // Imprimir la edad del estudiante solo si es par
        console.log("Edad par del estudiante: " + edadesEstudiantes[i]);
    }
}
*/



