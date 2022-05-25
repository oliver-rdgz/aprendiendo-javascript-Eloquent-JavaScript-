//Funciones crecientes

//Ejemplo 1 de como no debe hacerse el codigo

// function imprimirInventarioGranja(vacas, pollos) { 
//     let stringVaca = String(vacas); 
//     while (stringVaca.length < 3) { 
//         stringVaca = "0" + stringVaca; 
//     } 
//     console.log(`${stringVaca} Vacas`); 
//     let stringPollos = String(pollos); 
//     while (stringPollos.length < 3) { 
//         stringPollos = "0" + stringPollos; 
//     } 
//     console.log(`${stringPollos} Pollos`);
// } 
//  imprimirInventarioGranja(7, 11);



//Ejemplo 2 de como no debe hacerse el codigo

//  function imprimirEtiquetaAlcochadaConCeros(numero, etiqueta) { 
//     let stringNumero = String(numero); 
//     while (stringNumero.length < 3) { 
//         stringNumero = "0" + stringNumero; 
//     } 
//     console.log(`${stringNumero} ${etiqueta}`); 
// }
// function imprimirInventarioGranja(vacas, pollos, cerdos) { 
//     imprimirEtiquetaAlcochadaConCeros(vacas, "Vacas"); 
//     imprimirEtiquetaAlcochadaConCeros(pollos, "Pollos"); 
//     imprimirEtiquetaAlcochadaConCeros(cerdos, "Cerdos"); 
// } 
// imprimirInventarioGranja(7, 11, 3);



//Ejemplo 3 de como Si debemos hacer el codigo

function alcocharConCeros(numero, amplitud) { 
    let string = String(numero); 
    while (string.length < amplitud) { 
        string = "0" + string; 
    } 
    return string; 
} 

function imprimirInventarioGranja(vacas, pollos, cerdos) { 
    console.log(`${alcocharConCeros(vacas, 3)} Vacas`); 
    console.log(`${alcocharConCeros(pollos, 3)} Pollos`); 
    console.log(`${alcocharConCeros(cerdos, 3)} Cerdos`); 
}

imprimirInventarioGranja(7, 16, 3);