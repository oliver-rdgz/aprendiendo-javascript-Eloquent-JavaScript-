//Recursión

/*
Está perfectamente bien que una función se llame a sí misma, siempre que no lo haga tanto que desborde la pila. Una función que se llama a si misma es llamada recursiva.
*/

function potencia(base, exponente) { 
    if (exponente == 0) 
    { 
        return 1; 
    } 
    else { 
        return base * potencia(base, exponente- 1); 
    } 
} 
console.log(potencia(2, 3));


function encontrarSolucion(objetivo) { 
    function encontrar(actual, historia) 
    { 
        if (actual == objetivo) { 
            return historia; 
        } else if (actual > objetivo) { 
            return null; 
        } else { 
            // console.log(historia);
            return encontrar(actual + 5, `(${historia} + 5)`) || 
            encontrar(actual * 3, `(${historia} * 3)`); 
        } 
    } 
    return encontrar(1, "1"); 
};

console.log(encontrarSolucion(24)); 
// console.log(encontrarSolucion(26)); 