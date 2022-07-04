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
// console.log(pedirEntero("Cuantos arboles ves?"));



//-----------------------0-----------------------------0-----------------------0--------------------------0----------



//Excepciones
/*
Es un evento que se produce cuando se ejecuta el programa y es producida cuando se encuentra un error en el programa, lo que hace la excepción es que cambia el flujo normal del programa y ejecuta un codigo que permita al programa continuar con su ejecución, sin la necesidad de terminar abruptamente el programa.

Es como cuando hay una via donde transitan automoviles y se presenta un bloqueo en la vía sea por accidentes, reparaciones, construcciones, etc... ¿crees que los conductores van a hacer? van a buscar un desvio que les permita llegar a su destino, no es la ruta normal, pero el desvio permite que el transito de automoviles no se detenga.

bibliografia:https://www.ibm.com/docs/es/i/7.1?topic=driver-java-exceptions
 */

// function pedirDireccion(pregunta) { 
//     let resultado = prompt(pregunta); 
//     if (resultado.toLowerCase() == "izquierda") 
//     return "I"; 
//     if (resultado.toLowerCase() == "derecha") 
//     return "D"; 
//     throw new Error("Dirección invalida: " + resultado); 
// }

/* la función pedirDireccion permite generar un input con el metodo prompt que noas va a preguntar una dirección, luego hay dos condicciones que nos dicen que las unicas direcciones validos son izquierda o derecha, cualquier cosa aparte de eso va a generar un excepción, la excepción se genera con la palabra clave "throw" */

// function mirar() { 
//     if (pedirDireccion("Hacia que dirección quieres ir?") == "I") 
//     { 
//         console.log('if de mirar');
//         return "una casa"; 
//     } else { 
//         console.log('else de mirar');
//         return "dos osos furiosos"; 
//     } 
// }

/* Mirar solo es una función que hace uso de  la función pedirDireccion entonces con una condición nos dice que sí vamos a la izquierda encotraremos una casa, pero sino vamos la izquierda encontraremos dos osos furiosos*/

try { 
    // console.log("Tu ves", mirar()); 
    console.log('final del try');
} catch (error) { 
    console.log(Object.getPrototypeOf(error))
    console.log("Algo incorrecto sucedio: " + error); 
}

console.log('final del try/catch')

/*
try(intentar) es la palabra cable para intentar correr el codigo con normalidad, pero cuando en el codigo se genera una excepción entonces, apenas se encuentra la excepción el codigo salta al bloque de codigo llamado catch (atrapar), lo que hace es atrapar la excepción y ejecuta el codigo dentro de catch, para luego continuar con las cosas que estan por debajo de try/catch, como puede ver el catch tiene un parametro llamado error, le puedes colocar cualquier nombre, ese parametro nos detalla porque se ha generado una excepción.

En este ejemplo se usa la función mirar, que a su vez la función mirar hace uso de la función pedirDireccion donde se encuentra la excepción, lo que se va a intentar es que el codigo pueda ejecutarse normalmente en el caso de que el usuario al colocar la dirección que se le pregunta digite derecha o izquierda, pero en el caso de que el usuario no dijite ninguna de las dos opciones validas el codigo va a generar una excepción, lo que va a interrumpir la ejecución normal, haciendo que no terminé de ejecutar el codigo en la función mirar y tampoco termine de ejecutar el codigo dentro de try, sino que va ir derectamente a catch donde va a ejecutar todo el codigo que tiene dentro catch y luego va a seguir con el codigo de abajo, en este caso mostrar por consola 'final del try/catch'
*/



// -----------------------------0--------------0-------------------0-----------------0-------------------


// class ErrorDeEntrada extends Error {} 


// function pedirDireccion(pregunta) { 
//     let resultado = prompt(pregunta); 
//     if (resultado.toLowerCase() == "izquierda") 
//     return "I"; 
//     if (resultado.toLowerCase() == "derecha") 
//     return "D"; 
//     throw new ErrorDeEntrada("Direccion invalida: " + resultado); 
// }

// for (;;) { 
//     try { 
//         let direccion = pedirDireccion("Donde?"); 
//         console.log("Tu eliges ", direccion); 
//         break; 
//     } catch (e) { 
//         console.log(Object.getPrototypeOf(e))
//         if (e instanceof ErrorDeEntrada) { 
//             console.log ("No es una dirección válida. Inténtalo de nuevo") ; 
//         } else { 
//             throw e; 
//         } 
//     } 
// }

/*
El operador instanceof verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor.

(el que entendio entendio)

bibliografia: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/instanceof#descripci.c3.b3n
*/



// -------------------------------0-------------------------------0-------------------------------0



