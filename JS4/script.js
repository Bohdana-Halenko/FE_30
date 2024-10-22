// false, 0, NaN, null, undefined, "", '' = false
// 1, 'hello', '0' = true

// && - i
// || - or
// ! - not

// const number = 20;
// const result = number > 10 && number < 30
// console.log(result); //true

// const num = 5;
// const newResult = num < 10 || num > 30;
// console.log(newResult); //

// console.log(!1); //f
// console.log(!false); //t
// console.log(!5); //f

// let cost = 0;
// const sub = 'pro';

// if (sub === 'premium') {
//     cost = 100;
// }

// console.log(cost);


// let cost;
// const sub = 'free';

// if (sub === 'free') {
//     cost = 100;
// } else {
//     cost = 200;
// }
// console.log(cost);


// let cost;
// const sub = 'normal';

// if (sub === 'free') {
//     cost = 0;
// } else if (sub === 'pro') {
//     cost = 100;
// } else if (sub === 'premium') {
//     cost = 200;
// } else {
//     console.log('Invalid');
// }

// {} ? {} : {}
// let type;
// const age = 25;

// if (age >= 18) {
//     type = 'adult';
// } else {
//     type = 'child';
// }


// const newAge = 25;
// const newType = newAge >= 18 ? 'adult' : 'child';



// const num1 = 5;
// const num2 = 10;
// let bigger;

// if (num1 > num2) {
//     bigger = num1; 
// } else {
//     bigger = num2;
// }
// console.log(bigger); //10



const num1 = 5;
const num2 = 10;
const bigger = num1 > num2 ? num1 : num2;
console.log(bigger); //10