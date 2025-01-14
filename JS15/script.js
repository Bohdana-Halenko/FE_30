// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, value) => acc + value, 0);

// console.log(sum); //15

// const tweets = [
//   { id: "01", likes: 15, tags: ["js", "react"] },
//   { id: "02", likes: 11, tags: ["node", "react", "sass"] },
//   { id: "03", likes: 28, tags: ["html", "css"] },
//   { id: "04", likes: 8, tags: ["node", "react"] },
//   { id: "05", likes: 17, tags: ["js", "html"] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes); //79

// const countLikes = tweets => tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(countLikes(tweets)); //79

// const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, []);

// console.log(tags); // ['js', 'react', 'node', 'react', 'sass', 'html', 'css', 'node', 'react', 'js', 'html']; 11101110000


// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
//   }, []);

// console.log(getTags(tweets));


// const sumTags = getTags(tweets);
// const getTagSum = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//     }
//     acc[tag] += 1;
//     return acc;
// }

// const countTags = sumTags => sumTags.reduce(getTagSum, {});

// const tagCount = countTags(sumTags);
// console.log(tagCount); //{js: 2, react: 3, node: 2, sass: 1, html: 2, css: 1}




// const numbers = [3, 2, 1, 5, 4];

// console.log(numbers.sort()); // [1, 2, 3, 4, 5]

// const names = ['Tom', 'apple', 'Nick', 'Alex', 'Poll'];

// console.log(names.sort()); // ['Alex', 'Nick', 'Poll', 'Tom', 'apple']


// const users = [
//   { name: "Alex", daysActive: 10 },
//   { name: "Nick", daysActive: 22 },
//   { name: "Anna", daysActive: 3 },
//   { name: "Tom", daysActive: 9 },
// ];

// const sortUsers = (a, b) => b.daysActive - a.daysActive;

// console.log(users.sort(sortUsers));

// const fruits = ['apple', 'kiwi', 'banana', 'orange'];
// fruits.sort(function (a, b) {
//     return b.localeCompare(a);
// })
// console.log(fruits); // ['orange', 'kiwi', 'banana', 'apple']




// const num = [1, 2, 3, 4, 5, 6, 7, 8];
// // const even = num.filter(x => x % 2 === 0);
// // // console.log(even); // [2, 4, 6, 8]
// // const doubled = even.map(x => x * 2);
// // // console.log(doubled); //[4, 8, 12, 16]
// // const reversed = doubled.reverse();
// // console.log(reversed); //[16, 12, 8, 4]

// const result = num
//     .filter(x => x % 2 === 0)
//     .map(y => y * 2)
//     .reverse();

// console.log(result); //[16, 12, 8, 4]


// const salary = {
//     bob: 1500,
//     anna: 2253,
//     tom: 933
// };

// const totalSalary = Object.values(salary).reduce((total, amount) => total + amount, 0);
// console.log(totalSalary);  //4686
