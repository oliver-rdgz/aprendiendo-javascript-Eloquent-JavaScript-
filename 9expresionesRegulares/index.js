//Expresión regular
let regex1 = new RegExp("abc");
let regex2= /abc/
//Las dos formas de escrbir una expresión regular
/*
Las expresiones regulares son muy utilizadas en los string, para buscar patrones dentro de los strings.

Las expresiones regulares son una especie de detectives que el programador contrata para que mediante una descripción del string que el programador le ofrece, la expresión regular busca en el string la descripción que el programador le dijo. Al final la expresión regular nos informará si encontró o no alguna coincidencia.
*/

//Probando coincidencias

console.log(/abc/.test("abcde"));
// → true 
console.log(/abc/.test("etabc"));
// → true 
console.log(/abc/.test("abdc"));
// → false 
console.log(/abc/.test("abxde")); 
// → false


//Conjuntos de caracteres
/*
Poner un conjunto de caracteres entre corchetes hace que esa parte de la expresión coincida con cualquiera de los caracteres entre los corchetes.
*/

console.log("en 1992:", /[0123456789]/.test("en 1992")); 
// → true 
console.log("en 1992:", /[0-9]/.test("en 1992")); 
// → true

/*
Dentro de los corchetes, un guion (-) entre dos caracteres puede ser utilizado para indicar un rango de caracteres, donde el orden es determinado por el número Unicode del carácter. Los caracteres 0 a 9 estan uno al lado del otro en este orden (códigos 48 a 57), por lo que [0-9] los cubre a todos y coincide con cualquier dígito.
*/

let fechaHora = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/; 
console.log("Fechas: ",fechaHora.test("30-01-2003 15:20")); 
// → true 
console.log("Fechas: ",fechaHora.test("30-jan-2003 15:20")); 
// → false

//si se desea buscar aquello que no coincida dentro de un string se puede hacer con un ^ después del corchete de apertura [^expresion] ejemplo:

let noBinario = /[^01]/; 
console.log("No coincidencia:", noBinario.test("1100100010100110")); 
// → false
console.log("No coincidencia:", noBinario.test("1100100010200110")); 
// → true

//Repitiendo partes de un patrón

/*
Ya sabemos cómo hacer coincidir un solo dígito. Qué pasa si queremos hacer coincidir un número completo una secuencia de uno o más dígitos? Cuando pones un signo más (+) después de algo en una expresión regular, este indica que el elemento puede repetirse más de una vez. Por lo tanto, /\d+/ coincide con uno o más caracteres de dígitos.
*/

console.log("Repitiendo patron +:", /'\d+'/.test("'123'")); 
// → true 
console.log("Repitiendo patron +:",/'\d+'/.test("''")); 
// → false 
console.log("Repitiendo patron *:",/'\d*'/.test("'123'")); 
// → true 
console.log("Repitiendo patron *:",/'\d*'/.test("''")); 
// → true

//Un signo de interrogación hace que alguna parte de un patrón sea opcional, lo que significa que puede ocurrir cero o mas veces.

let reusar = /reh?usar/; 
console.log("reh?usar:",reusar.test("rehusar")); 
// → true 
console.log("reh?usar:",reusar.test("reusar")); 
// → true
console.log("reh?usar:",reusar.test("usar")); 
// → false
console.log("reh?usar:",reusar.test("reh")); 
// → false
console.log("reh?usar:",reusar.test("husar")); 
// → false

//Para indicar que un patrón deberia ocurrir un número preciso de veces, usa llaves.

fechaHora = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/; 
console.log("Fechas:" ,fechaHora.test("30-1-2003 8:45")); 
// → true
//let fechaHora = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/; 


//Agrupando subexpresiones
//Para usar un operador como * o + en más de un elemento a la vez, tienes que usar paréntesis. Una parte de una expresión regular que se encierre entre paréntesis cuenta como un elemento único en cuanto a los operadores que la siguen están preocupados.

let caricaturaLlorando = /boo+(hoo+)+/i; 
console.log("/boo+(hoo+)+/i:", caricaturaLlorando.test("Boooooohoooohoohooo")); 
// → true

