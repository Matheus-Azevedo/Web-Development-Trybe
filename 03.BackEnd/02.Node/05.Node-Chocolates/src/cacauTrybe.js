// Requires modules
const { readFile } = require('fs').promises;
const { join } = require('path');
// Paths
const CACAU_PATH = './resources/cacauTrybeFile.json';

async function readCacauTrybeFile() {
  try {
   const data = readFile(join(__dirname, CACAU_PATH), 'utf8');
   return JSON.parse(data);
  } catch (error) {
   return null;
  }   
}

async function getChocolate() {
  const cacau = await readCacauTrybeFile();
  return cacau.chocolate;
}

async function getBrands() {
  const cacau = await readCacauTrybeFile();
  return cacau.brands;
}

module.exports = {
  getChocolate,
  readCacauTrybeFile,
  getBrands,
};
