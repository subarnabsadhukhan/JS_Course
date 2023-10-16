"use strict";

/////////////////////////////////
/////////////////////////////////
const arr = [2, 3, 4];

// Destructuring/ Unpacking an Array
const [x, y, z] = arr;
console.log(x, y); //2 3

///////////////////////////////
///////////////////////////////

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

///////////---------------------
// Destructuring
let [m, n] = restaurant.categories;
console.log(m, n); //Italian Pizzeria

// Choosing first and third element (skipping second)
let [o, , p] = restaurant.starterMenu;
console.log(o, p); //Focaccia Garlic Bread

///////////----------------------
// Switching Variables (Traditional Way)
const temp = o;
o = p;
p = temp;
console.log(o, p); //Garlic Bread Focaccia

// Switching Variables with Destructuring
[m, n] = [n, m];
console.log(m, n); //Pizzeria Italian

////////////------------------------
console.log(restaurant.order(1, 2));
//CONSOLE: [ 'Bruschetta', 'Risotto' ]

// Receive 2 return values from a Function
const [starter, main] = restaurant.order(1, 2);
console.log(starter, main); //Bruschetta Risotto

/////////////////////////////
/////////////////////////////

// Nested Destructuring
const nested = [1, 2, [3, 4, 5]];
const [j, , [k, , l]] = nested;
console.log(j, k, l); //1 3 5

////////////////////////////
////////////////////////////

// Setting Default Values during Destructuring

let [s, t, u, v] = [8, 9, 10];
console.log(s, t, u, v); //8 9 10 undefined

[s = 0, t = 0, u = 0, v = 0] = [8, 9, 10];
console.log(s, t, u, v); //8 9 10 0

[s = 0, t = 0, u = 0, v = 0] = [8, 9];
console.log(s, t, u, v); //8 9 0 0

[s = 0, , u = 0, v = 0] = [8, 9, 10];
console.log(s, u, v); //8 10 0
