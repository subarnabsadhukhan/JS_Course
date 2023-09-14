///// FOLLOW README.md //////

'use strict';
/////// Use Single Quotes instead of Double Quotes

// console.log("Hello World!");
console.log('Hello World!');

////////////////////////////////
const measurement = {
  type: 'temp',
  unit: 'celsius',
  value: prompt('Degrees celsius:'),
};

console.log(measurement);
console.table(measurement);
console.warn(measurement);
console.error(measurement);

////// Coding Challenge /////

const printForecast = function (arr) {
  let str = [];
  for (let i = 0; i < arr.length; i++) {
    str.push(` ... ${arr[i]}°C in ${i + 1} days`);
  }
  str.push(' ...');
  console.log(str.join(''));
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
