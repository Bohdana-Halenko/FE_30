'use strict';
// const arr = [];

// const clients = ['Bob', 'Anna', 'Nick', 'Jhon'];
// // console.log(clients);

// // console.log(clients[0]);
// // clients[0] = 'Alex';
// // clients[7] = 'Tom';
// // console.table(clients);
// console.log(clients.length);
// clients.length = 7;
// console.log(clients);

// clients.length = 2;
// console.log(clients);



// const clients = ['Bob', 'Anna', 'Nick', 'Jhon'];
// for (let i = 0; i < clients.length; i++){
//     console.log('Loggin clients: ', clients[i])
// }

// for (const client of clients) {
//     console.log(client);
// }

// const string = 'JavaScript';
// for (const simbol of string) {
//     console.table(simbol);
// }



// const clients = ['Bob', 'Anna', 'Nick', 'Jhon'];
// const clientsName = 'Tom';
// let message;

// for (const client of clients) {
//     if (client === clientsName) {
//         message = 'Такий клієнт вже зареєстрований';
//         break;
//     }
//     message = 'Дякуємо за реєстрацію!'
// }
// console.log(message);


// const numbers = [5, 45, 87, 98, 36, 64, 1, 23, 25, 48, 21];
// const threshold = 50;

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > threshold) {
//         continue;
//     }
//     console.log(`Число більше ${threshold}: ${numbers[i]}`);
// }



const numbers = [
    [[7, 8, 9], 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(numbers[0][0][2]);
console.log(numbers[2][1]);
console.log(numbers[1][2]);
