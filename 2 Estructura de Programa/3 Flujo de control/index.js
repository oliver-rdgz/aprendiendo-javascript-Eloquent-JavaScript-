/**
Cuando tu programa contiene más de una declaración, las declaraciones se ejecutan como si fueran una historia, de arriba a abajo.
 */

let elNumero = Number(prompt("Elige un numero")); 

console.log("Tu número es la raiz cuadrada de " + elNumero * elNumero);

//Pero, no todos los programas son caminos rectos
//las condiciones permiten cambiar el flujo normal que realiza javascript, una condición se puede crear con la palabra clave "if"

elNumero = Number(prompt("Elige un numero")); 
if (!Number.isNaN(elNumero)) { 
    console.log("Tu número es la raiz cuadrada de " + elNumero * elNumero); 
}

/*
La palabra clave else se puede usar, junto con if, para crear dos caminos de ejecución alternativos, de una manera separada.
*/

elNumero = Number(prompt("Elige un numero")); 
if (!Number.isNaN(elNumero)) { 
    console.log("Tu número es la raiz cuadrada de " + elNumero * elNumero); 
} else { 
    console.log("Ey. Por qué no me diste un número?"); 
};