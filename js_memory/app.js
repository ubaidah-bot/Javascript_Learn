// JavaScript Memory


let fullName = 'Ali Hossain';

let webDeveloper = fullName;
webDeveloper = 'Shovo';

// console.log(fullName);
// console.log(webDeveloper);



let student = {
  name: 'Ali',
  age: 30,
};

let people = student;
// people = {
//   name: 'Shovo',
//   age: 31,
// };
people.name = 'Shovo';
people.age = 31;

let car = ['BMW', 'Audi'];

let newCar = car;
newCar[0] = 'Toyota';

console.log(car);
console.log(newCar);
