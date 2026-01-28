const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
// console.log(dog.legs);
// console.log(animal.name);//! undefined

animal.head = 2// додаю в прототип  нову властивість
// console.log("🚀 ~ animal:", animal)//бачу її в самому протитипі
// console.log("🚀 ~ dog:", dog)// в обєкті її так само бачу

//Розгляньмо приклад використання методу //!isPrototypeOf() 
// для перевірки належності прототипу.
const customer = {
	username: "Jacob"
};

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false

//Для того щоб перевірити, чи є в об'єкті власна 
// властивість, використовується метод //!obj.hasOwnProperty(key). 

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false
//щоб вивести  список властних властивостей використовуємо //!hasOwnProperty(key)
// for (const key in dog) {
//   console.log(`Властивість dog i його прототипу ${key}`); 
//   // Усі властивості dog та його прототипу
// }
// for (const key in dog) {
//     if (dog.hasOwnProperty(key)) {
//       console.log(`Тільки властивість dog ${key}`); 
//       // Усі властивості dog
// }

// }
//!Методи Object.keys(obj) і Object.values(obj)
//Щоб не робит завжди перевірку через іf є скорочена конструкція:
for(const key of Object.keys(dog)) {
	console.log(key); // Поверене назву(ключ) властивості "name"
}
for(const key of Object.values(dog)) {
	console.log(key); // Поверене Значення властивості "Mango"
}
