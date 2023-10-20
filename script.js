"use strict";

///////////////////////////////////
/// Setting Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 10 * 2 * numPassengers
) {
  // Older Way of Setting Default Parameters
  // ES5 Era
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
//CONSOLE: { flightNum: 'LH123', numPassengers: 1, price: 20 }

createBooking("LH123", 5);
//CONSOLE: { flightNum: 'LH123', numPassengers: 5, price: 100 }

////////////////////////////////////////
///// We Can't Skip Parameters like below 👇🏻
// createBooking("LH123", ,50);

//// There is a way to Skip Parameters 👇🏻
createBooking("LH888", undefined, 5000);
//CONSOLE: { flightNum: 'LH888', numPassengers: 1, price: 5000 }
