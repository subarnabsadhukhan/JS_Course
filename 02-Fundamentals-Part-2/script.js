"use strict";
////////////////////////////////////////////////
///////// Dot vs. Bracket Notation

// Object Literal Syntax
const Ishita = {
  firstName: "Ishita",
  lastName: "Ghosh",
  age: 2023 - 2002,
  job: "nursing",
  friends: ["Disha", "Shreya", "Kuheli"],
};

console.log(Ishita);

//////////////////////////////////////
//-------- Getting a Property from an Object ----

// Dot Notation
console.log(Ishita.job); //nursing

// Bracket Notation
console.log(Ishita["job"]); //nursing

// ---- use Cases of Bracket Notation -------------
/* 

💚 in bracket notation, we can actually put any expression that we'd like, so we don't have to explicitly write the string here, but instead we can compute it from some operation because remember that an operation is basically an expression.

// Case 1 ----------------
*/
const nameKey = "Name";
console.log(Ishita[`first` + nameKey]); //Ishita
console.log(Ishita[`last` + nameKey]); //Ghosh

// Case 2 -----------------

const interestedIn = prompt(
  "What do you want to know about Ishita? Choose between firstName, lastName, age, job, and friends"
);

if (Ishita[interestedIn]) {
  console.log(Ishita[interestedIn]);
} else {
  console.log(
    `Wrong Request! Choose between firstName, lastName, age, job, and friends`
  );
}

//////////////////////////////////////////////
/////// Add Properties to an Object

Ishita.location = "Kolkata";
Ishita["sex"] = "Female";

console.log(Ishita);

// --------- Challenge ----------
console.log(
  `${Ishita.firstName} has ${Ishita.friends.length} friends, and ${
    Ishita.sex === "Female" ? "her" : "his"
  } best friend is called ${Ishita.friends[0]}.`
); //Ishita has 3 friends, and her best friend is called Disha.
