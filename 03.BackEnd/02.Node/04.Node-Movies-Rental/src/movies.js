const { readFile } = require('fs').promises;
const path = require('path');

const PATH_NAME = './movies.json';

async function readMovies() {
  try {
    const data = await readFile(path.resolve(PATH_NAME), 'utf8');
    const movies = JSON.parse(data);
    return movies;
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

module.exports = readMovies;