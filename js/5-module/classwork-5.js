function fnA(params) {
  console.log("🚀 ~ fnA ~ fnA:", fnA);
  return { a: 5 };
}
const arrowFnA = () => ({ a: 5 });
// console.log("🚀 ~ arrowFnA ~ arrowFnA:", arrowFnA);

const add = (a) => {
  return a + 5;
};
// console.log("🚀 ~ add ~ add:", add(10));

const greet = (name) => {
  console.log(`${name}"Hello!"`);
};
// console.log("🚀 ~ greet ~ greet:", greet("Jack"));

// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

const calcTotalPrice = (quantity, pricePerItem) => {
  let total = quantity * pricePerItem;
  console.log("🚀 ~ calcTotalPrice ~ total:", total);
  console.log();
};

// const res7 = calculateTotalPrice(5, 100);
const res7 = calcTotalPrice(5, 100);

console.log("🚀 ~ res7:", res7);
