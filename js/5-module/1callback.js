// !! callback  фунція!!!!
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// const res = makeMessage("Royal Grand", makePizza);
// console.log("🚀 ~ res:", res);
// const res2 = makeMessage("Ultracheese", deliverPizza);
// console.log("🚀 ~ res2:", res2);

// !! inline callback  фунція!!!!

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

//!!Метод forEach(callback)
//array.forEach(function callback(element, index, array) {
// Тіло колбек-функції
// });
const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  //   console.log(`Index ${i + 1}, value ${numbers[i]}`);
}

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  //   console.log(`Index ${index}, value ${number}`);
});

//Task 1
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (orderedItem) {
    totalPrice += orderedItem;
  });

  return totalPrice;
}
const res3 = calculateTotalPrice([12, 85, 37, 4]);
// console.log("🚀 ~ res3:", res3);
const res4 = calculateTotalPrice([164, 48, 291]);
// console.log("🚀 ~ res4:", res4);
const res5 = calculateTotalPrice([412, 371, 94, 63, 176]);
console.log("🚀 ~ res5:", res5);

//Task 2
function filterArray(numbers, value) {
  let newArr = [];
  numbers.forEach(function (number) {
    if (number > value) {
      newArr.push(number);
    }
  });
  return newArr;
}
const res6 = filterArray([1, 2, 3, 4, 5], 3);
console.log("🚀 ~ res6:", res6);
