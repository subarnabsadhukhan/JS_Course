////////////////////////////////////////////
////////// ACTIVATING STRICT MODE
"use strict";
/* 

💚 we activated strict mode for the entire script. Now what's important is that this statement here basically has to be the very first statement in the script.

💚 So if we have any code before this, then strict mode will not be activated.

💚 We actually can also activate strict mode, only for a specific function or a specific block. But I don't really see the point in doing that.

💚 So again, first strict mode forbids us to do certain things and second it creates visible errors and the developer console, where in other situations JavaScript would just fail silently.

💚 strict mode reserves some keywords so we cannot use them for variables. 

*/

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
// // Uncaught ReferenceError: hasDriverLicense is not defined
if (hasDriversLicense) console.log(`I can Drive :D`);

//----------------------------------------------------

const private = "my secret";
// // Uncaught SyntaxError: Unexpected strict mode reserved word. Here, private is reserved word.
