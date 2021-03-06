// function hablaSobre(nodo, cadena) { 
//     if (nodo.nodeType == Node.ELEMENT_NODE) { 
//         for (let i = 0; i < nodo.childNodes.length; i++) { 
//             if (hablaSobre(nodo.childNodes[i], cadena)) { 
//                 return true; 
//             } 
//         } 
//         return false; 
//     } else if (nodo.nodeType == Node.TEXT_NODE) { 
//         return nodo.nodeValue.indexOf(cadena) >-1; 
//     } 
// } 
// console.log(hablaSobre(document.body, "libro"));


// let link = document.body.getElementsByTagName("a")[0];
// console.log(document.body.getElementsByTagName("a"));
// console.log(link.href);

// let avestruz = document.getElementById("gertrudiz"); 
// console.log(avestruz);
// console.log(avestruz.src);

// function sustituirImagenes() { 
//     let imagenes = document.body.getElementsByTagName("img"); 
//     for (let i = imagenes.length- 1; i >= 0; i--) { 
//         let imagen = imagenes[i];
//         // console.log(imagen.parentNode);
//         if (imagen.alt) { 
//             let texto = document.createTextNode(imagen.alt); 
//             imagen.parentNode.replaceChild(texto, imagen); 
//         } 
//     } 
// }

// function elt(tipo, ...hijos) { 
//     let nodo = document.createElement(tipo); 
//     for (let hijo of hijos) { 
//         if (typeof hijo != "string") nodo.appendChild(hijo); 
//         else nodo.appendChild(document.createTextNode(hijo)); 
//     } 
//     return nodo; 
// } 
// document.getElementById("cita").appendChild( 
//     elt("footer", "—", 
//     elt("strong", "Karl Popper"), ", prefacio de la segunda edición de ", 
//     elt("em", "La sociedad abierta y sus enemigos"), ", 1950")
// );

function tiempo(nombre, accion) { 
    let inicio = Date.now(); 
    // Tiempo actual en milisegundos 
    accion(); 
    console.log(nombre, "utilizo", Date.now()- inicio, "ms"); 
} 

tiempo("inocente", () => { 
    let objetivo = document.getElementById("uno"); 
    while (objetivo.offsetWidth < 2000) { 
        objetivo.appendChild(document.createTextNode("X")); 
    } 
}); 
// → inocente utilizo 32 ms 

tiempo("ingenioso", function() { 
    let objetivo = document.getElementById("dos"); 
    objetivo.appendChild(document.createTextNode("XXXXX")); 
    let total = Math.ceil(2000 / (objetivo.offsetWidth / 5));
    console.log(total);
    objetivo.firstChild.nodeValue = "X".repeat(total); 
}); 
// → ingenioso utilizo 1 ms