//Coincidencias y grupos

let coincidencia = /\d+/g.exec("uno dos 100 300"); 
console.log("exec:",coincidencia);
console.log("exec:",coincidencia.index); 
// → 8

//Los valores de tipo string tienen un método match que se comporta de manera similar.

console.log("match:","uno dos 100".match(/\d+/)); 
// → ["100"]

let textoCitado = /'([^']*)'/; 
console.log("/'([^']*)'/",textoCitado.exec("ella dijo 'hola'")); 
// → ["'hola'", "hola"]



//La clase Date(``Fecha'')

/*
JavaScript tiene una clase estándar para representar fechas—o mejor dicho, puntos en el tiempo. Se llama Date.
*/

console.log(new Date());

//También puedes crear un objeto para un tiempo específico.
console.log(new Date(2009, 11, 9)); 
// → Wed Dec 09 2009 00:00:00 GMT+0100 (CET) 
console.log(new Date(2009, 11, 9, 12, 59, 59, 999)); 
// → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)

//new Date(año, meses, día, hora, minutos, segundos, milisegundos)
//año, meses y día -> obligatorios
//hora, minutos, segundos y milisegundos -> opcionales
//los meses empiezan con 0 y terminan en 11
//los días empiezan en 1.



/*Las marcas de tiempo se almacenan como la cantidad de milisegundos desde el inicio de 1970, en la zona horaria UTC.
Usar el método getTime (“obtenerTiempo”) en un objeto fecha retorna el tiempo en milisegundos.
*/

console.log("Tiempo en milisegundos",new Date(2013, 11, 19).getTime()); 
// → 1387407600000 
console.log("Tiempo de milisegundos a objeto fecha:", new Date(1387407600000)); 
// → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)

console.log("Tiempo en milisegundos actual:", Date.now())
console.log("Tiempo en objeto date actual:", new Date(Date.now()))

function obtenerFecha(string) { 
    let [fullDate, dia, mes, año] = 
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string); 
    let prueba = 
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string); 
    console.log(prueba)
    return new Date(año, mes- 1, dia); 
}

