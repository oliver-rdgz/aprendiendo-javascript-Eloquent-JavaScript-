//cierre
/*
En JavaScript, los cierres se definen como funciones internas que tienen acceso a variables y parámetros de la función externa incluso después de que la función externa haya regresado.

bibliografia :https://es.acervolima.com/cual-es-el-uso-practico-de-un-cierre-en-javascript/
*/
function envolverValor(n) { 
    let local = n; 
    return () => local; 
} 

let envolver1 = envolverValor(1); 
let envolver2 = envolverValor(2); 

console.log(envolver1());
console.log(envolver2());

/*
Una función que hace referencia a vinculaciones de alcances locales alrededor de ella es llamada un cierre.
*/

function multiplicador(factor) { 
    return numero => numero * factor; 
} 

let duplicar = multiplicador(2); 

console.log("Multiplicador : \n",duplicar(5));
console.log("Multiplicador : \n",duplicar(4));