// var cowsay = require('cowsay');
const intro = require('./inicio');
const nudo = require('./nudo');
const final = require('./final');

const  personaje = "Andy";
const  personaje2 = "Natasha";
const personaje4 = "Richie";
const  personaje3 = "Vick";

const  edad = Math.round(Math.random() * 100);
const  villano = "Rich";
const  lugar = "En far far away";
const  hobby = "programar";


console.log(intro.historia(personaje, lugar, edad), nudo.historia(personaje,personaje2, personaje3, personaje4,lugar,villano,hobby, edad));
