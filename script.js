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
/////Logical OR assignment Operator

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

////// This operator assigns a variable to a variable if that variable is currently falsy.
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1); //{ name: 'Capri', numGuests: 20 }

console.log(rest2);
//CONSOLE: { name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10 }

////////////---------------------
