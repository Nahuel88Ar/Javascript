/*
NaN (Not A Number)
El acrónimo NaN es un valor especial de Javascript que significa Not A Number (No es un número). Este valor se usa para representar valores imposibles o indeterminados, como por ejemplo, resultados matemáticos de operaciones como:

0 / 0 (Indeterminaciones)

4 - 'a' (Valores imposibles)

NaN + 4 (Operaciones con NaN como operando)

Este valor se utiliza habitualmente para detectar si una operación ha fallado o ha dado un valor no representable. Sin embargo, no podemos compararlo literalmente con NaN, sino que tenemos que usar la función Number.isNaN():
*/
let num = NaN;

// La siguiente operación, contra toda lógica, es falsa

num == NaN; // false

// Se debe usar Number.isNaN() para comprobar si el valor es NaN

Number.isNaN(num); // true

// Si comprobamos el tipo de dato de NaN, nos dirá que es numérico

typeof num; // number

/*
Como se puede ver en la última línea del ejemplo anterior, mencionar que en Javascript, si comprobamos el tipo de dato de NaN con typeof nos dirá que es un número. Puede parecer ilógico que Not A Number sea un número, esto ocurre porque NaN está en un contexto numérico.

En otras palabras, dentro de los tipos de datos numéricos, NaN es un conjunto de números que no se pueden representar.
*/