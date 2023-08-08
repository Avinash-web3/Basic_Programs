// generating  a random number

const a = Math.random();
console.log(a);

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Get a Random Number between 1 and 10

const a = Math.random() * (10-1) + 1
console.log(`Random value between 1 and 10 is ${a}`);

// -----------------------------------------------------------------------------------------------------------------------------------------------------

 // Integer Value between 1 and 10

const a = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(`Random value between 1 and 10 is ${a}`);

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Integer Value between Two Numbers (Inclusive)

// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);
