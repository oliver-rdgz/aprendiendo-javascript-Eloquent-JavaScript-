import {SCRIPTS} from './script.js';
console.log(SCRIPTS);

function codigoCaracter(codigo_caracter) { 
    for (let codigo of SCRIPTS) { 
        if (codigo.ranges.some(([desde, hasta]) => { 
            return codigo_caracter >= desde && codigo_caracter < hasta; })) { 
            return codigo; 
        } 
    } 
    return null; 
} 
console.log(codigoCaracter(121));
// → {name: "Latin", …}