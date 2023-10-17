"use strict";

////////////////////////////////
//// Pasta Resturant
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
const ingredients = [
  prompt(`Let's Make Pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
];
console.log(ingredients); //['mushrooms', 'aspargus', 'cheese']

// Older Way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//CONSOLE: Here is your declicious pasta with mushrooms, aspargus and cheese

// With Spread Operator
restaurant.orderPasta(...ingredients);
// CONSOLE: Here is your declicious pasta with mushrooms, aspargus and cheese
