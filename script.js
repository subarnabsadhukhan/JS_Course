"use strict";

////////////////////////////////////////
/////// Enhanced Object Literals
const openingHours = {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",

  /////////////////////////////////////
  //////Bringing openingHours object to restaurant
  ///////////// ENHANCEMENT 1:

  /*
  // Before ES6 Era
  openingHours: openingHours,
  */

  // After ES6: New Method
  openingHours,
  ///////////////////////////////////////
  ///////////// ENHANCEMENT 2: writng methods easily

  /*
  // Before ES6 Era
  delivery: function () {
    console.log(`Order Delivered`);
  },
  */
  // After ES6
  delivery() {
    console.log(`Order Delivered`);
  },
};

restaurant.delivery(); //Order Delivered

/////////////////////////////////////////
///////////// ENHANCEMENT 3: We can now actually compute/calculate property names. Instead of having to write them out manually and literally.

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// Computing Property names
const hours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [`${days[4 + 1]}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(hours);

/* 
CONSOLE:
{
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
}
*/
