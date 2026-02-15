// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);
// };

// fetchUserFromServer(
//   "Mango",
//   (user) => console.log(user),
//   (error) => console.error(error),
// );
//!================================================================
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// fetchUserFromServer(
//   "Mango",
//   (user) => console.log(user),
//   (error) => console.error(error),
// );
//!================================================================

// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value"); // значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject("error"); // значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));

//!Promise.resolve() і Promise.reject() =================================
//? Це статичні методи для створення промісів, що миттєво успішно виконуються
// ? або відхиляються. Вони працюють аналогічно new Promise(), повертають
//? проміс, але мають коротший синтаксис.

// new Promise((resolve) => resolve("success value"))
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// new Promise((resolve, reject) => reject("error"))
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

//!Промісифікація синхронних функцій =================================
//?Методи Promise.resolve і Promise.reject використовуються для
//? промісифікації функцій, коли не треба чекати результату асинхронної
//? операції, а просто необхідно побудувати ланцюжок промісів, і вже є початкове значення.

const makeGreeting = (guestName, onSuccess, onError) => {
  if (!guestName) {
    onError("Guest name must not be empty");
  } else {
    onSuccess(`Welcome ${guestName}`);
  }
};
makeGreeting(
  "Mango",
  (greeting) => console.log("Вивід через фунцію", greeting),
  (error) => console.error("Вивід через фунцію", error),
);

//? Зробимо промісифікацію функції makeGreeting для того, щоб повністю усунути
//?  її залежність від зовнішнього коду. Вона повинна просто повертати проміс.

const makeGreeting2 = (guestName) => {
  return new Promise((resolve, reject) => {
    if (!guestName) {
      reject("Guest name must not be empty");
    } else {
      resolve(`Welcome ${guestName}`);
    }
  });
};

makeGreeting2("Mango")
  .then((greeting) => console.log("Вивід через промісифікацю", greeting))
  .catch((error) => console.error("Вивід через промісифікацю", error));

//?А тепер використаємо методи класу Promise, щоб скоротити кількість коду.

const makeGreeting3 = (guestName) => {
  if (!guestName) {
    return Promise.reject("Guest name must not be empty");
  } else {
    return Promise.resolve(`Welcome ${guestName}`);
  }
};

makeGreeting3("Mango")
  .then((greeting) => console.log("Вивід через метод Promise", greeting))
  .catch((error) => console.error("Вивід через метод Promise", error));
