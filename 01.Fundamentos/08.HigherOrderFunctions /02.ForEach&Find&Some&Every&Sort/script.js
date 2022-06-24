// Exercícios do conteúdo
// const sumFixAmount = (amount) => {
//     return (number) => amount + number;
//   }

//   const initialSum = sumFixAmount(15)
//   console.log(initialSum(5));
//   const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };

//   repeat(5, console.log);


const listaNomes = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva', 'Matheus Eduardo', 'Mayara Furtado', 'Antonio Eduardo', 'Beatriz Furtado', 'Eduarda Sousa']
const employees = [];

const newUserEmail = (name) => {
	return ({
		Nome: name,
		Email: `${name.toLowerCase().replace(' ', '_')}@trybe.com`,
	});
}

const newEmployees = (nomes, callback) => {
  nomes.forEach((element, index) => {
    employees[index] = callback(element);
  });
  return employees;
};
console.log(newEmployees(listaNomes, newUserEmail));

// console.log(employees);

// const employeesAddAges = (listaColaboradores) => {
//   for (let index = 0; index < listaColaboradores.length; index += 1) {
//     employees[index].Age = listaColaboradores[index].Nome.replace(' ', ''). length * 3;
//   }
//   return employees;
// }

const employeesAddAges = (lista) => {
  lista.forEach((element, index) => {
    employees[index].Age = element.Nome.replace(' ', ''). length * 3;
  });
  return employees;
}
employeesAddAges(employees);
console.table(employees);

const youngling = (lista) => {
  return lista.find(element => element.Age <= 30);
}
console.log(youngling(employees));
