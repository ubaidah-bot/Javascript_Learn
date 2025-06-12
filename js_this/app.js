/*
 * JavaScript this
 */

var firstName = 'Ali';

function myFunction() {
  return this;
}

// console.log(myFunction());


const myFunc = () => {
  // console.log(this);
};
myFunc();


const myBtn = document.querySelector('button');
myBtn.addEventListener('click', function () {
  console.log(this);
});

var fName = 'Shovo';
// let fName = 'Shovo';


const student = {
  fName: 'Ali',
  sInfo: function () {
    // console.log(`${student.fName} loves to read`);
    return `${this.fName} loves to read`;
  },
  // Example using arrow function 👇
  arrowFunction: () => {
    return `${this.fName} loves to read`;
  },
};

console.log(student.sInfo());
student.fName = 'Shovo';
console.log(student.sInfo());
console.log(student.arrowFunction());


function newPhone() {
  let phone = 'Android';
  console.log(this.phone);
}
newPhone();

const game = {
  gName: 'NfS',
  gInfo: function () {
    console.log(`Love to play ${this.gName}`);
  },
};

const aGame = {
  gName: 'Car Game',
};
const bindGame = game.gInfo.bind(aGame);
console.log(game.gInfo());
console.log(bindGame());
