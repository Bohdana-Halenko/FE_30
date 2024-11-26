// const add = function (a, b, c) {
//     return a + b + c;
// }
// const result = add(1, 2, 3);
// console.log(result); //6
// console.log(add(5, 4, 3)); //12
// console.log(add(10, 15, 20)); //45



// const count = function (countFrom = 0, countTo = 10, step = 1) {
//     for (let i = countFrom; i <= countTo; i += step) {
//         console.log(i);
//     }
// };

// count(1, 5);
// count(3);
// count(undefined, 5, 2);
// count();


// const withdraw = function (amount, balance) {
//     if (amount === 0) {
//         console.log("Для зняття введіть суму більше 0");
//     } else if (amount > balance) {
//         console.log('Недостатньо коштів');
//     } else {
//         console.log('Операція успішна');
//     }
// }

// withdraw(500, 800);
// withdraw(900, 500);
// withdraw(0, 100);


// const withdraw = function (amount, balance) {
//     if (amount === 0) {
//         console.log("Для зняття введіть суму більше 0");
//         return;
//     }
//     if (amount > balance) {
//         console.log('Недостатньо коштів');
//         return;
//     }
//     console.log('Операція успішна');
// }
// withdraw(500, 800);
// withdraw(900, 500);
// withdraw(0, 100);


// function add(a, b, c) {
//     return a + b + c;
// }

// add(5, 4, 3);
// print('javaScript');
// function add(a, b, c) {
//     console.log(a + b + c);
//     return
// }
// function print(str) {
//     console.log(str);
// }

// const fn = function () {
    
// }



const sum = function() {
    let total = 0;
    for (const argument of arguments) {
        total += argument;
    }
    return total;
}

console.log(sum(5, 7, 9, 4, 5, 1, 3, 6)); //40


// const fn = function () {
//     const args = Array.from(arguments);
// };
// console.log(fn(1, 2, 3, 4))

const fn = function (...args) {
    
}


const value = 50;

const add = function (num) {
    const value = 10;
    const innerValue = 5;
    return num + value + innerValue;
}
console.log(value); //50
console.log(add(20)); //35
console.log(innerValue);
