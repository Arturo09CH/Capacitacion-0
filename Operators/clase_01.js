/////OPERADORES ARITMETICOS/////

let suma = 10 + 20;
// console.log(suma);

//Suma con variables
let saldo1 = 100,
    saldo2 = 50;
// console.log(saldo1 + saldo2);

//Suma de (string).
let number1 = '15',
    number2 = '30';
// console.log(number1 + number2);

let x = 'Hola', y = '12';
// t = x + y;
// console.log(t); //Hola12


/////Operador de susbtracción resta (-)
let resta = 20 - 15;
// console.log(resta); //5


/////////Uso de operadores aritmeticos en objetos.//////
let energy = {
    valueOf(){
        return 100;
    }

}

val = energy + 20;
// console.log(val);
val = energy / 10;
// console.log(val);
val = energy - 5;
// console.log(val);

let val1 = 10
val1 += energy;
// console.log(val1);

//ejemplo de asignacion (+=)
let presupuestoAdcicional = 300;
const nuevoGasto = 50;
presupuestoAdcicional += nuevoGasto; //presupuestoAdicional = presupuestoAdicional + nuevoGasto;
// console.log(`El nuevo presupuesto adicional es: $${presupuestoAdcicional}.`);


//METODO valueOf()
let Cuenta = {
    nombre : 'Arturo',
    apellidoPaterno: 'Hernández',
    fondo: {
        cuenta1: '700', // Se tiene que convertir a Number
        Cuenta2: 300,
    },
    calcularTotalCuentas:  function(){

        // let conversionCuenta1 = Number(this.fondo.cuenta1); // Se convierte a a Number la propiedad cuenta1.
        return +this.fondo.cuenta1 + this.fondo.Cuenta2;

    },
    valueOf: function(){
        return this.calcularTotalCuentas();
    }
    
};
const totalCuenta = Cuenta.calcularTotalCuentas();
// console.log(`El usuario ${Cuenta.nombre} ${Cuenta.apellidoPaterno} tiene un total de ahorro de: ${totalCuenta}.`);



// //REMAINDER/////////
let p = 10 % 4;
// console.log(p); //2

let a = '10' % 3;
// console.log(a); //1

// Utilizamos el operador remainder para identificar los elementos del array son numeros Par o Impar
let numeros= [1,2,3,4,5,6,7,8,9];
let nm1 = numeros[5] % 2; // El remainder es 0 por lo que no es un numero par
if (nm1 == 0){
    // console.log(`${nm1}: Es numero par`);
}
else{
    // console.log(`${nm1}: Es numero impar`);
};


//De la misma manera utilizamos el operador remainder pero con forEach para imprimir todos los elementos del array.
let listNumeros = [1,2,3,4,5,6,7];
function esParImpar (numer){
    if (numer % 2 === 0){
        return "par";
    }
    else{
        return "impar";
    }
}
listNumeros.forEach(numer =>{
    // console.log(`el numero ${numer} es ${esParImpar(numer)}`);
});


const mod = (divident, divisor) => ((divident % divisor) + divisor) % divisor;
// console.log("remainder:", -5 % 3);
// console.log("remainder:", mod(-5,3));


/////OPERADORES DE ASIGNACIION EN JAVASCRIP/////
// let a1 = b;

let counter = 10;
    counter = counter +10
// console.log(counter);

let result = 10 && " " && 3 ;
// console.log(result); //3

// Operadores unitarios
let s = '10';
let as = +s; //let as = Number(s);
// console.log(typeof(as)); //number
// console.log(as); //10

let f = false,
    t = true;
// console.log(`valor de f: ${+f}. valor de t:${+t}`);

//Operadores de incremento.
let man = 10;
let man1 = ++man + 5;

console.log(man);//11
console.log(man1);//16

let man2 = ++man1;
console.log(man2);//17


// console.log(man2);//15


//Ejemplo utilizando el operador logico (&&) en un login.
const users = "Arturo";
const password = "Arturo12_" 

const usersCorrect = "Arturo";
const passwordCorrect = "Arturo123_"

function login(){
    if (users === usersCorrect && password === passwordCorrect){
        // console.log("Acceso correcto");
    }
    else
    {
        // console.log("Verifica tu Usuario o contraseña");
    }
}
console.log(login());

//UTILIZANDO EL OPERRADOR && para descuentos
const UsersPremium = true;
const totalCompra = 500;
const cantProductos = 5;
let mensaje;
function descuentos_(){
    if (UsersPremium && totalCompra > 200 && cantProductos >= 5 ){
        const descuent = totalCompra * 0.20;
        const pagoTotal = totalCompra - descuent;
        console.log(`Felicidades obtuviste un 20% de tu compra, del monto total ${totalCompra} ahora solo vas a pagar $${pagoTotal} `);
    }
    else{
        console.log(`El pago de tu compra es: $${totalCompra}`);
    }

}
// console.log(descuentos_());
// console.log(typeof(totalCompra))

let title;
// title ||= "newtitle";

// console.log(title); //newtitle
