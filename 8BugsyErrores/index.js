// function puedesDetectarElProblema() { 
//      
//     for (contador = 0; contador < 10; contador++) { 
//         console.log("Feliz feliz"); 
//     } 
// } 
// puedesDetectarElProblema();

// "use strict";
// function Persona(nombre) { 
//     this.nombre = nombre; 
// } 
// let ferdinand = Persona("Ferdinand"); 
// // oops 
// console.log(nombre); 
// // → Ferdinand


function probar(etiqueta, cuerpo) { 
    if (!cuerpo()) console.log(`Fallo: ${etiqueta}`);
    console.log('probar:', cuerpo());
}

probar("convertir texto Latino a mayúscula", () => { 
    return "hola".toUpperCase() == "HOLA"; 
});

probar("convertir texto Griego a mayúsculas", () => { 
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ"; 
});

probar("no convierte caracteres sin mayúsculas", () => { 
    return "ابحرم".toUpperCase() == "ابحرم"; 
});

function numeroAString(n, base = 10) {
    let resultado = "", signo = "";

    if (n < 0) { 
        signo = "-"; 
        n =-n; 
    } 
    do { 
        resultado = String(n % base) + resultado; 
        n /= base; 
    } while (n > 0); 

    return signo + resultado; 
} 
// console.log(numeroAString(13, 10)); => error de la función
// console.log(numeroAString(13, 1));

function pedirEntero(pregunta) { 
    let resultado = Number(prompt(pregunta)); 
    if (Number.isNaN(resultado)) 
        return null; 
    else 
        return resultado; 
}
console.log(pedirEntero("Cuantos arboles ves?"));
