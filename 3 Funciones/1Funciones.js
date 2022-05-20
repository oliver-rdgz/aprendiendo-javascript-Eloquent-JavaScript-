/*
Una función es un bloque de código que realiza alguna operación. Una función puede definir opcionalmente parámetros de entrada que permiten a los llamadores pasar argumentos a la función. Una función también puede devolver un valor como salida. 

nos permiten dividir el trabajo que hace un programa, en tareas más pequeñas separadas de la parte principal. Ese es el concepto de función en programación.

Bibliografia:
https://docs.microsoft.com/es-es/cpp/cpp/functions-cpp?view=msvc-170
https://lenguajesdeprogramacion.net/diccionario/que-es-una-funcion-o-metodo-en-programacion/
*/

//Construir una función en javascript
function primeraFuncion(){
    console.log('Probando primera función');
}
//Ejecutar la función en javascript
primeraFuncion();

//Construir funcion flecha 
const segundaFuncion = () => {
    console.log('Probando por segunda vez una función');
}
//Ejecutar la función flecha se ejecuta igual que una función en javascript
segundaFuncion();


console.log(terceraFuncion())

function terceraFuncion(){
    return "Hola otra vez, esta es la tercera vez"
}

/*
Este código funciona, aunque la función esté definida debajo del código que lo usa. Las declaraciones de funciones no son parte del flujo de control regular de arriba hacia abajo. Estas son conceptualmente trasladadas a la cima de su alcance y pueden ser utilizadas por todo el código en ese alcance. Esto es a veces útil porque nos da la libertad de ordenar el código en una forma que nos parezca significativa, sin preocuparnos por tener que definir todas las funciones antes de que sean utilizadas.
*/


