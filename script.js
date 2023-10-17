"use strict";

///////////////////////////////
//////// Destructuring Objects
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name);
console.log(openingHours);
console.log(categories);

//=============================

//variable names to be different from the property names
const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(resturantName); //Classico Italiano

console.log(hours);
// //CONSOLE:
// {
//     thu: { open: 12, close: 22 },
//     fri: { open: 11, close: 23 },
//     sat: { open: 0, close: 24 }
//   }

console.log(tags);
//CONSOLE: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

//=============================

// Setting Default value to variables

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu); //[]

console.log(starters);
//CONSOLE: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

////////============================

// Mutating Variables
let a = 111;
let b = 222;
const obj = { a: 21, b: 29, c: 99 };

/*
{a,b} = obj
console.log(a,b); //SyntaxError: Unexpected token '='

REASON☝🏻: When we start a line with a curly brace like above, then JavaScript expects a code block. And since we cannot assign anything to a code block, we get this error.
*/

// Correct Way
({ a, b } = obj);
console.log(a, b); //21 29
