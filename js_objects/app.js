// JavaScript Objects

const newSymb = Symbol('Key1');

const mobileModel = {
  // key: value
  brand: 'Samsung',
  model: 's24 Ultra',
  processor: 'Sanpdragon Gen 3',
  camera: ['200MP', '12MP', '12MP'],
  hasZoomCamera: true,
  'selfie camera MP': 12,
  brandModel: function () {
    return `Mobile Brand is ${this.brand} and model is ${this.model}`;
  },
  battray: {
    mah: 5000,
  },
};


console.log(mobileModel.brand);

console.log(mobileModel['precessor']);
console.log(mobileModel['selfie camera']);
console.log(mobileModel[newSymb]); 

mobileModel.model = 's25 Ultra';

Object.freeze(mobileModel);
mobileModel.model = 's26 Ultra';

console.log(Object.keys(mobileModel));

console.log(Object.values(mobileModel));

console.log(mobileModel.hasOwnProperty('camera'));

console.log(mobileModel.brandModel());

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  p: 1,
  q: 2,
  r: 3,
};

const obj3 = {
  x: 1,
  y: 2,
  z: 3,
};

// const obj3 = { obj1, obj2 };

// const objFinal = Object.assign({}, obj1, obj2, obj3);

const objFinal = { ...obj1, ...obj2, ...obj3 };
console.log(objFinal);

console.log(mobileModel.battray.mah);


function Person(first, last) {
  (this.firstName = first), (this.lastName = last);
}

const person1 = new Person('Ali', 'Hossain');
person1.age = 18;
const person2 = new Person('Shovo', 'Ahmed');
person2.greet = function () {
  return 'Hello';
};

console.log(person1);
console.log(person2.greet());
