// Ciclo While
// mostrar números pares

console.log(0); 
console.log(2); 
console.log(4); 
console.log(6); 
console.log(8); 
console.log(10); 
console.log(12);

// Los ciclos nos permiten hacer que el un bloque de codigo de repita de manera finita, ejemplo

let numero = 0;

while(numero <= 12){
    console.log(numero);
    numero = numero+2;
}

// Es el mismo resultado que el codigo anterior pero con menos lineas de codigo

/*
    Una declaración que comienza con la palabra clave while crea un ciclo. La palabra while es seguida por una expresión en paréntesis y luego por una declaración, muy similar a if. El bucle sigue ingresando a esta declaración siempre que la expresión produzca un valor que dé true cuando sea convertida a Boolean.
 */


    // realizar 2 a la 10 con un ciclo while:

    let resultado = 1; 
    let contador = 0; 

    while (contador < 10) { 
        resultado = resultado * 2; 
        contador = contador + 1; 
    }

    console.log(resultado);

// Ciclo Do (Do while)

/**
    Un ciclo do es una estructura de control similar a un ciclo while. Difiere solo en un punto: un ciclo do siempre ejecuta su cuerpo al menos una vez, y comienza a chequear si debe detenerse solo después de esa primera ejecución. Para reflejar esto, la prueba aparece después del cuerpo del ciclo
 */

    let tuNombre; 
    do { 
        tuNombre = prompt("Quien eres?"); 
    } while (!tuNombre); 
    console.log(tuNombre);