"use strict";
////////////////////////////////////////////////
///////// Object Methods
const currentYear = 2023;
const Ishita = {
  firstName: "Ishita",
  lastName: "Ghosh",
  birthYear: 2002,
  job: "nursing",
  friends: ["Disha", "Shreya", "Kuheli"],
  hasDriversLicense: false,

  // Functions can be added as value inside Objects
  calcAge: function (currentYear) {
    // Using this keyword
    return currentYear - this.birthYear;
  }, // Function Expression, NOT Declaration
};

// Dot Notation
console.log(`Ishita's age: ${Ishita.calcAge(currentYear)}`); //Ishita's age: 21

//Bracket Notation
console.log(`Ishita's age: ${Ishita["calcAge"](currentYear)}`); //Ishita's age: 21

//////////////// Alternate Way //////////////////
const Ishitaa = {
  firstName: "Ishita",
  lastName: "Ghosh",
  birthYear: 2002,
  job: "nurse",
  sex: "female",
  friends: ["Disha", "Shreya", "Kuheli"],
  hasDriversLicense: false,

  // Functions can be added as value inside Objects
  calcAge: function (currentYear) {
    // Using this keyword
    this.age = currentYear - this.birthYear;
    return this.age;
  }, // Function Expression, NOT Declaration

  //----------- for challenge only--------
  getSummary: function (currentYear) {
    this.summary = `${this.firstName} is a ${this.calcAge(
      currentYear
    )} years old ${this.job}, and ${this.sex === "male" ? "he" : "she"} has ${
      this.hasDriversLicense ? "a" : "no"
    } driver's license.`;
    return this.summary;
  },
};

// Dot Notation
console.log(`Ishitaa's age: ${Ishitaa.age}`); //undefined

//💚 I need to call calcAge() atleast 1 first to create the age property.
console.log(`Ishitaa's age: ${Ishitaa.calcAge(currentYear)}`); //Ishita's age: 21

console.log(`Ishitaa's age: ${Ishitaa.age}`); //Ishita's age: 21

//Bracket Notation
console.log(`Ishitaa's age: ${Ishitaa["age"]}`); //Ishita's age: 21

//////////////////////////////////////////
// ---------- Challange -----------------
console.log(Ishitaa.getSummary(currentYear));
