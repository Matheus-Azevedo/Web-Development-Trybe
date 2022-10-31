const readlineSync = require('readline-sync');

const calculaIMC = () => {
  const peso = readlineSync.questionInt('What’s your weight? ');
  const altura = readlineSync.questionFloat('What’s your height? ');
  const calculo = peso / (altura * altura);
  return calculo.toFixed(2);
};

const classificaIMC = (resultado) => {
  if (resultado < 18.5) {
    return 'Abaixo do peso';
  } if (resultado < 25) {
    return 'Peso normal';
  } if (resultado < 30) {
    return 'Acima do peso';
  } if (resultado < 35) {
    return 'Obesidade grau 1';
  } if (resultado < 40) {
    return 'Obesidade grau 2';
  }
  return 'Obesidade grau 3';
};

module.exports = { calculaIMC, classificaIMC };