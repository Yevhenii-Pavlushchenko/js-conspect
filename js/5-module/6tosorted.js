//!Метод toSorted()
//Метод toSorted() сортує елементи масиву.
// Сортує вихідний масив
// Повертає новий масив
// За замовчуванням сортує за зростанням

//!Робота з числами
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted();
// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//!Робота з рядками
const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// console.log(students.toSorted());
//Водночас порядковий номер великих літер менший, ніж у малих.
const letters = ["b", "B", "a", "A", "c", "C"];
// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

//!Task toSorted()
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Edgar Allan Poe",
];
const ascendingReleaseDates = releaseDates.toSorted();
// console.log("🚀 ~ ascendingReleaseDates:", ascendingReleaseDates);
const alphabeticalAuthors = authors.toSorted();
// console.log("🚀 ~ alphabeticalAuthors:", alphabeticalAuthors);

//!Свій порядок сортування чисел
// Для зазначення свого порядку сортування методу toSorted(compareFunction) потрібно
// передати колбек - функцію з двома параметрами.
//! сортувати по зростанню a - b
const scores1 = [61, 19, 74, 35, 92, 56];
const ascendingScores1 = scores.toSorted((a, b) => a - b);
// console.log(ascendingScores1); // [19, 35, 56, 61, 74, 92]
//! сортувати за спаданням b - a
const scores2 = [61, 19, 74, 35, 92, 56];
const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

//! Task #2
const releaseDates2 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const ascendingReleaseDates2 = releaseDates.toSorted((a, b) => a - b);
// console.log("🚀 ~ ascendingReleaseDates2:", ascendingReleaseDates2);
const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log("🚀 ~ descendingReleaseDates:", descendingReleaseDates);

//!Свій порядок сортування рядків
// Для сортування рядків в алфавітному порядку, за зростанням або спаданням,
// використовується метод рядків localeCompare().
const students1 = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
//! За алфавітом А - Я
const inAlphabetOrder = students1.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
//!За алфавітом Я - А
const inReversedOrder = students1.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

//! Task #3
const authors3 = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Edgar Allan Poe",
  "Howard Lovecraft",
];
const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
// console.log("🚀 ~ authorsInAlphabetOrder:", authorsInAlphabetOrder);
const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
// console.log("🚀 ~ authorsInReversedOrder:", authorsInReversedOrder);

//!Сортування об'єктів
const students4 = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];
//? за зростанням кількості балів
const inAscendingScoreOrder = students4.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
);
// console.table(inAscendingScoreOrder);

//?за спаданням кількості балів
const inDescendingScoreOrder = students4.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
);
// console.table(inDescendingScoreOrder);
//?за ім'ям студента в алфавітному порядку
const inAlphabeticalOrder = students4.toSorted((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name),
);
// console.table(inAlphabeticalOrder);

//! Task #4
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
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const sortedByAuthorName = books.toSorted((a, b) =>
  a.author.localeCompare(b.author),
);
// console.table(sortedByAuthorName);

const sortedByReversedAuthorName = books.toSorted((a, b) =>
  b.author.localeCompare(a.author),
);
// console.table(sortedByReversedAuthorName);

const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
// console.table(sortedByAscendingRating);

const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
// console.table(sortedByDescentingRating);
