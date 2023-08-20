///////////////////////////////////////////////
/////////// The Switch Statement

const day = "thrusday";

switch (day) {
  case "monday": // day === 'monday'
    console.log(`Plan Course Structure`);
    console.log(`Go to Coding Meetup`);
    break;
  case "tuesday":
    console.log(`Prepare Theory Lectures`);
    break;
  case "wednesday":
  case "thrusday":
    console.log(`Write Code Examples`);
    break;
  case "friday":
    console.log(`Record Videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the Weekend :D`);
    break;
  default:
    console.log(`Not a Valid Day!`);
}

//💡 In Switch Statements, Comparison happens in **Strict Equality** mode.

//------------ Alternate Way ---------------

if (day === "monday") {
  console.log(`Plan Course Structure`);
  console.log(`Go to Coding Meetup`);
} else if (day === "tuesday") {
  console.log(`Prepare Theory Lectures`);
} else if (day === "wednesday" || day === "thrusday") {
  console.log(`Write Code Examples`);
} else if (day === "friday") {
  console.log(`Record Videos`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Enjoy the Weekend :D`);
} else {
  console.log(`Not a Valid Day!`);
}
