
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
};

const p1 = new Person("Piyavach", 17);
p1.greet();

console.log(p1.hasOwnProperty("name")); // true
console.log("greet" in p1); // true



function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

const a1 = new Animal("Dog");
a1.speak(); // Dog makes a sound

// สร้าง prototype inheritance แบบพื้นฐาน
function Dog(name) {
  Animal.call(this, name); // call constructor of Animal
}

Dog.prototype = Object.create(Animal.prototype); // inherit
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks`);
};

const d1 = new Dog("Lucky");
d1.speak(); // Lucky makes a sound
d1.bark(); // Lucky barks

console.log(d1.__proto__ === Dog.prototype); // true
console.log(Object.getPrototypeOf(d1) === Dog.prototype); // true
console.log(d1 instanceof Dog); // true
console.log(d1 instanceof Animal); // true
