//Ej 8

function leerEntero(mensaje){
    return parseInt(prompt(mensaje))
}

function esMultiplo(a,b){
    return a % b === 0;
}

function cantDivisores(n){
    let cantDiv = 1;
    for (let i = 2; i <= n; i++){
        if ( esMultiplo(n, i) ) {
            cantDiv++;

        }
        return cantDiv;
    }
}

function esPrimo(n){
    return cantDivisores(n) === 2;
}


// Programa principal

let unNumero = leerEntero("Coloca un numero entero")
if (esPrimo(unNumero)){
    console.log(`El numero ${unNumero} es primo`)
}