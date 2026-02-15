//! Promise
//Проміс дозволяє обробляти результати асинхронних операцій таким чином, якби
// вони були синхронними: замість кінцевого результату асинхронної операції,
// повертається своєрідна обіцянка отримати результат у майбутньому.

//?Життєвий цикл проміса
//Проміс може бути у трьох станах:
//?(pending) — початковий стан під час створення промісу.
//?(fulfilled) — операція виконана успішно з будь-яким результатом.
//?(rejected) — операція відхилена з помилкою.

// const promise = new Promise((resolve, reject) => {
//   const isSuccess = true;

//   if (isSuccess) {
//     resolve("Проміс виконався успішно з результатом fulfilled");
//   } else {
//     reject(" проміс не виконано, результата rejected");
//   }
// });
// console.log("🚀 ~ promise:", promise);

//!Метод then()=======================
//?Метод проміса then() приймає два аргументи — дві callback функції,
//? які будуть викликані, коли проміс змінить свій стан.

//!     promise.then(onResolve, onReject);

//?onResolve(value)
// — 1-й аргумент методу then(), колбек-функція, яка
// буде викликана у разі успішного виконання промісу та отримає його результат як аргумент.
//?onReject(error)
// 2 - й аргумент методу then(), колбек - функція, яка буде викликана у разі виконання
// промісу з помилкою та отримає її як аргумент.

//!Приклад
//У прикладі нижче callback-функція onResolve буде викликана через дві секунди,
// якщо проміс успішно виконається, а onReject буде викликана через дві секунди у
// тому разі, якщо проміс виконається з помилкою.

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//   (value) => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   (error) => {
//     console.log(error); // "Error! Error passed to reject function"
//   },
// );

//!Метод catch()============================================================
//?На практиці в методі then() обробляють тільки успішне виконання промісу.
//?Помилку його виконання обробляють у спеціальному методі catch() для «відловлювання» помилок.

//!Винесемо обробку помилки з методу then у метод catch.
// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then((value) => {
//     console.log(value); // "Success! Value passed to resolve function"
//   })
//   .catch((error) => {
//     console.log(error); // "Error! Error passed to reject function"
//   });

//!Метод finally()============================================================
//Цей метод може бути корисним, якщо необхідно виконати код після того, як
// проміс буде виконаний незалежно від результату (fulfilled або rejected).
const isSuccess = true;

// Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then((value) => console.log(value)) // "Success! Value passed to resolve function"
//   .catch((error) => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

//!Ланцюжки промісів ============================================================
//? Тут просто нужно запомнить что сколько бы нибыло then() в конце всегда должен
//?стоять catch()

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });
