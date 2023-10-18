"use strict";

////////////////////////////////////////
/////// Looping Objects: Object Keys, Values, and Entries

const openingHours = {
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
};

///////////////////////
// Creating an Array of Property Names of an Object
const properties = Object.keys(openingHours);
console.log(properties); //[ 'thu', 'fri', 'sat' ]

////////////////////////
// Looping over Property Names
for (const day of Object.keys(openingHours)) console.log(day);

//CONSOLE:
// thu
// fri
// sat

//////////////////////////
// Creating an Array of Property values of an Object
const values = Object.values(openingHours);
console.log(values);

/*
CONSOLE:
[
  { open: 12, close: 22 },
  { open: 11, close: 23 },
  { open: 0, close: 24 }
]
*/
/////////////////////////
// Creating an Array of Object key-values
const entries = Object.entries(openingHours);
console.log(entries);
/* 
CONSOLE:
[
  [ 'thu', { open: 12, close: 22 } ],
  [ 'fri', { open: 11, close: 23 } ],
  [ 'sat', { open: 0, close: 24 } ]
]
*/

/////////////////////////////////
// Exercise
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
/*
CONSOLE:
On thu we open at 12 and close at 22.
On fri we open at 11 and close at 23.
On sat we open at 0 and close at 24.
*/
