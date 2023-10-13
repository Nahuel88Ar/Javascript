function siguienteNumero(N) {
    return N + 1;
}

function doble(N){
    return 2 * N;
}

function cuadrado(N){
    return N ** 2;
}

function imprimirElDobleDelSiguienteAlCuadrado(N){
        var siguiente = siguienteNumero(N)
        var dobledelsiguiente = doble(siguiente)
        var eldobledelsiguientealcuadrado = cuadrado(dobledelsiguiente); 

        console.log(`El doble del siguiente al cuadrado de ${N} es ${eldobledelsiguientealcuadrado}.`);
}