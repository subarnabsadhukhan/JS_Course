"use strict";

////////////////////////////////
// Since ES 2018, the spread operator actually also works on objects, even though objects are not iterables.
///////////////////////////////

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
};

// Spread Operator on Object
const updateRestaurant = { founder: "jonas", ...restaurant, foundIn: 1998 };
console.log(updateRestaurant);
/*
CONSOLE:
{
  founder: 'jonas',
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  foundIn: 1998
} 
*/

// Creating Shallow Copy of Opjects using Spread Operators
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";

console.log(restaurantCopy);
/*
CONSOLE:
{
  name: 'Ristorante Roma',
  location: 'Via Angelo Tavanti 23, Firenze, Italy'
} 
*/

console.log(restaurant);
/* 
CONSOLE:
{
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy'
}
*/
