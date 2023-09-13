"use strict";
/////////////////////////////////////////////
///// The while Loop

// for loop
console.log(`--- USING FOR LOOP ---`);
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// while loop
console.log(`--- USING WHILE LOOP ---`);
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

// -----------------------------------
// roll a dice and then keep rolling the dice until we roll a six. And then when we roll a six, we stop.

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

//💚 while loop does really not have to depend on any counter variable. So whenever you do need a loop without a counter, you can reach for the while loop.
