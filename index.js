// M O D U L O S  N O D E
// var cowsay = require('cowsay');
const fs = require('fs');

const inicio = require('./inicio');
const nudo = require('./nudo');
const final = require('./final');


// V A R I A B L E S 

// T I P O S   D E  V A R I A B L E S
// var muchasPalabras // Camel Case  <---- Por convencion es la mejor forma  --->
// var muchas-palabras // dash Case  - No funciona en variable con guion medio por que el guion funcionaria como resta, a menos que sea string
// var muchas_palabras // snake Case

const personaje = "Andy";
const personaje2 = "Natasha";
const personaje4 = "Richie";
const personaje3 = "Vick";

const edad = Math.round(Math.random() * 100);
const villano = "Rich";
const lugar = "En far far away";
const hobby = "programar";

// // Funcion Callback - La declaras
// fs.readFile('personaje.txt', 'utf-8', leerArchivo)


// C A R G A   A S I N C R O N A     
// Funcion Anonima 
fs.readFile('personajes.txt', 'utf-8', function(err, contenido) { //El primer parametro siempre es el error
    if (err) {//Si err existe
        throw err;
    }


    //Con el Metodo Split separamos elementos String guardandolos en un array,
    //en este caso los separo basandose en la coma de separacion que hay entre ellos
    const personajes = contenido.split(',');
    const numeroPersonaje = Math.floor(Math.random() * personajes.length);
    const personajeRandom = personajes[numeroPersonaje];

    const historiaCompleta = juntarHistoria(personajeRandom); //NO es la misma que la variable de abajo, por el scoope 

    console.log(historiaCompleta);
    console.log(personajes.length); //Cuenta el numero de elementos que hay en el array
    // console.log(personajes[personajes.length - 1]); //Trae el ultimo personaje de la lista
    // console.log(personajes[2]); //Imprime el personaje que tiene la posicion 2 en el array
    console.log(personajeRandom); //Imprime un personaje diferente ya que se ocupo Random y floor
})



// El SCOOPE 


// P A R T E S   D E   H I ST O R I A

// a las Funciones siempre darles nombre con verbos (acciones)
function juntarHistoria(personaje) {

    const introHistoria = inicio.historia(personaje, personaje2, personaje3, personaje4, hobby);
    const nudoHistoria = nudo.historia(personaje,personaje2, personaje3, personaje4,lugar,villano,hobby, edad);
    const finalHistoria = final.historia(personaje,personaje2, personaje3, personaje4,lugar,villano,hobby, edad);
    const historiaCompleta = introHistoria + nudoHistoria + finalHistoria;

    return historiaCompleta;
}