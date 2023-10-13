/*
El usuario ingresa su año de nacimiento, la máquina  muestra cuál es su edad(aproximada)
*/

let anioDeNacimiento;//con ñ va a andar pero no se recomienda usar tildes, ñ y espacios en el nombre de las variables para evitar conflictos
let edad;
let anioActual = 2023;
const EDAD_LEGAL = 18;

//Entrada
//anioDeNacimiento = parseInt(prompt("¿En que año naciste?"));
anioDeNacimiento = prompt("¿En que año naciste?");
anioDeNacimiento = parseInt(anioDeNacimiento)

//Proceso
//edad = 2023 -anioDeNacimiento;
edad = anioActual - anioDeNacimiento;

//console.log(anioDeNacimiento + 1)
//Salida
console.log("Tu edad es " + edad + " ó " + (edad-1) + " años")

//Pasa o no pasa a un casino

if (edad >= EDAD_LEGAL){
    console.log("Pasa")
} else {
    console.log("No pasa")
}

//console.log("Pasa")
//console.log("No pasa")

// 5 === 5 (el tripe igual se usa para comparar no solo el valor sino tambien el tipo de dato)

if(horaDelDia >= 0 && horaDelDia <= 11) {
    // Tomo cafe
}
else if (esLaTarde){
    //Tomo mate
}
else if(esLaNoche){
    //Tomo agua
}

switch (numeroMarcadoEnTelefono){
    case 1:
        //Ventas
        break;
    case 2:
        // RRHH
    default:
        //error
        break;
}
