//Operador de incremento: cont++
//cont = cont + 1

//Si quiero controlar que el usuario no ingrese valores negativos
/*
if (numPuestoPorElUsuario > 0){
    for (let cont = 1; cont <= 100; cont += 5) {
        //cont = cont + 1--->cont++, NOT es lo mismo que cont + 1 porque es solo un numero  y no actualiza su valor
        //console.log(cont + " Hola mundo de los ciclos") 
        console.log(`${cont}) Hola mundo de los ciclos`)
}
*/

const NOTA_MAXIMA = 10

let nota = parseInt(prompt("Tu nota de examen (entre 1 y 10)?"))
while (nota <= 0  || nota > NOTA_MAXIMA){
    nota = parseInt(prompt("ERROR. ¿Tu nota de examen (entre 1 y 10)?"))
}

//El operador || permite evaluar ambas condiciones, si ambos son falsas entonces es falso o si uno es falso y otro verdadero tambien es falso.

console.log("La nota fue validada! Es " + nota)

/*
for (let cont = 1; cont <= 100; cont += 5) {
    //cont = cont + 1--->cont++, NOT es lo mismo que cont + 1 porque es solo un numero  y no actualiza su valor
    //console.log(cont + " Hola mundo de los ciclos") 
    console.log(`${cont}) Hola mundo de los ciclos`)
}
*/