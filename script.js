"use strict";

////////////////////////////////
//// The Spread Operator ( … )

// Use case on String
const str = "Subarnab";
const letters = [...str];

console.log(letters);
/*
CONSOLE:
[
  'S', 'u', 'b',
  'a', 'r', 'n',
  'a', 'b'
] 
*/

console.log(...str); //S u b a r n a b
console.log("s", "u", "b"); //s u b

/////////////////////
// Multiple values separated by a comma are usually only expected when we pass arguments into a function, or when we build a new array.
////////////////////
