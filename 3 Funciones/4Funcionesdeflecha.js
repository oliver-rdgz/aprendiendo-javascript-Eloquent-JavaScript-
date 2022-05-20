//Funciones flecha flecha

/*
Las funciones flecha o arrow funtions son funciones anónimas con una sintaxis más compacta y que aparte de la diferencia en la sintaxis también tienen algunas peculiaridades como que no vinculan su propio this o que no se pueden usar como constructores.

La sintaxis de las funciones flechas es un poco peculiar y para liarlo un poco más hay partes que son opcionales o necesarias dependiendo de los parámetros, el cuerpo y lo que retorne la función como resultado.

Bibliografia:
https://programandoointentandolo.com/2019/05/funciones-flecha-o-arrow-functions-en-javascript.html
https://www.freecodecamp.org/espanol/news/curso-de-javascript-de-funcion-de-flecha/
*/

//ejemplo 1
const sumaDos = (num) => {return num + 2;};
console.log(`Ejemplo 1: ${sumaDos(1)}`);

//ejemplo 2
const sumaTres = (num) => num + 3;
console.log(`Ejemplo 2: ${sumaTres(1)}`);

//ejemplo 3
const sumaCuatro = num => num + 4;
console.log(`Ejemplo 3: ${sumaCuatro(1)}`);

//ejemplo 4
const sumaCinco = a => {
    const valorNuevo = a + 5;
    return valorNuevo;
};
console.log(`Ejemplo 4: ${sumaCinco(1)}`);




//ejemplo 5
const potencia = (base, exponente) => { 
    let resultado = 1; 
    for (let cuenta = 0; cuenta < exponente; cuenta++) { 
        resultado *= base; 
    } 
    return resultado; 
};

console.log(potencia(4,3));


/*
Paréntesis
    Algunas funciones de flecha tienen paréntesis alrededor de los parámetros y otras no.   
*/

//Ejemplo con paréntesis
const sumaNumeros = (num1, num2) => num1 + num2;
console.log(sumaNumeros(10, 25))

//Ejemplo sin paréntesis
const sumaSeis = num => num + 6;

console.log(sumaSeis(1))


/*
Resulta que el número de parámetros que tiene una función de flecha determina si necesitamos incluir paréntesis o no.
Una función de flecha con cero parámetros requiere paréntesis.
*/

const hola = () => "hola";
console.log(hola());

/*
Una función de flecha con un parámetro no requiere paréntesis. En otras palabras, los paréntesis son opcionales.
*/

let sumaSiete = num => num + 7;

/* Podemos agregar paréntesis al ejemplo de arriba y la función de flecha todavía funciona.*/

sumaSiete = (num) => num + 7;
console.log(sumaSiete(5));


/* Un cuerpo de función de flecha puede tener "cuerpo conciso" o "cuerpo en bloque".  El tipo de cuerpo influye en la sintaxis. */

/* Primero, la sintaxis de “cuerpo conciso”. */

const sumaOcho = a => a + 8;

console.log(sumaOcho(1));

/* 
La sintaxis de “cuerpo conciso” es justamente eso: ¡es conciso! No usamos la palabra clave return o corchetes.
Si tienes una función de flecha de una línea (como la del ejemplo de arriba), entonces el valor es devuelto implícitamente. Por lo tanto puedes omitir la palabra clave return y los corchetes.
 */





/* Ahora veamos la sintaxis de “cuerpo en bloque”. */

const sumaNueve = a => {
    const total = a + 9;
    return total;
}

console.log(sumaNueve(1));
/* 
Fíjate que utilizamos ambos, los corchetes y la palabra clave return en el ejemplo de arriba.

Normalmente vemos esta sintaxis cuando el cuerpo de la función tiene más de una línea. Esto es un punto clave: envolver el cuerpo de la función de flecha de varias líneas entre corchetes y usar la palabra clave return.
*/