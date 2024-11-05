// while цикл з передумовою
// let counter = 0;
// while (counter < 20) {
//     console.log('counter: ', counter);
//     counter += 5;
// }

// let clientCount = 12;
// const maxClients = 25;

// while (clientCount <= maxClients) {
//     console.log('Кількість клієнтів: ', clientCount);
//     clientCount += 1;
// }


// do while з постумовою
// let password = '';
// do {
//     password = prompt('Введіть пароль довше 4х символів', '');
// }
// while (password.length < 5);

// console.log("Ввели пароль: ", password);




// for
// for (інціалізація; умова; поствираз){
//     // тіло циклу
// }

// const max = 20;

// for (let i = 0; i <= max; i += 1){
//     console.log(i)
// }

// const target = 5;
// let sum = 0;

// for (let i = 0; i <= target; i++){
//     sum += i
// }
// console.log(sum); //15

// const max = 10;
// for (let i = 0; i < max; i++){
//     console.log(`${max} % ${i} = `, max % i);
// }
// 10 % 0 =  NaN
// 10 % 1 =  0
// 10 % 2 =  0
// 10 % 3 =  1
// 10 % 4 =  2
// 10 % 5 =  0
// 10 % 6 =  4
// 10 % 7 =  3
// 10 % 8 =  2
// 10 % 9 =  1


// for (let i = 1; i < 10; i++){
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }




const num = 10;
for (let i = 0; i <= num; i++){
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}