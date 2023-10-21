"use strict";

///////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

// Sometimes in JavaScript, we need a function that is only executed once. And then never again. So basically a function that disappears right after it's called once.

//However, we can still trick JavaScript into thinking that this is just an expression. And we do that by simply wrapping all of this into parentheses. 👇🏻
(function () {
  console.log(`This will Never run again!`);
}); // This will Not Call The Function.

// To Call the Function-
(function () {
  console.log(`This will Never run again!`);
})(); //This will Never run again!

(() => console.log(`This will ALSO Never run again!`))();
//CONSOLE: This will ALSO Never run again!

//////////////////////////
{
  const isPrivate = "hello";
}
// console.log(isPrivate); //ReferenceError: isPrivate is not defined
