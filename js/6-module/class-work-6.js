// function foo() {
//   console.log("foo->", this);
// }
// foo();

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("show this tag", this.tag);
//   },
// };
// console.log(user.tag);

// const user2 = {
//   tag: "Poly",
// };
// user2.outerShowTag = user.showTag;

// console.log(user2.outerShowTag);

//! task getter setter
// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }
//! task static value
// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;

//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//   }  
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//! task static metods
class Car {
  static #maxPrice = 50000;
  static checkPrice(price){
    if (price > this.#maxPrice) {
        return "Error! Price exceeds the maximum"
    }
    return "Success! Price is within acceptable limits"
  }

  constructor(params) {
    this.price = params.price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
//!task extends Конструктор дочірнього класу
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin  extends User{
//    static role ={
//     BASIC: "basic", 
//     SUPERUSER: "superuser"
//   }
//   constructor(params) {
//     // Виклик конструктора батьківського класу User
//     super(params.email); 

//     this.posts = params.posts;
//   }
// }

// console.log(Admin.role.BASIC);

//! task Конструктор дочірнього класу

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor({email,access}){
//     super(email);
//     this.access = access
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"
// console.log(Admin.role)

//! task метод дочірнього класу
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor(params) {
    super(params.email);
    this.access = params.access;
    this.blacklistedEmails = []
  }
  blacklist(email){
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email){
    return this.blacklistedEmails.includes(email)
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
