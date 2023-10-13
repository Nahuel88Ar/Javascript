const ingredientes = [

];

//Filtrar ingredientes por color

//IMPERATIVO
ingredientesBlancos = []
for (let i = 0; i < ingredientesBlancos.length; i++) {
    const ingrediente = ingredientes[i];
    if (ingrediente.color === "blanco"){
        ingredientesBlancos.push( ingrediente)
    }
    
}

console.log(ingredientesBlancos)

//DECLARATIVO
function esBlanco(ing) {
    return ing.color === "blanco"
}

ingredientesBlancos = ingredientes.filter( esBlanco );
console.log(ingredientesBlancos)

//DECLARATIVO EN UNA LINEA
function siguiente (x) {
    return x +1
}

x => x + 1

ingredientesBlancos = ingredientes.filter( ing => ing.color === "rojo" );
console.log(ingredientesBlancos)


