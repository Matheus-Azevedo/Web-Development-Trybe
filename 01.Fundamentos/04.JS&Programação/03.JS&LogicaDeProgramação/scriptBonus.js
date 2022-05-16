// 1- Agora vamos trabalhar com algumas formas geométricas!
// Faça um programa que, dado um valor n qualquer, seja
// n > 1, imprima na tela um quadrado feito de asteriscos
// de lado de tamanho n.

// let numero = 10;

// for (let index1 = 0; index1 < numero; index1 += 1) {
//   let string = "";
//   for (let index2 = 0; index2 < numero; index2 += 1) {
//     string += "*";
//   }
//   console.log(string);
// }

// 2- Para o segundo exercício, faça o mesmo que antes,
// mas que imprima um triângulo retângulo com 5 asteriscos
// de base.

// let numero = 5;

// for (let index = 0; index <= numero; index += 1) {
//   let string = "";
//   for (let index2 = 0; index2 < numero; index2 += 1) {
//     if (index2 !== index) {
//       string += "*";
//     } else {
//       break;
//     }
//   }
//   console.log(string);
// }

// 3- Agora inverta o lado do triângulo.

let numero = 5;

for (let index = 0; index <= numero; index += 1) {
  let string = ""; // a string nesse ponto irá reiniciar, dessa forma será impresso na tela apenas quantidade necessária de '*'
  let espaço = "";
  for (let index2 = 0; index2 < numero; index2 += 1) {
    if (index2 !== index) {
      // a estrutura de repetição imprime '*' que serão inseridos na variável a partir da quantidade do index
      string += "*";
    } else {
      break;
    }
  }
  for (let index3 = numero; index3 > 1; index3 -= 1) {
    if (index3 !== index) {
      // a estrutura de repetição invertida imprime ' ' que serão inseridos na variável a partir da quantidade do index
      espaço += " ";
    } else {
      break;
    }
  }
  console.log(espaço + string);
}
