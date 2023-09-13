"use strict";
/////////////////////////////////////////////
///// Looping Backwards and Loops in Loops

const ishitaArray = [
  "Ishita",
  "Ghosh",
  2023 - 2002,
  "nurse",
  ["Disha", "Sneha", "Shreya"],
];

//------ Looping Backwards ------------

for (let i = ishitaArray.length - 1; i >= 0; i--) {
  console.log(ishitaArray[i]);
}

//---- Loop inside of a Loop -----
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
