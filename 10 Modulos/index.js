/*Módulos 
Los módulos son un intento de evitar estos problemas. Un módulo es una pieza del programa que especifica en qué otras piezas este depende ( sus dependencias) y qué funcionalidad proporciona para que otros módulos usen (su interfaz).*/

//Evaluando datos como código

const x = 1; 
function evaluarYRetornarX(codigo) { 
    eval(codigo); 
    return x; 
} 
console.log(evaluarYRetornarX("let x = 2")); 
// → 2

//la funcion anterior no funcionó

let masUno = Function("n", "return n + 1;"); 
console.log(masUno(4)); 
// → 5

//CommonJS
/*
El enfoque más utilizado para incluir módulos en JavaScript es llamado módulos CommonJS. Node.js lo usa, y es el sistema utilizado por la mayoría de los paquetes en NPM.
*/

// const ordinal = require("ordinal"); 
// const {days, months} = require("date-names"); 
// exports.formatDate = function(date, format) { 
//     return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => { 
//         if (tag == "YYYY") return date.getFullYear(); 
//         if (tag == "M") return date.getMonth(); 
//         if (tag == "MMMM") return months[date.getMonth()]; 
//         if (tag == "D") return date.getDate(); 
//         if (tag == "Do") return ordinal(date.getDate()); 
//         if (tag == "dddd") return days[date.getDay()]; }); 
//     };

// const quemas = require('./modulo.js');
/* La función require() es específica de Node.js y no es compatible con el navegador. */

