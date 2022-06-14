//Puede ser útil para una función aceptar cualquier cantidad de argumentos.

function maximo(...numeros) { 
    let resultado =-Infinity; 
    for (let numero of numeros) { 
        if (numero > resultado) resultado = numero; 
    } 
        return resultado; 
} 
console.log("Maximo", maximo(4, 1, 9,-2)); // → 9
console.log("Maximo", maximo(50, 10, 30)); // → 50
console.log("Maximo", maximo(100, 2, 6, 7 , 30, 400, 700)); // → 700

let numeros = [5, 1, 7]; 
console.log(maximo(...numeros)); // → 7

// La notación de corchetes para crear arrays permite al operador de tres-puntos extender otro array en el nuevo array:

let palabras = ["nunca", "entenderas"];
console.log(["tu", ...palabras, "completamente"]); 
 // → ["tu", "nunca", "entenderas", "completamente"]