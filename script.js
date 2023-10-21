"use strict";

///////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");

//////////////////////////////////
// Challenge: Write the Above Function with Arrow Function.

const greetA = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetA("Hi")("Ishita"); //Hi Ishita
