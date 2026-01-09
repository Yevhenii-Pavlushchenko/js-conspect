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
const bmi = calcBMI("88,3", "74.9");
console.log("🚀 ~ bmi:", bmi);

function calcBMI(weight, height) {
  let normlizeweight = weight.replace(",", ".");
  let normlizeheight = height.replace(",", ".");

  console.log(Number.parseFloat(normlizeheight));
  console.log(Number.parseFloat(normlizeweight));
  const bmi = normlizeweight / normlizeheight;
  //   return Math.round((bmi * 10) / 10);
  return +bmi.toFixed(1);
}
