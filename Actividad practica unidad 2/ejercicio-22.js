//Esta funcion es mas corta y simple.
let lista = []

function encontrarNumeroMasAlto(lista) {
    if (lista.length === 0) {
        console.log("El array está vacío.");
        return;
    }

    let numeroMasAlto = Math.max(...lista);
    console.log("El número más alto en el array es: " + numeroMasAlto);
}