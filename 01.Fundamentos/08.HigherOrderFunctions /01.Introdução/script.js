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

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const listaNomes = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva']

const newUserEmail = (name) => {
	return ({
		Nome: name,
		Email: `${name.toLowerCase().replace(' ', '_')}@trybe.com`,
	});
}

const newEmployees = (nomes, callback) => {
  const employees = {};
	for (let index = 0; index < nomes.length; index += 1) {
		employees[`id${index}`] = callback(nomes[index]);
	}
	
	// const employees = {
  //   id1: newUserEmail('Pedro Guerra'),
  //   id2: newUserEmail('Luiza Drumond'),
  //   id3: newUserEmail('Carla Paiva'),
  // };
  return employees;
};
console.log(newEmployees(listaNomes, newUserEmail));
