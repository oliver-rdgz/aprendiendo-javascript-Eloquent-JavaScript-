// Devolución de llamadas

/*
la función setTimeout, disponible tanto en Node.js como en navegadores, espera una cantidad determinada de milisegundos (un segundo son mil milisegundos) y luego llama una función.
*/

setTimeout(() => console.log("Tick"), 5000);

//La forma más fácil de crear una promesa es llamando a Promise.resolve (“Promesa.resolver”).

let quince = Promise.resolve(15); 
quince.then(valor => console.log(`Obtuve ${valor}`)); 
// → Obtuve 15

//Generadores
function* potenciacion(n) { 
    for (let actual = n;actual < 50; actual *= n) { 
        yield actual; 
    } 
} 
// console.log(potenciacion(3));
for (let potencia of potenciacion(3)) { 
    // console.log(typeof )
    if (potencia > 50) break; 
    console.log("Potencia:",potencia); 
}

//Lo dificil que es manejar excepciones asincronas sin promesas, tus manejadores catch no estarán en la pila de funciones cuando lanzen una excepción.
try { 
    setTimeout(() => 
    { throw new Error("Woosh"); }, 20); 
} catch (_) { 
    // Esto no se va a ejecutar 
    console.log("Atrapado!"); 
}