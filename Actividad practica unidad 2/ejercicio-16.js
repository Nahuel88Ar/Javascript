function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function cantidadDiasEnMes(mes, anio) {
    if (mes >= 1 && mes <= 12) {
        // Meses con 31 días
        if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
            return 31;
        }
        // Meses con 30 días
        else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
            return 30;
        }
        // Febrero (mes 2) - considerando un año bisiesto o no
        else if (mes === 2) {
            return esBisiesto(anio) ? 29 : 28;
        }
    }
    // Mes no válido
    return "Mes inválido";
}

// Ejemplo de uso de la función con día 1, mes 3 (marzo) y año 2020
var dia = 1;
var mes = 3;
var anio = 2020;
var cantidadDias = cantidadDiasEnMes(mes, anio);
console.log(`El mes ${mes} del año ${anio} tiene ${cantidadDias} días.`);
