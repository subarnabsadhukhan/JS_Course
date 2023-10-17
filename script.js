"use strict";

////////////////////////////////////////
/////// Logical Assignment Operators

//This Operator was introduced in ES2021

const rest1 = {
  name: "Capri",
  numGuests: 0,
};
const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

///////////------------------
/////Logical Nullish Coalescing assignment Operator

// This operator assigns a variable to a variable if that variable is currently nullish.
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1); //{ name: 'Capri', numGuests: 0 }

console.log(rest2);
//CONSOLE: { name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10 }

////////////---------------------
