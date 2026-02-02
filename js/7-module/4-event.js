//!Події
//  — це сигнал від браузера про те, що на вебсторінці щось відбулося. Існує
// багато видів подій: події миші, події клавіатури, події елементів форм, 
// зміни розмірів вікна, завантаження зображень, буфера обміну, зміни стадії 
// CSS анімації або переходу тощо. Події використовуються для реакції на дії 
// користувача й виконання коду, пов'язаного з певною подією.

//!Слухач події
//  — це механізм, який "слухає" або "очікує" на виникнення певної 
// події. Метод addEventListener() додає слухача події на елемент.

//!Метод addEventListener()
//? element.addEventListener(event, handler, options)
// event — рядок, що містить ім'я події, наприклад, "click"
// handler — колбек-функція, яка буде викликана під час настання події
// options — необов'язковий об'єкт параметрів із розширеними налаштуваннями

//? Додаємо в HTML <button class="my-button">Next</button>
// привязуємо кнопку до змінної
// const button = document.querySelector(".my-button");
//! Перший варіант підкючення Анонімна функція
// button.addEventListener("click", () => {
//   console.log("The button was pressed and now the next image will appear");
// });
//! Другий варіант підкючення Окремо оголошена функція
// const handleClick = () => {
//   console.log
//   ("The button was pressed and now the next image will appear");
// };

// button.addEventListener("click", handleClick);

// ===============================================
//!Метод removeEventListener()
// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });
// ===============================================
//! Об'єкт події
const button = document.querySelector(".btn");

const handleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};
button.addEventListener("click", handleClick);




