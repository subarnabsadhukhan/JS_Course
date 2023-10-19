"use strict";

///////////////////////////////////
// Sets
//Sets and maps were introduced in ES6

// A set is basically just a collection of unique values. So that means, a set can never have any duplicates.

// Set can of course hold mixed data types.

/////////////////////////////////////
const orderSet = new Set([
  "pasta",
  "pizza",
  "pasta",
  "risotto",
  "pasta",
  "risotto",
  "pizza",
]);

console.log(orderSet); //Set(3) { 'pasta', 'pizza', 'risotto' }

// The order of elements in the set is irrelevant. In SET there are actually no Indexes.

// Strings are also iterable.
console.log(new Set("Subarnab"));
//CONSOLE: Set(6) { 'S', 'u', 'b', 'a', 'r', 'n' }

// To get the size/length of a Set
console.log(orderSet.size); //3

// Checking if a Certain element is in a SET
console.log(orderSet.has("pizza")); //true
console.log(orderSet.has("bread")); //false

// Adding Elements to SET
orderSet.add("garlic bread");
orderSet.add("garlic bread"); // No Duplicate is going to add.
orderSet.add("bread");

console.log(orderSet);
//CONSOLE: { 'pasta', 'pizza', 'risotto', 'garlic bread', 'bread' }

// Deleting Elements from SET
orderSet.delete("bread");
orderSet.delete("bread"); // Have not shown any error.
orderSet.delete("risotto");

console.log(orderSet); //) { 'pasta', 'pizza', 'garlic bread' }

// Sets are iterable. So, looping is possible.
for (const order of orderSet) console.log(order);
//CONSOLE:
// pasta
// pizza
// garlic bread

// Example: The main use case of sets is actually to remove duplicate values of arrays.

const staff = ["waiter", "chef", "waiter", "manager", "chef"];
const staffUnique = new Set(staff);

// SET to Array Conversion
console.log([...staffUnique]); //[ 'waiter', 'chef', 'manager' ]

// Counting How many Unique Letters in a String
const myName = "Subarnab";
console.log(new Set(myName).size); //6

// Deleting all Elements from a SET
orderSet.clear();

console.log(orderSet); //Set(0) {}
