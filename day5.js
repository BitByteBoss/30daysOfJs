// Here is the text extracted from the image:

// Activity 1: Function Declaration
// - Task 1: Write a function to check if a number is even or odd and log the result to the console.


function OddEven(n) {
  return (n%2===0) ? 'Even Number' : 'Odd Number';
}
let n = OddEven(5);
console.log(n);         //Output:Odd Number

// - Task 2: Write a function to calculate the square of a number and return the result.

function sqrNo(sqr) {
  return sqr * sqr;
}
let sqr = sqrNo(4);
console.log(sqr);       //Output:16

// Activity 2: Function Expression
// - Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function maxNo(a,b) {
  return (a>b) ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;
}
let a = 9, b = 4;
console.log(maxNo(a,b));        //Output: 9 is greater than 4

// - Task 4: Write a function expression to concatenate two strings and return the result.

const concatenateStrings = function(str1, str2) {
  return str1 + str2;
};

let string1 = "Hello, ";
let string2 = "world!";
console.log(concatenateStrings(string1, string2)); // Output: "Hello, world!"


// Activity 3: Arrow Functions
// - Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let sum = (a,b) => a + b;
console.log(sum(2,4));      //Output: 6

// - Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsChar = (str, char) => str.includes(char);

let str = "Hello, world!";
let char = "o";
console.log(containsChar(str, char)); // Output: true

char = "z";
console.log(containsChar(str, char)); // Output: false

// Activity 4: Function Parameters and Default Values
// - Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 3)); // Output: 15
console.log(multiply(7));    // Output: 7 


// - Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Alice", 25)); // Output: "Hello, Alice! You are 25 years old."
console.log(greet("Bob"));       // Output: "Hello, Bob! You are 18 years old."


// Activity 5: Higher-Order Functions
// - Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeatFunction(fn, times) {
  for (let i = 0; i < times; i++) {
      fn();
  }
}

const sayHello = () => console.log('Hello!');
repeatFunction(sayHello, 3);              // This will print "Hello!" 3 times


// - Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function compose(fn1, fn2, value) {
  return fn2(fn1(value));
}

const double = x => x * 2;
const increment = x => x + 1;

const result = compose(double, increment, 5);
console.log(result);               // Output will be 11 (double(5) is 10, then increment(10) is 11)

