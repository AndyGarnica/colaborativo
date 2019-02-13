
// Modulos

// const cowsay = require('cowsay');
const fs = require('fs');
const inicio = require('./inicio');
const nudo = require('./nudo');
const final = require('./final');


// Variables de generacion

const  personaje = "Andy";
const  personaje2 = "Natasha";
const personaje4 = "Richie";
const  personaje3 = "Vick";

const  edad = Math.round(Math.random() * 100);
const  villano = "Rich";
const  lugar = "En far far away";
const  hobby = "programar";

fs.readFile('personajes.txt', 'utf-8', function(err, contenido){
    if(err){
        throw err;
    }
    
    const personajes = contenido.split(',');
    const numeroPersonaje = Math.floor(Math.random()* personajes.length);  
    console.log(personajes.length);
    const personajeRandom = personajes[numeroPersonaje]
 
    const historiaCompleta = juntarHistoria(personajeRandom);

    // Escribir historia

    console.log(historiaCompleta); 

    console.log(personajes);
    console.log(numeroPersonaje);
    console.log(personajeRandom);
});


// Partes de historia

function juntarHistoria(personaje) {
    const inicioHistoria = inicio.historia(personaje, personaje2, personaje3, personaje4, hobby);
    const nudoHistoria = nudo.historia(personaje,personaje2, personaje3, personaje4,lugar,villano,hobby, edad);
    const finalHistoria = final.historia(personaje,personaje2, personaje3, personaje4,lugar,villano,hobby, edad);
    const historiaCompleta= inicioHistoria + nudoHistoria + finalHistoria
    return historiaCompleta;
}



