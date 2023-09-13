"use strict";
////////////////////////////////////////////////
///////// Basic Array Operations (Methods)

/*

💚 JavaScript has some built in functions that we can basically apply directly on arrays. And these are called methods and we can think of methods as array operations basically.

*/
const friends = ["Michael", "Steven", "Peter"];

//////////////////////////////////////////
/////// ADD ELEMENTS

// --------- .push() --------
// add element at the end of an array
const newLength = friends.push("Jay");

console.log(friends); //['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); //4

// ---------- .unshift() -------
// add elements to the beginning of the array
friends.unshift("John");

console.log(friends); //['John', 'Michael', 'Steven', 'Peter', 'Jay']

/////////////////////////////////////////
/////// REMOVE ELEMENTS

// ------------- .pop() ------
// removes the last element of the array
const popped = friends.pop();
console.log(friends); //['John', 'Michael', 'Steven', 'Peter']

// .pop() method returns removed element
console.log(popped); //Jay

// ----------- .shift() ------------
// removes the first element of an array
const shifted = friends.shift();

console.log(friends); //['Michael', 'Steven', 'Peter']

// this method also returns the removed element
console.log(shifted); //John

//////////////////////////////////////////////

//-------- .indexOf() ----------------
// this tells which position a certain element is in the array.

console.log(friends.indexOf("Steven")); //1
console.log(friends.indexOf("Subarnab")); //-1

// --------- .includes() ----------
// instead of returning the index of the element, includes will simply return true if the element is in the array and false if it's not.

console.log(friends.includes("Steven")); //true
console.log(friends.includes("Subarnab")); //false

////// checking happens in strict equality ///////
friends.push(23);
console.log(friends); //['Michael', 'Steven', 'Peter', 23]

console.log(friends.indexOf("23")); //-1
console.log(friends.indexOf(23)); //3

console.log(friends.includes("23")); //false
console.log(friends.includes(23)); //true

// use case of .includes() method
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven."); //console prints
}
