// create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.

// Create a factory function for vehicles
function createVehicle(type, brand, model, year) {
  return { type, brand, model, year };
}

// Create two different vehicles using the factory function
const vehicle1 = createVehicle("Car", "Toyota", "Camry", 2020);
const vehicle2 = createVehicle("Motorcycle", "Honda", "CBR500R", 2019);

// Test the vehicles
console.log(vehicle1); // { type: 'Car', brand: 'Toyota', model: 'Camry', year: 2020 }
console.log(vehicle2); // { type: 'Motorcycle', brand: 'Honda', model: 'CBR500R', year: 2019 }

// function createPerson(name, age, occupation) {
//   return { name, age, occupation,
//     greet: function() {
//       console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I am a ${this.occupation}.`);
//     }
//   };

// }

// const person1 = createPerson("Alice", 30, "Engineer");
// const person2 = createPerson("Bob", 25, "Designer");
// const person3 = createPerson("Charlie", 35, "Teacher");

// // Test the persons
// console.log(person1.greet()); // Hello, my name is Alice, I am 30 years old and I am a Engineer.
// console.log(person2.greet()); // Hello, my name is Bob, I am 25 years old and I am a Designer.
// console.log(person3.greet()); // Hello, my name is Charlie, I am 35 years old and I am a Teacher.