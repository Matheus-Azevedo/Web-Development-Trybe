function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//   🚀 Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>

// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>

// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfCalendar() {
  let container = document.getElementById("days");
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let newElement = document.createElement("li");

    if (
      dezDaysList[index] === 24 ||
      dezDaysList[index] === 25 ||
      dezDaysList[index] === 31
    ) {
      newElement.innerText = dezDaysList[index];
      newElement.classList.add("holiday");
      container.appendChild(newElement);
    }
    if (
      dezDaysList[index] === 4 ||
      dezDaysList[index] === 11 ||
      dezDaysList[index] === 18 ||
      dezDaysList[index] === 25
    ) {
      newElement.innerText = dezDaysList[index];
      newElement.classList.add("friday");
      container.appendChild(newElement);
    }
    newElement.innerText = dezDaysList[index];
    newElement.classList.add("day");
    container.appendChild(newElement);
  }
}
createDaysOfCalendar();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

// Adicione a este botão a ID "btn-holiday".

// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

let string = "Feriados";
function createButton(string) {
  let container = document.getElementsByClassName("buttons-container");
  let button = document.createElement("button");
  button.innerText = "Feriados";
  button.setAttribute("id", "btn-holiday");
  container[0].appendChild(button);
}
createButton();

// 🚀 Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function changeHolidaysBackgroundColor() {
  let containerHoliday = document.querySelectorAll(".holiday");
  let button = document.getElementById("btn-holiday");
  button.addEventListener("click", function () {
    for (let index = 0; index < containerHoliday.length; index += 1) {
      if (containerHoliday[index].style.backgroundColor === "green") {
        containerHoliday[index].style.backgroundColor = "rgb(238,238,238)";
      } else {
        containerHoliday[index].style.backgroundColor = "green";
      }
    }
  });
}
changeHolidaysBackgroundColor();

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function createButtonFriday(string) {
  string = "sexta-feira";
  let button = document.createElement("button");
  button.textContent = string;
  button.setAttribute("id", "btn-friday");
  let container = document.getElementsByClassName("buttons-container");
  container[0].appendChild(button);
}
createButtonFriday();

// 🚀 Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function addEventFriday() {
  let containerFriday = document.getElementsByClassName("friday");
  let array = [];
  for (let index = 0; index < containerFriday.length; index += 1) {
    array[index] = containerFriday[index].textContent;
  }
  let button = document.getElementById("btn-friday");
  button.addEventListener("click", function () {
    let containerFriday = document.getElementsByClassName("friday");
    for (let index = 0; index < containerFriday.length; index += 1) {
      if (
        containerFriday[index].textContent === "4" ||
        containerFriday[index].textContent === "11" ||
        containerFriday[index].textContent === "18" ||
        containerFriday[index].textContent === "25"
      ) {
        containerFriday[index].textContent = "SEXTOU";
      } else {
        containerFriday[index].textContent = array[index];
      }
    }
  });
}
addEventFriday();
