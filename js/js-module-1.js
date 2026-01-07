// console.log(window);
const userAnswer = prompt("do you agree")
console.log("🚀 ~ result:", userAnswer)
console.log("🚀 ~ result:", typeof userAnswer)



if (typeof userAnswer === 'string') {
    const age = Number(userAnswer);
    console.log(age);
    console.log(typeof age);
}
