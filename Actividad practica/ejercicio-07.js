let num1;
let num2;
let num3;

num1=parseInt(prompt("Ingrese un primer numero"))
num2=parseInt(prompt("Ingrese un segundo numero"))
num3=parseInt(prompt("Ingrese un tercer numero"))

if (num1 > num2 && num2 >num3){
    console.log("El numero mas grande es: " + num1);
} else if (num2 > num1 && num2 > num3){
    console.log("El numero mas grande es: " + num2);
} else if (num3 > num1 && num3>num2){
    console.log("El numero mas grande es: " + num3);
}