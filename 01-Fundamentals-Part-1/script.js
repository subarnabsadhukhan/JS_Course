//////////////////////////////////////////
///////////// Type Conversion and Coercion

///// type conversion is when we manually convert from one type to another. On the other hand, type coercion is when JavaScript automatically converts types behind the scenes for us.

//////////////////////////////////////////////
//// type conversion
const inputYear = "1991";
console.log(inputYear + 20); //199120
//It has basically concatenate the string.

console.log(Number(inputYear)); // 1991
console.log(typeof Number(inputYear)); // number
console.log(Number(inputYear) + 20); //2011

//------------------------------------------
//💡  to convert a string to a number, use Number() function.

let myPhone = "samsung2020";
console.log(Number(myPhone)); //NaN
console.log(typeof NaN); //number
// Actually NaN is invalid Number (Not a Number).
console.log(typeof Number(myPhone)); //number

//------------------------------------------
//💡  to convert a number type to a string, use String() function.
let myAge = 21;
console.log(typeof myAge); //number
console.log(String(myAge)); //21
console.log(typeof String(myAge)); //string

///////////////////////////////////////////////////
//// type coercion
console.log("I am " + myAge + " years old.");
// if JS don't have type coercion, we have to write the above code:
console.log("I am " + String(myAge) + " years old.");

//------------------------------
console.log("23" - 3 - "10"); //10
// Here, in case of minus operator strings are converted to number.

console.log("23" + 3 + "10"); //23310
// Here, in case of plus operator, numbers are converted to string and concatenates.

console.log("23" + 3 - "10"); //223
console.log(typeof ("23" + 3 - "10")); //number

// other cases....
console.log("23" * "3"); //69
console.log("23" / "3"); //7.666666666666667
console.log(2 + 3 + 4 + "5"); //95
