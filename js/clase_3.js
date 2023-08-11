/////////separadores numericos ///////////
const number = 1_000_000_000; //podemos separar con el signo de (_) para separar numeros de grandes cifras.

console.log(number); // 1000000000

//Mas ejemplos numeros enteros y flotantes.
let num1 = 12_083_802_803.57
console.log(num1); //12083802803.57

let num2 = 123_754; //123754
let num3 = 1244_00; //124400

//separador numerico con partes exponenciales.
let amount = 0.000_001;
console.log(amount);

//Separador numerico para literal bigint.
let num4 = 2_938_380_938_903_893n;
console.log(typeof(num4)); //bigint

let nibbles = 0b1011_01001_0101; //binary
console.log(typeof(nibbles)); //number

let val = 0o123_2643; //octal 
console.log(typeof(val)); //number

let val1 = 0xd0_e0_f0;
console.log(typeof(val1)); //number

//Resumen: se puede utilizar guiones bajos (_) como separadores numericos.

// let a = 0582; //invalid octal
let a = 0o51; //octal
console.log(a); //41

// let ab = 0o58; //arroja un error porque el octal es del 0 al 7.
// console.log(ab); //58

let  e = parseInt('111',2); // parseInt se utiliza para analizar un strig binario
console.log(e); //7

//Resumen: los octal comienzan con un 0o y una secuencia de numeros del 0 al 7.
// los literales binarios comienzan con 0b y una secuencia de numeros de 0 y 1.


///////////JAVASCRIP BOOLEAN///////////////////////
let error = 'A ocurrido un error'
if(error){
    console.log(error); // se imprime a ocurrdo un error porque la variable (error) se convierte a verdadero
}

let error1 = ''
if(error){
    console.log(error1); // No se imprime nada ya que la variable se convierte a falso
}



//////////////STRING LITERALS/////////////

let s = ('Hello I\'m'); //utilizamos (\) para poder agregar una (') sin interrumpir nuestro string. 
let n = ('Arturo'); 
let a1 = `I'm Pedro`; //los bactick (``) te permite utlizar comillas simples o dobles dentro de tu string sin interrumpirlas.

console.log(a1); //I'm pedro
console.log(`${s} ${n}`); //creamos un template string (Hello I'm Arturo)

//Interpolacion string
//podemos colocar variables y expresiones dentro de un template literal.
let p = ' pedro';
let m = `Hola ${p}`;
console.log(m);

//Obtener la longitud de un string.
let me = "¡Hola!";
console.log(me.length); //12

//Acceder al primer caracteres.
console.log(me[0]); //¡

//Acceder el ultimo carcater del string.
console.log(me[me.length-1]);//!

//Concatenar un string con operador (+)
let pa = '¡Hola!' + p;
 console.log(pa); // ¡Hola! pedro

//cambiar un string por pieza utilizando (=+)
let f = 'La Manzana';
f += ' es de color'
f += ' roja.';

console.log(f); //La Manzana es de color roja.

//Convertir un boolean a un string.
let palabra = false;
let plb =palabra.toString(); //convertimos de tipo booleam a string
console.log(plb); //false

let pbl1 = Boolean(plb); //Convertimos string a boolean
console.log(typeof(pbl1)); Boolean

let palabra1 = "";
let palabra2 = Boolean(palabra1); //lo convierte a false porque nuestra variable palabra 1 se encuenta vacia.
console.log((palabra2)); //false


///////////COMPARANDO STRINGS////////////////
let resultado = 'a' < 'b';
console.log(resultado); //true

let resultado1 = 'a' < 'B';
console.log(resultado1); //false


//////////////CREAR OBJETOS///////////////////
let users = {};  //objeto vacio

let persona ={   //creacion de un objeto con propiedades.
    Nombre : 'Juan',
    Apellido : 'Castro',
    'Apellido materno': 'hdez' //cuando el nombre de una propiedad contiene espacios debemos de colar comillas ('')
};

console.log(persona.Nombre); //Accedemos al propiedad nombre con (.)
console.log(persona['Apellido']); //Accedemos al propiedad nombre con ([])
console.log(persona["Apellido materno"]); //Accedemos al propiedad Apellido materno es con el tipo array.

//Modificar el valor de un array.
persona.Nombre = 'Jose';
console.log(persona); //{ Nombre: 'Jose', Apellido: 'Castro', 'Apellido materno': 'hdez' }

//Agregar una nueva propiedad al objeto.
persona.age = 21;
console.log(persona.age); //21

//Eliminar una propiedad
// delete persona.age;
// console.log(persona.age); //undefined

let nombre = "cristian";
let apellido = "castro";
let edad = "14";

console.log(`Hola mi nombre es: ${nombre} ${apellido} y tengo ${edad} años.`);

console.log(nombre, apellido, edad);

let N1 = 2;
let N2 = 4;

suma = N1 + N2;
console.log(suma);