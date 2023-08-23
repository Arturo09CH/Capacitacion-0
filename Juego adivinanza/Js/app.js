const min = 1;
const max = 10;

let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let intentosNegativos =4;
let mensaje = '';
let numeroIngresado = 0;
do{
    numeroIngresado = parseInt(prompt(`Por favor ingresa un numero entre el ${min} y ${max}` + mensaje+ '. Intentos disponibles: ' + intentosNegativos));
    intentosNegativos--
    if (numeroIngresado > secretNumber){
        mensaje = ', debes ingresar un numero menor a ' + numeroIngresado;
    }else if (numeroIngresado < secretNumber){
        mensaje = ', debes ingresar un numero mayor ' + numeroIngresado;
    }else if (numeroIngresado == secretNumber){
        alert(`Felicidades has completado este juego.`);
        break;
    } 
    if (intentosNegativos === 0){
        alert(`Lo siento tienes ${intentosNegativos} intentos disponibles`);
        break;
    }
}while(numeroIngresado != secretNumber);
