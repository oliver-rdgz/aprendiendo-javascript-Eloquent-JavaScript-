//Argumentos opcionales
function cuadrado(x) { 
    return x * x; 
} 
console.log(cuadrado(4, true, "erizo")); 
/*
Definimos cuadrado con solo un parámetro. Sin embargo, cuando lo llamamos con tres, el lenguaje no se queja. Este ignora los argumentos extra y calcula el cuadrado del primero.
*/

function menos(a, b) { 
    if (b === undefined) {
        return-a; 
    }
    else {
        return a- b; 
    }
} 
console.log(menos(10)); 
// →-10 
console.log(menos(10, 5)); 
// → 5



function potencia(base, exponente = 2) { 
    let resultado = 1; 
    for (let cuenta = 0; cuenta < exponente; cuenta++) { 
        resultado *= base; 
    } 
    return resultado; 
};
console.log('Potencia base = 4 y sin parametro de exponente: \n '+potencia(4)); 
console.log('Potencia base = 4 y con exponente 6: \n '+potencia(2, 6)); 
/*
Si escribes un operador = después un parámetro, seguido de una expresión, el valor de esa expresión reemplazará al argumento cuando este no sea dado.
*/

