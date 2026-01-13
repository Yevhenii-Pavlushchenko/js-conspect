// const hours = 14;
// const minuets = 26;
// let timestring;

// if (minuets === 0) {
//   timestring = `${hours} г.`;
// } else {
//   timestring = `${hours} г. ${minuets} хв.`;
// }
// console.log(timestring);

const username = "Mike Tyson!";
const firstname = username.slice(0, 4);
// console.log("🚀 ~ firstname:", firstname);

const secondname = username.slice(5);
// console.log("🚀 ~ secondname:", secondname);

const reversindex = username.slice(-3);
// console.log("🚀 ~ reversindex:", reversindex);

const tolovername = username.toLocaleLowerCase();
// console.log("🚀 ~ tolovername:", tolovername);
const touppername = username.toLocaleUpperCase();
// console.log("🚀 ~ touppername:", touppername);

const testStr = "mango";
const res = testStr.slice(0, 1).toLocaleUpperCase() + testStr.slice(1);
// console.log("🚀 ~ res:", res);

function capitalize(str) {
  return str.slice(0, 1).toLocaleUpperCase() + testStr.slice(1);
}

// console.log(capitalize("mANGO"));

const usermail = "mango@mail.com";
const hasChar = usermail.includes("@");
if (hasChar) {
  // console.log("valid email");
}

const url = "https://lorem.com";
const starturl = url.startsWith("https");
// console.log("🚀 ~ starturl:", starturl);
const endurl = url.endsWith(".com");
// console.log("🚀 ~ endurl:", endurl);

const testmango = "mango the dog";
const testindex = testmango.indexOf(" ");
// console.log("🚀 ~ testindex:", testindex);
const newmango = testmango.slice(testindex + 1);
// console.log("🚀 ~ newmango:", newmango);

const link = "http//google.com";

function checkLink(link) {
  const hasEndSlash = link.endsWith("/");
  if (!hasEndSlash) {
    return `${hasEndSlash}/`;
  } else {
    return hasEndSlash;
  }
}
const reslink = checkLink(link);
// console.log("🚀 ~ reslink:", reslink);

// Цикли

console.log("before");
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("after");
