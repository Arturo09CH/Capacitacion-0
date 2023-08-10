var x = 10;
var y = 20;

a = x + y;

console.log(a);

/************************************************/

// definir variales con tipo let
let x = 20;

function add(a,b){
   return a + b;
}
let resultado = add(2, 4);

console.log(resultado);

// UTILIZANDO EL IF
/******************************************************/
let N1 = 10, N2 = 2;


function dividir (N1, N2){
    if (N2 == 0){ //si N2 es igual a zero se hace la exepcion y lanza un mensaje.
        throw 'No puedes divir con un valor zero'
    }
    return N1/N2;
}
let res = dividir(N1, N2);
console.log(res);

// DECLARACIONES DE ARRAYS
let item = ["pera","mango","sandia","manzana",2];
for (let i = 0; i < item.length; i++){  //se declara la varaiable, comparamos si es menor que, 
    console.log(item[i]);
}
for (let item1 of item){        
    console.log(item1);
}
console.log(item.length); //imprimimos la longitud del array

console.log(item[3]); //imprimimos un elemento de nuestro array en una rango especificado


let dat;
console.log(dat); //undefined