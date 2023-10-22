"use strict";

///////////////////////////////////
// Closures

// We can say that a closure makes a function remember all the variables that existed at the function's birthplace.

// Any function always has access to the variable environment of the execution context in which the function was created.

// The closure basically has priority over the scope chain.

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker(); //1 passengers
booker(); //2 passengers

console.dir(booker);

// ƒ anonymous()length: 0name: ""prototype: {constructor: ƒ}arguments: (...)caller: (...)[[FunctionLocation]]: script.js:14[[Prototype]]: ƒ ()[[Scopes]]: Scopes[3]0: Closure (secureBooking) {passengerCount: 2}1: Script {secureBooking: ƒ, booker: ƒ}2: Global {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
