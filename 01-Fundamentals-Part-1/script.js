now = 2023;
console.log(now - 1991 > now - 2015); //true
// Operator Procedure: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

//usually all the Math Operators are executed before Comparison Operators.

//////////////////
console.log(20 - 5 - 4); //11  (left to right)
/// console.log(2 ** 2 ** 3); (right to left)
console.log(2 ** (2 ** 3)); //256

////////// Assignment Operators are right-to-left
let x, y;
x = y = 10;
console.log(x, y); //10 10
//if left-to-right, then x will equal to y (x = y) and y will become undefined (y = undefined) because they are both defined as empty variable first.

////////////////////////
// Grouping Operator (...)  has highest precedence.
const ageJonas = 25;
const ageSarah = 15;
let averageAge = ageJonas + ageJonas / 2; // Division happens first in this case.
console.log(averageAge); //37.5 (wrong)
averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge); //20 (correct)
