"use strict";

///////////////////////////////////
// The call and apply Methods

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

lufthansa.book(239, "Subarnab Sadhukhan");
//Subarnab Sadhukhan booked a seat on Lufthansha flight LH239

lufthansa.book(635, "Rana Ghosh");
//Rana Ghosh booked a seat on Lufthansha flight LH635

console.log(lufthansa.bookings);
/*
[
  { flight: 'LH239', name: 'Subarnab Sadhukhan' },
  { flight: 'LH635', name: 'Rana Ghosh' }
]
*/

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};
const book = lufthansa.book;

// book(296, "Ajay"); //TypeError: Cannot read properties of undefined (reading 'airline'). Here, .this keyword is undefinded.

///////////////////////////
///////////////////////////
// How do we tell JavaScript explicitly or manually what this this keyword should look like?

// .call() method
book.call(eurowings, 23, "Sima Ghosh");
//Sima Ghosh booked a seat on Eurowings flight EW23

console.log(eurowings.bookings);
//[ { flight: 'EW23', name: 'Sima Ghosh' } ]

book.call(lufthansa, 555, "Ishita Ghosh");
//Ishita Ghosh booked a seat on Lufthansha flight LH555

console.log(lufthansa.bookings);
/*
CONSOLE:
[
  { flight: 'LH239', name: 'Subarnab Sadhukhan' },
  { flight: 'LH635', name: 'Rana Ghosh' },
  { flight: 'LH555', name: 'Ishita Ghosh' }
]
*/

//////////////////////////////
/// .apply() method
// .apply() method does basically exactly the same thing as .call(). The only difference is that apply does not receive a list of arguments after the this keyword, so it doesn't receive this list here but instead, it's gonna take an array of the arguments.

const flightData = [555, "Riya Ghosh"];

book.apply(lufthansa, flightData);
//Riya Ghosh booked a seat on Lufthansha flight LH555

///// This .apply() method is not that used anymore in modern JavaScript.
// Better Method with Array
book.call(lufthansa, ...flightData);
//Riya Ghosh booked a seat on Lufthansha flight LH555
