// function keyword (discount chain assignment):

// customer timmy object code block (starter code given):
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

// customer sarah object code block (starter code given):
const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

// customer rocky object code block (starter code given):
const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// create variables to retrieve values (pricePerRefill and refills) from each given object:
const timmyRefillPrice = timmy.pricePerRefill;
const timmyNumberOfRefills = timmy.refills;
const timmyRefillTotal = timmyRefillPrice * timmyNumberOfRefills;
const sarahRefillPrice = sarah.pricePerRefill;
const sarahNumberOfRefills = sarah.refills;
const sarahRefillTotal = sarahRefillPrice * sarahNumberOfRefills;
const rockyRefillPrice = rocky.pricePerRefill;
const rockyNumberOfRefills = rocky.refills;
const rockyRefillTotal = rockyRefillPrice * rockyNumberOfRefills;

// create functions for each condition for checkout system that returns the total cost of all refills including the customer has a subscription and/or a coupon:
// function for total cost of refills without subscription and coupon for timmy
function refillTotal1(timmyRefillPrice, timmyNumberOfRefills) {
  return timmyRefillTotal;
}
// variable to store return value from function
const timmyRefillTotal0 = refillTotal1(timmyRefillPrice, timmyNumberOfRefills);
// console.log(timmyRefillTotal0);

// function for total cost of refills with subscription and no coupon for timmy
function refillTotal2(timmyRefillPrice, timmyNumberOfRefills) {
  return timmyRefillTotal - timmyRefillTotal * 0.25;
}
// variable to store return value from function
const timmySubscriptionDiscount = refillTotal2(
  timmyRefillPrice,
  timmyNumberOfRefills
);
// console.log(timmySubscriptionDiscount);

// function for total cost of refills with coupon and no subscription for timmy
function refillTotal3(timmyRefillPrice, timmyNumberOfRefills) {
  return timmyRefillTotal - 10;
}
// variable to store return value from function
const timmyCouponDiscount = refillTotal3(
  timmyRefillPrice,
  timmyNumberOfRefills
);
// console.log(timmyCouponDiscount);

// function for total cost of refills with subscription and coupon for timmy
function refillTotal4(timmyRefillPrice, timmyNumberOfRefills) {
  return timmyRefillTotal - timmyRefillTotal * 0.25 - 10;
}
// variable to store return value from function
const timmyTotalCost = refillTotal4(timmyRefillPrice, timmyNumberOfRefills);
// console.log(timmyTotalCost);

// function for total cost of refills without subscription and coupon for sarah
function refillTotal6(sarahRefillPrice, sarahNumberOfRefills) {
  return sarahRefillTotal;
}
// variable to store return value from function
const sarahRefillTotal5 = refillTotal6(sarahRefillPrice, sarahNumberOfRefills);
// console.log(sarahRefillTotal5);

// function for total cost of refills with subscription and no coupon for sarah
function refillTotal7(sarahRefillPrice, sarahNumberOfRefills) {
  return sarahRefillTotal - sarahRefillTotal * 0.25;
}
// variable to store return value from function
const sarahSubscriptionDiscount = refillTotal7(
  sarahRefillPrice,
  sarahNumberOfRefills
);
// console.log(sarahSubscriptionDiscount);

// function for total cost of refills with coupon and no subscription for sarah
function refillTotal8(sarahRefillPrice, sarahNumberOfRefills) {
  return sarahRefillTotal - 10;
}
// variable to store return value from function
const sarahCouponDiscount = refillTotal8(
  sarahRefillPrice,
  sarahNumberOfRefills
);
// console.log(sarahCouponDiscount);

// function for total cost of refills with subscription and coupon for sarah
function refillTotal9(sarahRefillPrice, sarahNumberOfRefills) {
  return sarahRefillTotal - sarahRefillTotal * 0.25 - 10;
}
// variable to store return value from function
const sarahTotalCost = refillTotal9(sarahRefillPrice, sarahNumberOfRefills);
// console.log(sarahTotalCost);

