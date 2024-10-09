// 1. Створити змінні celsius, fahrenheit для зберігання температури за Цельсієм
// та Фаренгейтом.Перевести температуру з Цельсія у Фаренгейти за допомогою формули
//  та вивести результат в консоль.
// F = C * 9/5 + 32
let celsius = 15;
let fahrenheit = celsius * 9 / 5 + 32;
console.log('Температура за Цельсієм - ', celsius, '. Температура за Фаренгейтом - ', fahrenheit)


// 2. Створити змінну daysInMonth для зберігання кількості днів у місяці.Обчислити
//  кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою
//   оператора множення та вивести результат в консоль.
const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log('Кількість годин в місяці - ', hoursInMonth, 'Кількість хвилин в місяці - ', minutesInMonth)


// 3. Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця
//  в грі.Зменшити рівень здоров'я та енергії гравця за допомогою операторів
//  віднімання та вивести результат в консоль.
let health = 100;
let energy = 90;

health -= 20;
energy -= 30;

console.log('Здоров*я - ', health, 'Енергія - ', energy)



// 4. Створити змінну totalPrice для зберігання суми покупки в магазині.Застосувати
// знижку discount в розмірі 10 % до цієї суми за допомогою оператора множення.
// Результат зберегти в змінній discountedPrice та вивести результат в консоль.
let totalPrice = 500;
let discount = 10;
let discountedPrice = totalPrice * (1 - discount / 100);
console.log('Ціна зі знижкою:', discountedPrice);



// 5. Створити змінну const floatNumber = 12.78 для зберігання числа з
// плаваючою комою.Використати метод Math.floor() для округлення числа до меншого.
// Результат зберегти в змінній roundedDown та вивести результат в консоль.
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);


// 6. Створити змінну const floatString = "45.67"  для зберігання рядка, який
// містить числа з плаваючою комою.Використати метод parseFloat() для перетворення
// рядка у десяткове число.Результат зберегти в змінній parsedFloat та вивести
// результат в консоль.
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat); 


// 7. Створити змінну const intString = "123" для зберігання рядка, який містить
//  ціле число.Використати метод parseInt() для перетворення рядка у ціле число.
//  Результат зберегти в змінній parsedInt та вивести результат в консоль.
const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt); 


// 8. Створити змінну number для зберігання числа.Використати метод Math.sqrt()
// для обчислення квадратного кореня числа.Результат зберегти в змінній sqrtNumber
//  та вивести результат в консоль.
let number = 64;
let sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);



// 9. Створити змінні const integer = 42 та const stringNumber = "256" для зберігання
//  цілочисельного значення та рядка з числом у вигляді рядка.Використати метод
// parseInt() для перетворення рядка у ціле число.Результат зберегти в змінній
// convertedInt та вивести результат в консоль.Потім використати метод toString()
// для перетворення цілочисельного значення у рядок.Результат зберегти в змінній
// convertedString та вивести результат в консоль.
const integer = 42;
const stringNumber = "256";

const convertedInt = parseInt(stringNumber);
console.log(convertedInt); //256

const convertedString = integer.toString();
console.log(convertedString); //42

