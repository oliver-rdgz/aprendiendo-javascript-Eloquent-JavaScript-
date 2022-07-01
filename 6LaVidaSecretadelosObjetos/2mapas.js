//Un mapa (sustantivo) es una estructura de datos que asocia valores (las llaves) con otros valores(es una relación clave-valor).
/*
ejemplo numeros = { 
    uno:1,
    dos:2
}

La clave es uno y el valor es 1
La clave es dos y el valor es 2
*/

let edades = { 
    Boris: 39, 
    Liang: 22, 
    Júlia: 62 
}; 
console.log(`Júlia tiene ${edades["Júlia"]}`); 
// → Júlia tiene 62 
console.log("Se conoce la edad de Jack?", "Jack" in edades); 
// → Se conoce la edad de Jack? false 
console.log("Se conoce la edad de toString?", "toString" in edades); 
// → Se conoce la edad de toString? true

console.log({x: 1}.hasOwnProperty("x")); 
// → true 
console.log({x: 1}.hasOwnProperty("toString")); 
// → false

let iteradorOK = "Ok"[Symbol.iterator]();
console.log(iteradorOK.next()); 
// → {value: "O", done: false} 
console.log(iteradorOK.next());
// → {value: "K", done: false} 
console.log(iteradorOK.next()); 
// → {value: undefined, done: true}
