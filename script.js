"use strict";

///////////////////////////////////
////// Maps: Iteration

// Another way of Creating a MAP at once
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

console.log(question);
/*
CONSOLE:
Map(7) {
  'question' => 'What is the best programming language in the world?',
  1 => 'C',
  2 => 'Java',
  3 => 'JavaScript',
  'correct' => 3,
  true => 'Correct 🎉',
  false => 'Try again!'
}
*/

//////////////////////////////////
/// Convert Object to Map

const object = {
  me: "Subarnab",
  from: "India",
};

console.log(Object.entries(object));
//CONSOLE:[ [ 'me', 'Subarnab' ], [ 'from', 'India' ] ]

// Object to MAP 🎉🎉
const map = new Map(Object.entries(object));
console.log(map); //Map(2) { 'me' => 'Subarnab', 'from' => 'India' }

/////////////////////////
// Maps are also Iterable.
for (const [key, value] of map) console.log(value);
//CONSOLE:
// Subarnab
// India

// Convert MAP to an Array
console.log([...map]); //[ [ 'me', 'Subarnab' ], [ 'from', 'India' ] ]

//----------- .entries() -----------
console.log(map.entries());
//CONSOLE: [Map Entries] { [ 'me', 'Subarnab' ], [ 'from', 'India' ] }

console.log([...map.entries()]);
//CONSOLE: [ [ 'me', 'Subarnab' ], [ 'from', 'India' ] ]

//-------- .keys() -------------
console.log([...map.keys()]); //[ 'me', 'from' ]

//---------- .values() ---------
console.log([...map.values()]); //[ 'Subarnab', 'India' ]
