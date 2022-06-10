//Mutabilidad

// Con los objetos, hay una diferencia entre tener dos referencias a el mismo objeto y tener dos objetos diferentes que contengan las mismas propiedades. Considera el siguiente código:

let objeto1 = {valor: 10}; 
let objeto2 = objeto1; 
let objeto3 = {valor: 10}; 
console.log(objeto1 == objeto2); 
// → true 
console.log(objeto1 == objeto3); 
// → false 
objeto1.valor = 15; 
console.log(objeto2.valor); 
// → 15 
console.log(objeto3.valor); 
// → 10

// aunque una vinculación const a un objeto no pueda ser cambiada en si misma y continuará apuntando al mismo objeto, los contenidos de ese objeto pueden cambiar.

const puntuacion = {visitantes: 0, locales: 0};

// Esto esta bien 
puntuacion.visitantes = 1; 
// Esto no esta permitido 
puntuacion = {visitantes: 1, locales: 1};