console.log(obtenerFecha("30-1-2003"));
 // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)

 /*  
    /expresion regular (subexpresion regular)/
    Cuando una expresión regular usa el metodo "exec" el resultado es un array con la concidencias en la primera posición del array y las subexpresiones ocupan las siguientes posiciones del array.
 */


    //Patrones de elección
    //Permite elegir entre los diferentes patrones utilizando | que su nombre es tuberias

    let conteoAnimales = /\b\d+ (cerdo|vaca|pollo)s?\b/; 
    console.log("regex animales",conteoAnimales.test("15 cerdo")); 
    // → true 
    console.log("regex animales",conteoAnimales.test("15 vacas")); 
    // → true 
    console.log("regex animales",conteoAnimales.test("15 pollo")); 
    // → true 
    console.log("regex animales",conteoAnimales.test("15 cerdopollos")); 
    // → false



    //El método replace

    //Los valores de string tienen un método replace (“reemplazar”) que se puede usar para reemplazar parte del string con otro string.

    console.log("papa".replace("p", "m")); 
    // → mapa

    //opción g (para global) se agrega a la expresión regular,
    console.log("Borobudur".replace(/[ou]/, "a")); 
    // → Barobudur 
    console.log("Borobudur".replace(/[ou]/g, "a"));
    // → Barabadar

    console.log( "Liskov, Barbara\nMcCarthy, John\nWadler, Philip" .replace(/(\w+), (\w+)/g, "$2 $1"));

    //Los $1 y $2 en el string de reemplazo se refieren a los grupos de subexpresiones que estan entre los paréntesis del patrón.


    //Es posible pasar una función, en lugar de un string, como segundo argumento para replace.

   let s = "la cia y el fbi"; 
   console.log(
      s.replace(/\b(fbi|cia)\b/g, 
      str => str.toUpperCase())
      ); 
    // → la CIA y el FBI

   let almacen = "1 limon, 2 lechugas, y 101 huevos"; 
   function menosUno(coincidencia, cantidad, unidad) { 
      console.log(`cantidad: ${cantidad} \nunidad:${unidad}`)
      cantidad = Number(cantidad)- 1; 
      if (cantidad == 1) { // solo queda uno, remover la 's' 
         unidad = unidad.slice(0, unidad.length- 1); 
      } else if (cantidad == 0) { 
         cantidad = "sin"; 
      } 
      return cantidad + " " + unidad; 
   } 
   console.log(almacen.replace(/(\d+) (\w+)/g, menosUno)); 
   // → sin limon, 1 lechuga, y 100 huevos

   function removerComentarios(codigo) { 
      return codigo.replace(/\/\/.*|\/\*[^]* \*\//g, ""); 
   }
   console.log(removerComentarios("1 + /* 2 */3")); 
   // → 1 + 3 
   console.log(removerComentarios("x = 10;// ten!")); 
   // → x = 10; 
   console.log(removerComentarios("1 /* a */+/* b */ 1")); 
   // → 1 1
   console.log(removerComentarios("1 /* a */+asdasd/* b */ 1")); 
   // → 1 1

   console.log("Banana: ","Banana".match(/an/g)); 
   // → ["an", "an"]
   console.log("Banana: ","Banana".match(/an/)); 
   // → ["an"]

   //Ciclos sobre coincidencias

   let entrada = "Un string con 3 numeros en el... 42 y 88."; 
   let numero = /\b\d+\b/g; 
   coincidencia; 
   while (coincidencia = numero.exec(entrada)) { 
      console.log("Valor de coincidencia: ", coincidencia); 
      console.log("Se encontro", coincidencia[0], "en", coincidencia. index); 
   }

   const archivoINI = "motordebusqueda=https://duckduckgo.com/?q=$1 malevolencia=9.7 ; los comentarios estan precedidos por un punto y coma... ; cada seccion contiene un enemigo individual [larry] nombrecompleto=Larry Doe tipo=bravucon del preescolar sitioweb=http://www.geocities.com/CapeCanaveral/11451 [davaeorn] nombrecompleto=Davaeorn tipo=hechizero malvado directoriosalida=/home/marijn/enemies/davaeorn"

   function quitarComentarios(string = ""){
      const regex = /;[^\[]*/g;
      return string.replace(regex, "");
   }

   function quitarSecciones(string= ""){
      const regex = /\[[\w\W]*\]/g;
      return string.replace(regex, "");
   }

   console.log(quitarComentarios(archivoINI));
   console.log(quitarSecciones(quitarComentarios(archivoINI)));

   function analizarINI(string) { 
      // Comenzar con un objeto para mantener los campos de nivel superior 
      let resultado = {}; 
      let seccion = resultado; 
      string.split(/\r?\n/).forEach(linea => { 
         let coincidencia; 
         if (coincidencia = linea.match(/^(\w+)=(.*)$/)) { 
            seccion[coincidencia[1]] = coincidencia[2]; 
         } else if (coincidencia = linea.match(/^\[(.*)\]$/)) { 
            seccion = resultado[coincidencia[1]] = {}; 
         } else if (!/^\s*(;.*)?$/.test(linea)) { 
            throw new Error("Linea '" + linea + "' no es valida."); 
         } 
      }); 
      return resultado; 
   } 

   console.log(analizarINI(`nombre=Vasilis\n[direccion]\nciudad=Tessaloniki`));

   //Caracteres internacionales

   console.log(/🍎{3}/.test("🍎🍎🍎")); // → false

   console.log(/<.>/.test("<🌹>")); // → false 
   console.log(/<.>/u.test("<🌹>")); // → true

   //Debe agregar una opción u (para Unicode) a tu expresión regular para hacerla tratar a tales caracteres apropiadamente.

   /*
   es posible usar \p en una expresión regular (que debe tener habilitada la opción Unicode) para que coincida con todos los caracteres a los que el estándar Unicode les asigna una propiedad determinada.
   */

   console.log(/\p{Script=Greek}/u.test("α")); // → true 
   console.log(/\p{Script=Arabic}/u.test("α")); // → false 
   console.log(/\p{Alphabetic}/u.test("α")); // → true 
   console.log(/\p{Alphabetic}/u.test("!")); // → false