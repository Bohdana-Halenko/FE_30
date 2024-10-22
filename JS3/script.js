const userName = 'Alex';

const string = 'My ' + 'name ' + 'is ' + 'Bohdana';
console.log(string); //My name is Bohdana

const newString = 'Year ' + 2024;
console.log(newString); //Year 2024

const numbers = 5 + 10;
console.log(numbers); //15

const newNumbers = 10 + '10';
console.log(newNumbers); //1010

const number = 15 + 15 + '15';
console.log(typeof number); //3015


const message = 'Hello JavaScript!';
console.log(message.length); //17
console.log('Hello JavaScript!'.length); //17

console.log(message.toLowerCase()); //hello javascript!
console.log(message.toUpperCase()); //HELLO JAVASCRIPT!
console.log(message);
console.log(message.indexOf('Java')); //6
console.log(message.indexOf('lo')); //3
console.log(message.includes('hello'));//f
console.log(message.includes('Hello')); //t
console.log(message.startsWith('H')); //t
console.log(message.endsWith('!')); //t
console.log(message.padEnd(19, '?')); //Hello JavaScript!??
console.log(message.padStart(19, '*')); //**Hello JavaScript!


const name = 'Bohdana';
const age = 27;
const mood = 'happy';

const newMessage = 'My name is ' + name + ', I*m ' + age + ' years old and ' + mood + '.';
console.log(newMessage);  //My name is Bohdana, I*m 27 years old and happy.

const messageNew = `My name is ${name}, I*m ${age} years old and ${mood}.`
console.log(messageNew); //My name is Bohdana, I*m 27 years old and happy.

console.log(`Результат додовання дорівнює ${20 + 28}`); //Результат додовання дорівнює 48



const numberHours = 8000 / 60;
console.log(numberHours); //133.3333333
const days = Math.floor(numberHours / 24);
console.log(days); //5
const hours = Math.floor(numberHours % 60);
console.log(hours); //13
const modHours = String(hours).padStart(3, 0);
console.log(modHours);
 