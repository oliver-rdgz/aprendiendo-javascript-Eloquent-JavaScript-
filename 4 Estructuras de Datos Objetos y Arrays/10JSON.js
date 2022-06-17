//los objetos y arrays se almacenan en la memoria de la computadora como secuencias de bits que contienen las direcciónes —el lugar en la memoria— de sus contenidos.

/* Un formato de serialización popular llamado JSON (pronunciado “Jason”), que significa JavaScript Object Notation (“Notación de Objetos JavaScript”). Es ampliamente utilizado como un formato de almacenamiento y comunicación de datos en la Web, incluso en otros lenguajes diferentes a JavaScript. */


// Ejemplo de un archivo JSON: 
// { 
//     "ardilla": false, 
//     "eventos": ["trabajo", "toque un arbol", "pizza", "sali a correr"]
// } 

// JavaScript nos da las funciones JSON.stringify y JSON.parse para convertir datos hacia y desde este formato. El primero toma un valor en JavaScript y retorna un string codificado en JSON. La segunda toma un string como ese y lo convierte al valor que este codifica. 

let string = JSON.stringify({ardilla: false, eventos: ["fin de semana"]}); 
    console.log(string); 
    // → {"ardilla":false,"eventos":["fin de semana"]} 
    console.log(JSON.parse(string).eventos); 
    // → ["fin de semana"]