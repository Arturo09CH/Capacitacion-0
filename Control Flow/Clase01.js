// CONDICION IF

let age = 21;

if (age >= 18){
    // console.log("Puedes tramitar tu INE.")
}

//Funciones añadidas.
let age1 = 17,
    name = 'Arturo';

if (name == 'Arturo'){
    if (age1 >= 17){
        // console.log("You can drive.");
    }
};

//Utilizando el operador and &&
if (name == 'Arturo' && age1 >= 17){
    // console.log("You can drive.");
}



//CONDICION IF ELSE.

//Estructura.
// if(condicion){
//     //...
// }
// else{
//     //...
// };

let age3 = 16;

if (age3 >= 18){
    // console.log("Puedes tramitar tu INE.")
}
else{
    edadFaltante = 18 - age3;
    // console.log(`Eres menor de edad, te faltan ${edadFaltante} años para poder tramitar tu INE`);
}


// Utilizando el operador and &&
let contry = 'USA',
    age4 = 17;
let mensaje;

if (contry === 'USA' && age4 >= 18){
    mensaje = 'Puedes obtener tu licencia';
}
else{
    mensaje = 'Lo siento!!! no puedes tramitar tu licencia.';
}
// console.log(mensaje)



//CONDICION IF ELSE if

//Estructura.
// if (condicion1){
//     //ejecutar sentencia....
// }else if (condition2) {
//     //ejecutar sentencia....
// }else if (condition3) {
//     //ejecutar sentencia....
// }else if (condition4) {
//     //ejecutar sentencia....
// } else {
//     //ejecutar sentencia....
// }

let month = 4,
    nameMonth;

if (month == 1){
    nameMonth = 'Enero';
}else if (month == 2) {
    nameMonth = 'Febrero';
}else if(month == 3){
    nameMonth = 'Marzo';
}else if(month == 3){
    nameMonth = 'Abril';
}else if(month == 4){
    nameMonth = 'Mayo';
}else{
    nameMonth = 'invalid month';
};
9
// console.log(nameMonth);

let peso = 71, estatura = 1.75, msj;

let imc = peso / (estatura*estatura);

if (imc < 18.5){
    msj = 'Underweight';
}else if(imc >= 18.5 && imc <=24.9 ) {
    msj = 'Healthy weight';
}else if (imc >= 25 && imc <= 29.9){
    msj = 'OverWeight';
}else {
    msj = 'Obesity';
};

// console.log(msj);
// console.log(imc);

//OPERADOR TERNARIO

// let edad = 21, message;
// edad >=18 ?(message = 'Puedes tramitar tu licencia') : (mensaje = 'No puedes tramitar tu licencia.');
// // console.log(message);

// let edad = 21, message;
// message = edad >= 18 ?'Puedes tramitar tu licencia' : 'No puedes tramitar tu licencia.';

// console.log(message);

// let fruta = false;

// let newFruta = fruta 
// ? (console.log('la fruta es pera'), '/admin')
// : (console.log('No es fruta'), '/404');

// console.log(newFruta)


///// OBJETO SPREAD (...)/////
let color = ['rojo', 'amarillo', 'azul'];
let colores = ['morado', 'blanco', 'negro'];

let color1 = [...color, ...colores];
// console.log(color1);

let fig = {
    radius : 10
};

// Crear un objeto mas una propiedad adicional
let fig1 = {
    ...fig,
    color: 'Negro'
}
// console.log(fig);
// console.log(fig1);

//clonar objetos.
let figura = {...fig1};
// console.log(figura);


const mascota ={
    nombre: 'Tobi',
    Raza : {
        color: 'negro'
    }
};

const masc = {
    ...mascota
};

masc.Raza= 'blanco';
// console.log(masc);


// // Combinar objetos
// const persona1 = {
//     nombre: 'Arturo'
// }
// const persona2 = {
//     edad: 21
// }

// const clonepreson={
//     ...persona1,
//     ...persona2
// };

// console.log(clonepreson)
// const circle ={
//     radius: 10
// }
// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }
//     set diameter(value){
//         this.radius = value /2;
//         console.log('SET', value)
//     }
//     get diameter(){
//             return this.radius * 2;
//     }
// };

// let circle = new Circle(100);
// let cloneCircle1 = Object.assign(circle,{
//     diameter: 200
// });
// let cloneCircle2 = {
//     ...circle
// };

const blueSquare ={
    lenght : 100,
    color : 'red'
}
Object.defineProperty(blueSquare, 'color',{
    value: 'red',
    enumerable: true,
    writable: false
});

// console.log(blueSquare);

const style = {
    color: 'green'
}

const greenSquare = {
    ...blueSquare,
    ...style
};


// console.log(greenSquare);
