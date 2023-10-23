"use strict";

///////////////////////////////////
// More Closure Examples

// We don't need to return a function from another function in order to create a closure.

////////////////////////
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); //46
console.dir(f);

// Re-assigning f function
h();
f(); //1554
// Closure can change as the variable is reassigned.
console.dir(f);

///////////////////////////
// Example 2
// A timer is another great example that we don't need to return a function to see a closure in action.

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
// So, the only way in which this callback function here can have access to the variables that are defined in the board passengers function that has long finished execution is if it created a closure.

const perGroup = 1000; // A closure even has priority over the scope chain.

boardPassengers(180, 5);

/*
// CONSOLE:
// Will start boarding in 5 seconds
// We are now boarding all 180 passengers
// There are 3 groups, each with 60 passengers
*/
