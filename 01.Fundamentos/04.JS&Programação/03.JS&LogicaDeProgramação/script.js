// 1. Com base nessas informações, crie um algoritmo que
// retorne o fatorial de 10.

let number = 10;
let somaFatorial = 1;

for (let index = 1; index <= number; index += 1) {
  somaFatorial *= index;
}
// console.log(somaFatorial);

// 2. Agora, desenvolva um algoritmo que é capaz de
// inverter uma palavra. Por exemplo, a palavra "banana"
// seria invertida para "ananab". Utilize a string abaixo
// como exemplo, depois troque por outras para verificar
// se seu algoritmo está funcionando corretamente.

let string = "Mayara Furtado Bezerra Azevedo";
let stringInvertida = string.split("").reverse().join("");
// console.log(stringInvertida);

// 3. Escreva dois algoritmos: um que retorne a maior
// palavra deste array e outro que retorne a menor.
// Considere o número de caracteres de cada palavra.

let palavras = ["java", "javascript", "python", "html", "css"];
let maiorPalavra = "";
for (let index = 0; index < palavras.length; index += 1) {
  if (maiorPalavra.length < palavras[index].length) {
    maiorPalavra = palavras[index];
  }
}
// console.log(maiorPalavra);

let menorPalavra = palavras[0];
for (let index = 0; index < palavras.length; index += 1) {
  if (menorPalavra.length > palavras[index].length) {
    menorPalavra = palavras[index];
  }
}
// console.log(menorPalavra);

// 4. Um número primo é aquele divisível apenas por 1 e
// por ele mesmo. Sabendo disso, escreva um algoritmo que
// retorne o maior número primo entre 0 e 50.

// Primeira parte do problema - separar os números primos
// com base na faixa de números informada:
let numero = 50;
let array = [];

for (let index = 0; index <= numero; index += 1) {
  let contador = 0;
  for (let index2 = 0; index2 <= numero; index2 += 1) {
    if (index % index2 === 0) {
      contador += 1;
    }
  }
  if (contador === 2) {
    array.push(index);
  }
}
console.log("Este é o array de números primos: " + array);

// Segunda parte do problema - Encontrar o maior número
// primo na faixa de números primos armazenados no Array
let maiorPrimo = 0;
for (let index = 0; index < array.length; index += 1) {
  if (maiorPrimo < array[index]) {
    maiorPrimo = array[index];
  }
}
console.log(
  "Este é o maior número primo encontrado na faixa de números informada: " +
    maiorPrimo
);
