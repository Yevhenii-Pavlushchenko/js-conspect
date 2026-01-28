const user = {
  username: "Victor",
  showName() {
    // ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
    console.log(
      `${user.username} біжить швидко,тому що ${this.username} намагається зловити поїзд`,
    );
  },
};

// user.showName();

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    // Використовуємо this, щоб звернутися до масиву pizzas цього об'єкта
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    // Використовуємо this, щоб викликати метод checkPizza цього об'єкта
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};
const res = pizzaPalace.order("Four meats");
// console.log("🚀 ~ res:", res);
//??
function foo() {
  console.log(this);
}

// foo(); // window
//?
const user2 = {
  username: "Poly",
  showThis() {
    console.log(this);
  },
};

// user2.showThis(); // {username: "Poly", showThis: ƒ}

("use strict");
//?
function showThis() {
  console.log("this in showThis: ", this);
}

// Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"

const user3 = {
  username: "Poly",
};
user3.showContext = showThis; //додаємо  функцію  з юзер 2
// user3.showContext(); // Викликаємо її, і в ній під this буде значення з юзер3

//!Метод call()
//Метод call викликає функцію foo так, що значення this у функції буде 
// посилатися на об'єкт thisArg, і також передає їй аргументи arg1, arg2 тощо.


function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: "Mango",
	room: 27
};

const poly = {
  username: "Poly",
	room: 191
};
// greet('Welcome')// Помилка так як функція гріт не бачить обєкт полі
// greet.call(poly, 'Welcome')

function greet2(name) {
  console.log(`Hello, ${name}! I am ${this.person}`);
}

const person = "John";
const context = {
  person: "Alice"
};

// greet2.call(context, "Bob");


//!Метод apply()
//Метод apply є аналогом методу call. Відмінність у тому, що 
// в методі apply() синтаксис передачі аргументів вимагає 
// !МАСИВУ, навіть якщо аргументи функції — це окремі значення.
function greet3(str, str2) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango2 = {
  username: "Mango",
	room: 27
};

const poly2 = {
  username: "Poly",
	room: 191
};

// greet3.apply(mango2, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet3.apply(poly2, ["Aloha"]); // "Aloha, Poly, your room is 191!"

//!Метод bind() і втрата контексту
//Методи call і apply викликають функцію «на місці», тобто одразу.
//Метод bind створює і повертає нову функцію, яка має заздалегідь 
// встановлений контекст, і ця нова функція може бути викликана пізніше 
// з будь-якими аргументами.
const customer = {
  username: "Jacob",
	sayHello() {
		console.log(`Hello, ${this.username}!`);
  }
};

// customer.sayHello(); // "Hello, Jacob!"

const greet4 = customer.sayHello.bind(customer);//? "Hello, Jacob!"
// const greet4 = customer.sayHello(customer)//!greet4 is not a function
// greet4(); // "Hello, Jacob!"

//!Метод bind() і колбеки
//Щоб уникнути цієї втрати контексту, можна використати метод bind(). 
// Замість передачі оригінального методу getFullName, ми передаємо його 
// копію, до якої прив'язаний контекст об'єкта customer.
const customer2 = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
	const username = callback();
	console.log(`Processing an application from ${username}`);
}

// makeMessage(customer2.getFullName.bind(customer2)); 
// "Processing an application from Jacob Mercer"


const library = {
	books: 1923,
	logBookCount() {
		console.log(this.books);
	}
};

function showBooks(callback) {
	callback()
}

// showBooks(library.logBookCount.bind(library))

//! Стрілочні функціі НЕ працюють з методами call, apply, blind 
//1.Контекст **this** усередині стрілочної функції визначається місцем її 
// оголошення, а не виклику.

// 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в 
// глобальному контексті у стрілці завжди this посилається на об'єкт window.

// 3.Неможливо змінити значення this усередині стрілочних функцій після 
// її оголошення. Методи call, apply і bind не впливають на значення this
//  у стрілках.

