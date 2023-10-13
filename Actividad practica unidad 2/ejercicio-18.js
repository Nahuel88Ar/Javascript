function ultimoDiaDelMes(mes, anio) {
    // Crear un objeto Date para el primer día del próximo mes
    var siguienteMes = new Date(anio, mes, 1);
    
    // Restar un día al primer día del próximo mes para obtener el último día del mes actual
    siguienteMes.setDate(siguienteMes.getDate() - 1);
    
    // Obtener el día del mes (último día del mes)
    var ultimoDia = siguienteMes.getDate();
    
    return ultimoDia;
}

// Ejemplo de uso de la función con el mes de febrero de 2022
var mes = 1; // Los meses en JavaScript van de 0 a 11, así que febrero es el mes 1
var anio = 2022;

var ultimoDia = ultimoDiaDelMes(mes, anio);
console.log(`El último día de ${mes + 1}/${anio} es ${ultimoDia}.`);
