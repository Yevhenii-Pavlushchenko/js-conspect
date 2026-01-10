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

//        !!!!  Оператори !!!!!
// Запам’ятай 6 випадків, які приводяться до false:
// 1. 0
// 2. ""
// 3. Nan
// 4. null
// 5. undefined
// 6. fals

// Всі остані випадки приводять до true!!!!!!

//        !! &&   "І".  !!!!
// Оператор “І” зліва направо перевіряє почергово обидва операнди на істинність та повертає
// або значення останнього істинного (тільки правого) операнда, або першого хибного (лівого
// чи правого), на якому він запнувся.
console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"

console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"

console.log(3 && true); // true
console.log(true && 3); // 3
// А ось у цьому прикладі один із операндів буде приведений до false, отже, результатом
// буде хибний операнд.
console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0

console.log(3 && false); // false
console.log(false && 3); // false

console.log(0 && ""); // 0
console.log("" && 0); // ""

// Использование в IF
const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if (screenWidth <= sm) {
  console.log("Mobile screen");
} else if (screenWidth > sm && screenWidth <= md) {
  console.log("Tablet screen");
} else if (screenWidth > md && screenWidth <= lg) {
  console.log("Desktop screen");
} else {
  console.log("Godzilla screen");
}

// Использование в Function
function getScreenType(screenWidth) {
  const sm = 320;
  const md = 768;
  const lg = 1200;

  if (screenWidth <= sm) {
    return "Mobile screen";
  } else if (screenWidth > sm && screenWidth <= md) {
    return "Tablet screen";
  } else if (screenWidth > md && screenWidth <= lg) {
    return "Desktop screen";
  } else {
    return "Godzilla screen";
  }
}

console.log(getScreenType(700)); // "Tablet screen"
console.log(getScreenType(1200)); // "Desktop screen"
console.log(getScreenType(1500)); // "Godzilla screen"
console.log(getScreenType(320)); // "Mobile screen"
