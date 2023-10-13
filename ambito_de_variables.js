var a = 1;

console.log(a); //Aquí accedemos a la "a" global, que vale 1

function x() {

console.log(a); // En esta línea el valor de "a" es undefined

var a = 5; // Aquí creamos una variable "a" a nivel de función

console.log(a); // Aquí el valor de "a" es 5 (a nivel de función)

console.log(window.a); // Aquí el valor de "a" es 1 (ámbito global).Podemos utilizar el objeto especial window para acceder directamente al ámbito global independientemente de donde nos encontremos. Esto ocurre así porque las variables globales se almacenan dentro del objeto window (la pestaña actual del navegador web).

}

x(); // Aquí se ejecuta el código de la función x()

console.log(a); // En esta línea el valor de "a" es 1

/*
--------------------------------------------------------------------------
En este ejemplo se omite el var dentro de la función, y vemos que en lugar de crear una variable en el ámbito de la función, se modifica el valor de la variable a a nivel global. Dependiendo de dónde y cómo accedemos a la variable a, obtendremos un valor u otro.
*/
var a = 1;

console.log(a); // Aquí accedemos a la "a" global, que vale 1

function x() {

console.log(a); // En esta línea el valor de "a" es 1

a = 5; // Aquí creamos una variable "a" en el ámbito anterior

console.log(a); // Aquí el valor de "a" es 5 (a nivel de función)

console.log(window.a); // Aquí el valor de "a" es 5 (ámbito global)

}

x(); // Aquí se ejecuta el código de la función x()

console.log(a); // En esta línea el valor de "a" es 5

/*
Siempre que sea posible se debería utilizar let y const (ver a continuación),
 en lugar de var. Declarar variables mediante var se recomienda en fases 
 de aprendizaje o en el caso de que se quiera mantener compatibilidad 
 con navegadores muy antiguos utilizando ECMAScript 5, sin embargo, hay estrategias mejores a seguir que utilizar var en la actualidad.
*/