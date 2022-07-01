/* Como los jovenes utilizaban clases */
class Conejo { 
    constructor(tipo) { 
        this.tipo = tipo;
    } 
    hablar(linea) { 
        console.log(`El conejo ${this.tipo} dice '${linea}'`); 
    } 
} 
let conejoAsesino = new Conejo("asesino"); 
let conejoNegro = new Conejo("negro");

conejoAsesino.hablar('Los voy a muriocionar');
conejoNegro.hablar('Eso es rasismo');

/* Como los abuelos utilizaban clases */
function Gato(tipo) { 
    this.tipo = tipo; 
} 
Gato.prototype.hablar = function(linea) { 
    console.log(`El Gato ${this.tipo} dice '${linea}'`); 
}; 

let gatoRaro = new Gato("raro");

gatoRaro.hablar('jejejeje jijijiji jojojojo jujuju');

//Al igual que function, class se puede usar tanto en posiciones de declaración como de expresión.
let objeto = new class { 
    obtenerPalabra() { return "hola"; };
    obtenerNumeros() {return 123456}
}; 
console.log(objeto.obtenerPalabra());
console.log(objeto.obtenerNumeros());

//Cuando le agregas una propiedad a un objeto, ya sea que esté presente en el prototipo o no, la propiedad es agregada al objeto en si mismo.
Conejo.prototype.dientes = "pequeños"; 
console.log(conejoAsesino.dientes); 
// → pequeños 
conejoAsesino.dientes = "largos, filosos, y sangrientos"; 
console.log(conejoAsesino.dientes); 
// → largos, filosos, y sangrientos 
console.log(conejoNegro.dientes); 
// → pequeños 
console.log(Conejo.prototype.dientes); 
// → pequeños
