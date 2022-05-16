/*
Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez. Pasar este string a console.log debería mostrar algo como esto:
*/

/*
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/


const tamano = Number(prompt('Eliga el tamaño del tabalo de ajedrez'));

if(isNaN(tamano))
{
    console.log('El dato no es un número')
}else {
    const tamanoDelTablero = tamano * tamano;
    let gatitoOEspacio = " ";
    let tablero = ""
    for(let index = 1 ; index <= tamanoDelTablero; ++index){
        tablero += gatitoOEspacio; // 1e 2# 3e 4# 5e
        gatitoOEspacio = gatitoOEspacio === "#" ? " ": "#";
        if(index % tamano === 0 && tamano % 2 === 0){
            tablero += '\n';
            gatitoOEspacio = gatitoOEspacio === "#" ? " ": "#";
        }else if (index % tamano === 0 ) {
            tablero += '\n';
        }
    }
    console.log(tablero);
};