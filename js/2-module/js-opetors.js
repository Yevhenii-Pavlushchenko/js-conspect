//        !!!!  Оператори !!!!!
// Запам’ятай 6 випадків, які приводяться до false:
// 1. 0
// 2. ""
// 3. Nan
// 4. null
// 5. undefined
// 6. fals

// Всі остані випадки приводять до true!!!!!!

//        !! Оператор &&   "І".  !!!!
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

//        !!! Оператор ||   "Або" !!!
// Оператор "АБО" (||) перетворює всі операнди до логічного типу (
// true або false)
// і повертає значення одного з них.

// Якщо хоча б один із операндів можна перетворити на true, результатом
// логічного «АБО» буде цей операнд.
// console.log(true || false); // true
// console.log(false || true); // true

// console.log(5 || false); // 5
// console.log(false || 5); // 5

// console.log("hello" || 0); // "hello"
// console.log(0 || "hello"); // "hello"

// Якщо всі операнди перетворюються на false, результатом буде значення
//  крайнього правого операнда.

// console.log(0 || false); // false
// console.log(false || 0); // 0

// console.log(null || ""); // ""
// console.log("" || null); // null

//        !!! Оператор "!"-"HI" !!!
// Логічне «НІ» приводить операнд до логічного значення(true або false)
//  і потім заперечує(інвертує) його, тобто заміняє на протилежне: true —> false,
//   а false —> true.
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// console.log(!null); // !null -> !false -> true

const isBlocked = false;
const canChat = !isBlocked; // !false -> true

if (canChat) {
  console.log("Can type in chat!");
} else {
  console.log("Blocked from typing in chat!");
}

// У прикладі вище бачимо, що значення змінної isBlocked — false.
// Користувач не заблокований.Результатом canChat буде true.

// Якщо значення змінної isBlocked — true, користувач заблокований.У такому разі
// результат обчислення canChat буде false.Отже, умова if заборонить користувачеві
// писати в чаті.
