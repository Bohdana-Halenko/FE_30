// const message = 'I love JavaScript!';
// console.log(message.split('')); //['I', ' ', 'l', 'o', 'v', 'e', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', '!']
// console.log(message.split(' ')); // / ['I', 'love', 'JavaScript!']

// const users = ['Bob', 'Nick', 'Jhon'];
// console.log(users.join(' ')); //Bob Nick Jhon
// console.log(users.join('-')); //Bob-Nick-Jhon

// const clients = ['Bob', 'Nick', 'Jhon'];
// console.log(clients.indexOf('Jhon')); //2
// console.log(clients.indexOf('Anna')); // -1

// console.log(clients.includes('Bob')); //true
// console.log(clients.includes('Boby')); //false

// const fruit = 'apple';
// if (fruit === 'apple' || fruit === 'kiwi') {
//     console.log('Це зелений фрукт');
// }

// const greenFruits = ['apple', 'kiwi', 'lime'];
// const gFruit = 'kiwi';

// if (greenFruits.includes(gFruit)) {
//     console.log('Це зелений фрукт')
// }


// const classes = ['Вася', 'Валерій', 'Влад'];
// console.log(classes.includes('Вася')); //true




// const numbers = [];
// numbers.push(2);
// console.log(numbers); //[2]
// numbers.push(5);
// console.log(numbers); //[2, 5]
// numbers.push(8);
// console.log(numbers);
// numbers.push('hello');
// console.log(numbers); //[2, 5, 8, 'hello']

// numbers.pop();
// console.log(numbers); //[2, 5, 8]
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers); //[]


// const clients = ['Bob', 'Nick', 'Jhon'];
// console.log(clients.shift()); //
// console.log(clients.shift());
// console.log(clients); //['Jhon']

// clients.unshift('Tom');
// console.log(clients); // ['Tom', 'Jhon']
// clients.unshift('Anna');
// console.log(clients); //['Anna', 'Tom', 'Jhon']

// const clients = ['Bob', 'Nick', 'Jhon', 'Tom', 'Poly'];
// console.log(clients.slice(1, 3)); //['Nick', 'Jhon']
// console.log(clients.slice(1)); // ['Nick', 'Jhon', 'Tom', 'Poly']
// console.log(clients.slice()); // ['Bob', 'Nick', 'Jhon', 'Tom', 'Poly']
// console.log(clients.slice(-2)); //['Tom', 'Poly']


// const numbers = [1, 2, 3, 4, 5];
// const deletedNumbers = numbers.splice(0, 3);
// console.log(numbers); //[4, 5]
// console.log(deletedNumbers); //[1, 2, 3]

// const colors = ['blue', 'green', 'red'];
// colors.splice(2, 0, 'purple');
// console.log(colors); // ['blue', 'green', 'purple', 'red']
// colors.splice(1, 0, 'yellow', 'orange');
// console.log(colors); //['blue', 'yellow', 'orange', 'green', 'purple', 'red']

// const names = ['Tom', 'Nick', 'Dina', 'Bob', 'Anna'];
// names.splice(1, 1, 'Jhon', 'Poly', 'Mary');
// console.log(names); //  ['Tom', 'Jhon', 'Poly', 'Mary', 'Dina', 'Bob', 'Anna']
// names.splice(0, 3, 'Alex');
// console.log(names); //['Alex', 'Mary', 'Dina', 'Bob', 'Anna']


const arr1 = ['Bob', 'Tom', 'Jhon'];
const arr2 = ['Poly', 'Anna'];
const allArr = arr1.concat(arr2); 
console.log(allArr); // ['Bob', 'Tom', 'Jhon', 'Poly', 'Anna']
console.log(arr1); // ['Bob', 'Tom', 'Jhon']
console.log(arr2); // ['Poly', 'Anna']


