// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу

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
//!=============================================================
// // Виконується першою
// console.log("First log");

// setTimeout(() => {
//   // Виконується третьою, через 2000 мілісекунд (2 секунди)
//   console.log("Second log");
// }, 2000);

// // Виконується другою
// console.log("Third log");

//!setTimeout=============================================================
// const setBtn = document.querySelector(".js-set");
// const clearBtn = document.querySelector(".js-clear");
// let timeoutId;

// setBtn.addEventListener("click", () => {
//   timeoutId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);
// });

// clearBtn.addEventListener("click", () => {
//   clearTimeout(timeoutId);
//   console.log(`Timeout with id ${timeoutId} has stopped!`);
// });

//!setInterval=============================================================
// const startBtn = document.querySelector(".js-start");

// startBtn.addEventListener("click", () => {
//   const intervalId = setInterval(() => {
//     console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });
//!clearInterval=============================================================
const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let intervalId = null;

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  console.log(`Interval with id ${intervalId} has stopped!`);
});
