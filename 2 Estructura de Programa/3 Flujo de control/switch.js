// switch

/*
Aunque el escalonamiento if - else if - else puede evaluar de forma anidada múltiples condiciones, si estas son muy numerosas, empieza a haber pérdida de legibilidad.

Esta sentencia sirve para crear muchas condiciones de igualdad. Es útil por ejemplo para la creación de un menú. Imaginad que tenemos un menú con 4 opciones. Pues con el switch podemos hacer que dependiendo de la opción que elijas se ejecute un código u otro. 

Bibliografia:
https://www.aulafacil.com/cursos/programacion/lenguaje-de-programacion-c/sentencia-switch-l16772
https://www2.eii.uva.es/fund_inf/cpp/temas/5_control_flujo_condicional/switch.html
 */

switch (prompt("Como esta el clima?")) { 
    case "lluvioso": 
        console.log("Recuerda salir con un paraguas."); 
        break; 
    case "soleado": 
        console.log("Vistete con poca ropa.");
        break
    case "nublado": 
        console.log("Ve afuera."); 
        break; 
    default: 
        console.log("Tipo de clima desconocido!"); 
        break; 
}