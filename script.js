"use strict";

////////////////////////////////////////
/////// Looping Arrays: The for-of Loop
// we can still use the continue and break keywords in for-of loop.

const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

for (const item of arr) console.log(item);
//CONSOLE:
// a
// b
// c
// d
// e
// f
// g
// h

//////////////////////
for (const item of arr.entries()) console.log(item);
//CONSOLE:
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
// [ 3, 'd' ]
// [ 4, 'e' ]
// [ 5, 'f' ]
// [ 6, 'g' ]
// [ 7, 'h' ]

//////////////////////

console.log(...arr.entries());
// CONSOLE: [ 0, 'a' ] [ 1, 'b' ] [ 2, 'c' ] [ 3, 'd' ] [ 4, 'e' ] [ 5, 'f' ] [ 6, 'g' ] [ 7, 'h' ]

///////////////////////////

const names = ["Subarnab", "Rana", "Diptendu", "Amartya", "Ankush", "Soujit"];

for (const item of names.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

//Alternate Way using Destructuring
for (const [i, el] of names.entries()) console.log(`${i + 1}: ${el}`);

// // CONSOLE
// 1: Subarnab
// 2: Rana
// 3: Diptendu
// 4: Amartya
// 5: Ankush
// 6: Soujit
