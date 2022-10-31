const imc = require('./imc');

const message = console.log('Calculadora de IMC');

const resultado = imc.calculaIMC();

const classification = imc.classificaIMC(resultado);

console.log(`Seu IMC é: ${resultado}`);
console.log(`Você está: ${classification}`);
