const objeto = new Object(); // Esto es un objeto «genérico» vacío
const objeto = {}; // Esto es un objeto vacío

// Declaración del objeto

const player = {

    name: "Manu",
    
    life: 99,
    
    strength: 10,
    
    };

    // Notación con puntos

console.log(player.name); // Muestra "Manu"

console.log(player.life); // Muestra 99

// Notación con corchetes

console.log(player["name"]); // Muestra "Manu"

console.log(player["life"]); // Muestra 99

/*
El programador puede utilizar la notación que más le guste. La más utilizada en Javascript suele ser la notación con puntos, mientras que la notación con corchetes se suele conocer en otros lenguajes como «arrays asociativos».
A algunos programadores puede resultar confuso utilizar objetos con la notación de corchetes, ya que en otros lenguajes de programación los objetos y los arrays asociativos son cosas diferentes, y en Javascript ambos conceptos se mezclan.

Hay ciertos casos en los que sólo se puede utilizar la notación con corchetes, como por ejemplo cuando se utilizan espacios en el nombre de la propiedad. Es imposible hacerlo con la notación con puntos.
*/
