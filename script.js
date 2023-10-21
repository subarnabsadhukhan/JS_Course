"use strict";

///////////////////////////////////
// The Bind Method
// .bind() also allows us to manually set this keywords for any function call. Now, the difference is that bind does not immediately call the function. Instead it returns a new function where this keyword is bound.

const lufthansa = {
  airline: "Lufthansha",
  iataCode: "LH",
  bookings: [],

  // Enhanced Object Literal Syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

const bookEW = book.bind(eurowings);
const bookLW = book.bind(lufthansa);
// It will not call the book function. Instead it will return a new function where this keyword will always be set to Eurowings.

bookEW(23, "Riya Roy");
//Riya Roy booked a seat on Eurowings flight EW23

bookLW(555, "Sneha Nath");
//Sneha Nath booked a seat on Lufthansha flight LH555

///////////////////
// presetting some arguments
const bookEW555 = book.bind(eurowings, 555);

bookEW555("Shreya Das"); // flightNum is already presetted.
//Shreya Das booked a seat on Eurowings flight EW555

console.log(eurowings.bookings);
/*
CONSOLE:
[
  { flight: 'EW23', name: 'Riya Roy' },
  { flight: 'EW555', name: 'Shreya Das' }
]
*/

/////////////////////////
// .bind() method with Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

/*
document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
//CONSOLE:
//<button class="buy">Buy new plane 🛩</button>
//NaN

// REASON:
Here, lufthansa.buyPlane will not work. Because, in an event handler function, this keyword always points to the element on which that handler is attached to. Here, this keyword will point to the button element.
*/

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
// We have to Explicitly definde the this keyword above ☝🏻

//CONSOLE:
//{airline: 'Lufthansha', iataCode: 'LH', bookings: Array(1), planes: 300, book: ƒ, …}
//301

/////////////////////////////////////
///////////////////////////////////
// Partial Application
// In case of partial application, many times we are not even interested in this keyword.

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200)); //220

// PRESET the VAT rate of 23%
const addVAT = addTax.bind(null, 0.23);
// first argument of .bind() is this keyword. We can write anything instead of null because there is no this keyword 🤣.

console.log(addVAT(100)); //123
