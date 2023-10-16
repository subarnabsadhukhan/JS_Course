////////////////////////////////////
//// Hoisting and TDZ in Practice

//////////////////////////////////////
/////////////////////////////////////
// Variable Hoisting
"use strict";
console.log(me); //undefined
var me = "Jonas";

///////////////////////
// console.log(job); //Uncaught ReferenceError: Cannot access 'job' before initialization
let job = "teacher";

//////////////////////
// console.log(year); //Uncaught ReferenceError: Cannot access 'year' before initialization
const year = 1991;

//////////////////////////////////
//////////////////////////////////

// Function Hoisting
("use strict");

// For Function Decleration
console.log(addDecl(2, 3)); //5

function addDecl(a, b) {
  return a + b;
}

//==================================

// For Function Expression (const keyword used)
// console.log(addExpr(2, 3)); //Uncaught ReferenceError: Cannot access 'addExpr' before initialization

const addExpr = function (a, b) {
  return a + b;
};

//==================================
// For Function Expression (var keyword used)
console.log(addExprs); //undefined
// console.log(addExprs(2, 3)); //Uncaught TypeError: addExpr is not a function

var addExprs = function (a, b) {
  return a + b;
};

//====================================
// For Arrow Function (var keyword used)
console.log(addArrow); //undefined
// console.log(addArrow(2, 3)); //Uncaught TypeError: addArrow is not a function

var addArrow = (a, b) => a + b;
