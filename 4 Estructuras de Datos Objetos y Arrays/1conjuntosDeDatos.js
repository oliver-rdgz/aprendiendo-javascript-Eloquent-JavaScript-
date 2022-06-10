/*
queremos representar una colección de los números 2, 3, 5, 7 y 11.
Afortunadamente, JavaScript proporciona un tipo de datos específicamente para almacenar secuencias de valores. Es llamado array y está escrito como una lista de valores entre corchetes, separados por comas.

bibliografia:
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

let listaDeNumeros = [2, 3, 5, 7, 11];

console.log(listaDeNumeros[2]); 
// → 5 
console.log(listaDeNumeros[0]); 
// → 2 
console.log(listaDeNumeros[2- 1]); 
// → 3

// El primer índice de un array es cero, no uno. Entonces el primer elemento es alcanzado con listaDeNumeros[0]
//listaDeNumeros[ 0 <- indice]
//Piensa en el índice como la cantidad de elementos a saltar, contando desde el comienzo del array.

//Acceder al valor de un array

let frutas = ["Manzana", "Banana"]

let primero = frutas[0]
console.log(primero);
// Manzana

let ultimo = frutas[frutas.length - 1]
console.log(ultimo);
// Banana

//propiedades del array

console.log(frutas.length)


// Casi todos los valores de JavaScript tienen propiedades. Las excepciones son null y undefined. Si intentas acceder a una propiedad en alguno de estos no-valores, obtienes un error. null.length; 
// → TypeError: null has no properties

//Metodos arrays

let secuencia = [1, 2, 3]; 
secuencia.push(4); 
secuencia.push(5); 
console.log(secuencia); 
// → [1, 2, 3, 4, 5] 
console.log(secuencia.pop()); 
// → 5 
console.log(secuencia); 
// → [1, 2, 3, 4]


