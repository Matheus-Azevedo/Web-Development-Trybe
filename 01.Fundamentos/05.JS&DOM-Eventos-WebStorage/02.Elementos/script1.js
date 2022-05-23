// 🚀 1.Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
// 🚀 2.Adicione a tag main com a classe main-content como filho da tag body;
// 🚀 3.Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
// 🚀 4.Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// 🚀 5.Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// 🚀 6.Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// 🚀 7.Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
// 🚀 8.Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// 🚀 9.Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

// 1.
{
  let container = document.querySelector("body");
  let newElement = document.createElement("h1");
  newElement.textContent = "Exercício 5.2 - JavaScript DOM";
  container.appendChild(newElement);
}
// 2.
{
  let container = document.querySelector("body");
  let newElement = document.createElement("main");
  newElement.className = "main-content";
  container.appendChild(newElement);
}
// 3.
{
  let container = document.querySelector("main");
  let newElement = document.createElement("section");
  newElement.className = "center-content";
  container.appendChild(newElement);
}
// 4.
{
  let container = document.querySelector("section");
  let newElement = document.createElement("p");
  newElement.textContent =
    "Kenshin é um praticante do Hiten Mitsurugi-Ryu ('Sagrada Espada que Voa no Céu'), também conhecido na série como 'estilo de espada ultrasônico', uma ficcional arte antiga de espada. O domínio do estilo permite a Kenshin exercer velocidade e reflexos sobre-humanos, estudar e prever os movimentos do seu oponente no campo de batalha, bem como realizar muitas técnicas poderosas de espada. Entre várias de suas técnicas Hiten Mitsurugi-Ryu e Battojutsu, Kenshin pode utilizar Shinsoku ('Velocidade divina'), que lhe permite rapidamente dominar os oponentes com sua espada antes que eles tenham tempo para reagir. ";
  container.appendChild(newElement);
}
// 5.
{
  let container = document.querySelector("main");
  let newElement = document.createElement("section");
  newElement.className = "left-content";
  container.appendChild(newElement);
}
// 6.
{
  let container = document.querySelector("main");
  let newElement = document.createElement("section");
  newElement.className = "right-content";
  container.appendChild(newElement);
}
// 7.
{
  let container = document.querySelector(".left-content");
  let newElement = document.createElement("img");
  newElement.src = "https://picsum.photos/200";
  newElement.className = "small-image";
  container.appendChild(newElement);
}
// 8.
{
  let container = document.querySelector(".right-content");
  let newElement = document.createElement("ul");
  container.appendChild(newElement);
  let container2 = document.querySelector("ul");

  for (let index = 1; index <= 10; index += 1) {
    let newElement2 = document.createElement("li");
    newElement2.innerText = index;
    container2.appendChild(newElement2);
  }
}
// 9.
{
  let container = document.querySelector("main");
  for (let index = 1; index <= 3; index += 1) {
    let newElement = document.createElement("h3");
    newElement.textContent = "h3" + ' ' + index;
    container.appendChild(newElement);
  }
}
