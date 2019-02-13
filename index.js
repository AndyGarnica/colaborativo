// var cowsay = require('cowsay');
// Modulos
const inicio = require('./inicio');
const nudo = require('./nudo');
const final = require('./final');
const fs = require('fs')


// Variables de generacion
const  personaje = "Andy";
const  personaje2 = "Natasha";
const  personaje3 = "Vick";
const  personaje4 = "Richie";
const  edad = Math.round(Math.random() * 100);
const  villano = "Rich";
const  lugar = "En far far away";
const  hobby = "programar";

fs.readFile('./personajes.txt', 'utf-8', function(err, contenido){
  if(err){ // si error existe
    throw err;
  }

  const personajes = contenido.split(',');
  const numeroPersonaje = Math.floor(Math.random() * personajes.length);
  const personajeRandom = personajes[numeroPersonaje];
  const historiaCompleta = juntarHistoria(personajeRandom);

  console.log(personajes);
  console.log(numeroPersonaje);
  console.log(personajeRandom);
  console.log(historiaCompleta);

  fs.writeFile('historia.txt', historiaCompleta, function(err) {
    if(err) {
      throw err;
    }
  });

});


// Partes de historia

function juntarHistoria(personajeRandom){
  const inicioHistoria = inicio.historia(personajeRandom);
  const nudoHistoria = nudo.historia(personaje,personaje2, personaje3, personaje4,lugar,villano,hobby, edad);
  const finalHistoria = final.historia(personaje, personaje2, personaje3, personaje4);
  const historiaCompleta = `${inicioHistoria} ${nudoHistoria}${finalHistoria}`;

  return historiaCompleta;
}


// escribir historia

//console.log(inicio.historia(personaje, personaje2, personaje3, personaje4, hobby), nudo.historia(personaje,personaje2, personaje3, personaje4,lugar,villano,hobby, edad), final.historia(personaje, personaje2, personaje3, personaje4));
