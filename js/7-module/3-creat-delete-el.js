//Cтворюємо  в html div відносоно якого будемо працювати
const div7 = document.querySelector('.module7')

//!Розглянемо, як створити новий елемент:
//?     document.createElement(tagName)
//? - створює елемент з ім'ям tagName і повертає посилання на його об’єкт як результат свого виконання.
//? - tagName — це рядок, що вказує тип елемента, який створюється.
//? - Елемент створюється в пам'яті, у DOM його ще немає.
const heading = document.createElement("h1");

//Після створення елемента heading отримуємо посилання на його
//  об’єкт у пам'яті. З цього моменту можна звертатися до властивостей 
// цього об’єкта і змінювати їх ще до того, як вставимо цей елемент у DOM.

heading.classList.add("title");
heading.textContent = "This is a heading";
// console.log(heading); // <h1 class="title">This is a heading</h1>

const image = document.createElement("img");
image.src = "https://picsum.photos/id/11/320/240";
image.alt = "Nature";
// console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

//!Додавання елементів у HTML
//щоб створений елемент відображався на сторінці, його необхідно додати до вже 
// існуючого елемента в DOM-дереві. Припустимо, що додаємо до певного елемента 
// elem, для цього існують такі методи.
//!append
//?elem.append(el1, el2, ...) — додає після всіх дітей елемента elem.
//!prepend
//?elem.prepend(el1, el2, ...) — додає перед усіма дітьми елемента elem.
div7.append(image)
div7.prepend(heading)

//!Видалення елементів
//Для того щоб видалити елемент, використовується метод element.remove().
//? Додаємо у HTML <p class="text">Random text content</p>
//Він викликається на елементі element, який необхідно видалити.
const text = document.querySelector(".deleted-text")
text.remove();

//

//!Властивість innerHTML
//Існує ще один спосіб створити DOM-елементи і помістити їх у DOM-дерево.
//Для цього треба використати рядки з тегами і дозволити браузеру зробити всю в
// ажку роботу. У такого підходу є свої плюси та мінуси.
//? Додаємо у  HTML розмітку з якою будемо працювати
//?<section><h2>Popular technologies</h2><ul class="list"></ul></section>
//! Крок 1 
// створюємо массив з котрого будемо збирати  li 
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
//! Крок 2 
// Сберігаємо UL з HTML  в змінну
const list = document.querySelector(".list");
//! Крок 3 
// перетворюємо массив technologies на li в HTML.
//Обовязково використовуємо 2 методи у ланцюжку .map() та join()
let markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");
// console.log(markup);
// ! Крок 4  
// виводимо 'li' в HTML  в середину тега 'ul'
list.innerHTML = markup;

//!Використовуй властивість element.innerHTML для додавання тільки у разі, 
 //?— коли елемент element порожній або
//?— якщо потрібно повністю замінити вміст element
//! В усіх останніх випадках використовуємо insertAdjacentHTML()

// 

//!Метод insertAdjacentHTML()
//— це сучасний метод для додавання рядка з HTML-тегами перед, після або
// всередину елемента. Він вирішує проблему innerHTML з повторною 
// серіалізацією вмісту елемента під час додавання розмітки до вже існуючої.
//?    element.insertAdjacentHTML(position, string)
//Аргумент position — це рядок, який визначає позицію щодо елемента element. 
// !Він приймає одне з чотирьох значень.
//? "beforebegin" — перед element
//? "afterbegin" — всередині element, перед усіма дітьми
//? "beforeend" — всередині element, після усіх дітей
//? "afterend" — після element

//! Крок 1 
//  Cтворимо новий массив дял додавання в 'ul'
const newTechnologies = ["Web-p", "TypeScript", "Git-Hub"];
//! Крок 2
// Додаємо 'li'до вже існуючого списку 'markup' з нового массиву  newTechnologies
 markup = newTechnologies
  .map((newTechnology) => `<li class="list-item new">${newTechnology}</li>`)
  .join("");
//! Крок 3
// виводимо нові 'li' в HTML в кінець тега 'ul'
list.insertAdjacentHTML("beforeend", markup);

