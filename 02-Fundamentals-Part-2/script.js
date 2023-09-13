"use strict";
////////////////////////////////////////////////
///////// Introduction to Arrays

//---------- Literal Syntax ------------
const girls = ["Ishita", "Disha", "Shreya"];

console.log(girls); //['Ishita', 'Disha', 'Shreya']

//------ Alternate Way of creating Array ---------
const years = new Array(1991, 2000, 2002, 2012, 2020);

console.log(years); //[1991, 2000, 2002, 2012, 2020]

////////////////////////////////////////
//----------------------------
console.log(`I Love ${girls[0]} 💖`); //I Love Ishita 💖

//---------- Properties of Array -------------

////// Actual numbers of elements in the array
console.log(girls.length); //3

// ------ Log last element of an array ----------
console.log(girls[girls.length - 1]); //Shreya
console.log(girls[-1]); //undefined😢

// ------ add and replace elements -----------
girls[1] = "Sneha";
console.log(girls); //['Ishita', 'Sneha', 'Shreya']

girls[3] = "Bipasha";
console.log(girls); //['Ishita', 'Sneha', 'Shreya', 'Bipasha']

girls[8] = "Samiha";
console.log(girls); //['Ishita', 'Sneha', 'Shreya', 'Bipasha', empty × 4, 'Samiha']
console.log(girls.length); //9

//-----------------------

/*

💚 we can actually mutate Arrays even though they were declared with const.

💚 Now what we can not do is to actually replace the entire Array.

*/

// girls = ["Ankita", "Jyosmita", "Suvangi"];
// // Uncaught TypeError: Assignment to constant variable.

/// ----------------------------------
// Arrays can actually hold values of different types at the same time.

const firstName = "Ishita";
const hobby = ["dancing", "drawing", "listening"];
const Ishita = [firstName, "Ghosh", 2023 - 2002, "student", hobby];

console.log(Ishita);
