/*Módulos 
Los módulos son un intento de evitar estos problemas. Un módulo es una pieza del programa que especifica en qué otras piezas este depende ( sus dependencias) y qué funcionalidad proporciona para que otros módulos usen (su interfaz).*/

//Evaluando datos como código

function elt(tipo, ...hijos) { 
    let nodo = document.createElement(tipo); 
    for (let hijo of hijos) { 
        if (typeof hijo != "string") nodo.appendChild(hijo); 
        else nodo.appendChild(document.createTextNode(hijo)); 
    } 
    return nodo; 
} 
document.getElementById("cita").appendChild( 
    elt("footer", "—", 
    elt("strong", "Karl Popper"), ", prefacio de la segunda edición de ", 
    elt("em", "La sociedad abierta y sus enemigos"), ", 1950")
);