export class Car {
  public brand: string;
  public color: string;
  public doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk() {
    console.log('Beep!');
  }
  turnOn() {
    console.log('Turning on the car...');
  }
  turnOff() {
    console.log('Turning off the car...');
  }
  speedUp() {
    console.log('Speeding up...');
  }
  slowDown() {
    console.log('Slowing down...');
  }
  stop() {
    console.log('Stopping...');
  }
  turn(direction: string) {
    console.log(`Turning ${direction}...`);
  }
}