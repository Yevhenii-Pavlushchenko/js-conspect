//!!Метод filter()
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які
// задовольнили умову колбека, тобто були >= 0
const bigValues = values.filter((value) => value > 1000);
// console.log(bigValues); // []
// до bigValues потрапили всі елементи масиву values, які задовольнили
// умову колбека, тобто були > 1000

//! Task #1 Filter
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log("🚀 ~ evenNumbers:", evenNumbers);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log("🚀 ~ oddNumbers:", oddNumbers);

//!Метод filter() на масиві об'єктів
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

const average = students.filter(
  (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE,
);
// console.log(average); // Масив об'єктів з іменами Poly і Houston

//! Task #1 Filter на масиві об'єктів
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Tell-Tale Heart",
    author: "Edgar Allan Poe",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// console.log("🚀 ~ topRatedBooks:", topRatedBooks);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log("🚀 ~ booksByAuthor:", booksByAuthor);

//!!Метод find()
// Метод find(callback) дозволяє знайти і повернути перший відповідний
// елемент, що задовольняє умову, після чого перебирання масиву припиняється.
// Тобто він, на відміну від методу filter(callback), шукає до //!ПЕРШОГО збігу.
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const res1 = colorPickerOptions.find((option) => option.label === "blue");
// console.log("🚀 ~ res1:", res1);
// { label: "blue", color: "#2196F3" }
const res2 = colorPickerOptions.find((option) => option.label === "pink");
// console.log("🚀 ~ res2:", res2);
// { label: "pink", color: "#E91E63" }
const res3 = colorPickerOptions.find((option) => option.label === "white");
// console.log("🚀 ~ res3:", res3);
// undefined

//! Task#1 Find
const bookstask2 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Tell-Tale Heart",
    author: "Edgar Allan Poe",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Tell-Tale Heart";
const AUTHORtask2 = "Robert Sheckley";

const bookWithTitle = bookstask2.find((book) => book.title === BOOK_TITLE);
// console.log("🚀 ~ bookWithTitle:", bookWithTitle);
const bookByAuthor = bookstask2.find((book) => book.author === AUTHORtask2);
// console.log("🚀 ~ bookByAuthor:", bookByAuthor);
