"use strict";

/////////////////////////////////////
/////// Short Circuiting (&& and ||)

//////////
// Short Circuiting Happening...
console.log(3 || "Jonas"); //3
console.log("" || "Jonas"); //Jonas
console.log(true || 0); //true

///////////
// Short Circuiting NOT happening...
console.log(undefined || null); //null
console.log(0 || null); //null
////// though null☝🏻 is falsy value.

/////////
console.log(undefined || 0 || "" || "hello" || null); //hello

/////////////////////////////////
////////////////////////////////
let arr = "";
const ternary = arr ? arr : 1001;
console.log(ternary); //1001

// Using Short Circuiting...

let sc = arr || 1001;
console.log(sc); //1001

arr = "Subarnab";
sc = arr || 1001;
console.log(sc); //Subarnab

///////////////////////////////////
///////////////////////////////////
//The AND operator short circuits, when the first value is falsy. And then immediately returns that falsy value without even evaluating the second operand.
/////////////////////

console.log(0 && "Jonas"); //0
console.log("Jonas" && 0); //0
console.log(1 && 2); //2
console.log("hello" && 23 && null && "Jonas"); //null

///////////////////////////
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
};

if (restaurant.name) {
  console.log(restaurant.name); //Classico Italiano
}

if (restaurant.founder) {
  console.log(restaurant.founder); //
}

// Alternate to IF Statement
console.log(restaurant.name && restaurant.name); //Classico Italiano
console.log(restaurant.founder && restaurant.founder); //undefined
