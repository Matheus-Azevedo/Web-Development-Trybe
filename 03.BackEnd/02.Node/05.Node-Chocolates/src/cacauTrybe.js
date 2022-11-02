// Requires modules
const { readFile } = require('fs').promises;
const { join } = require('path');
// Paths
const CACAU_PATH = './resources/cacauTrybeFile.json';

async function readCacauTrybeFile() {
  try {
   const data = await readFile(join(__dirname, CACAU_PATH), 'utf8');
   return JSON.parse(data);
  } catch (error) {
   return null
  }   
}

async function getChocolate() {
  const data = await readCacauTrybeFile();
  return data.chocolates;
}

async function getBrands() {
  const data = await readCacauTrybeFile();
  return data.brands;
}

module.exports = {
  getChocolate,
  readCacauTrybeFile,
  getBrands,
};
