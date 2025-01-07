// // Імперативний
// const numbers = [1, 2, 3, 4, 5, 6];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > 3) {
//         filteredNumbers.push(numbers[i])
//     }
// }
// console.log(filteredNumbers); //[4, 5, 6]


// // Декларативний
// const numbers1 = [1, 2, 3, 4, 5, 6];
// const filteredNumbers1 = numbers1.filter(value => {
//     return value > 3
// });
// console.log(filteredNumbers1); //[4, 5, 6]


// const func1 = (array, value) => {
//     for (let i = 0; i < array.length; i++){
//         array[i] = array[i] * value;
//     }
// }

// const number = [1, 2, 3, 4, 5];

// func1(number, 2);

// console.log(number); //[2, 4, 6, 8, 10]

// const pureFunc = (array, value) => {
//     const result = [];
//     for (let i = 0; i < array.length; i++){
//         result.push(array[i] * value);
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureFunc(numbers, 2);
// console.log(numbers); //  [1, 2, 3, 4, 5]
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// array.method((currentValue, index, array) =>{

// })





// forEach
// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// numbers.forEach(num => console.log(num));
// numbers.forEach((num, index) => console.log(`index - ${index}, value - ${num}`));





// map - повертає колекцію
// const numbers = [1, 2, 3, 4, 5];
// const doubledNum = numbers.map(num => num * 2);
// console.log(doubledNum); //[2, 4, 6, 8, 10]

// const users = [
//   { name: "Bob", isActive: true },
//   { name: "Tom", isActive: false },
//   { name: "Dilan", isActive: true },
// ];
// const names = users.map(user => user.name);
// console.log(names); // ['Bob', 'Tom', 'Dilan']





// filter - повертає колекцію
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(numbers.filter(num => num > 5)); //[6, 7, 8, 9]
// console.log(numbers.filter(num => num < 5)); //[1, 2, 3, 4, 0]
// console.log(numbers.filter(num => num === 5)); //[5]

// const users = [
//   { name: "Bob", isActive: true },
//   { name: "Tom", isActive: false },
//   { name: "Dilan", isActive: true },
// ];

// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);




//find - повертається елемент (унікальний)
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.find(num => num > 5)); //6
// console.log(numbers.find(num => num < 5)); //0
// console.log(numbers.find(num => num === 5)); // 5

// const users = [
//   { name: "Bob", isActive: true, id: '01' },
//   { name: "Tom", isActive: false, id: '02' },
//   { name: "Dilan", isActive: true, id: '03' },
// ];
// const user = users.find(user => user.id === '02');
// console.log(user); //{name: 'Tom', isActive: false, id: '02'}

// const getUser = (array, id) => array.find(x => x.id === id);
// console.log(getUser(users, '02')); //{name: 'Tom', isActive: false, id: '02'}


// every() and some() - повертає буль
// const isBig = value => value >= 10;
// const num = [12, 6, 9, 110, 45];
// console.log(num.every(isBig)); //false
// console.log(num.some(isBig)); //true

// const num1 = [2, 8, 5, 1, 4];
// console.log(num1.some(isBig)); //false


// const fruits = [
//     { name: 'apples', amount: 50 },
//     { name: 'kiwi', amount: 0 },
//     {name: 'orange', amount: 100},
// ]
// const allFruits = fruits.every(fruit => fruit.amount > 0);
// console.log(allFruits); //false

// const anyFruits = fruits.some(fruit => fruit.amount > 0);
// console.log(anyFruits); //true