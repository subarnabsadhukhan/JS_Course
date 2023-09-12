"use strict";

//////////////////////////////////
////////////// FUNCTIONS

function logger() {
  console.log("My name is Subarnab");
}
//💚 Not all Functions need to return anything or need to accept parameter(s).

// calling / running / invoking function
logger();
logger();

//----------------- Example --------------
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor());
//Console: Juice with undefined apples and undefined oranges.

console.log(fruitProcessor(3, 2));
//Console: Juice with 3 apples and 2 oranges.
