//! Перетворення  рядку  до JSON формату
// const data = "Well, this is awkward";
// const json = JSON.stringify(data);
// const newData = JSON.parse(json);
// console.log("🚀 ~ newData:", newData);

//! Перетворення  Обєкта до JSON формату JSON.stringify()
const dog = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
};

const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
// console.log(window.localStorage);// Storage {length: 0}

//! Метод  try catch
//? використовуєтся для того щоб не валідний JSON не ламав код

// try {
//   const notValidData = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log("✅ This is fine, we handled parsing error in try...catch");

//
//! ДОДАВАННЯ ДАННИХ setItem()
//

//! Додавання ключів у локал сторедж
localStorage.setItem("ui-theme", "light");

//! Додавання обєктів у локал сторедж
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
  age: 5,
};

localStorage.setItem("settings", JSON.stringify(settings));

//!Отримання даних getItem()
//? Метод getItem(key) дозволяє зчитати зі сховища запис із ключем key
//? і повертає його значення у JSON форматі.
const savedTheme = localStorage.getItem("ui-theme");
// console.log(savedTheme); // "light"

//Якщо у сховищі відсутній запис з таким ключем, метод повертає //!null.
const savedItem = localStorage.getItem("key-that-does-not-exist");
// console.log(savedItem); // null

//!Виклик данних після додавання обєктів у локал сторедж
const savedSettings = localStorage.getItem("settings");
const parsedSettings = JSON.parse(savedSettings);
const age = parsedSettings.age;
// console.log(age);

//
//!Видалення даних
//
// Метод removeItem(key) видаляє зі сховища існуючий запис з ключем key.
//  В результаті своєї роботи він не повертає значення.
localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null

//!Кейс: Форма з повідомленням
const form = document.querySelector(".feedback-form");
const texterea = form.elements.message;
const localStorageKey = "goit-example-message";

texterea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
});
