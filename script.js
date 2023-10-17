"use strict";

///////////////////////////////
//////// Destructuring Objects

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ time, address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "kolkata",
  mainIndex: 2,
  starterIndex: 1,
});
//CONSOLE: Order received! Bruschetta and Risotto will be delivered to kolkata at 22:30

restaurant.orderDelivery({
  time: "22:30",
  address: "kolkata",
});
//CONSOLE: Order received! Bruschetta and Pizza will be delivered to kolkata at 22:30
