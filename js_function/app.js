// JavaScript Functions

function myFunction(fullName, age, dateOfBirth = 1991) {
  console.log(
    'Hello ' + fullName + ' I am ' + age + ' My Date of Bith ' + dateOfBirth
  );
}
myFunction('Ali', 30, 1995);
myFunction('Shovo', 35, true);


function isSubscribed() {
  console.log('Subcribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);


(function (message) {
  console.log('I am self-Invokeing Function', message);
})('Hello');


let maths = function (x, y) {
  console.log('Testing if I am working of not');
  return x * y;
};
console.log(maths(3, 4));
console.log(maths(4, 4));
console.log(maths(4, 5));


function newFunc() {
  let firstName = 'Ali';
  console.log(firstName);
}

newFunc();

function newFuncs() {
  let firstName = 'Ali';
  console.log(firstName);
}

newFuncs();


let numbers = [4, 5, 6, 7, 8];
let sqNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(sqNumbers);


let add = (x, y) => x + y;
console.log(add(5, 6));


function greet(firstName) {
  function sayHello() {
    alert('Hello ' + firstName);
  }
  return sayHello();
}
greet('Shovo');
