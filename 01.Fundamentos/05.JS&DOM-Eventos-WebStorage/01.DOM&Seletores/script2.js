/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
-document.querySelector();
-document.querySelectorAll();
-document.getElementById();
-document.getElementsByClassName();
-document.getElementsByTagName();
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// 1.
{
  let tagID = "paragraph-one-content";
  let texto =
    "Sou brasileiro de estatura mediana Gosto muito de fulana mas sicrana é quem me quer Porque no amor quem perde quase sempre ganha Veja só que coisa estranha, saia dessa se pude";
  function changeText(tagID, texto) {
    let container = document.getElementById(tagID);
    container.textContent = texto;
  }
  changeText(tagID, texto);
}
// 2.
{
  let classeID = "main";
  let color = "rgb(76,164,109)";

  function changeClassBackground(classeID, color) {
    let container = document.getElementById(classeID);
    container.style.backgroundColor = color;
  }
  changeClassBackground(classeID, color);
}
// 3.
{
  classeID = "SectionOne";
  let color = "white";
  changeClassBackground(classeID, color);
}

// 4.
{
  tagID = "h1";
  texto = "Ser Brasileiro";
  changeText(tagID, texto);
}

// 5.
{
  tagID = "paragraph-three-content";
  function changeTextFormat(tagID) {
    let container = document.getElementById(tagID);
    container.style.textTransform = 'uppercase'
  }
  changeTextFormat(tagID);
}

// 6.
{
function textExtract() {
    let container = document.querySelectorAll('p');
    let textContent = [];
    for (let index = 0;index < container.length; index += 1) {
        textContent[index] = container[index].textContent;
    }
    for (let index = 0;index < textContent.length; index += 1) {
        console.log(textContent[index]);
    }
}
textExtract()
}