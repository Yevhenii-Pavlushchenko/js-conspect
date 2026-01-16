const add = function doThomething(params) {
  const args = Array.from(arguments);
  let total = "";
  for (const arg of args) {
    total += arg;
  }
  return total;
};

const res1 = add(1, 2, 3);

function calAvanger() {
  const args = Array.from(arguments);
  let total = 0;

  for (const num of arguments) {
    total += num;
  }
  return total / args.length;
}
const res2 = calAvanger(1, 2, 3);
// console.log("🚀 ~ res2:", res2);

function logItems(items = []) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${items[i]}`);
  }
}

// logItems("Mango", "Poly", "Ajax");
