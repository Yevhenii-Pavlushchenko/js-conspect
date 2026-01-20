const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
// console.log("🚀 ~ apartment.owner:", apartment.owner);
const aptImgUrl = apartment["imgUrl"];
const descr = apartment["descr"];
const aprRating = apartment["rating"];
const aprPrice = apartment["price"];
let aprTags = apartment["tags"];
let aprOwner = apartment["owner"];
// console.log("🚀 ~ aprTags:", aprTags);
// console.log("🚀 ~ aptImgUrl:", aptImgUrl);
// console.log("🚀 ~ descr:", descr);
// console.log("🚀 ~ aprRating:", aprRating);
// console.log("🚀 ~ aprPrice:", aprPrice);
// console.log("🚀 ~ aprTags:", aprTags);
// console.log("🚀 ~ aprOwner:", aprOwner);
// console.log("🚀 ~ apartment:", apartment.descr);

// console.log("🚀 ~ apartment.tags BEFORE:", apartment.tags);
// console.log("🚀 ~ aprTags BEFORE:", aprTags);
// apartment.tags = ["premium", "promoted", "top", "free"];
apartment.tags.push("free");
// console.log("🚀 ~ apartment.tags AFTER:", apartment.tags);
// console.log("🚀 ~ aprTags AFTER:", aprTags);

// console.log("🚀 ~ apartme÷nt.owner BEFORE:", apartment.owner);
// console.log("🚀 ~ aprOwn÷er BEFORE:", aprOwner);
apartment.owner.phone = "063-000-00-00";
// apartment.owner.phone2 = "063-777-77-77";

// console.log("🚀 ~ apartment.owner AFTER:", apartment.owner);
// console.log("🚀 ~ aprOwner AFTER:", aprOwner);
//
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
// console.log("🚀 ~ user.stats.likes:", user.stats.likes);
// console.log(user.stats.views);

const name = "Henry Sibola";
const age = 25;

const user2 = {
  name,
  age,
};

// console.log(user2); // "Henry Sibola"
// console.log(user2); // 25

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};
// console.log("🚀 ~ credentials:", credentials);

//!! Обява операцій!!
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdrow",
};

const account = {
  balance: 0,
  transaction: [],
  createTransaction(amount, type) {
    return { id: this.transaction.length + 1, amount, type };
  },
  //!! Поповнення!!
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transaction.push(transaction);
    this.balance += amount;
    console.log(`Кошти зараховано ${amount}. Ваш баланс: ${this.balance}`);
  },
  //!! Списання!!
  withdrow(amount) {
    if (this.balance < amount) {
      console.warn(`Операцiю відхилено. Недостатньо коштів!!! `);
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transaction.push(transaction);
    this.balance -= amount;
    console.log(`Зняття коштів ${amount}. Ваш баланс: ${this.balance}`);
  },
  //!! Показати поточний рахунок!!
  getBalance() {
    return `Ваш поточний баланс: ${this.balance}`;
  },
  //!! Показати деталі операцій!!
  getTransactionsDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },
};

account.deposit(1000);
account.deposit(1000);
account.deposit(1000);
account.withdrow(300);
account.withdrow(900);
// const details = getTransactionsDetails(1);
const balance = account.getBalance();
console.log("🚀 ~ balance:", balance);
