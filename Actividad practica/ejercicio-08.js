let num;
let resto_num;

num = parseInt(prompt("Ingrese un numero: "))

resto_num = num % 2

if (resto_num === 0){
    console.log("El numero es divisible por 2.")
} else{
    console.log("El numero no es divisible por 2.")
}