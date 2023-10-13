let colores = []

console.log(colores.length);
console.log(colores);

colores.push( "Rojo" )
colores.push( "Negro" )
colores.push( "verde" )

console.log(colores.length);
console.log(colores);

for (let index = 0; index < colores.length; index++) {
    const color = colores[index];
    console.log(color.toUpperCase())    
}