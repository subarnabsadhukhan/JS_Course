/////////////////////////////////////////////
////////////// Strings and Template Literals

const firstName = "Ishita";
const job = "nursing";
const birthYear = 2002;
const currentYear = 2023;

const ishita =
  "I'm " +
  firstName +
  ", I am " +
  (currentYear - birthYear) +
  " years old. I am studying " +
  job +
  " now."; // This way is painful!!

// JS can simply convert the number [(currentYear - birthYear)] to a string to join with other strings.

console.log(ishita);

////////////// Template Literals

const ishitaNew = `I'm ${firstName}, I am ${
  currentYear - birthYear
} years old. I am studying ${job} now. `; // using template literals

console.log(ishitaNew);

console.log(`Just a regular string in Template String.`);

///////// Multi-line Strings with Template Strings

//Normal Way
console.log("first line \nsecond line \nthird line");

//With Template Strings
console.log(`first line
second line
third line`);
