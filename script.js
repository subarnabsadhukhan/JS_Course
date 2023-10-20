"use strict";
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const apiDataClean = function (str) {
  const singleData = str.split("+");
  for (const row of singleData) {
    const oneLine = row.split(";");
    const word1 = oneLine[0]
      .split("_")
      .join(" ")
      .slice(1)
      .replace("Delayed", "🔴 Delayed");
    const word2 = oneLine[1].toUpperCase().slice(0, 3);
    const word3 = oneLine[2].toUpperCase().slice(0, 3);
    const word4 = oneLine[3].replace(":", "h");
    const word = `${word1} from ${word2} to ${word3} (${word4})`.padStart(
      50,
      " "
    );

    console.log(word);
  }
};

apiDataClean(flights);
/*
CONSOLE:
      🔴 Delayed Departure from FAO to TXL (11h25)
                   Arrival from BRU to FAO (11h45)
        🔴 Delayed Arrival from HEL to FAO (12h05)
                 Departure from FAO to LIS (12h30)
*/
