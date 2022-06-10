// Los valores del tipo objeto son colecciones arbitrarias de propiedades. Una forma de crear un objeto es mediante el uso de llaves como una expresión. 
let dia1 = { 
        ardilla: false, 
        eventos: ["trabajo", "toque un arbol", "pizza", "salir a correr"] 
    }; 
    console.log(dia1.ardilla); 
    // → false 
    console.log(dia1.lobo); 
    // → undefined 
    dia1.lobo = false; 
    console.log(dia1.lobo); 
    // → false

    // Las propiedades cuyos nombres no sean nombres válidos de vinculaciones o números válidos deben estar entre comillas. 
    let descripciones = { 
        trabajo: "Fui a trabajar", 
        "toque un arbol": "Toque un arbol",
        3: "número tres"
    };

    console.log(descripciones[3])
    console.log(descripciones["toque un arbol"])
    console.log(descripciones.trabajo)

    // El operador delete (“eliminar”) corta un tentáculo de dicho pulpo. Es un operador unario que, cuando se aplica a la propiedad de un objeto, eliminará la propiedad nombrada de dicho objeto. Esto no es algo que hagas todo el tiempo, pero es posible. 
    let unObjeto = {
        izquierda: 1, 
        derecha: 2
    }; 
    console.log(unObjeto.izquierda); 
    // → 1 
    delete unObjeto.izquierda; 
    console.log(unObjeto.izquierda); 
    // → undefined 
    console.log("izquierda" in unObjeto); 
    // → false 
    console.log("derecha" in unObjeto); 
    // → true

    //El operador binario in (“en”), cuando se aplica a un string y un objeto, te dice si ese objeto tiene una propiedad con ese nombre.


    // Para saber qué propiedades tiene un objeto, puedes usar la función Object .keys. Le das un objeto y devuelve un array de strings—los nombres de las propiedades del objeto.

    console.log(Object.keys({x: 0, y: 0, z: 2})); 
    // → ["x", "y", "z"]

    // Hay una función Object.assign que copia todas las propiedades de un objeto a otro. 
    let objetoA = {a: 1, b: 2}; 
    Object.assign(objetoA, {b: 3, c: 4}); 
    console.log(objetoA); 
    // → {a: 1, b: 3, c: 4}
