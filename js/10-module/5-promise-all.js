//!  Метод Promise.all()
//? дозволяє одночасно обробити кілька промісів та отримати їхні
//? результати. Він приймає масив промісів як вхідні дані, чекає
//? їх виконання та повертає один проміс.

//      Promise.all([promise1, promise2, promise3, ...])

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//   .then((values) => console.log(values)) // [1, 2, 3]
//   .catch((error) => console.log(error));

//? Якщо хоча б один із промісів відхиляється, повернений проміс
//? одразу переходить у стан rejected, а його значенням буде помилка.

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("REJECTED promise 2");
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//   .then((values) => console.log(values))
//   .catch((error) => console.log(error));

//!Метод Promise.allSettled() ====================================
//?Відмінність від Promise.all полягає в тому, що метод
//? Promise.allSettled() чекає виконання всіх промісів незалежно від
//?  того, чи були деякі або навіть всі проміси відхилені.

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.allSettled([p1, p2, p3]).then((values) => console.log(values));
// [
//   { status: "fulfilled", value: 1},
//   { status: "rejected", value: "Rejected promise 2"},
//   { status: "fulfilled", value: 3}
// ]

//!Метод Метод Promise.race() ====================================
//?Метод Promise.race приймає масив промісів і повертає "НАЙШВИДШИЙ"
//?тобто перший виконаний або відхилений проміс з переданих, разом зі
//?значенням або причиною його відхилення.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 2000);
});

Promise.race([p1, p2])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
