export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  showInfo() {
    console.log(`ชื่อ: ${this.name}, อายุ: ${this.age}`);
  }
}
