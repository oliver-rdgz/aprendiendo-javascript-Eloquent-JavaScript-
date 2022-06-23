//Las funciones de orden superior nos permiten abstraer sobre acciones, no solo sobre valores. Estas vienen en varias formas. Por ejemplo, puedes tener funciones que crean nuevas funciones.
function mayorQue(n) { 
    return m => m > n; 
} 
let mayorQue10 = mayorQue(10);
console.log("Mayor que 10:",mayorQue10(11));


//Y puedes tener funciones que cambien otras funciones.
function ruidosa(funcion) { 
    return (...argumentos) => { 
        console.log("llamando con", argumentos); 
        let resultado = funcion(...argumentos); 
        console.log("llamada con", argumentos, ", retorno", resultado); 
        return resultado; 
    }; 
} 
ruidosa(Math.min)(3, 2, 1);


// Hay un método de array incorporado, forEach que proporciona algo como un ciclo for/of como una función de orden superior. 
["A", "B"].forEach(letra => console.log(letra));