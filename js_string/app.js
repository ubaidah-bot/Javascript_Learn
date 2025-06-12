// JavaScript Strings

const fullName = 'Ali Hossan';

const country = "Bangladesh";

const sen = "I'm form Bangladesh"
const sen2 = 'I\'m form Bangladesh'

const quatation = 'Bill Gates says "Some text" '
const quatation2 = "Bill Gates says \"Some text\""
const quatation3 = "Bill Gates says \n \"Some text\""

let info = "Ali " + "Hossain"
let info2 = fullName + " " + country
let info3 = "I am " + fullName + " I am from " + country

let info4 = `I am ${fullName} I am from ${country} ${4+4}` 
let info5 = `I am ${fullName}
 I am from ${country} 
 ${4 + 4}` 


const fullName2 = new String("Shovo")
const fullName3 = "Shovo"
fullName[1] = "o";
// console.log(info5.length);
// console.log(info5.charAt(2));
// console.log(info5.indexOf('a'));
// console.log(info5.toUpperCase());
// console.log(info5.toLocaleUpperCase());
// console.log(info5.toLowerCase());
// console.log(info5.toLocaleLowerCase());
document.getElementById('title').innerText = info5

const student = "Ali Hossain";

console.log(student.length);

student.slice(6); 
student.substring(6); 

student.slice(-6); 
student.substring(-6); 

student.slice(3, 8); 
student.substring(3, 8); 

student.slice(-8, -3); 
student.substring(-8, -3); 

student.slice(-8, 3); 
student.substring(-8, 3); 

/*
* Trim
*/

const someText = "          Ali           "
console.log(someText.trim());
console.log(someText.trimStart());
console.log(someText.trimEnd());

/*
* Replace
*/
const url = "https://ali.com/new%20Blog"
console.log(url.replace("%", "-"));

console.log(info5.split(" "));