class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

const animalDog = new Animal("Dog");
animalDog.speak(); // Dog makes a sound

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const myDog = new Dog("mocha poodle");
myDog.speak(); // mocha poodle barks


class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
account.withdraw(500);
console.log(account.getBalance()); // 500


class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area()); // 50

const circle = new Circle(3);
console.log(circle.area()); // 28.27...


class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(3, 4)); // 7


class Car {
  constructor(brand) {
    this.brand = brand;
    this.speed = 0;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }

  status() {
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  }
}

const car = new Car("Toyota");
car.accelerate();
car.status(); // Toyota is going at 10 km/h
car.brake();
car.status(); // Toyota is going at 5 km/h
