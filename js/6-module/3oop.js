//! Процедурне програмування
const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

const res1= getWage(baseSalary, overtime, rate);
console.log("🚀 ~ res1:", res1)

//!Об'єктно-орієнтоване програмування
//При такому підході відсутні або майже відсутні глобальні змінні.
//  Методи не залежать від параметрів, а використовують властивості 
// об'єкта, які задаються при його створенні і можуть бути змінені 
// іншими методами.
const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

const res2 = employee.getWage();
console.log("🚀 ~ res2:", res2)
