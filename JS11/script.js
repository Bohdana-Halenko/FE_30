// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// }

// console.log(hotel.name);
// console.log(hotel.stars);
// console.log(hotel['name']);

// hotel.name = 'Hilton Resort';
// console.log(hotel.name);
// hotel['name'] = 'Hilton Resort';

// hotel.pool = true;
// console.log(hotel.pool);

// console.log(hotel);
// console.log(hotel.address);

// delete hotel.stars;
// console.log(hotel);
// delete hotel['stars'];



// let nameHotel = "Hilton";
// let starsHotel = 5;

// // ES5
// const hotel5 = {
//     name: nameHotel,
//     stars: starsHotel,
//     capacity: 250,
// }
// console.log(hotel5);

// // ES6
// const hotel6 = {
//     nameHotel,
//     starsHotel,
//     capacity:250,
// }
// console.log(hotel6); //capacity: 250, nameHotel: "Hilton", starsHotel: 5

// // const key = 'person';
// // const object = {};
// // object[key] = 'Bob';
// // console.log(object); //{person: 'Bob'}

// const key = 'person';
// const getKey = function () {
//     return 'age'
// }

// const object = {
//     [key]: 'Bob',
//     [getKey()]: 20,
// }


// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
    //5
    // sendMessage: function () {
    //     console.log('Welcome')
    // },

    // //6
    // sendMessage6() {
    //     console.log('Welcome');
    // }
// }
// console.log(hotel);

// hotel.sendMessage = function () {
//     console.log('Welcome');
// }

// hotel.sendMessage();



const hotel = {
    name: 'Hilton',
    stars: 5,
    capacity: 250,
    showName() {
        console.log(this.name)
    },
    changeCapacity(value) {
        this.capacity = value;
    }
}

hotel.showName(); //Hilton
hotel.changeCapacity(150); 
console.log(hotel.capacity); //150
