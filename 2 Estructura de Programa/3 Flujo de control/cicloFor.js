//Ciclo For
/*
El ciclo for es una estructura de control cíclica, también conocida como ciclo controlado por contador. Este ciclo es muy sencillo, ya que se conoce con exactitud cuántas veces se va a llevar a cabo la misma tarea.

Bibliografia: https://dcodingames.com/el-ciclo-for/
 */


//Hallar números pares con el ciclo for:
for (let numero = 0; numero <= 12; numero = numero + 2) { 
    console.log(numero); 
}


// Rompiendo un ciclo

for (let actual = 20; ; actual = actual + 1) {
    
    if (actual % 7 == 0) { 
         
        console.log(actual); 
        
        break; 
    } 

}

// Actualizando vinculaciones de manera sucinta

let contador;

// Las lineas de codigo de abajo tienen el mismo propocito

// para agregar
contador = contador + 1;
console.log(contador)
contador += 1;
console.log(contador)
++contador;
console.log(contador)

// para sustraer
contador -= 1;
console.log(contador)
--contador;
console.log(contador)
