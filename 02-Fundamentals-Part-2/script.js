"use strict";
////////////////////////////////////////////////
///////// Iteration: The for Loop

//💚 for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`);
}

////////////////////////////////////////////////
/////// Looping Arrays, Breaking and Continuing

const ishitaArray = [
  "Ishita",
  "Ghosh",
  2023 - 2002,
  "nurse",
  ["Disha", "Sneha", "Shreya"],
  true,
];

const types = [];

for (let i = 0; i <= ishitaArray.length - 1; i++) {
  // ----- reading an array using for loop ----
  console.log(ishitaArray[i], typeof ishitaArray[i]);

  // ----- filling array using for loop ----
  types[i] = typeof ishitaArray[i];
}

console.log(types); //['string', 'string', 'number', 'string', 'object', 'boolean']

///--------------------------

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages); //[32, 16, 54, 3]

////////////////////////////////////////////
//------- continue & break -------------

/*

💚 continue is to exit the current iteration of the loop and continue to the next one.

💚 On the other hand, break is used to completely terminate the whole loop.

*/

//------- log only strings --------------
console.log(`--- LOG ONLY STRINGS ---`);

for (let i = 0; i <= ishitaArray.length - 1; i++) {
  if (typeof ishitaArray[i] !== "string") continue;

  console.log(ishitaArray[i], typeof ishitaArray[i]);
}

//--- log no other elements after we found a number ---
for (let i = 0; i <= ishitaArray.length - 1; i++) {
  if (typeof ishitaArray[i] === "number") break;

  console.log(ishitaArray[i], typeof ishitaArray[i]);
}
