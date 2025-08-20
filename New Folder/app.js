// let x = 10; // global
// console.log(x); // 10
// function test() {
//   console.log(x); // 10
// }

// if (true) {
//   let z = 30; // block scope
//   console.log(z); // 30
// }
// console.log(z); // ❌ Error

// function outer() {
//   let name = "Mukisa";
//   function inner() {
//     console.log(name); // can access "name"
//   }
//   inner();
// }
// outer();

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter1 = createCounter();
// console.log(counter1()); // 1
// console.log(counter1()); // 2
// console.log(counter1()); // 3

// const person = {
//   greet() {
//     console.log("Hello!");
//   }
// };

// const student = Object.create(person);
// student.name = "John";

// student.greet(); // "Hello!" — found on prototype!

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.greet = function() {
//   console.log(`Hi, my name is ${this.name}.`);
// };

// const john = new Person("John", 25);
// const jane = new Person("Jane", 30);

// john.greet(); // "Hi, my name is John."
// jane.greet(); // "Hi, my name is Jane."


// function showThis() {
//   console.log(this);
// }

// showThis(); // In strict mode: undefined | Non-strict: window (browser)

// const person = {
//   name: "Alice",
//   greet: function() {
//     console.log(`Hi, I am ${this.name}`);
//   }
// };

// // person.greet(); // Hi, I am Alice

// const greet = person.greet.bind(person);
// greet(); // Hi, I am Alice

// function Person(name) {
//   this.name = name;
// }

// const bob = new Person("Bob");
// console.log(bob.name); // Bob

function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const person = { name: "Alice" };

greet.call(person, "Hello"); // Hello, my name is Alice
greet.apply(person, ["Hi"]); // Hi, my name is Alice

const sayHello = greet.bind(person, "Hey");
sayHello(); // Hey, my name is Alice
