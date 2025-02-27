// Option 1

// Declare two variables

let num1 = 10; 
let num2 = 3;

// Perform operations and store results
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

// Print results
   console.log("Addition: " + num1 + " + " + num2 + " = " + addition);
   console.log("Subtraction: " + num1 + " - " + num2 + " = " + subtraction);
   console.log("multiplication: " + num1 + " * " + num2 + " = " + multiplication);
   console.log("division: " + num1 + " / " + num2 + " = " + division);
   console.log("modulus: " + num1 + " % " + num2 + " = " + modulus);

/*** Option 2 
 *  Funtion to perform arithmetic operations
 ****/

function calculateOperation(num1, num2) {

   //Perform operations and store results
   let addition = num1 + num2;
   let subtraction = num1 - num2;
   let multiplication = num1 * num2;
   let division = num1 / num2;
   let modulus = num1 % num2;

   //Print the result 
   console.log("Addition: " + num1 + " + " + num2 + " = " + addition);
   console.log("Subtraction: " + num1 + " - " + num2 + " = " + subtraction);
   console.log("multiplication: " + num1 + " * " + num2 + " = " + multiplication);
   console.log("division: " + num1 + " / " + num2 + " = " + division);
   console.log("modulus: " + num1 + " % " + num2 + " = " + modulus);
}

calculateOperation(3, 2);

