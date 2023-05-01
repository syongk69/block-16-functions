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

// array for each customer object code block (starter code given):
const str = [timmy, sarah, rocky];
// for loop:
// it will go through each customer object code block (starter code given)
for (let i = 0; i < str.length; i++) {
  // create variables to retrieve values (pricePerRefill and refills) from each given object:
  const RefillPrice = str[i].pricePerRefill;
  const NumberOfRefills = str[i].refills;
  const RefillTotal = RefillPrice * NumberOfRefills;

  // create functions for each condition for checkout system that returns the total cost of all refills including the customer has a subscription and/or a coupon:
  // function for total cost of refills without subscription and coupon
  function refillTotal1(RefillPrice, NumberOfRefills) {
    return RefillTotal;
  }
  // variable to store return value from function
  const RefillTotal0 = refillTotal1(RefillPrice, NumberOfRefills);
  // console.log(RefillTotal0);

  // function for total cost of refills with subscription and no coupon
  function refillTotal2(RefillPrice, NumberOfRefills) {
    return RefillTotal - RefillTotal * 0.25;
  }
  // variable to store return value from function
  const SubscriptionDiscount = refillTotal2(RefillPrice, NumberOfRefills);
  // console.log(SubscriptionDiscount);

  // function for total cost of refills with coupon and no subscription
  function refillTotal3(RefillPrice, NumberOfRefills) {
    return RefillTotal - 10;
  }
  // variable to store return value from function
  const CouponDiscount = refillTotal3(RefillPrice, NumberOfRefills);
  // console.log(CouponDiscount);

  // function for total cost of refills with subscription and coupon
  function refillTotal4(RefillPrice, NumberOfRefills) {
    return RefillTotal - RefillTotal * 0.25 - 10;
  }
  // variable to store return value from function
  const TotalCost = refillTotal4(RefillPrice, NumberOfRefills);
  // console.log(TotalCost);

  // if / else-if / else statements to console log output of the calculation based on boolean values from subscription and coupon keys:
  // subscription and coupon = true
  if (str[i].subscription && str[i].coupon) {
    // console log output "Your grand total is $..." refill cost with subscription and coupon
    console.log("Your grand total is $" + TotalCost);
    // subscription = true and coupon = false
  } else if (str[i].subscription) {
    // console log output "Your grand total is $..." refill cost with subscription and no coupon
    console.log("Your grand total is $" + SubscriptionDiscount);
    // subscription = false and coupon = true
  } else if (str[i].coupon) {
    // console log output "Your grand total is $..." refill cost with coupon and no subscription
    console.log("Your grand total is $" + CouponDiscount);
    // subscription = false and coupon = false
  } else {
    // console log output "Your grand total is $..." refill cost without subscription and coupon
    console.log("Your grand total is $" + RefillTotal0);
  }
}
