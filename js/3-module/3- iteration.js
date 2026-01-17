// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   //   console.log(planets[i]);
// }

// function calculateTotalPrice(order) {
//   let totalPrice = "";
//   for (let i = 0; i < order.length; i++) {
//     totalPrice += order[i];
//   }
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     sum += order[i];
//   }
//   return sum;
// }
// const res1 = calculateTotalPrice([12, 85, 37, 4]);
// // console.log("🚀 ~ res1:", res1);

function getEvenNumbers(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      result.push({ i });
    }
  }
  return result;
}

const res2 = getEvenNumbers(6, 12);
// console.log("🚀 ~ res2:", res2);

// !!! Includes()
//Метод масиву includes() використовується для перевірки наявності
//  певного елемента в масиві. Він повертає логічне значення true,
//  якщо елемент знайдено в масиві, і false, якщо елемент
//  відсутній.

const fruits = ["apple", "banana", "orange"];

// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contain banana element");
// }

function checkStorage(storage, item) {
  for (let i = 0; i < storage.length; i++) {
    if (storage.includes(item)) {
      console.log(`${item}is available to order!`);
    } else {
      `Sorry! We are out of stock!`;
    }
  }
}

// const res3 = checkStorage(["apple", "plum", "pear"], "plum");

function getCommonElements(array1, array2) {
  let commonElements = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      commonElements.push(array1[i]);
    }
  }
  //   for (let elements of array1) {
  //     if (array2.includes(elements)) {
  //       commonElements.push(elements);
  //     }
  //   }
  return commonElements;
}

const res4 = getCommonElements([1, 2, 3], [10, 2, 30]);
// console.log("🚀 ~ res4:", res4);

const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  //   console.log(planet);
}

function calculateTotalPrice(order) {
  let totalPrice = 0;
  for (const item of order) {
    totalPrice += item;
  }
  return totalPrice;
}

const res5 = calculateTotalPrice([12, 85, 37, 4]);
console.log("🚀 ~ res5:", res5);
const res6 = calculateTotalPrice([164, 48, 291]);
console.log(res6);
