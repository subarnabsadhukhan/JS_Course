"use strict";

////////////////////////////////
//// The Spread Operator ( … )

//we can use the spread operator to basically expand an array into all its elements. So basically unpacking all the array elements at one.

const arr = [7, 8, 9];

const arr2 = [1, 2, arr];
console.log(arr2); //[ 1, 2, [ 7, 8, 9 ] ]

// Using Spread Operator
const newArr = [1, 2, ...arr];
console.log(newArr); //[ 1, 2, 7, 8, 9 ]

//when we need to pass multiple elements into a function
console.log(1, 2, 7, 8, 9); //1 2 7 8 9
console.log(...newArr); //1 2 7 8 9

/////////////////////////////////////////////////
// Spread operator takes all the elements from the array and it also doesn't create new variables. And as a consequence, we can only use it in places where we would otherwise write values separated by commas.

////////////////////////////////////////////////
/////// Use Cases of Spread Operators

// Creating Shallow Copy of Arrays
const arrCopy = [...arr];
console.log(arrCopy); //[ 7, 8, 9 ]

// Join 2 arrays
const joinArr = [...arr, ...newArr];
console.log(joinArr); //[ 7, 8, 9, 1, 2, 7, 8, 9 ]
