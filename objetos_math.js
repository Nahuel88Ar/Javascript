Math.abs(-5); // 5

Math.sign(-5); // -1

Math.exp(1); // e, o sea, 2.718281828459045

Math.expm1(1); // 1.718281828459045

Math.max(1, 40, 5, 15); // 40

Math.min(5, 10, -2, 0); // -2

Math.pow(2, 10); // 1024

Math.sqrt(2); // 1.4142135623730951

Math.cbrt(2); // 1.2599210498948732

Math.imul(0xffffffff, 7); // -7


// Ejemplo de clz32 (count leading zeros)

const x = 1;

"0".repeat(Math.clz32(x)) + x.toString(2);

// Devuelve "0000000000000000000000000000000
/****************************************************************** */

/*******************Objecto Math Random*************************** */

//Este método nos da un número al azar entre los valores 0 y 1, con 16 decimales. Normalmente, cuando queremos trabajar con números aleatorios, lo que buscamos es obtener un número entero al azar entre a y b. Para ello, se suele hacer lo siguiente:

// Obtenemos un número al azar entre [0, 1) con 16 decimales

let x = Math.random();


// Multiplicamos dicho número por el valor máximo que buscamos (5)

x = x * 5;


// Redondeamos inferiormente, quedándonos sólo con la parte entera

x = Math.floor(x);

//Este ejemplo nos dará en x un valor al azar entre 0 y 5 (5 no incluido). Lo hemos realizado por pasos para entenderlo mejor, pero podemos realizarlo directamente como se ve en el siguiente ejemplo:

// Número al azar entre 0 y 5 (no incluido)

const x = Math.floor(Math.random() * 5);


// Equivalente al anterior

const x = ~~(Math.random() * 5);

/*Como se puede ver en el segundo ejemplo anterior, utilizamos el operador a nivel de bits ~~ (doble negación) como reemplazo rápido de Math.floor(), una función que realiza un redondeo inferior, y que veremos al final de este tema.

Si lo deseas, puedes utilizar librerías específicas para generar números aleatorios como random.js o chance.js, esta última permitiendo incluso generar otros tipos de datos aleatorios como textos, GUIDs o colores hexadecimales.
*/

