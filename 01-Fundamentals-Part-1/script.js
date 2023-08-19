let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof :The typeof operator returns a string indicating the type of the operand's value.
console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
console.log(typeof 22); // number
console.log(typeof "Subarnab"); // string

// dynamic typing
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); // string

// undefined type
let year;
console.log(year); // undefined (value of empty variable is undefined)
console.log(typeof year); // undefined

year = 2002;
console.log(typeof year); // number

//null data type
console.log(null); // null
console.log(typeof null); // object
