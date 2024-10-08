'use strict'
// + - * / %
// const x = 10;
// const y = 3;

// console.log(x + y); //13
// const total = x + y;
// console.log(total); //13

// console.log(x - y); //7
// console.log(x * y); //30
// console.log(x / y); //3.33333
// console.log(x % y); //1

// let value = 5;
// value += 10;
// // value = value + 10;
// console.log(value); //15


// Оператори порівняння
// > < >= <=
// a > b
// a < b
// a >= b
// a <= b
// a == b
// a != b
// a === b
// a !== b


// const x = 5;
// const y = 7;
// const a = 5;
// const b = '5'
// console.log(x > y); //f
// console.log(x < y);
// console.log(x < a);
// console.log(x <= a);
// console.log(x === y); //f
// console.log(x === a); //t
// console.log(x === b); //f значення змінних та тип данних
// console.log(x == b); //t значення змінних


// const value = '5';
// console.log(Number(value)); //5
// console.log(typeof Number(value)); //number

// const valueB = 'hello';
// console.log(Number(valueB)); //NaN
// console.log(typeof Number(valueB));//number

// console.log(Number.parseInt('10px')); //10
// console.log(Number.parseInt('15qwe74'));//15
// console.log(Number.parseInt('12.48qqqq9'));//12
// console.log(Number.parseInt('qqqqq'));//NaN

// console.log(Number.parseFloat('10px')); //10
// console.log(Number.parseFloat('15qwe74'));//15
// console.log(Number.parseFloat('12.48qqqq9'));//12.48
// console.log(Number.parseFloat('qqqqq'));//NaN

// const numberOne = Number('55'); //55
// console.log(Number.isNaN(numberOne)); // f

// const numberTwo = Number('hello'); //NaN
// console.log(Number.isNaN(numberTwo)); //true



// 0.1+0.2=0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); //false
// console.log(0.1 + 0.2); //0.30000000000000004


// console.log((0.1 * 10 + 0.2 * 10) / 10); //0.3


console.log(Math.floor(1.8)); //1
console.log(Math.ceil(1.3)); // 2
console.log(Math.round(1.3)); // 1
console.log(Math.round(1.5)); //2
console.log(Math.max(20, 30, 50, 80, 20, 52, 36)); //80
console.log(Math.min(20, 30, 50, 80, 20, 52, 36)); //20
console.log(Math.pow(2, 4)); //16
console.log(Math.random()); //0.2213451718040187 0-1
console.log(Math.random() * (10 - 1) + 1); //1-10
