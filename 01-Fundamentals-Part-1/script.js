//////////////////////////////////////////
////////////////// Boolean Logic

let hasDriversLicense = true;
let hasGoodVision = true;

// AND Operator (&&) and OR Operator (||)

console.log(hasDriversLicense && hasGoodVision); //true
console.log(hasDriversLicense || hasGoodVision); //true

hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); //false
console.log(hasDriversLicense || hasGoodVision); //true

console.log(!hasDriversLicense); //false
console.log(!hasGoodVision); //true

//------------------------------------------------
//Example:

hasDriversLicense = true;
hasGoodVision = true;
let isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You should drive");
} else {
  console.log("You should not drive"); // console prints
}
