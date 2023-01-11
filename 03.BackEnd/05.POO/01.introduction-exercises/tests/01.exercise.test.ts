import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Estudante } from '../src/01.exercise';

describe('Teste da classe Estudante', () => {
  describe('Instanciando uma nova classe Estudante' , () => {
    it('Instanciando com sucesso', () => {
      const estudante = new Estudante();
      expect(estudante).to.be.instanceof(Estudante);
    });
    it('Verificando suas propriedades', () => {
      const estudante = new Estudante();
      expect(estudante).to.have.property('_matricula');
      expect(estudante).to.have.property('_nome');
      expect(estudante).to.have.property('_prova1');
      expect(estudante).to.have.property('_prova2');
      expect(estudante).to.have.property('_prova3');
      expect(estudante).to.have.property('_prova4');
      expect(estudante).to.have.property('_trabalho1');
      expect(estudante).to.have.property('_trabalho2');
    });
    it('Verificando os métodos', () => {
      const estudante = new Estudante();
      expect(estudante).to.have.property('sumProvas');
      expect(estudante).to.have.property('mediaProvas');
    });
    it('Verificando os getters e setters', () => {
      const estudante = new Estudante();
      expect(estudante).to.have.property('getMatricula');
      expect(estudante).to.have.property('setMatricula');
      expect(estudante).to.have.property('getNome');
      expect(estudante).to.have.property('setNome');
      expect(estudante).to.have.property('getProva1');
      expect(estudante).to.have.property('setProva1');
      expect(estudante).to.have.property('getProva2');
      expect(estudante).to.have.property('setProva2');
      expect(estudante).to.have.property('getProva3');
      expect(estudante).to.have.property('setProva3');
      expect(estudante).to.have.property('getProva4');
      expect(estudante).to.have.property('setProva4');
      expect(estudante).to.have.property('getTrabalho1');
      expect(estudante).to.have.property('setTrabalho1');
      expect(estudante).to.have.property('getTrabalho2');
      expect(estudante).to.have.property('setTrabalho2');
    });
    it('Verificando se a soma ocorre como o esperado ao chamar o método sumProvas', () => {
      const estudante = new Estudante();
      estudante.setProva1 = 10;
      estudante.setProva2 = 10;
      estudante.setProva3 = 10;
      estudante.setProva4 = 10;
      expect(estudante.sumProvas()).to.be.equal(40);
    });
    it('Verificando se a média ocorre como o esperado ao chamar o método mediaProvas', () => {
      const estudante = new Estudante();
      estudante.setProva1 = 10;
      estudante.setProva2 = 10;
      estudante.setProva3 = 10;
      estudante.setProva4 = 10;
      expect(estudante.mediaProvas()).to.be.equal(10);
    });
  });
});