//!    Ланцюжки методів (Chaining)
// У нас є масив об'єктів з іменами, балами й відвідуваними предметами кожного
// студента.
const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

//! WithOUt chaniing
const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map((student) => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
//! WITH chaniing
const namesByChaining = students
  .toSorted((a, b) => a.score - b.score)
  .map((student) => student.name);

// console.log("🚀 ~ namesByChaining:", namesByChaining); // ["Ajax", "Poly", "Mango", "Kiwi"]

//!Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

//!Task #1 Chaining
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
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const namesAutors = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .toSorted((a, b) => a.localeCompare(b));
console.log("🚀 ~ namesAutors:", namesAutors);
