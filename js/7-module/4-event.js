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
// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };
// button.addEventListener("click", handleClick);
//!Подія submit
//Відправлення форми відбувається:
// - при кліку на кнопку з атрибутом type="submit"
// - при натисканні клавіші Enter 


// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
  
//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }
//!Подія change
//Для текстових полів або textarea подія відбудеться не на кожному введенні символу, а після 
// втрати фокусу. Це не завжди зручно. Уяви, що користувач набирає щось у текстовому 
// полі — подія відсутня. Щойно фокус пропав, відбудеться подія change.


// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   console.log("🚀 ~ setOutput ~ selectedOptionValue:", selectedOptionValue)
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   console.log("🚀 ~ setOutput ~ selectedOptionIndex:", selectedOptionIndex)
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;
//   console.log("🚀 ~ setOutput ~ selectedOptionText:", selectedOptionText)

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

//!Подія input
//Подія input відбувається тільки на текстових полях і textarea.
//Вона створюється щоразу при зміні значення елемента, не чекаючи втрати фокусу. 
// На практиці input — це найголовніша подія для роботи з текстовими полями форми.
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

//!Подія focus і blur

