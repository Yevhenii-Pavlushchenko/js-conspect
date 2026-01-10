// // console.log(window);
// const userAnswer = prompt("do you agree");
// console.log("🚀 ~ result:", userAnswer);
// console.log("🚀 ~ result:", typeof userAnswer);

// if (typeof userAnswer === "string") {
//   const age = Number(userAnswer);
//   //   console.log(age);
//   //   console.log(typeof age);
// }
// const a = 15;
// const b = 10;
// console.log(a - b);

// const abc = "rome odesa stambul";

// const abcLength = abc.length;
// console.log(abcLength);

// const words = abc.split(" ");
// console.log(words);

// const res = "" * 8 + 3;
// console.log(res);

// console.log(Number("5"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number("5" + 2));
// console.log(Number(25 + "0"));
// const value = Number();

// const userAge = prompt("Enter your age please");
// console.log(Number(userAge));

// const age = Number(userAge);

// if (Number.isNaN(age)) {
//   alert("please enter number");
// }

// const res1 = (null - 5 + "10") / true;
// console.log(res1);

// console.log("6" == 6);
// console.log(undefined === undefined);

// let elementWidth = "200.74px";
// elementWidth = Number.parseInt(elementWidth);
// console.log("🚀 ~ elementWidth:", elementWidth);

// let elementHeight = "200.74px";
// elementHeight = Number.parseFloat(elementHeight);

// // console.log("🚀 ~ elementHeight:", elementHeight);

// const value = 27.5;
// // console.log("🚀 ~ value:", Math.round(value));

// const minTemp = Math.min(-1, -10, 20, 35);
// console.log("🚀 ~ minTemp:", minTemp);

// const maxTemp = Math.max(-1, -10, 20, 35);
// console.log("🚀 ~ maxTemp:", maxTemp);

// Functions

// let totalClicks = 0;

// btn.onclick = countClick;

// function countClick() {
//   totalClicks += 1;
//   renderResault();
// }
// countClick();

// function renderResault() {
//   output.textContent = totalClicks;
// }

// function add(a, b) {
//   const resasult = a + b;
//   return resasult;
// }

// const res1 = add(3, 4);
// console.log("🚀 ~ res1:", res1);

// log("before fnA");

// fnA();
// console.log("After fnA");

// function fnA() {
//   console.log("inside fnA ");
// }
//

// Задача
// console.log("🚀 ~ bmi:", calcBMI("88,3", "74.9"));

// function calcBMI(weight, height) {
//   let normlizeweight = weight.replace(",", ".");
//   let normlizeheight = height.replace(",", ".");

//   console.log(Number.parseFloat(normlizeheight));
//   console.log(Number.parseFloat(normlizeweight));
//   const bmi = normlizeweight / normlizeheight;
//   //   return Math.round((bmi * 10) / 10);
//   return +bmi.toFixed(1);
// }

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function multyFi(x, y, z) {
//   const resasult = x * y * z;
//   return resasult;
// }

// multyFi(2, 2, 3);

// const grade = 85;

// if (grade >= 70) {
//   console.log("Satisfactory");
// } else {
//   console.log("Unsatisfactory");
// }

// function checkGrade(grade) {
//   if (grade >= 70) {
//     return "Satisfactory";
//   } else {
//     return "Unsatisfactory";
//   }
// }

// console.log(checkGrade(40)); // Unsatisfactory
// console.log(checkGrade(75)); // Satisfactory

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return console.log("Not enough goods in stock!");
//   } else {
//     return console.log("Order is processed, our manager will contact you");
//   }
// }

// checkStorage(150, 30);
// checkStorage(50, 100);
// checkStorage(200, 20);

// const grade = "90baal";
// let numbergrade = Number.parseFloat(grade);

// if (numbergrade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return console.log("There are no products in the order!");
//   } else if (ordered > available) {
//     return console.log(
//       "Your order is too large, there are not enough items in stock!"
//     );
//   } else {
//     return console.log("The order is accepted, our manager will contact you");
//   }
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// function getBiggerNumber(a, b) {
//   return a > b ? a : b;
// }

// console.log(getBiggerNumber(10, 5));
// console.log(getBiggerNumber(10, 50));
// console.log(getBiggerNumber(100, 45));

//Функція checkPassword(password) порівнює переданий їй пароль (параметр password)
// зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням
//  про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

// Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";

//   return password === correctPassword
//     ? "Access granted"
//     : "Access denied, wrong password!";
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));
