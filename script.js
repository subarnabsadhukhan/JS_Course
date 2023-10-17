"use strict";

/////////////////////////////////
////Rest Pattern and Parameters

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4, 5]];
console.log(arr); //[ 1, 2, 3, 4, 5 ]

// REST Syntax, because LEFT side of =
const [a, , b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b); //1 3

//rest pattern basically collects the elements that are unused in the destructuring assignment.

console.log(others); //[ 4, 5 ]
// rest syntax collects all the elements after the last variable. So it does not include any skipped elements.

//////////////////////////////////////////////////
////SyntaxError: Rest element must be last element
// const [m,n, ...other1, o] =[1,2,3,4,5]

//there can only ever be one rest in any destructuring assignment.
//////////////////////////////////////////////////

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

// REST operator in Object
const { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays);
//CONSOLE: { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

//////////////////////////////////////////
//////////////////////////////////////////
// REST Operator in Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3); //5
add(5, 2, 7, 8); //22

const x = [1, 2, 3, 4, 5, 6];
add(...x); //21

////////////////////////////////////////
//// Pasta Restaurant
const newRestaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};
newRestaurant.orderPizza("mushrooms"); //mushrooms []

newRestaurant.orderPizza("mushrooms", "olives", "onion", "spinach");
//CONSOLE: mushrooms [ 'olives', 'onion', 'spinach' ]
