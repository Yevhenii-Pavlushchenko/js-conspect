//Якщо в HTML є тег посилання,
//? <a class="link" href="https://goit.global">GoIT</a>;
//то у JavaScript коді можна прочитати значення його атрибута href, отримавши
//  посилання на елемент, тобто об'єкт, використовуючи querySelector, і 
// звернутися до його властивості href
//?const link = document.querySelector(".link");
//console.log(link.href); // "https://goit.global"

//!Властивість textContent
//Властивість textContent повертає весь текстовий контент усередині 
// елементів (власних і вкладених елементів).
//? <p class="text">Username: <span class=”sub-text”>Mango</span></p>
//! Привязуємо змінні до классів у HTML
const el = document.querySelector(".text")
const nested = document.querySelector(".sub-text")
//!Перевіряємо 
// console.log(el.textContent); // "Username: Mango"
// console.log(nested.textContent); // "Mango"
//!Замінюємо значення
nested.textContent = "Poly";
// console.log(el.textContent); // "Username: Poly"
// console.log(nested.textContent)// "Poly"

//!Властивість classList
// — це спеціальний тип об’єкта, який подібний до масиву. 
// Зверни увагу, що він схожий, але не є нативним JavaScript-масивом, який ми 
// вивчали раніше. Він зберігає в собі весь перелік класів DOM-елемента, 
// властивість length і властивість value.
//? <a class="link is-active" href="https://goit.global">GoIT</a>
const link = document.querySelector(".link");
// console.log(link.classList); 
//? ["link", "is-active", length: 2, value: "link is-active"]
//Але самі по собі value та length майже не використовуються, тому що для
// операцій з класами (додавання, видалення тощо) є спеціальні методи.

//!Метод classList.contains(className)
//Метод очікує аргументом рядок з іменем класу та повертає true або false, 
// залежно від наявності класу className в елемента.Зверни увагу, що className 
// передаємо як рядок без крапки (без селектора класу).
const hasActiveClass = link.classList.contains("is-active"); // true
const hasActiveClass1 = link.classList.contains("title"); // false

//!Метод classList.add(className) 
//Метод очікує аргументом рядок з іменем класу та додає клас className до 
// списку класів елемента.
link.classList.add("special");
// console.log(link.classList); //? додаємо "special"
// ["link", "is-active", "special", length: 3, value: "link is-active special"]

//!Метод classList.remove(className)
//Метод очікує аргументом рядок з іменем класу та видаляє клас className зі 
// списку класів елемента.
link.classList.remove("is-active");
// console.log(link.classList); //? відаляємо 'is-active'
// ["link", "special", length: 2, value: "link special"]

//!Метод classList.toggle(className)
//Метод працює як //!перемикач:
// - якщо клас className відсутній, то додає його в кінець списку класів
// - і навпаки, якщо клас className присутній — видаляє його
//? додаємо "is-active" тому що його нема всписку,
link.classList.toggle("is-active");
// console.log(link.classList); 
// ["link", "special", "is-active", length: 3, value: "link special is-active"]
//? Видаляємо "is-active" тому що він є в списку
link.classList.toggle("is-active");
// console.log(link.classList); 
// ["link", "special", "is-active", length: 3, value: "link special"]

//!Метод classList.replace(oldClassName, newClassName)
//Метод очікує 2 аргументи рядка 
//? перший — стара назва класу
//? другий — нова назва класу
//  та замінює існуючий клас oldClassName на вказаний newClassName.
link.classList.replace("special", "regular");
// console.log(link.classList); //? змінюємо "special"на "regular"
// ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

//!Доступ до атрибутів
//DOM-елементам відповідають HTML-теги, які містять текстові атрибути.
//Доступ до атрибутів здійснюється за допомогою стандартних методів.
//  Ці методи працюють зі значенням, яке знаходиться в HTML.
//? <img class="image" src="https://picsum.photos/id/15/320/240" alt="Rocks and waterfall" width="300" />

//!Метод element.hasAttribute(nameAttribute)
//має один аргумент — рядок nameAttribute, який містить ім’я атрибута
//  для перевірки та повертає результат перевірки його наявності на
//  елементі element — true чи false.
const image = document.querySelector(".image");
console.log(image.hasAttribute("src")); // true
console.log(image.hasAttribute("href")); // false

//!Метод element.getAttribute(nameAttribute)
//Метод отримує один аргумент — рядок nameAttribute з іменем атрибута, 
// і повертає значення цього атрибута для вказаного HTML-елемента 
// element. Якщо атрибут не знайдено, метод повертає null.
console.log(image.getAttribute("alt")); // "Rocks and waterfall"


//!Метод element.setAttribute(nameAttribute, value)
//Метод приймає два аргументи:
//?  -  рядок nameAttribute з іменем атрибута, який потрібно встановити або змінити
//? -  value зі значенням, яке цьому атрибуту треба присвоїти. 
// Метод встановлює або змінює значення зазначеного атрибута для вказаного HTML-елемента element.
image.setAttribute("alt", "Amazing nature");
console.log(image.getAttribute("alt")); // Amazing nature

//!Метод element.removeAttribute(nameAttribute)
//Метод приймає один аргумент — рядок nameAttribute з іменем атрибута, який потрібно видалити 
// зі вказаного HTML-елемента element — та видаляє його. Якщо зазначеного атрибута немає на елементі, 
// метод не викликає жодних помилок та не робить нічого.
image.removeAttribute("alt");
console.log(image.hasAttribute("alt")); // false






















