//! Метод every()
//Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції.
//Перебирання масиву припиняється, ОДРАЗУ коли колбек  повертає false
// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
const products = [
  { name: "apple", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "plum", quantity: 0 },
];

const hasEveryProduct = products.every((product) => product.quantity > 0);
// console.log(hasEveryProduct); // !false

//! Метод every()
//Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.
// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some((value) => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some((value) => value >= 0); // true

// Чи є хоча б один елемент, що менший від нуля? - ні
[1, 2, 3, 4, 5].some((value) => value < 0); // false

// Чи є хоча б один елемент, що менший від нуля? - так
[1, 2, 3, -10, 4, 5].some((value) => value < 0); // true

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

function isAnyUserActive(users) {
  return users.some((user) => user.isActive === true);
}
const res = isAnyUserActive(users);
// console.log("🚀 ~ res:", res);

//! Метод reduce()
// Метод reduce(callback, initialValue) використовується для
// послідовної обробки кожного елемента масиву із збереженням проміжного
// результату.
// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);
// Метод reduce() очікує 2 параметри:
// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;
// 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.

const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

// console.log(total); // 12
//Розгляньмо детальніше роботу редьюса у прикладі вище:
// Початкове значення акумулятора 0
// перша ітерація колбек-функції 0 + 2 поверне 2
// друга ітерація колбек-функції 2 + 7 поверне 9
// третя ітерація колбек-функції 9 + 3 поверне 12
// Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до
// «одного». У повсякденних завданнях його застосування зводиться до роботи з числами.

//! Task Reduce
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, number) => {
//   return acc + number;
// }, 0);
// // console.log("🚀 ~ totalPlayTime:", totalPlayTime);

// const averagePlayTime = totalPlayTime / playtimes.length;
// // console.log("🚀 ~ averagePlayTime:", averagePlayTime);

//! Метод reduce() і масив об'єктів
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;
// console.log("🚀 ~ averageScore:", averageScore);

//! Task Reduce #2
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
  return acc + player.playtime / player.gamesPlayed;
}, 0);
console.log("🚀 ~ totalAveragePlaytimePerGame:", totalAveragePlaytimePerGame);
