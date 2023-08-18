//Operadores de comparacion.
let r1 = 4 < 6;
let r2 = 8 > 6;
let r3 = 6 == 6;

// console.log(r1);//true
// console.log(r2);//true
// console.log(r3); //true

let a = 12,
    b = 13;
comparacion = a > b;
// console.log(comparacion); //false

//Comparando string
let name1 = 'Arturo',
    name2 = 'arturo';
// console.log(name1 > name2); //false

//comparando un boolean con otro valor
// console.log(false < false);
// console.log(false > 1);
// console.log(true > false);
// console.log(true == true);
// console.log(false <= true);
// console.log(true > true);

//Operador logico and &&

let f = false,
    t = true;
// console.log(f && t);

let f1 = true,
    t1 = true;
// console.log(f1 && t1);

//Operador logico || or
let p1 = true,
    p2 = false;
// console.log(p1 || p2); //true

let p3 = false,
    p4 = false;
// console.log(p3 || p4); //false


//Ejemplo utilizando el operador logico (&&) en un login.
const users = "Arturo";
const password = "Arturo12_";

const usersCorrect = "Arturo";
const passwordCorrect = "Arturo123_";

function login(){
    if (users === usersCorrect && password === passwordCorrect){
        console.log("Acceso correcto");
    }
    else
    {
        console.log("Verifica tu Usuario o contraseña");
    }
}
// console.log(login());

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


// Operador de asignacion or ||
let title;
title ||= "newtitle"; 
// console.log(title); //newtitle

let nombre = 'Arturo';

nombre &&= 'Arthur';
console.log(nombre);

let person ={
    nombre: 'Arturo',
    apellidoPaterno: 'Hernández',
    direccion: {
        pais: 'México',
        estado: 'Hidalgo',
        codigoPostal: 43000,
    }
};


person.direccion.pais &&= 'Mx'; //Solo asigna el valor si es truthy
// console.log(person.direccion.pais); //Mx



//Operador de asignacion coalecente nullish ??
// Solo devuelve el sugunddo valor es null o undefined
let fruta= null  ?? 'Manzana'; 
console.log(fruta);



