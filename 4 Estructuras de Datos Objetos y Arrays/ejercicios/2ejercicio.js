//Revirtiendo unarray

/*
Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que aparecen sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y produce un nuevo array que tiene los mismos elementos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: modifica el array dado como argumento invirtiendo sus elementos. Ninguno de los dos puede usar el método reverse estándar.
*/

function revertirArray(array = []){
    const arrayRevertido = [];
    let i = array.length-1;
    for(i; i >= 0; i--){
        arrayRevertido.push(array[i])
    }
    return arrayRevertido;
}

const revertirArrayEnSuLugar = revertirArray;

console.log(revertirArrayEnSuLugar(revertirArray([5,6,7,8,9])));

