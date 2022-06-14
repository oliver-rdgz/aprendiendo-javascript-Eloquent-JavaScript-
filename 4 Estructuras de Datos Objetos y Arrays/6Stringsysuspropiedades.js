let kim = "Kim"; 
kim.edad = 88; 
console.log(kim.edad); // → undefined

// Cada valor de string tiene un numero de metodos. Algunos muy útiles son slice e indexOf, que se parecen a los métodos de array de los mismos nombres. 
console.log('panaderia' ,"panaderia".slice(0, 3)); 
// → pan 
console.log('panaderia', "panaderia".indexOf("a"));
// → 1

console.log("del uno al tres: ", "uno dos tres".indexOf("tres")); // → 8

// El método trim (“recortar”) elimina los espacios en blanco (espacios, saltos de linea, tabulaciones y caracteres similares) del inicio y final de un string. 
console.log('Metodo Trim: '," okey \n ".trim()); // → okey


//Puedes dividir un string en cada ocurrencia de otro string con el metodo split (“dividir”), y unirlo nuevamente con join (“unir”).
let oracion = "Los pajaros secretarios se especializan en pisotear"; 
let palabras = oracion.split(" "); 

console.log("Metodo split: ", palabras); 
// → ["Los", "pajaros", "secretarios", "se", "especializan", "en", " pisotear"] 
console.log("Metodo join: ", palabras.join(". ")); 
// → Los. pajaros. secretarios. se. especializan. en. pisotear


console.log("Metodo repeat:","LA".repeat(3)); 
// → LALALA

let string = "abc"; 
console.log("Propiedad length:",string.length); 
// → 3 
console.log("Acceder a una letra del string: ",string[1]); 
// → b
