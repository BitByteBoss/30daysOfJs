// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.

let num1 = 9;
let num2 = 6;

console.log(num1 + num2);     //output: 15

// Task 2: Write a program to subtract two numbers and log the result to the console.

console.log(num1 - num2);     //output: 2

// Task 3: Write a program to multiply two numbers and log the result to the console.

let num3 = 9;
let num4 = 2;
let multiply = num3 * num4
console.log(multiply);        //output: 18

// Task 4: Write a program to divide two numbers and log the result to the console.

let divide = num3 / num4
console.log(divide);        //output: 4.5

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let remainder = num3 % num4;
console.log(remainder);           //output: 1

// Activity 2: Assignment Operators

// Task 6: Use the `+=` operator to add a number to a variable and log the result to the console.

let D1 = 2;
D1 += 3
console.log(D1);    //output: 5

// Task 7: Use the `-=` operator to subtract a number from a variable and log the result to the console.

D1 -= 4;
console.log(D1);    //output: 1

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using `>` and `<` and log the result to the console.  

let num5 = 6;
let num6 = 9;

if(num5 < num6){
  console.log("num6 is greater than num5");
} else {
  console.log("num5 is greater than num6");     //output: num6 is greater than num5
}

// Task 9: Write a program to compare two numbers using `>=` and `<=` and log the result to the console.  

let num7 = 9;
let num8 = 5;

if (num8 >= num7) {
  console.log("num8 is greater than or equal to num7");  
} else {
  console.log("num7 is greater than or equal to num8");   //output: num7 is greater than or equal to num8
}

// Task 10: Write a program to compare two numbers using `==` and `===` and log the result to the console.
 
// Activity 4: Logical Operators

// - Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

const z = 5, y = 3;
console.log((z < 6) && (y < 5));   

// - Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

let x = 3;

console.log((x > 2) || (x > 5));  // true
console.log((x > 3) || (x < 0));  // false

// - Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

console.log(!(x < 2));  // true

// Activity 5: Ternary Operator

// - Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let number = 6
let posORneg = number > 0 ? 'positive' : 'negative';
console.log(posORneg);          //positive