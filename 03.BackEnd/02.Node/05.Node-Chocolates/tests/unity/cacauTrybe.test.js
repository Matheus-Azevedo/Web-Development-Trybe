// Requires modules
const chai = require('chai');
const { getChocolate, getBrands, readCacauTrybeFile } = require('../../src/cacauTrybe');

// Resources declarations
const { expect } = chai;

// Unity tests
describe('Testes do arquivo cacauTrybe.js', function () {
  describe('Testes da função getChocolate', function () {
    it('Testa se a função getChocolate retorna um array', async function () {
      const chocolates = await getChocolate();
      expect(chocolates).to.be.instanceOf(Array);
    });
    
    it('Testa se a função getChocolate retorna um array com 4 chocolates', async function () {
      const chocolates = await getChocolate();
      expect(chocolates).to.have.lengthOf(4);
    });
  });

  describe('Testes da função getBrands', function () {
    it('Testa se a função getBrands retorna um array', async function () {
      const brands = await getBrands();
      expect(brands).to.be.instanceOf(Array);
    });

    it('Testa se a função getBrands retorna um array com 3 marcas', async function () {
      const brands = await getBrands();
      expect(brands).to.have.lengthOf(3);
    });
  });

  describe('Testes da função readCacauTrybeFile', function () {
    it('Testa se a função readCacauTrybeFile retorna um objeto', async function () {
      const dataFile = await readCacauTrybeFile();
      expect(dataFile).to.be.instanceOf(Object);
    });
  });
});
