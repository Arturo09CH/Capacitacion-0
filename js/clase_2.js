// Cuando declaramos una variable de tipo let podemos cambiar su valor y el tipo de dato.
// let dato = 20; //aqui es de tipo number
// console.log(typeof(dato))

// dato = "va"; //tipo string
// console.log(typeof(dato))

// dato = true; //tipo booleam
// console.log(typeof(dato))

// console.log(dato); // es de tipo number

///////////////undefined//////////////////
//nos arroja un mensaje de tipo UNDEFINED porque estamos imprimiendo una 
//variable que no tiene ningun valor.
let juan;
console.log(juan);

console.log(typeof(juan)) //es de tipo UNDEFINED

//nos marca un error undefine porque la variable que deseamos imprimir no esta definida.
// console.log(soccer);

let obj = null;
console.log(typeof(obj)); //es de tipo objet
console.log(null == undefined); //cuando comparamos un dato de tipo null y undefined nos marca que es verdadero.

//////////////////numbers/////////////////////////////
// numeros enteros y flotantes
let num = 100;
console.log(typeof(num));

let promedio = 12.5;
console.log(typeof(promedio));

let decimal = 0.05;
console.log(typeof(decimal));

let numm = 200.00; // es interpretado como 200

//////////////////max y min///////////////////////77
//obtener  el maximo y minimo de un array
let array = [10,9,8,7,6,5,12];

const maximo = Math.max(...array); //los 3 puntos se utiliza para desempaquetar el array y pasar los argumentos separados del metodo
const minimo = Math.min(...array);

console.log(`el valor maximo es: ${maximo}`);
console.log(`el valor minimo es: ${minimo}`);


//////////////string//////////////////////////
//crear un string nuevo a apartir de uno existente
let str = "hola";

str = str + " mundo";

console.log(str) // hola mundo

//cambiar un caracter de un string
let str1 = 'hola';
str1[0]= 'H';
console.log(str1); //hola

//convertir un valor de otro tipo a boolean
console.log(Boolean('hi')); //true
console.log(Boolean(''));  //false
console.log(Boolean(20));  //true
console.log(Boolean(Infinity)); //true
console.log(Boolean(0)); //false
console.log(Boolean({foo:100})); //true
console.log(Boolean(null)); //false

//ejemplo.
let proceso = true;
let terminado = false;

if (Boolean(proceso) == true){
    console.log("El proyecto esta en proceso.")
}
else{
    console.log("El proyecto esta terminado.")
}
// crear un symbol
let s = Symbol();

console.log(Symbol() == Symbol()); // false

//crear un variable de tipo bigint
let pageView = 9038736752n;
console.log(typeof(pageView)); // tipo  bigint

let usuario = {
    id: 1,
    nombre: 'Arturo',
    apelleido: 'Hernandez',
    email: 'arturo.213@gmail.com',
    address: {
            building: '43003',
            street: 'S/n',
            city: 'Huejutla',
            country: 'MX'   
    }
}
console.log(usuario.nombre); // obtenemos la propiedad de nombre
console.log(usuario.age); // es undefined porque esa propiedad no existe en nuestro objeto creado.

console.log(usuario['email']); //accedemos a la propiedad tipo array utlizando los []
console.log(usuario['address']['city']);
// hacemos una template string
console.log(`Hola mi nombre es ${usuario.nombre} ${usuario.apelleido} vivo en la ciudad de ${usuario.address.city}`);
