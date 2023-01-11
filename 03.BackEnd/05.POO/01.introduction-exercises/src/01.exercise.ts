class Estudante {
  private _matricula: number;
  private _nome: string;
  private _prova1: number;
  private _prova2: number;
  private _prova3: number;
  private _prova4: number;
  private _trabalho1: number;
  private _trabalho2: number;

  constructor() {
    this._matricula = 0;
    this._nome = '';
    this._prova1 = 0;
    this._prova2 = 0;
    this._prova3 = 0;
    this._prova4 = 0;
    this._trabalho1 = 0;
    this._trabalho2 = 0;
  }

  get getMatricula(): number {
    return this._matricula;
  }
  
  set setMatricula(matricula: number) {
    this._matricula = matricula;
  }

  get getNome(): string {
    return this._nome;
  }

  set setNome(nome: string) {
    this._nome = nome;
  }

  get getProva1(): number {
    return this._prova1;
  }

  set setProva1(prova1: number) {
    this._prova1 = prova1;
  }

  get getProva2(): number {
    return this._prova2;
  }

  set setProva2(prova2: number) {
    this._prova2 = prova2;
  }

  get getProva3(): number {
    return this._prova3;
  }

  set setProva3(prova3: number) {
    this._prova3 = prova3;
  }

  get getProva4(): number {
    return this._prova4;
  }

  set setProva4(prova4: number) {
    this._prova4 = prova4;
  }

  get getTrabalho1(): number {
    return this._trabalho1;
  }

  set setTrabalho1(trabalho1: number) {
    this._trabalho1 = trabalho1;
  }

  get getTrabalho2(): number {
    return this._trabalho2;
  }

  set setTrabalho2(trabalho2: number) {
    this._trabalho2 = trabalho2;
  }

  public sumProvas(): number {
    return this._prova1 + this._prova2 + this._prova3 + this._prova4;
  }

  public mediaProvas(): number {
    return this.sumProvas() / 4;
  }
  
}

export { Estudante }