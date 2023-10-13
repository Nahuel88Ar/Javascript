/*
El usuario ingresa su año de nacimiento, la máquina  muestra cuál es su edad(aproximada)
*/

let anioDeNacimiento;//con ñ va a andar pero no se recomienda usar tildes, ñ y espacios en el nombre de las variables para evitar conflictos
let edad;
let anioActual = 2023;

//Entrada
//anioDeNacimiento = parseInt(prompt("¿En que año naciste?"));
anioDeNacimiento = prompt("¿En que año naciste?");
anioDeNacimiento = parseInt(anioDeNacimiento)

//Proceso
//edad = 2023 -anioDeNacimiento;
edad = anioActual - anioDeNacimiento;

//console.log(anioDeNacimiento + 1)
//Salida
//Concatenar con el +
console.log("Tu edad es " + edad + " ó " + (edad-1) + " años")
//Concatenar con template string (con backsticks)
console.log(`Tu edad es ${edad} ó ${edad-1} años`)