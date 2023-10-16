//////////////////////////////////
//// Scoping in Practice

"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output); // firstName and birthYear is coming from Outer Scope.

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // var is function scoped.

      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Steven"; // const is block scoped.

      // Reasssigning outer scope's variable
      output = "NEW OUTPUT!";
      //*** const output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName}`; // const is block scoped.

      // firstName is available in current scope, so 'Steven' will be used instead of 'Jonas' from Parent (Global) Scope.
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); //Uncaught ReferenceError: str is not defined (as str is block scoped)

    console.log(millenial); //true (millenial is function scoped)

    // console.log(add(2, 3)); //functions are block scoped, only in strict mode

    console.log(output); //reassigned output variable is logged.
  }
  printAge();

  return age;
}

const firstName = "Jonas";
calcAge(1991);

// console.log(age); //Uncaught ReferenceError: age is not defined

// printAge(); // functions are not available in outer scope
