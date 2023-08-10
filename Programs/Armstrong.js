let num =parseInt(prompt("Enter a positive number: "));
let ne = num.toString()
let sum = 0;
for ( let i = 0 ; i < ne.length ; i++){
  
  sum += ((Number.parseInt(ne[i])) ** ne.length);
  
}
if (sum === num ){
  console.log("Armstrong number")
}else{
  console.log("not Armstrong number")
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// program to check an Armstrong number of n digits

// take an input
const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;

// create a temporary variable
let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
