"use strict";

////////////////////////////////////////
/////// Logical Assignment Operators

//This Operator was introduced in ES2021

const rest1 = {
  name: "Capri",
  numGuests: 20,
};
const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

///////////------------------
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

/////Logical AND assignment Operator

//Basically, what the logical and assignment operator does is to assign a value to a variable if it is currently truthy.

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1); //{ name: 'Capri', numGuests: 20 }

console.log(rest2);
//CONSOLE: { name: 'La Piazza', owner: '<ANONYMOUS>' }

////////////---------------------
