"use strict";

///////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
};

checkIn(flight, jonas);
console.log(flight); //LH234

console.log(jonas);
//{ name: 'Mr. Jonas Schmedtmann', passport: 24739479284 }
//// WTF? ☝🏻

/*
📌 JavaScript does not have `passing by reference`, only `passing by value`, even though it looks like it's passing by reference.

So there are languages like C++, where you can pass a reference to any value, instead of the value itself. This works even with primitives.
*/