// function for total cost of refills without subscription and coupon for rocky
function refillTotal11(rockyRefillPrice, rockyNumberOfRefills) {
  return rockyRefillTotal;
}
// variable to store return value from function
const rockyRefillTotal10 = refillTotal11(
  rockyRefillPrice,
  rockyNumberOfRefills
);
// console.log(rockyRefillTotal10);

// function for total cost of refills with subscription and no coupon for rocky
function refillTotal12(rockyRefillPrice, rockyNumberOfRefills) {
  return rockyRefillTotal - rockyRefillTotal * 0.25;
}
// variable to store return value from function
const rockySubscriptionDiscount = refillTotal12(
  rockyRefillPrice,
  rockyNumberOfRefills
);
// console.log(rockySubscriptionDiscount);

// function for total cost of refills with coupon and no subscription for rocky
function refillTotal13(rockyRefillPrice, rockyNumberOfRefills) {
  return rockyRefillTotal - 10;
}
// variable to store return value from function
const rockyCouponDiscount = refillTotal13(
  rockyRefillPrice,
  rockyNumberOfRefills
);
// console.log(rockyCouponDiscount);

// function for total cost of refills with subscription and coupon for rocky
function refillTotal14(rockyRefillPrice, rockyNumberOfRefills) {
  return rockyRefillTotal - rockyRefillTotal * 0.25 - 10;
}
// variable to store return value from function
const rockyTotalCost = refillTotal14(rockyRefillPrice, rockyNumberOfRefills);
// console.log(rockyTotalCost);

// if / else-if / else statements to console log output of the calculation based on boolean values from subscription and coupon keys for timmy:
// subscription and coupon = true
if (timmy.subscription && timmy.coupon) {
  // console log output "Your grand total is $..." refill cost with subscription and coupon
  console.log("Your grand total is $" + timmyTotalCost);
  // subscription = true and coupon = false
} else if (timmy.subscription) {
  // console log output "Your grand total is $..." refill cost with subscription and no coupon
  console.log("Your grand total is $" + timmySubscriptionDiscount);
  // subscription = false and coupon = true
} else if (timmy.coupon) {
  // console log output "Your grand total is $..." refill cost with coupon and no subscription
  console.log("Your grand total is $" + timmyCouponDiscount);
  // subscription = false and coupon = false
} else {
  // console log output "Your grand total is $..." refill cost without subscription and coupon
  console.log("Your grand total is $" + timmyRefillTotal0);
}

// if / else-if / else statements to console log output of the calculation based on boolean values from subscription and coupon keys for sarah:
// subscription and coupon = true
if (sarah.subscription && sarah.coupon) {
  // console log output "Your grand total is $..." refill cost with subscription and coupon
  console.log("Your grand total is $" + sarahTotalCost);
  // subscription = true and coupon = false
} else if (sarah.subscription) {
  // console log output "Your grand total is $..." refill cost with subscription and no coupon
  console.log("Your grand total is $" + sarahSubscriptionDiscount);
  // subscription = false and coupon = true
} else if (sarah.coupon) {
  // console log output "Your grand total is $..." refill cost with coupon and no subscription
  console.log("Your grand total is $" + sarahCouponDiscount);
  // subscription = false and coupon = false
} else {
  // console log output "Your grand total is $..." refill cost without subscription and coupon
  console.log("Your grand total is $" + sarahRefillTotal5);
}

// if / else-if / else statements to console log output of the calculation based on boolean values from subscription and coupon keys for rocky:
// subscription and coupon = true
if (rocky.subscription && rocky.coupon) {
  // console log output "Your grand total is $..." refill cost with subscription and coupon
  console.log("Your grand total is $" + rockyTotalCost);
  // subscription = true and coupon = false
} else if (rocky.subscription) {
  // console log output "Your grand total is $..." refill cost with subscription and no coupon
  console.log("Your grand total is $" + rockySubscriptionDiscount);
  // subscription = false and coupon = true
} else if (rocky.coupon) {
  // console log output "Your grand total is $..." refill cost with coupon and no subscription
  console.log("Your grand total is $" + rockyCouponDiscount);
  // subscription = false and coupon = false
} else {
  // console log output "Your grand total is $..." refill cost without subscription and coupon
  console.log("Your grand total is $" + rockyRefillTotal10);
}
