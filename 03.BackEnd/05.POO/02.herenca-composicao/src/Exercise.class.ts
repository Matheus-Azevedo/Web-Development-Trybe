import { IPerson } from "./Exercise.interface";
import { randomCharacter } from "./Exercise.functions";

class Person implements IPerson {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get getName(): string {
    return this.name;
  }

  get getAge(): number {
    return this.age;
  }

  set setName(name: string) {
    if (name.length >= 3) {
      this.name = name;
    }
  }

  set setAge(age: number) {
    if (!(age > 120) && !(age < 0)) {
      this.age = age;
    }
  }

}

const firstPerson = new Person("João", 20);
const secondPerson = new Person("Maria", 25);
console.table(firstPerson);
console.table(secondPerson);

class Estudante extends Person {
  private matricula: string;
  public notasDosExames: number[];
  public notasDosTrabalhos: number[];

  constructor(name: string, age: number) {
    super(name, age);
    this.matricula = randomCharacter(16);
    this.notasDosExames = [];
    this.notasDosTrabalhos = [];
  }

  get getMatricula(): string {
    return this.matricula;
  }

  get getNotasDosExames(): number[] {
    return this.notasDosExames;
  }

  get getNotasDosTrabalhos(): number[] {
    return this.notasDosTrabalhos;
  }

  set setNotasDosExames(nota: number) {
    if (this.notasDosExames.length >= 4) {
      console.log("Número máximo de notas de exames atingido");
    }
    if (nota >= 0 && nota <= 10) {
      this.notasDosExames.push(nota);
    }
  }

  set setNotasDosTrabalhos(nota: number) {
    if (this.notasDosTrabalhos.length >= 2) {
      console.log("Número máximo de notas de trabalhos atingido");
    }
    if (nota >= 0 && nota <= 10) {
      this.notasDosTrabalhos.push(nota);
    }
  }

}

const firstStudent = new Estudante("Jorge", 20);
const secondStudent = new Estudante("Maroca", 25);
firstStudent.setNotasDosExames = 10;
firstStudent.setNotasDosExames = 9;
firstStudent.setNotasDosExames = 8;
firstStudent.setNotasDosExames = 7;
firstStudent.setNotasDosTrabalhos = 10;
firstStudent.setNotasDosTrabalhos = 9;

secondStudent.setNotasDosExames = 10;
secondStudent.setNotasDosExames = 9;
secondStudent.setNotasDosExames = 8;
secondStudent.setNotasDosExames = 7;
secondStudent.setNotasDosTrabalhos = 10;
secondStudent.setNotasDosTrabalhos = 9;
console.log(firstStudent);
console.log(secondStudent);

firstStudent.setNotasDosExames = 6;
secondStudent.setNotasDosExames = 6;

// console.log(firstStudent);
// console.log(secondStudent);

export { Person };