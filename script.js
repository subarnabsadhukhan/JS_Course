"use strict";

///////////////////////////////////
// Maps: Fundamentals

//So, in objects, the keys are basically always strings. But in maps, we can have any type of key. It could even be objects, or arrays, or other maps.

const restaurant = new Map();

restaurant.set("name", "Classico Italiano");
restaurant.set(1, "India");

// calling ☝🏻 the set method like this does not only update the map, but it also returns the map

console.log(restaurant.set(2, "Bangadesh"));
/*
CONSOLE:
Map(3) {
  'name' => 'Classico Italiano',
  1 => 'India',
  2 => 'Bangadesh'
}
*/

// .set Chaining...
restaurant
  .set("categories", ["a", "b"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are Open :D");

// Getting Elements from MAP
//-------------- .get() --------------
console.log(restaurant.get("name")); //Classico Italiano
console.log(restaurant.get(true)); //We are Open :D

// Checking if a MAP contains a certain key
//--------------- .has() -----------
console.log(restaurant.has("categories")); //true
console.log(restaurant.has("location")); //false

// Delete Elements form a Map
restaurant.delete(2);
restaurant.delete(true);

console.log(restaurant);
/*
CONSOLE:
Map(5) {
  'name' => 'Classico Italiano',
  1 => 'India',
  'categories' => [ 'a', 'b' ],
  'open' => 11,
  'close' => 23
}
*/

// SIZE of the MAP
console.log(restaurant.size); //5

// Clearing a MAP
restaurant.clear();
console.log(restaurant); //Map(0) {}

////////////////////////
// Use Array and Objects as MAP keys

const newMAP = new Map();
newMAP.set([1, 2], "hello");

console.log(newMAP); //Map(1) { [ 1, 2 ] => 'hello' }

console.log(newMAP.get([1, 2])); //undefined
//REASON: those two arrays are actually not the same object in the heap. And, the key there is exactly that object.

const arr = [2, 3];
newMAP.set(arr, "BYE");
console.log(newMAP); //{ [ 1, 2 ] => 'hello', [ 2, 3 ] => 'BYE' }

console.log(newMAP.get(arr)); //BYE
