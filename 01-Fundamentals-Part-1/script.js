/////////////////////////////////////////////////
////////// EQUALITY OPERATORS: == vs. ===

let age = 18;

// Strict Equality Operator (===): Does not perform type coertion
if (age === 18) {
  console.log(`You just became an Adult :D`); //console prints
}

// Loose Equality Operator (===): Does perform type coertion
if (age == 18) {
  console.log(`You just became an Adult :)`); //console prints
} // Same type. So, No type coertion needed.

//---------------------------------------------

const birthYear = "2018";

// Strict Equality Operator (===): Does not perform type coertion
if (birthYear === 2018) {
  console.log(`You are not an Adult`); //No Execution
}

// Loose Equality Operator (===): Does perform type coertion
if (birthYear == 2018) {
  console.log(`You are not an Adult :(`); //console prints
} // Type Coertion Performed.

//---------------------------------------------

// Example:
console.log(18 == 18); //true
console.log("18" == 18); //true
console.log("18" === 18); //false
console.log("18" === "18"); //true

//-----------------------------------------------

const favourite = prompt(`What's your favourite number?`);
console.log(favourite);
console.log(typeof favourite); //string

//---------------------------------------------
/////// More conditions with else if:
const lottery = Number(prompt(`Choose a number:`));
if (lottery === 22) {
  console.log(`You have won the Jackpot :D`);
} else if (lottery === 56) {
  console.log(`You have won the 2nd Prize :)`);
} else if (lottery === 99) {
  console.log(`You have won the 3rd Prize :)`);
} else {
  console.log(`You have lost the Game :(`);
}

//////////////////////////////////////////////
//////// Different Operator

// Loose Different Opertor
console.log(18 != 18); //false
console.log("18" != 18); //false

// Strict Different Operator
console.log("18" !== 18); //true
console.log("18" !== "18"); //false
