///////////PRIMITIVE VS REFERENCE VALUES//////////////
let mascota = {
    id : 1,
    Tipo : "Perro",
    Nombre : "Tobi",
    Color : "negro"
}

console.log(mascota);

//Agregar una propiedad 
mascota.Raza = "Labrador";

//Cambiar el contenido de una propiedad.
mascota.Color = "Blanco";

//Eliminar la propiedad
delete mascota.Raza;

console.log(mascota); //{ id: 1, Tipo: 'Perro', Nombre: 'Tobi', Color: 'Blanco' }

//Un valor  de referencia te permite crear, modificar, eliminar propiedades en cualquier momento.
//Un valor primitivo no puede tener propiedades.

//Javascrip te permite crear una propiedad a un valor primitivo pero no tendra ningun efecto.
let name = 'Arturo';
name.apellido = 'Hernández';

console.log(name.apellido); //undefined


//Copiando valores 
let n1 = 25;
let n2 = n1;

n2 = n2 +1;
console.log(n1, n2);

//javascrip arrays
let scores = new Array(1,2,3,4);
let scores1 = Array(); //Podemos crear un array sin el operador new.

let score2 = ['pedro', 'pablo', 'arturo']; //creando un array con []

//recorrer elemento con forEach
score2.forEach((elemento) =>{
    console.log(elemento)
});
console.log(score2[0]); //pedro

//cambiar el valor de un elemento del array

score2[2] = 'Monse'; // modificamos el elemento que esta en la posicion 2.
console.log(score2) //[ 'pedro', 'pablo', 'Monse' ]


//obtener el valor de array
console.log(score2.length); //3

//Agregar un elemento al final de nuestro array.
score2.push("Cristian");
console.log(score2); //[ 'pedro', 'pablo', 'Monse', 'Cristian' ]

//Agregar un elemento al inicio de nuestro array
score2.unshift("Sandra");
console.log(score2); //[ 'Sandra', 'pedro', 'pablo', 'Monse', 'Cristian' ]

//Eliminar el ultimo elemento de nuestro array.
score2.pop();
console.log(score2); //[ 'Sandra', 'pedro', 'pablo', 'Monse' ]

//Eliminar un elemento comienzo de un array.
score2.shift();
console.log(score2); //[ 'pedro', 'pablo', 'Monse' ]

//encntrar un  index o un elemento en un array
// score2.indexOf('Monse');
console.log(score2.indexOf('Monse')); //2    esta en la posicion 2.

//Comprobar si un valor es array.
console.log(Array.isArray(score2));