function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let orderSum = quantity * pricePerDroid;
  if (orderSum <= customerCredits) {
    return `You ordered ${quantity} droids worth `;
  } else {
    return `Insufficient funds!`;
  }
}

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

function formatMessage(message, maxLength) {
  let textLenght = message.length;

  if (textLenght <= maxLength) {
    return message;
  } else {
    return `${message.slice(0, maxLength)}...`;
  }
}

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

function checkForSpam(message) {
  let toUpperMessage = message.toUpperCase();
  const spamWords1 = "SPAM";
  const spamWords2 = "SALE";
  let res =
    toUpperMessage.includes(spamWords1) || toUpperMessage.includes(spamWords2)
      ? true
      : false;
  return res;
}

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

function getShippingCost(country) {
  switch (country) {
    case "China":
      console.log("Shipping to China will cost 100 credits");

      break;
    case "Chile":
      console.log("Shipping to Chile will cost 250 credits");

      break;

    case "Australia":
      console.log("Shipping to Australia will cost 170 credits");

      break;

    case "Jamaica":
      console.log("Shipping to Jamaica will cost 120 credits");

      break;

    default:
      console.log("Sorry, there is no delivery to your country");

      break;
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
