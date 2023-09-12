"use strict";
///////////////////////////////////////
//////// Arrow Function

//------------- Simple Case ----------------
///// Arrow Function
const calcAge3 = (birthYear, currentYear) => currentYear - birthYear;

console.log(calcAge3(2001, 2023)); //22

//------------ Complex Case --------------------
const yearsUntilRetirement = (birthYear, currentYear) => {
  const age = currentYear - birthYear;
  const retirement = 65 - age; // retirement age is 65
  return retirement;
};

console.log(yearsUntilRetirement(2002, 2023)); //44

// 💚 Disadvantage: Arrow Functions don't get 'this' keyword.
