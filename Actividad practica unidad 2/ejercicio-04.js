function calcularPromedioNotas() {
    var sumaNotas = 0;
    var cantidadNotas = 0;
    var nota = 0;

    while (nota !== -1) {
        // Leer nota del usuario
        nota = parseInt(prompt("Ingresa una nota (-1 para finalizar):"));

        // Verificar si la nota es válida y no es -1
        if (!isNaN(nota) && nota !== -1) {
            sumaNotas += nota;
            cantidadNotas++;
        //} else if (nota !== -1) {
        //    alert("Por favor, ingresa una nota válida.");
        //}
        } else {
            alert("Por favor, ingresa una nota válida.")
        }
    }

    // Calcular y devolver el promedio de las notas
    var promedio = sumaNotas / cantidadNotas;
    return promedio;
}

// Llamar a la función y mostrar el resultado
var resultado = calcularPromedioNotas();
console.log("El promedio de las notas ingresadas es: " + resultado);


/*
function siguiente(N){
    return N + 1
}
*/

//var N = prompt("Ingresa el primer número.");
