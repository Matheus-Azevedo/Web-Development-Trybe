// src/services/employee.service.js

const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

// Eager Loading
// const getById = async (id) => {
//   const employee = await Employee.findOne({
//       where: { id },
//       include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number'] } }], // Exclui o campo number do retorno
//     });
//   return employee;
// }

const getById = async (id) => {
  const employee = await Employee.findOne({
      where: { id },
  });
  return employee;
}

module.exports = { getAll, getById };