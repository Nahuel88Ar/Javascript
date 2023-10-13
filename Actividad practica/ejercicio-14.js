let num = prompt("Por favor ingrese un numero.");
num = parseFloat(num);

//let numdiv2 = num % 2;
//let numdiv3 = num % 3;
//let numdiv5 = num % 5;
//let numdiv7 = num % 7;

if (num % 2 === 0 ){
    console.log(`El numero ${num} es divisble por 2."`);
} else if (num % 3 === 0 ){
    console.log(`El numero ${num} es divisble por 3."`);
}else if (num % 5 === 0 ){
    console.log(`El numero ${num} es divisble por 5."`);
}else if (num % 7 === 0 ){
    console.log(`El numero ${num} es divisble por 7."`);
} else{
    console.log(`El numero ${num} no es divisble por 2,3,5 or 7."`)
}
