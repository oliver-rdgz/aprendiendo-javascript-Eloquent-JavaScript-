let tamañoCambiante = { 
    get tamaño() { 
        return Math.floor(Math.random() * 100); 
    } 
};
console.log(tamañoCambiante.tamaño); 
// → 73 
console.log(tamañoCambiante.tamaño); 
// → 49

class Temperatura { 
    constructor(celsius) { 
        this.celsius = celsius; 
    } 
    get fahrenheit() { 
        return this.celsius * 1.8 + 32; 
    } 
    set fahrenheit(valor) { 
        this.celsius = (valor- 32) / 1.8; 
    } 
    static desdeFahrenheit(valor) { 
        return new Temperatura((valor- 32) / 1.8); 
    } 
} 
let temp = new Temperatura(22); 
console.log(temp.fahrenheit); 
// → 71.6 
temp.fahrenheit = 86; 
console.log(temp.celsius); 
// → 30

console.log(Temperatura.desdeFahrenheit(temp.fahrenheit))