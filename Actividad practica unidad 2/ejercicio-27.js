function ordenarCadenaAlfabeticamente(cadena) {
    // Convertir la cadena en un array de caracteres, filtrar solo letras y ordenar alfabéticamente
    let caracteresOrdenados = cadena.split('').filter(c => c.match(/[a-zA-Z]/)).sort().join('');
    return caracteresOrdenados;
}

// Ejemplo de uso de la función
let x = 'webmaster';
let resultado = ordenarCadenaAlfabeticamente(x);
console.log(resultado);  // Esto imprimirá 'abeemrstw'
