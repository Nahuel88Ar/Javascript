function unirColoresEnCadena(array) {
    const coloresEnEspanol = {
        "Red": "Rojo",
        "Green": "Verde",
        "White": "Blanco",
        "Black": "Negro"
    };

    const coloresTraducidos = array.map(color => coloresEnEspanol[color]);
    const cadenaFinal = coloresTraducidos.join(', ');

    console.log(cadenaFinal);
}

// Array de colores
var myColor = ["Red", "Green", "White", "Black"];

// Llamar a la función con el array dado
unirColoresEnCadena(myColor);
