"use strict"

// 1. Створити змінну з іменем age і присвоїти їй значення свого віку.Вивести значення
// цієї змінної в консоль.
const age = 12;
console.log(age);


// 2. Створити змінну з іменем name і присвоїти їй значення свого імені.Вивести
// значення цієї змінної в консоль.
const name = 'Bohdana';
console.log(name);


// 3. Створити змінну з іменем isStudent і присвоїти їй значення true або false,
//     залежно від того, чи є студентом.Вивести значення цієї змінної в консоль.
const isStudent = true;
console.log(isStudent);


// 4. Створити змінну з іменем myString і присвоїти їй рядок з вашої улюбленою цитатою.
// Вивести цей рядок в консоль.
const myString = 'Цитата';
console.log(myString);


// 5. Створити змінну з іменем myNumber і присвоїти їй довільне числове значення.
// Потім присвоїти цій змінній результат додавання до неї числа 10. Вивести значення
//  myNumber в консоль.
const myNumber = 20;
const myNumberTwo = myNumber + 10;
console.log(myNumberTwo);


let myNum = 20;
let myNumTwo = myNumber + 10;
console.log(myNumTwo)


// 6. Створити змінну з іменем myNull і присвоїти їй значення null.Вивести значення
//  цієї змінної в консоль.
const myNull = null;
console.log(myNull);


// 7. Створити скрипт який виводить спливаюче вікно з запитом на введення імені
//  користувача за допомогою prompt().Після введення імені вивести повідомлення привітання
//  з використанням введеного імені.
const user = prompt("Введіть своє ім*я");
alert(`Hello ${user}`);
// alert('Hello', user);


// 8. Створити скрипт який виводить спливаюче підтвердження за допомогою confirm().
//  Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!".Якщо
//   користувач відмовляється, вивести повідомлення "Дію відмінено!".
const change = confirm('Yes or no?');
if (change === true) {
    alert("Дякую за підтвердження!")
} else {
    alert("Дію відмінено!")
}


// 9. Створити скрипт який виводить спливаюче попередження за допомогою alert().
// Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити
// дію за допомогою confirm().Якщо користувач підтверджує дію, вивести повідомлення
// "Дякую за підтвердження!".Якщо користувач відмовляється, вивести повідомлення
// "Дію відмінено!".

alert("Дія небезпечна!");
const danger = confirm('Дія небезпечна, чи підтверджуєте її?');
if (danger === true) {
    alert("Дякую за підтвердження!")
} else {
    alert("Дію відмінено!")
}