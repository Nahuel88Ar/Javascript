function obtenerDiaAnterior(dia, mes, anio) {
    // Crear un objeto Date con la fecha proporcionada
    var fecha = new Date(anio, mes - 1, dia);
    
    // Restar un día a la fecha
    fecha.setDate(fecha.getDate() - 1);
    
    // Obtener el día, mes y año del día anterior
    var diaAnterior = fecha.getDate();
    var mesAnterior = fecha.getMonth() + 1; // Sumar 1 porque los meses en JavaScript van de 0 a 11
    var anioAnterior = fecha.getFullYear();
    
    return { dia: diaAnterior, mes: mesAnterior, anio: anioAnterior };
}

// Ejemplo de uso de la función con el 2 de enero de 2022
var dia = 2;
var mes = 1;
var anio = 2022;

var diaAnterior = obtenerDiaAnterior(dia, mes, anio);
console.log(`El día anterior a ${dia}/${mes}/${anio} es ${diaAnterior.dia}/${diaAnterior.mes}/${diaAnterior.anio}.`);
