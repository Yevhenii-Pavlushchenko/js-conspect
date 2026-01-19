const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavorite: true,
  userInfo: {
    id: 123,
    nickName: "Mango",
    meta: {
      email: "paw93@ukr.net",
      phone: "#80631707000",
      password: "qwe123",
      location: {
        country: "Ukraine",
        city: "Odesa",
      },
    },
  },
};

const userName = playlist.userInfo.nickName;
console.log("🚀 ~ userName:", userName);

const propertyName = "tracks";
console.log("🚀 ~ propertyName:", propertyName);
playlist[propertyName];

console.log("🚀 ~ propertyName:", propertyName);

function foo(values = {}) {
  console.log(values.a);
  console.log(values.b);
}

foo({ b: 111, a: 222 });

function isEnoughCapacity(products, containerSize) {
  let sumProducts = 0;
  const quantities = Object.values(products);
  console.log("🚀 ~ isEnoughCapacitypr ~ quantities:", quantities);
  //   for (let i = 0; i < products.length; i++) {}
  for (const value of quantities) {
    sumProducts += value;
  }
  console.log(sumProducts);
  const resfn = sumProducts <= containerSize ? true : false;
  console.log("🚀 ~ isEnoughCapacity ~ resfn:", resfn);
}

// console.log(
const res = isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8);
// console.log("🚀 ~ res:", res);
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false
