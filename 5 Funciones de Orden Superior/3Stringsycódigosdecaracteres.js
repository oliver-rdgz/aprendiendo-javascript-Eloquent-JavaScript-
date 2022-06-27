import {SCRIPTS} from './script.js';
// console.log(SCRIPTS);

function codigoCaracter(codigo_caracter) { 
    for (let codigo of SCRIPTS) { 
        if (codigo.ranges.some(([desde, hasta]) => { 
            return codigo_caracter >= desde && codigo_caracter < hasta; })) { 
            return codigo; 
        } 
    } 
    return null; 
} 
// console.log(codigoCaracter(121));
// → {name: "Latin", …}

// Dos caracteres emoji, caballo y zapato 
let caballoZapato = "🐴👟"; 
console.log(caballoZapato.length); 
// → 4 
console.log(caballoZapato[0]); 
// → ((Medio-carácter inválido)) 
console.log(caballoZapato.charCodeAt(0)); 
// → 55357 (Código del medio-carácter) 
console.log(caballoZapato.charCodeAt(1)); 
// → 128052 (Código real para emoji de caballo) 
console.log(caballoZapato.codePointAt(0)); 
// → 128052 (Código real para emoji de caballo)

let dragonRosa = "🐉🌹"; 
for (let caracter of dragonRosa) 
{ 
    console.log(caracter); 
} 

// → 🐉 
// → 🌹