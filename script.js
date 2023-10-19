"use strict";

///////////////////////////////////
////// Working With Strings

const airline = "TAP Air Portugal";
const plane = "A320";

// Getting Character of a String at a Certain Position
console.log(plane[1]); //3

console.log(plane[2]); //2
console.log(typeof plane[2]); //string

console.log("B737"[0]); //B

// length of a String
console.log(airline.length); //16
console.log("Subarnab".length); //8

/////////////////////////
///// String Methods

///----------- .indexOf() ---------
// Gives the First occurrence
console.log(airline.indexOf("a")); //14
console.log(airline.indexOf("A")); //1

// To Find the Last Occurrence - .lastIndexOf()
console.log(airline.lastIndexOf("A")); //4

// Occurrence of a Word
console.log(airline.indexOf("Air")); //4
console.log(airline.indexOf("air")); //-1 (Not Found)

//----------- .slice() method ------------

// .slice(<beginningIndex>, <endingIndex>)
console.log(airline.slice(4)); //Air Portugal

console.log(airline.slice(4, 9)); //Air P
// ending Index is not Included

////////////////////////////
// Extracting First Word of a Certain String
console.log(airline.slice(0, airline.indexOf(" "))); //TAP

// Extracting Last Word of a Certain String
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //Portugal

// Giving Negative Index starts extracting from the END
console.log(airline.slice(-4)); //ugal
console.log(airline.slice(4, -4)); //Air Port
console.log(airline.slice(-4, 4)); //

//////////////////////////////////
// Checking if a seat is Middle Seat in Aeroplane
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat 🥲");
  } else {
    console.log("You are Lucky 😎");
  }
};

checkMiddleSeat("11B"); //You got the middle seat 🥲
checkMiddleSeat("23E"); //You got the middle seat 🥲
checkMiddleSeat("5F"); //You are Lucky 😎

///////////////////////////////////
// Why methods on String actually works??
// Whenever we call a method on a string, JavaScript will automatically behind the scenes convert that string primitive to a string object with the same content. And then it's on that object where the methods are called.
// This process is called boxing because it basically takes our string and puts it into a box which is the object.
console.log(typeof new String("Subarnab")); //object

// All string methods return primitives. Even if called on a string object.
console.log(typeof new String("Subarnab").slice(4)); //string
