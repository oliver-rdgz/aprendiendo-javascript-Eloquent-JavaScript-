/*
Una de las razones por las que esta función es incómoda de leer es que tenemos una vinculación apuntando a nuestro array, pero preferiríamos tener vinculaciones para los elementos del array, es decir, let n00=tabla[0] y así sucesivamente. Afortunadamente, hay una forma concisa de hacer esto en JavaScript.
*/
function phi([n00, n01, n10, n11]) { 
    return (n11 * n00- n10 * n01) / 
    Math.sqrt((n10 + n11) * 
    (n00 + n01) * 
    (n01 + n11) * 
    (n00 + n10)); 
}

const vectorDePrueba = [5,4,3,2];

console.log(phi(vectorDePrueba));

//Un truco similar funciona para objetos, utilizando llaves en lugar de corchetes.
let {nombre} = {
    nombre: "Faraji", 
    edad: 23
};
 console.log(nombre); 
 // → Faraji