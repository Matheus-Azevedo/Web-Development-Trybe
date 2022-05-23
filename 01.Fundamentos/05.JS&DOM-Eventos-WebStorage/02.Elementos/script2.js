// 🚀 1.Adicione a classe title na tag h1 criada;
// 🚀 2.Adicione a classe description nas 3 tags h3 criadas;
// 🚀 3.Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
// 🚀 4.Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
// 🚀 5.Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// 🚀 6.Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

// 1.
{
  let container = document.querySelector("h1");
  container.className = "title";
}
// 2.
{
  let container = document.getElementsByTagName("h3");
  container[0].className = "description ";
  container[1].className = "description ";
  container[2].className = "description ";
}
// 3.
{
  let container = document.getElementsByClassName("main-content");
  let container2 = document.querySelector(".left-content");
  container[0].removeChild(container2);
}
// 4.
{
  let container = document.querySelector(".right-content");
  container.setAttribute("id", "right-section");
  let container2 = document.getElementById("right-section");
  container2.style.marginRight = "210px";
}
// 5.
{
  let container = document.querySelector("main");
  container.style.backgroundColor = "green";
}
// 6.
{
    let container1 = document.querySelector('ul');
    let container2 = document.querySelectorAll('li');
    container1.removeChild(container2[8]);
    container1.removeChild(container2[9]);
}
