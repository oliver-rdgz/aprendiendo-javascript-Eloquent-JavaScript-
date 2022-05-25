/*
Mínimo
El capítulo anterior introdujo la función estándar Math.min que devuelve su argumento más pequeño. Nosotros podemos construir algo como eso ahora. Escribe una función min que tome dos argumentos y retorne su mínimo.
*/

function miniNumero(uno, dos){
    if(uno<=dos){
        return uno
    }
    return dos;
}

console.log(miniNumero(5,6))
console.log(miniNumero(6,2));
console.log(miniNumero(3,3));