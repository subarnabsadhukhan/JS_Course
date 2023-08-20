////////////////// Truthy and Falsy Values ///////////////

//---------------------------------------

/*
💡 falsy values are values that are not exactly false, but will become false when we try to convert them into a boolean.

💡 5 falsy values are: 0, "", undefined, null, NaN
💡 all of these five values will be converted to false when we attempt to convert them to a boolean.
*/

//---------------------------------------

/*
💡 any number that is not zero or any string that is not an empty string will be converted to true when we attempt to convert them to a boolean.
*/

//-----------------------------------------
// Examples:
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean("Ishita")); //true
console.log(Boolean(" ")); //true (not an empty string)
console.log(Boolean("")); //false
console.log(Boolean({})); //true
console.log(Boolean(55)); //true

//-----------------------------------------
// Use Case:

const money = 0;
if (money) {
  console.log("Dont't spend it all");
} else {
  console.log("You should get a Job!");
}
//console print: You should get a Job!
// as 0 is falsy when converted to Boolean, else statement triggered.

//------------------------------------------
// Another Use Case:

let height;
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log(`Height is UNDEFINED`); //console prints
}
// as height is not assigned any value or undefined, else statement will be triggered.

let weight = "50kg";
if (weight) {
  console.log("YAY! weight is defined!"); //console prints
} else {
  console.log(`weight is UNDEFINED`);
}
