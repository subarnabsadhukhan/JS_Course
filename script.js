"use strict";

const airline = "TAP Air Portugal";

// Changing Case of String
console.log(airline.toLowerCase()); //tap air portugal
console.log(airline.toUpperCase()); //TAP AIR PORTUGAL
console.log("Subarnab".toUpperCase()); //SUBARNAB

// Fix Capitalization in Name
const passenger = "sUBarNaB";

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Subarnab

/////////////////////////////////////////
//--------- .trim() ------------------
const str = "   hello    ";
console.log(str.length); //12

console.log(str.trim()); //hello
console.log(str.trim().length); //5

console.log(str.trimStart()); //hello
console.log(str.trimStart().length); //9

console.log(str.trimEnd()); //   hello
console.log(str.trimEnd().length); //8

// Only starting and Ending spaces are trimmed.
const greet = "   hello baby   ";
console.log(greet.trim()); //hello baby

/////////////////////////////
// Comparing Emails
const corrEmail = "hello@jonas.io";
const loginEmail = "   Hello@jonas.Io \n";

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail); //hello@jonas.io

console.log(corrEmail === normalizeEmail); //true

///////////////////////////////////
//-------- .replace() -----------
const yourName = "What is your name? tell me your name";
console.log(yourName.replace("your", "my"));
//CONSOLE: What is my name? tell me your name.
// Look, only the first instance is replaced. ☝🏻

// To replace all the instances of a word, use .replaceAll()
console.log(yourName.replaceAll("your", "my"));
//CONSOLE: What is my name? tell me my name

// Use REGEX alternative to .replaceAll()
console.log(yourName.replace(/your/g, "my"));
//CONSOLE: What is my name? tell me my name

/////////////////////////////
// Replacing Parts of String
const priceGB = "288,97$";
const priceInd = priceGB.replace(",", ".").replace("$", "₹");
console.log(priceInd); //288.97₹

///////////////////////////////
// Booleans
// ---------- .includes() ------------
const plane = "A320neo";
console.log(plane.includes(320)); //true
console.log(plane.includes("320")); //true

// ---------- .startsWith() ------------
console.log(plane.startsWith("A3")); //true
console.log(plane.startsWith("neo")); //false
// ---------- .endsWith() ------------
console.log(plane.endsWith("neo")); //true
