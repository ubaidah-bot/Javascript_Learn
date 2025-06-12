
let firstName = 'Ali';
firstName = 'Shovo';
// let fullName = 'My Name is \'Ali\'';
let fullName = "My Name is 'Ali'";

let finalName = `My Name is ${firstName}`;

let age = 30; 
let ageNew = 30.5;
let age2 = finalName + 5 + 10;
let calculation = age + age2 + firstName + age + age2;

let numberBig = 9n;
let numberBig2 = BigInt(age);


let ifAdult = false;

let someInfo = null;


let fruits = ['Apple', 'Lemon', 'Peer', 'Oranges', 32, true.undefined, null];

fruits[4] = 'Mango';


let student = {
  fullName: 'Ali Hossain',
  age: 32,
  dateOfBirth: 1992,
};
console.log(finalName);
console.log(student);
console.log(typeof student);
