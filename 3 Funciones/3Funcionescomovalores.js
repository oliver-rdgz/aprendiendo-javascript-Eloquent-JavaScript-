//Funciones como valores

let lanzarMisiles = function() { 
    console.log("ahora"); 
};

lanzarMisiles();

lanzarMisiles = () => { 
    console.log("más tarde"); 
};

lanzarMisiles();
