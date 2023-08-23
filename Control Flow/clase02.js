//SWITCH CASE 
let day =40;
let nameDay;

switch (day) {
    case 1:
        nameDay = 'Lunes';
        break;
    case 2:
        nameDay = 'Martes';
        break;
    case 3:
        nameDay = 'Miercoles';
        break;
   case 4:
        nameDay = 'Jueves';
        break;
    case 5:
        nameDay = 'Viernes';
        break;
    default:
        nameDay = 'invalid day';
}
// // console.log(nameDay);


// let mes = 'OCTUBRE';
// let msj;
// mescorrect = mes.toLowerCase()
// switch (mescorrect){
//     case 'enero':
//     case 'febrero':
//     case 'marzo':
//         msj = `el mes de ${mescorrect} pertenece a  Invierno`;
//         break;
//     case 'abril':
//     case 'mayo':
//     case 'junio':
//         msj = `el mes de ${mescorrect} pertenece a  Primavera`;
//         break;
//     case 'julio':
//     case 'agosto':
//     case 'septiembre':
//         msj = `el mes de ${mescorrect} pertenece a  Verano`;
//         break;
//     case 'octubre':
//     case 'noviembre':
//     case 'diciembre':
//         msj = `el mes de ${mescorrect} pertenece a  Otoño`;
//         break;
//     default:
//         msj = 'El mes ingresado no es valido';
// }
// // console.log(msj);


// /////WHILE LOOP/////
let numero = 1;
while(numero < 10){
    console.log(numero)
    numero +=2;
}

// let num = 4 % 4;
// console.log(num);
// let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
// let mensaje;
// function  obtenerMultiplo(number){
//     if (number %  2 === 0 && number <= 2){
//         return `el ${number} Es multiplo de 2`; 
//     }else if (number % 3 == 0){
//         return`el ${number} Es multiplo de 3`; 
//     }else if (number % 4 == 0){
//         return`el ${number} Es multiplo de 2 y 4 `; 
//     }else if (number % 5 == 0){
//         return`el ${number} Es multiplo de 5`; 
//     }
//     else{
//         return `el valor no es valido`;
//     }
// }
// list.forEach(number =>{
//     console.log(obtenerMultiplo(number));
// })

// let count = 0;
// while(count < 5){
//     console.log(count);
//     count++
// };

// let numeroIngresado;
// let intentos = 0;

// do {
//   numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 100"));

//   if (numeroIngresado === numeroAleatorio) {
//     alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
//     break;
//   } else if (numeroIngresado < numeroAleatorio) {
//     alert("El número ingresado es menor. Intenta con un número más grande.");
//   } else {
//     aler+t("El número ingresado es mayor. Intenta con un número más pequeño.");
//   }

//   intentos++;
// } while (numeroIngresado !== numeroAleatorio);

