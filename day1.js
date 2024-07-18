//Activity 1: Variable Declaration

// • Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var a = 9;
console.log(a);

// • Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let string = 'Hello Everyone';
console.log(string);

// Activity 2: Constant Declaration

// • Task 3: Declare a variable using **const**, assign it a boolean value, and log the value to the console. 

const booleanValue = true;
console.log(booleanValue);

// Activity 3: Data Types

// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the `typeof` operator. 

let num = 902;
let str = 'Reflection';
let boolean = false;
let obj = {
  Name: 'Dheeraj',
  age: 20
};
let arr = [1,2];

console.log(typeof num);
console.log(typeof str);
console.log(typeof boolean);
console.log(typeof obj);
console.log(typeof arr);

// Activity 4: Reassigning Variables
// • Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console. 

let assignValue = 'firstAssign';
console.log(assignValue);
assignValue = 'reAssign';
console.log(assignValue);

// Activity 5: Understanding **const**
// • Task 6: Try reassigning a variable declared with **const** and observe the error. 

const assignConst = 202;
console.log(assignConst);
// assignConst = 203;   // We could not reassign the const value as it was only assigned once.
// console.log(assignConst);     // If we console the reassigned value, then it gave an error.
// TypeError: Assignment to constant variable.