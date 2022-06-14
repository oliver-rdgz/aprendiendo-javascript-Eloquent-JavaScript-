//El objeto Math es usado como un contenedor que agrupa un grupo de funcionalidades relacionadas. Solo hay un objeto Math, y casi nunca es útil como un valor. Más bien, proporciona un espacio de nombre para que todos estas funciones y valores no tengan que ser vinculaciones globales.


function puntoAleatorioEnCirculo(radio) { 
    let angulo = Math.random() * 2 * Math.PI; 
    return {x: radio * Math.cos(angulo), y: radio * Math.sin(angulo)}; 
} 
console.log(puntoAleatorioEnCirculo(2)); 

// El ejemplo anterior usó Math.random. Esta es una función que retorna un nuevo número pseudoaleatorio entre cero (inclusivo) y uno (exclusivo) cada vez que la llamas
console.log("metodo random", Math.random()); 
console.log("metodo random", Math.random()); 
console.log("metodo random", Math.random()); 
console.log("metodo random y metodo floor",Math.floor(Math.random() * 10));