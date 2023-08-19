/////// We use the let keyword to declare variables that can change later so basically during the execution.

let age = 30;
console.log(age);
age = 31;

let year; // use let when defining an empty variable

///////// Immutable Variable
const birthday = 2002; // we use the const keyword to declare variables that are not supposed to change at any point in the future.
/*
birthday = 2003; // Uncaught TypeError: Assignment to constant variable.
*/
/*
const job; // SyntaxError: 'const' declarations must be initialized.
*/

///// Var (Legacy Keyword)
// Var keyword should actually completely be avoided.
var fruit = "mango";
console.log(fruit);
fruit = "Lemon";
console.log(fruit);

// We actually don't even have to declare variables at all because it's actually not mandatory.
flower = "Rose";
console.log(flower);
