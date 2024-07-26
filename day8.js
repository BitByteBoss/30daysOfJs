// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person’s name and age, and log the string to the console.

const name = "Alice";
const age = 30;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// Outputs:My name is Alice and I am 30 years old.


// Task 2: Create a multi-line string using template literals and log it to the console.

const multiLineString = `This is a string
that spans multiple
lines using template literals.`;

console.log(multiLineString);

// Outputs:
// This is a string
// that spans multiple
// lines using template literals.


// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [10, 20, 30, 40, 50];

const [first, second] = numbers;

console.log(`The first number is: ${first}`);
console.log(`The second number is: ${second}`);

// Outputs:
// The first number is: 10
// The second number is: 20

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960
};

const { title, author } = book;

console.log(`The book's title is: ${title}`);
console.log(`The author is: ${author}`);

// Outputs:
// The book's title is: To Kill a Mockingbird
// The author is: Harper Lee


// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const originalArray = [1, 2, 3];
const additionalElements = [4, 5, 6];

const newArray = [...originalArray, ...additionalElements];

console.log(newArray);

// Outputs:
// [1, 2, 3, 4, 5, 6]


// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result);  // Output: 15


// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function multiply(a, b = 1) {
  return a * b;
}

const result1 = multiply(5, 2);
console.log(result1);  // Output: 10

const result2 = multiply(5);
console.log(result2);  // Output: 5


// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const name1 = "Gadget";
const price = 99.99;

const product = {
    name,
    price,
    details() {
        return `The product ${this.name} costs $${this.price}`;
    },
    discount(rate) {
        const discountedPrice = this.price * (1 - rate);
        return `The product ${this.name} after a discount of ${rate * 100}% costs $${discountedPrice.toFixed(2)}`;
    }
};

console.log(product);

console.log(product.details());
console.log(product.discount(0.2));

// Outputs:
// {
//   name: 'Gadget',
//   price: 99.99,
//   details: [Function: details],
//   discount: [Function: discount]
// }
// The product Gadget costs $99.99
// The product Gadget after a discount of 20% costs $79.99


// Task 9: Create an object with computed property names based on variables and log the object to the console.

const propertyName1 = 'firstName';
const propertyName2 = 'lastName';
const propertyName3 = 'age';

const person = {
    [propertyName1]: 'John',
    [propertyName2]: 'Doe',
    [propertyName3]: 30
};

console.log(person);

// Outputs:
// {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// }

