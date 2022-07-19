//Propoagación de evento
// let parrafo = document.querySelector("p"); 
// let boton = document.querySelector("button"); 
// parrafo.addEventListener("mousedown", () => { 
//     console.log("Manejador del párrafo."); 
// }); 

// boton.addEventListener("mousedown", evento => { 
//     console.log("Manejador del botón."); 
//     if (evento.button == 2) evento.stopPropagation(); 
// });


//Acciones por defectos
// let enlace = document.querySelector("a"); 
// enlace.addEventListener("click", evento => { 
//     console.log("Nope."); 
//     evento.preventDefault(); 
// });


//Eventos de teclado
// window.addEventListener("keydown", evento => {
//     if (evento.key == "v") { 
//         document.body.style.background = "violet"; 
//     } 
// }); 
// window.addEventListener("keyup", evento => { 
//     if (evento.key == "v") { 
//         document.body.style.background = ""; 
//     } 
// });
// window.addEventListener("keydown", evento => { 
//     
//     if (evento.key == " " && evento.ctrlKey) { 
//         console.log("¡Continuando!"); 
//     }
// });


// window.addEventListener("click", evento => {
//     let punto = document.createElement("div");
//     punto.className = "punto";
//     punto.style.left = (evento.pageX - 4) + "px";
//     punto.style.top = (evento.pageY - 4) + "px";
//     // punto.style.left = (evento.pageX - 4) + "px";
//     // punto.style.top = (evento.pageY - 4) + "px";
//     document.body.appendChild(punto);
// });


// let ultimoX; // Rastrea la última posición de X del mouse observado
// let barra = document.querySelector("div");
// barra.addEventListener("mousedown", evento => {
    
//     if (evento.button == 0) {
//         ultimoX = evento.clientX;
//         window.addEventListener("mousemove", movido);
//         evento.preventDefault(); 
//         // Evitar la selección
//     }
// });

// function movido(evento) {
//     console.log(evento);
//     if (evento.buttons == 0) {
//         window.removeEventListener("mousemove", movido);
//     } else {
//         let distancia = evento.clientX - ultimoX;
//         let nuevaAnchura = Math.max(10, barra.offsetWidth + distancia);
//         barra.style.width = nuevaAnchura + "px";
//         ultimoX = evento.clientX;
//     }
// }


// Crear algo de contenido
// document.body.appendChild(
//     document.createTextNode(
//     "supercalifragilisticoespialidoso ".repeat(1000)
// ));
// let barra = document.querySelector("#progreso");
// window.addEventListener("scroll", () => {
//     let max = document.body.scrollHeight - innerHeight;
//     barra.style.width = `${(barra / max) * 100}%`;
// });

// let ayuda = document.querySelector("#ayuda");
// let campos = document.querySelectorAll("input");
// for (let campo of Array.from(campos)) {
//     campo.addEventListener("focus", evento => {
//         let texto = evento.target.getAttribute("dato-ayuda");
//         ayuda.textContent = texto;
//     });
//     campo.addEventListener("blur", evento => {
//         evento.textContent = "";
//     });
// }

// let cuadradoWorker = new Worker("./index.js");

// cuadradoWorker.addEventListener("message", evento => {
//     console.log("El respondió:", evento.data);
// });
// cuadradoWorker.postMessage(10);
// cuadradoWorker.postMessage(24);


// var myWorker = new Worker("./index.js");

// myWorker.addEventListener("message", function (oEvent) {
//   console.log("Called back by the worker!\n");
// }, false);

// myWorker.postMessage("message"); // start the worker.


let areaTexto = document.querySelector("textarea");
let tiempoEspera;
areaTexto.addEventListener("input", () => {
    clearTimeout(tiempoEspera);
    tiempoEspera = setInterval(() => console.log("¡Escribió!"), 500);
});