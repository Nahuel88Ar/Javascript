function promedio3(N1, N2, N3){
    var total = N1 + N2 + N3;
    var avg = total / 3; 
    return avg;
}

// Ejemplo de uso de la función
var N1 = parseInt(prompt("Ingresa el primer número."));
var N2 = parseInt(prompt("Ingresa el segundo número."));
var N3 = parseInt(prompt("Ingresa el segundo número."));
var resultado = promedio3(N1, N2, N3);
console.log("El promedio entre " + N1 + ", " + N2 + " y " + N3 + " es: " + resultado);

/*
function promedio3(valor1, valor2, valor3) {
    var suma = valor1 + valor2 + valor3;
    var promedio = suma / 3;
    return promedio;
}

// Ejemplo de uso de la función
var resultado = promedio3(10, 5, 8);
console.log("El promedio de los tres valores es: " + resultado);
*/