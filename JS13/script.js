// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// }

// for (const key in hotel) {
//     console.log("Key: ", key);
// }
// Key:  name
// Key:  stars
// Key:  capacity

// for (const key in hotel) {
//     console.log("Value: ", hotel[key]);
// }
// Value:  Hilton
// Value:  5
// Value:  250


// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// }
// const keys = Object.keys(hotel);
// console.log(keys); //['name', 'stars', 'capacity']

// const values = Object.values(hotel);
// console.log(values); // ['Hilton', 5, 250]

// const entries = Object.entries(hotel);
// console.log(entries); //[['name', 'Hilton'], ['stars', 5], ['capacity', 250]]



// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// }

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// for (const key of keys) {
//     console.log('Value: ', hotel[key]);
// }
// Value:  Hilton
// Value:  5
// Value:  250

// const entries = Object.entries(hotel); //[['name', 'Hilton'], ['stars', 5], ['capacity', 250]]
// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
// }
// name: Hilton
// stars: 5
// capacity: 250



// const goods = {
//     apples: 10,
//     kiwi: 5,
//     mango: 6,
//     lime: 2,
// }
// const values = Object.values(goods); //[10, 5, 6, 2]

// let total = 0;
// for (const value of values) {
//     total += value;
// }
// console.log(total); //23





// const temp = [20, 24, 18, 22, 20, 21, 23, 25, 27];
// const min = Math.min(temp);
// console.log(min); //NaN

// const min1 = Math.min(...temp);
// console.log(min1); //18

// const min2 = Math.min(20, 24, 18, 22, 20, 21, 23, 25, 27);


// const names = ['Alex', 'Sam', 'Bob', 'Nick'];
// console.log(names); //['Alex', 'Sam', 'Bob', 'Nick']
// const copyNames = [...names];
// console.log(copyNames); //['Alex', 'Sam', 'Bob', 'Nick']

// console.log(names === copyNames); //false

// const slicedNames = names.slice();
// console.log(slicedNames);




// const names = ['Alex', 'Sam', 'Bob', 'Nick', 'Nicka', 'Poll'];
// const complatedNames = [...names, 'John'];
// console.log(complatedNames); //['Alex', 'Sam', 'Bob', 'Nick', 'Nicka', 'Poll', 'John']


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr = [...arr1, ...arr2];
// console.log(arr); // [1, 2, 3, 4, 5, 6]

// const names = ['Alex', 'Sam', 'Bob', 'Nick', 'Nicka', 'Poll'];
// const copy = [...names.slice(0, 4), ...names.slice(5)];
// console.log(copy); //['Alex', 'Sam', 'Bob', 'Nick', 'Poll']

// const copy1 = [...names.slice(0, 1), 'John', ...names.slice(2)];
// console.log(copy1); // ['Alex', 'John', 'Bob', 'Nick', 'Nicka', 'Poll']


// const a = { x: 1, y: 2 };
// const b = { x: 5, n: 3 };
// const c = Object.assign({}, a, b);
// console.log(c); //{x: 5, y: 2, n: 3}

// const d = { ...a, ...b };
// console.log(d); //{x: 5, y: 2, n: 3}

// const a = { x: 1, y: 2 };
// const b = { x: 5, n: 3 };
// const c = { m: 4, ...a, l: 6, ...b };
// console.log(c); //{m: 4, x: 5, y: 2, l: 6, n: 3}


// let a = 5;
// let b = a;
// console.log(a);//5
// console.log(b);//5

// a = 10;
// console.log(a);//10
// console.log(b);//5


// const a = ['Bob'];
// const b = a;
// console.log(a); //['Bob']
// console.log(b); //['Bob']

// a.push('Poly');
// console.log(a); //['Bob', 'Poly']
// console.log(b); //['Bob', 'Poly']

// b.push('Alex');
// console.log(a); //['Bob', 'Poly', 'Alex']
// console.log(b); //['Bob', 'Poly', 'Alex']












// 13
// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// };

// const { name, stars, status } = hotel;
// console.log(name, stars, status); //Hilton 5 undefined

// const { name: hotelName, stars, status: hotelStatus = 'empty' } = hotel;
// console.log(hotelName, stars, hotelStatus); //Hilton 5 empty

// const { name, ...rest } = hotel;
// console.log(name); // Hilton
// console.log(rest); // {stars: 5, capacity: 250}


// let options = {
//     size: {
//         width: 100,
//         height: 200,
//     },
//     items: ['Cake', 'Donut'],
//     extra: true,
// };

// const { size: { width, height }, items: [item1, item2] } = options;
// console.log(width); //100
// console.log(height); // 200
// console.log(item1); // Cake
// console.log(item2); // Donut

const rgb = [200, 255, 100];
// let red, green, blue;
// [red, green, blue] = rgb;
// const [red, green, blue, alfa = 0.3] = rgb;
// console.log(`Red: ${red}, green: ${green}, blue: ${blue}, alfa: ${alfa}`); //Red: 200, green: 255, blue: 100, alfa: 0.3

// const [red, ...colors] = rgb;
// console.log(`Red: ${red}, colors: ${colors}`);  //Red: 200, colors: [255, 100]

// const [, , blue] = rgb;
// console.log(`Blue: ${blue}`); //Blue: 100


// let arr = ['Bob', 'Nick'];
// // let [firstName, secondName] = arr;
// // console.log(firstName); // Bob
// // console.log(secondName); // Nick

// let firstName = arr[0];
// console.log(firstName); // Bob