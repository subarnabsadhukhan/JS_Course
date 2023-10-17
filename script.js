"use strict";

/////////////////////////////////////////////
/////// The Nullish Coalescing Operator (??)

// The nullish coalescing operator works with the idea or with the concept of nullish values instead of falsy values.

// Nullish: null and undefinded (NOT 0 or '')

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
};

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests); //10

const correctGuests = restaurant.numGuests ?? 10;
console.log(correctGuests); //0
// Here, 0 is not falsy value.

///////////////////////////
console.log(null ?? "Jonas"); //Jonas
console.log(0 ?? null); //0
console.log(0 ?? 1); //0
