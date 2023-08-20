//////////////////////////////////////////////
/////// Statements and Expressions

/*

💡 Essentially, an expression is a piece of code that produces a value.

💡 expressions produce values, and that statements are like full sentences that translate our actions.

💡 in a template literal, we can only insert expressions, but not statements.

Link: https://www.joshwcomeau.com/javascript/statements-vs-expressions/

*/

const me = "subarnab"; // here, me is an expression.
console.log(`I am ${me}. I am ${2023 - 2002} years old.`);
// template literal only takes expressions.

//------------ Example of Expression -------

2 + 3;
("happy");
23;
("Monday");

//------------ Example of Statement ---------

if (23 > 2) console.log(`Hello!`); // if-else is Statement.
