//El pueblo de VillaPradera no es muy grande. Este consiste de 11 lugares con 14 caminos entre ellos. Puede ser describido con este array de caminos
const caminos = [ "Casa de Alicia-Casa de Bob", "Casa de Alicia-Cabaña", "Casa de Alicia-Oficina de Correos", "Casa de Bob-Ayuntamiento", "Casa de Daria-Casa de Ernie", "Casa de Daria-Ayuntamiento", "Casa de Ernie-Casa de Grete", "Casa de Grete-Tienda", "Mercado-Oficina de Correos", "Mercado-Ayuntamiento", "Casa de Grete-Granja", "Mercado-Granja", "Mercado-Tienda", "Tienda-Ayuntamiento"];  

function construirGrafo(bordes){
    let grafo = Object.create(null);
    function añadirBorde(desde, hasta){
        if (grafo[desde] == null) {
            grafo[desde] = [hasta];
        }else{
            grafo[desde].push(hasta);
        }
    }

    for(let [desde, hasta] of bordes.map(c => c.split("-"))){
        añadirBorde(desde, hasta)
        añadirBorde(hasta, desde)
    };
    return grafo;
}

const grafoCamino = construirGrafo(caminos);
console.log(grafoCamino);

class EstadoPueblo{
    constructor(lugar, paquetes){
        this.lugar = lugar;
        this.paquetes = paquetes;
    }

    mover(destino){
        if(!grafoCamino[this.lugar].includes(destino)){
            return this;
        }else {
            let paquetes = this.paquetes.map(p => {
                if(p.lugar != this.lugar) return p;
                return {lugar:destino, direccion: p.direccion}
            }).filter(p => p.lugar != p.direccion);
            return new EstadoPueblo(destino, paquetes);
        }
    }
}

let primero = new EstadoPueblo( 
    "Oficina de Correos", 
    [{lugar: "Oficina de Correos", direccion: "Casa de Alicia"}] 
); 
let siguiente = primero.mover("Casa de Alicia"); 
console.log(siguiente.lugar); 
// → Casa de Alicia 
console.log(siguiente.paquetes); 
// → [] 
console.log(primero.lugar); 
// → Oficina de Correos


function correrRobot(estado, robot, memoria){
    for(let turno=0 ;; turno++){
        if(estado.paquetes.length == 0){
            console.log(`Listo en ${turno} turnos`);
            break;
        }
        let accion = robot(estado, memoria);
        estado = estado.mover(accion.direccion);
        memoria = accion.memoria;
        console.log(`Moverse a ${accion.direccion}`);
    };
}

function eleccionAleatoria(array){
    let eleccion = Math.floor(Math.random() * array.length);
    return array[eleccion];
}

function robotAleatorio(estado){
    return {direccion: eleccionAleatoria(grafoCamino[estado.lugar])}
}

EstadoPueblo.aleatorio = function(numeroDePaquetes = 5){
    let paquetes = [];
    for(let i = 0; i< numeroDePaquetes; i++){
        let direccion = eleccionAleatoria(Object.keys(grafoCamino));
        let lugar;
        // console.log(paquetes);
        do{
            lugar = eleccionAleatoria(Object.keys(grafoCamino));
        }while(lugar == direccion)
        paquetes.push({lugar, direccion});
    }
    return new EstadoPueblo("Oficina de Correos", paquetes);
};

// correrRobot(EstadoPueblo.aleatorio(), robotAleatorio);

const rutaCorreo = [ "Casa de Alicia", "Cabaña", "Casa de Alicia", "Casa de Bob", "Ayuntamiento", "Casa de Daria", "Casa de Ernie", "GCasa de Grete", "Tienda", "Casa de Grete", "Granja", "Mercado", "Oficina de Correos" ];

function robotRuta(estado, memoria){
    if(memoria.length == 0){
        memoria = rutaCorreo;
    }
    return {direction: memoria[0], memoria:memoria.slice(1)};
}

// correrRobot(EstadoPueblo.aleatorio(), robotRuta);

function encontrarRuta(grafo, desde, hasta) { 
    let trabajo = [{donde: desde, ruta: []}]; 
    for (let i = 0; i < trabajo.length; i++) { 
        let {donde, ruta} = trabajo[i]; 
        for (let lugar of grafo[donde]) { 
            if (lugar == hasta) return ruta.concat(lugar); 
            if (!trabajo.some(w => w.donde == lugar)) { 
                trabajo.push({donde: lugar, ruta: ruta.concat(lugar)}); 
            } 
        } 
    } 
}


function robotOrientadoAMetas({lugar, paquetes}, ruta) { 
    if (ruta.length == 0) { 
        let paquete = paquetes[0]; 
        if (paquete.lugar != lugar) { 
            ruta = encontrarRuta(grafoCamino, lugar, paquete.lugar); 
        } else { 
            ruta = encontrarRuta(grafoCamino, lugar, paquete.direccion); 
        } 
    } 
    return {direccion: ruta[0], memoria: ruta.slice(1)}; 
}