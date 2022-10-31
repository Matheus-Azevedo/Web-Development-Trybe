const { readFile, writeFile } = require('fs').promises;
const path = require('path');
const readlineSync = require('readline-sync');

const PATH_NAME = './simpsons.json';

async function readSimpsons() {
  try {
    const data = await readFile(path.resolve(PATH_NAME), 'utf8');
    const simpsons = JSON.parse(data);
    console.log(`Arquivo lido com sucesso: ${simpsons.length} registros encontrados.`);
    console.log(`Estes são os personagens da série: ${simpsons
      .map((simpson) => simpson.name).join(', ')}`);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

readSimpsons();

async function writeSimpsons() {
  try {
    const data = await readFile(path.resolve(PATH_NAME), 'utf8');
    const simpsons = JSON.parse(data);
    const newSimpson = {
      id: simpsons.length + 1,
      name: readlineSync.question('Qual o nome do personagem? '),
    };
    simpsons.push(newSimpson);
    await writeFile(path.resolve(PATH_NAME), JSON.stringify(simpsons));
    console.log('Arquivo atualizado com sucesso!');
  } catch (err) {
    console.error(`Erro ao atualizar o arquivo: ${err.message}`);
  }
}
writeSimpsons();
