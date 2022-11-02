// Require the dev-dependencies
const app = require('../../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Resources declarations
const { expect } = chai;
chai.use(chaiHttp);

// Constants
const mockChocolate = {
  "id": 1,
  "name": "Mint Intense",
  "brandId": 1
};
const mockBrand = {
  "id": 1,
  "name": "Lindt & Sprungli"
};


// Test Routes
// GET /chocolates
describe('Teste para o arquivo app.js', () => {
  describe('Teste para o GET /chocolates', () => {
    it('Testando o endpoint /chocolates', async () => {
      const response = await chai.request(app).get('/chocolates');
      expect(response).to.have.status(200);
      expect(response.body).to.be.instanceOf(Array);
    });

    it('Testando o endpoint /chocolates/:id', async () => {
      const response = await chai.request(app).get('/chocolates/1');
      expect(response).to.have.status(200);
      expect(response.body).to.be.instanceOf(Object);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('brandId');
      expect(response.body.id).to.equal(mockChocolate.id);
      expect(response.body.name).to.equal(mockChocolate.name);
      expect(response.body.brandId).to.equal(mockChocolate.brandId);
    });

    it('Testando o endpoint /chocolates/:id com id inválido', async () => {
      const response = await chai.request(app).get('/chocolates/99');
      expect(response).to.have.status(404);
    });
  });

  describe('Teste para o GET /brands', () => {
    it('Testando o endpoint /brands', async () => {
      const response = await chai.request(app).get('/brands');
      expect(response).to.have.status(200);
      expect(response.body).to.be.instanceOf(Array);
    });

    it('Testando o endpoint /brands/:id', async () => {
      const response = await chai.request(app).get('/brands/1');
      expect(response).to.have.status(200);
      expect(response.body).to.be.instanceOf(Object);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('name');
      expect(response.body.id).to.equal(mockBrand.id);
      expect(response.body.name).to.equal(mockBrand.name);
    });
    
    it('Testando o endpoint /brands/:id com id inválido', async () => {
      const response = await chai.request(app).get('/brands/99');
      expect(response).to.have.status(404);
    });
  });
});
