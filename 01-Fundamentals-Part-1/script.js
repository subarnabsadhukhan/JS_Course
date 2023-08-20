///////////////////////////////////////////////
///////// The Conditional (Ternary) Operator

const age = 20;

age >= 18
  ? console.log("I want to drink Wine 🍷")
  : console.log("I want to drink Juice 🥤");

//💡 mandatory ELSE block is needed in case of Ternary Operator.

//--------------------------------------------

/*

💡 An operator always produces a value. So in other words an operator is an expression.

💡 Because since the ternary operator is really an expression, we can now use it, for example, in a template literal.

*/

const drink = age >= 18 ? "Wine 🍷" : "Juice 🥤";
console.log(drink);

//-----------------------------------------
// use ternary operator inside template literal:

console.log(`I like to drink ${age >= 18 ? "Wine 🍷" : "Juice 🥤"}`);

//------------------ Example -------------------

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
