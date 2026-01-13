//                 !!!if!!!!

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

//                  !!!else if
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

//               !!!  Тернарний оператор
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

//                !!!!  Switch
// Функція getSubscriptionPrice(type) отримує рядок з типом
// передплати користувача (параметр type), перевіряє її на збіг
// з трьома можливими типами щомісячної передплати та повертає
// ціну, або повідомлення про неправильний тип передплати.

function getSubscriptionPrice(type) {
  switch (type) {
    case "professional":
      return 20;
      break;
    case "organization":
      return 50;
      break;
    case "starter":
      return 0;
      break;
    default:
      return "Invalid subscription type!";
  }
}

console.log(getSubscriptionPrice("professional")); //повертає число 20
console.log(getSubscriptionPrice("organization")); // повертає число 50
console.log(getSubscriptionPrice("starter")); //повертає число 0
console.log(getSubscriptionPrice("random")); //повертає рядок "Invalid subscription type!"
console.log(getSubscriptionPrice("premium")); //повертає рядок "Invalid subscription type!"
