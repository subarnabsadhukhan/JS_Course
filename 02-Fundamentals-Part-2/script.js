////////////////////////////////////////////////
//////////Function Declarations vs. Expressions

//---------------------------
// Call Function Before Defining

let age1 = calcAge1(2023, 2020);

// let age2 = calcAge2(2023, 2020); //Uncaught ReferenceError: Cannot access 'calcAge2' before initialization

//---------------------------------
///// Function Declarations

function calcAge1(currentYear, birthYear) {
  return currentYear - birthYear;
}

console.log(calcAge1(2023, 2002)); //21
console.log(calcAge1(2023, 1990)); //33

//-----------------------------------
///// Function Expressions

const calcAge2 = function (currentYear, birthYear) {
  return currentYear - birthYear;
};

console.log(calcAge1(2023, 2002)); //21
console.log(calcAge1(2023, 1990)); //33

//////////////////////////////////////////////
/*--------------------------------
Difference between Function Declarations and Function Expressions

💚 we can actually call function declarations before they are defined in the code.

💚 we can NOT call function expressions before they are defined in the code.
*/
console.log(`Function Declaration: age1 = ${age1}`);
//console: Function Declaration: age1 = 3

console.log(`Function Expression: age2 = ${age2}`);
