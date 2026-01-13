//!Метод slice()
// Метод slice() використовується для створення копії частини або всього рядка без
//  зміни оригінального рядка. Він дозволяє витягувати підрядок з вихідного рядка,
// вказуючи початковий та кінцевий індекси.

// Синтаксис методу slice() виглядає так:  str.slice(startIndex, endIndex);

const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

//!Метод toLowerCase() і toUpperCase()
// Методи рядків toLowerCase() та toUpperCase() використовуються для зміни регістру
// символів у рядку.Обидва методи не змінюють вихідний рядок, а повертають новий
// рядок у відповідному регістрі.

const message = "JavaScript is awesome";
console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"
console.log(message.toLowerCase()); // "javascript is awesome"

//!Метод includes()
//Метод рядків includes() використовується для перевірки наявності підрядка у рядку.
//  Він повертає логічне значення true, якщо підрядок знайдено, і false, якщо
// підрядок відсутній.
// Синтаксис методу includes() виглядає так:   str.includes(substring);

// Метод includes() корисний, коли нам необхідно виконати зазначені дії за умови,
// коли рядок містить певний підрядок.

const messsage = "Please buy our stuff!";
const hasSpam = messsage.includes("buy");

if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
}
