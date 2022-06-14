let listaDeTareas = []; 
function recordar(tarea) { 
    listaDeTareas.push(tarea); 
} 
function obtenerTarea() { 
    return listaDeTareas.shift(); 
} 
function recordarUrgentemente(tarea) { 
    listaDeTareas.unshift(tarea); 
}

recordar('levantarme');
recordar('cepillarme los dientes');
recordar('Comer');
recordarUrgentemente('Dormir');
console.log("lista de tareas:", listaDeTareas);

console.log(obtenerTarea());
console.log(listaDeTareas)
console.log(obtenerTarea());
console.log(listaDeTareas)
console.log(obtenerTarea());
console.log(listaDeTareas)
console.log(obtenerTarea());
console.log(listaDeTareas)


console.log([1, 2, 3, 2, 1].indexOf(2)); 
// → 1 
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); 
// → 3

function remover(array, indice) { 
    console.log(array.slice(0, indice));
    console.log(array.slice(indice + 1));
    return array.slice(0, indice).concat(array.slice(indice + 1)); 
} 
console.log(remover(["a", "b", "c", "d", "e"], 2)); 
// → ["a", "b", "d", "e"]

/*Si a concat le pasas un argumento que no es un array, ese valor sera agregado al nuevo array como si este fuera un array de un solo elemento. */