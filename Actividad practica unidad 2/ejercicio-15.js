function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Ejemplo de uso de la función con el año 2020
var anio = 2020;
if (esBisiesto(anio)) {
    console.log(anio + " es un año bisiesto.");
} else {
    console.log(anio + " no es un año bisiesto.");
}
