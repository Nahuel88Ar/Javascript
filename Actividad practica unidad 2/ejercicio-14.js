function cantidadDiasEnMes(mes) {
    if (mes >= 1 && mes <= 12) {
        // Meses con 31 días
        if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
            return 31;
        }
        // Meses con 30 días
        else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
            return 30;
        }
        // Febrero (mes 2) - considerando un año no bisiesto
        else if (mes === 2) {
            return 28;
        }
    }
    // Mes no válido
    return "Mes inválido";
}

// Ejemplo de uso de la función con el mes 3 (marzo)
var mes = 3;
var cantidadDias = cantidadDiasEnMes(mes);
console.log(`El mes ${mes} tiene ${cantidadDias} días.`);
