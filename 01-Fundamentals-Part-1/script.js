/////////////////////////////////////////////////
//////////Taking Decisions: if / else Statements

/////// Driving License Eligibility
const age = 23;
const isOldEnough = age >= 18;

// Control Structure - Official Name
if (isOldEnough) {
  console.log("Eligible for Driving License 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Not Eligible for Driving License ❌. Wait for ${yearsLeft} year(s).`
  );
}
/////////////////// Alternate Way ////////////////////
let isEligible;
if (age >= 18) {
  isEligible = "Yes! Eligible 🚗";
} else {
  isEligible = "Not Eligible ❌";
}
console.log(isEligible);
console.log(typeof isEligible);
