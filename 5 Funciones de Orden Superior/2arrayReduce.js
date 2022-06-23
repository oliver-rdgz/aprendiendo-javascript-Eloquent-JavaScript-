const resultReduce = [0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
    console.log("Valor acumulado:" ,valorAnterior);
    console.log("Valor actual:" ,valorActual);
    console.log("Indice:" ,indice);
    return valorAnterior + valorActual;
});

console.log(resultReduce);

// const resultReduceTwo = [0,1,2,3,4].reduce(function(valorAnterior, [desde, hasta]){
//     console.log("Valor acumulado:" ,valorAnterior);
//     console.log("Valor desde:", desde, "Valor hasta", hasta);
//     // console.log("Indice:" ,indice);
//     return valorAnterior + (hasta - desde);
// }, 0);

// console.log(resultReduceTwo);