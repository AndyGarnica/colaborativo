
//MODULOS
// var cowsay = require('cowsay');
const inicio = require('./inicio');
const nudo = require('./nudo');
const final = require('./final');
const fs= require ('fs');

//Variables de generacion
const  personaje = "Andy";
const  personaje2 = "Natasha";
const personaje4 = "Richie";
const  personaje3 = "Vick";
const  edad = Math.round(Math.random() * 100);
const  villano = "Rich";
const  lugar = "En far far away";
const  hobby = "programar";

fs.readFile('personajes.txt', 'utf-8', function(err,contenido){
  if (err){
    throw err;
  }

  const personajes = contenido.split (',');
  const numeroPersonaje= Math.floor(Math.random()*personajes.length);
  const personajeRandom = personajes[numeroPersonaje];
  const historiaCompleta = juntarHistoria(personajeRandom);
  //console.log(personajes.length);
  //console.log(personajes [3]);
  console.log(personajes);
  console.log(numeroPersonaje);
  console.log(personajeRandom);
  //Escribir historiaCompleta
  console.log(historiaCompleta);
  fs.writeFile('historia.txt',historiaCompleta,function(err){
    if (err){
      throw err;
    }
  });

});

//Esto es una funcion declarada
//function leerArchivo (){

//}
//Partes de historia
function juntarHistoria (personajeRecibido){
  const introHistoria = inicio.historia(personajeRecibido, personaje2, personaje4, personaje3, hobby);
  const finalHistoria = final.historia(personajeRecibido, personaje2, personaje3, personaje4, edad, villano, lugar, hobby);
  const historiaCompleta = introHistoria + finalHistoria;
  return historiaCompleta
}
//console.log(inicio.historia(personaje, personaje2, personaje3, personaje4, hobby), nudo.historia(personaje,personaje2, personaje3, personaje4,lugar,villano,hobby, edad), final.historia(personaje,personaje2, personaje3, personaje4,lugar,villano,hobby, edad));

//Nuestros scopes se definen por las variables dentro de nuestra function
