"use strict";

//--------------- .split() ------------
// Split allows us to split a string into multiple parts based on a divider string.

console.log("a+very+good+boy".split("+"));
//CONSOLE: [ 'a', 'very', 'good', 'boy' ]
console.log("Subarnab Sadhukhan".split(" ")); //[ 'Subarnab', 'Sadhukhan' ]

const [firstName, lastName] = "Subarnab Sadhukhan".split(" ");
console.log(firstName, lastName); //Subarnab Sadhukhan

// ----------- .join() ----------------
const updatedName = ["Mr.", firstName.toUpperCase(), lastName].join(" ");
console.log(updatedName); //Mr. SUBARNAB Sadhukhan

////////////////////////////////////
//Exercise: Capitalize a name
const capitalizeName = function (fullName) {
  const nameWords = fullName.split(" ");
  const correctName = [];
  for (const word of nameWords) {
    const UpperCasedWord = word.slice(0, 1).toUpperCase() + word.slice(1);
    correctName.push(UpperCasedWord);
  }
  return correctName.join(" ");
};

console.log(capitalizeName("jessica ann smith davis")); //Jessica Ann Smith Davis

console.log(capitalizeName("subarnab sadhukhan")); //Subarnab Sadhukhan

console.log(capitalizeName("ishita ghosh sadhukhan")); //Ishita Ghosh Sadhukhan

///// Alternate Approach with .replace()
const CapiMac = function (names) {
  const nameWords = fullName.split(" ");
  const correctName = [];
  for (const word of nameWords) {
    correctName.push(replace(word[0], word[0].toUpperCase()));
  }
  return correctName;
};
console.log(capitalizeName("jessica ann smith davis")); //Jessica Ann Smith Davis

console.log(capitalizeName("subarnab sadhukhan")); //Subarnab Sadhukhan

console.log(capitalizeName("ishita ghosh sadhukhan")); //Ishita Ghosh Sadhukhan

//////////////////////////////
// Padding a String
// Padding a string means to add a number of characters to the string until the string has a certain desired length.

//---------- .padStart() ------------
const message = "Go to gate 23!";
console.log(message.padStart(20, "*")); //******Go to gate 23!
console.log(message.padStart(20, "*").length); //20

//----------- .padEnd() -------------
console.log("subarnab".padEnd(10, "#")); //subarnab##
console.log("subarnab".padEnd(10, "#").length); //10

/////////////////////////////////
//// Exercise: Mask Credit Card

const maskCreditCard = function (num) {
  const str = num + "";
  const last = str.slice(-4);
  console.log(last.padStart(str.length, "*"));
};
maskCreditCard(274541584725); //********4725
maskCreditCard("274541584725"); //********4725
maskCreditCard(147848485252); //********5252

/////////////////////////////////

//---------- .repeat() -----------
console.log("Subarnab ".repeat(5));
//CONSOLE: Subarnab Subarnab Subarnab Subarnab Subarnab

////////////////////////////
// Exercise:
const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};
planeInLine(5); //There are 5 planes in line ✈️✈️✈️✈️✈️
planeInLine(3); //There are 3 planes in line ✈️✈️✈️
