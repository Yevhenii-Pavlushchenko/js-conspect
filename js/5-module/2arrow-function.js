// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

// const res7 = calculateTotalPrice(5, 100);

// const calcTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
//   //   return total;
// };
// const res8 = calcTotalPrice(4, 800);
// console.log("🚀 ~ res8:", res8);

// const calc2TotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// const res9 = calc2TotalPrice(3, 800);
// console.log("🚀 ~ res9:", res9);
//! before
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

//! after
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// const res10 = calculateTotalPrice([164, 48, 291]); //повертає 503
// console.log("🚀 ~ res10:", res10);
// const res11 = calculateTotalPrice([12, 85, 37, 4]); //повертає 138
// console.log("🚀 ~ res11:", res11);
// const res12 = calculateTotalPrice([412, 371, 94, 63, 176]); //повертає 1116
// console.log("🚀 ~ res12:", res12);
//! variant 1
// function changeEven(numbers, value) {
//   let newArray = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });

//   return newArray;
// }

//! variant 2
function changeEven(numbers, value) {
  // .map створює новий масив, не змінюючи оригінальний (чиста функція)
  return numbers.map((number) => {
    // Якщо число парне — повертаємо число + value
    // Якщо непарне — повертаємо число без змін
    return number % 2 === 0 ? number + value : number;
  });
}

const res12 = changeEven([44, 13, 81, 92, 36, 54], 100);
console.log("🚀 ~ res12:", res12);
//` повертає новий масив `[144, 13, 81, 192, 136, 154]`
