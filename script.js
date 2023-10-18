"use strict";

////////////////////////////////////////
/////// Optional Chaining (?.)

// Introduced in ES2020

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

console.log(restaurant.openingHours.sat.open); //0

// A property exists if it's not null and not undefined. So if it's zero or the empty string, then it still exists of course.

/*
console.log(restaurant.openingHours.mon.open);
//TypeError: Cannot read properties of undefined (reading 'open')
*/
console.log(restaurant.openingHours.mon?.open); //undefined

/*
console.log(restaurant.closingHours.mon?.open);
//TypeError: Cannot read properties of undefined (reading 'mon')
*/

// With optional chaining, if a certain property does not exist, then undefined is returned immediately.

//if restaurant.closingHours does not even exist, well, then the mon property will not even be read.
console.log(restaurant.closingHours?.mon?.open); //undefined

// Alternate long method using if block
if (restaurant.closingHours && restaurant.closingHours.mon) {
  console.log(restaurant.closingHours.mon.open);
}

//////////////////////////////
/////////////////////////////

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  //if we want to use a variable name as the property name, basically, we need to use the brackets notation.👇🏻
  const close = restaurant.openingHours[day]?.close;
  console.log(
    `on ${day}, our restaurant ${
      !restaurant.openingHours[day]?.close ? "is closed" : `closes at ${close}`
    }.`
  );
}

/*
CONSOLE:
on mon, our restaurant is closed.
on tue, our restaurant is closed.
on wed, our restaurant is closed.
on thu, our restaurant closes at 22.
on fri, our restaurant closes at 23.
on sat, our restaurant closes at 24.
on sun, our restaurant is closed.
*/
/////////////////////////////////////////////
// Check if Method exists or NOT
console.log(restaurant.order?.(0, 1) ?? "Method Doesn't exist.");
//CONSOLE:Method Doesn't exist.

// Check if Array element exists
const usersArray = [{ name: "Subarnab", email: "hello@subarnab.in" }];

console.log(usersArray[0]?.name); //Subarnab
console.log(usersArray[1]?.name); //undefined
console.log(usersArray[1]?.name ?? `2nd User Don't Exist.`); //2nd User Don't Exist.
