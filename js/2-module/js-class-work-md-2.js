const hours = 14;
const minuets = 26;
let timestring;

if (minuets === 0) {
  timestring = `${hours} г.`;
} else {
  timestring = `${hours} г. ${minuets} хв.`;
}
console.log(timestring);
