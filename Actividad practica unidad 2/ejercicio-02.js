function encontrarMaximo(numero1, numero2) {
    return Math.max(numero1, numero2);
}

// Ejemplo de uso de la función
var num1 = prompt("Ingresa el primer número.");
var num2 = prompt("Ingresa el segundo número.");
var resultado = encontrarMaximo(num1, num2);
console.log("El número máximo entre " + num1 + " y " + num2 + " es: " + resultado);
