// 1
const processArray = (array, callback) => { 
    return callback(array);
}; 

const getSum = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
};
const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);

const array1 = [1, 2, 3, 4, 5];
const array2 = [-15, 0, 36, -29, 125];
const array3 = [125, 85, 255, 12, 36, -10];

console.log(processArray(array1, getSum)); //15
console.log(processArray(array2, getMin)); //-29
console.log(processArray(array3, getMax)); //255


// 2
const operate = (a, b, callback) => { 
    return callback(a, b);
}; 

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Ділення на 0 неможливе";

// Виклик функції з різними операціями 
console.log(operate(10, 5, subtract)); // Віднімання 
console.log(operate(10, 5, add)); // Додавання 
console.log(operate(10, 5, multiply)); // Множення 
console.log(operate(10, 5, divide)); // Ділення



// HW11
// 1

const bankAccount = {
    ownerName: "Bob Dou",
    accountNumber: '123456789',
    balance: 2000,
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            alert(`Рахунок поповнено на ${amount}грн. Поточний баланс: ${this.balance}`)
        } else {
            alert("Сума для попoвнення повинна бути більше 0 грн.")
        }
    },
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            alert(`З рахунку знято ${amount}. Поточний баланс: ${this.balance}`)
        } else if (amount > this.balance) {
            alert("Недостатньо коштів на рахунку")
        } else {
            alert("Сума для зняття повинна бути більше 0 грн.")
        }
    }
};

if (confirm("Ви хочете поповнити рахунок?")) {
    const depositAmount = parseFloat(prompt("Введіть суму для поповнення"));
    bankAccount.deposit(depositAmount);
} else if (confirm("Ви хочете зняти кошти?")) {
    const withdrawAmount = parseFloat(prompt("Введіть суму для зняття"));
    bankAccount.withdraw(withdrawAmount);
} else {
    alert("Операція скасована")
}