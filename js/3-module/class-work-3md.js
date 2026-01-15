// const planets = ["Earth", "Mars", "Venus", "Uranus"];
// console.log(planets);
// planets[0] = "Jupiter";
// planets[2] = "Neptune";
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

const fruits = ["apple", "plum", "pear", "orange"];

fruits[0] = "apple";
fruits[1] = "peach";
fruits[2] = "pear";
fruits[3] = "banana";
// console.log("🚀 ~ fruits:", fruits.length);

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log("🚀 ~ lastElementIndex:", lastElementIndex);
// console.log(planets[lastElementIndex]); // "Venus"

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.
// Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   const newArray = [lastElementIndex, lastElement];

//   return newArray;
// }
// const res1 = getLastElementMeta(["apple", "peach", "pear", "banana"]);
// console.log("🚀 ~ res:", res1);

// getLastElementMeta(["apple", "peach", "pear", "banana"]);

// function getExtremeElements(array) {
//   const firstEl = array[0];
//   const lastElInd = array.length - 1;
//   const lastEl = array[lastElInd];
//   return [firstEl, lastEl];
// }

// const res2 = getExtremeElements(["apple", "peach", "pear", "banana"]);
// console.log("🚀 ~ res2:", res2);
//!! Join()
// const courses = ["HTML", "CSS", "JS", "NODE"];
// console.log("🚀 ~ courses:", courses);
// const courseseStr1 = courses.join("_");
// console.log("🚀 ~ courseseStr1:", courseseStr1);
// const courseseStr2 = courses.join(" ");
// console.log("🚀 ~ courseseStr2:", courseseStr2);

// const phones = "0631707000,0939756645,0672606161";
// const phonesArr = phones.split(",");
// console.table(phonesArr);

// for (let i = 0; i < phonesArr; i++) {
//   const element = phonesArr[i];
//   console.log("+38" + element);
// }

const courses = ["HTML", "CSS", "JS", "NODE"];
// console.table(courses);
//!! SLICE()
const copyFullCopy = courses.slice();
// console.log("🚀 ~ copyFullCopy:", copyFullCopy);
const copyCopy1 = courses.slice(2);
// console.log("🚀 ~ copyCopy1:", copyCopy1);
const copyCopy2 = courses.slice(-3);
// console.log("🚀 ~ copyCopy2:", copyCopy2);
// !!! Concat()
const neWcourses = ["Ai", "CSS", "JS", "NODE"];
const updateCourses = neWcourses.concat(courses);
// console.log("🚀 ~ updateCourses:", updateCourses);
// !!! indexOF()
const courseIndex = courses.indexOf("NODE");
// console.log("🚀 ~ courseIndex:", courseIndex);

//!! pop() // push()!!!
courses.push("Data Scines"); // push
// console.table(courses);
// courses.pop(); // pop
// console.table(courses);

//!!shift() / unshift() Не юзать, так как меняет [i] в массиве!
courses.unshift("Git Hub"); //shift
// console.table(courses);

// courses.shift(); // shift
// console.table(courses);

//!! Includes()
const hasCSS = courses.includes("CSS");
// console.log("🚀 ~ hasCSS:", hasCSS);
// console.log(courses);

//!!#task 1 ДЗ!!!

function slugify(title) {
  const toLowerCase = title.toLowerCase();

  // const slugify = toLowerCase.join(" ");
  // console.log("🚀 ~ slugify ~ slugify:", slugify);
  // return slugify;
}

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//!!FOR!!!

const friends = ["mango", "kiwi", "poly", "ajax"];
// for (let i = 0; i < friends.length; i++) {
//   const friend = friends[i];
//     //   console.log("🚀 ~ friend:", friend);

// }

// const findFriend = "jack";
// let message = "";
// for (let i = 0; i < friends.length; i++) {
//   const friend = friends[i];
//   if (friend === findFriend) {
//     message = `${friend} запрошенний на святкування`;
//     break;
//   } else {
//     message = `забули запосити ${findFriend}`;
//   }
// }

// console.log(message);

// !!!for of
// for (const friend of friends) {
//   console.log(friend);
// }

//#задачі

const values = "8 11";
const sides = values.split(" ");
// console.log("🚀 ~ sides:", sides);
// ЧЕРЕЗ for of
// for (const side of sides) {
//   console.log("🚀 ~ side:", +side);
// }
// ЧЕРЕЗ for
// for (let i = 0; i < sides.length; i++) {
//   const side = +sides[i];
//   console.log("🚀 ~ side:", side);
//   sides[i] = side;
// }
// console.log("🚀 ~ sides:", sides);

// const square = sides[0] * sides[1];
// console.log("🚀 ~ square:", `Площа  дорівнює ${square}`);
