// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

import { sum } from "./Add2No.js";

const result = sum(2,3);

console.log(result);

// Outputs: 5

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import { person } from "./person.js";

console.log(`My name is ${person.name}`);

// Outputs: My name is Dheeraj Dixit

// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

import { diff, multiple } from "./multifunc.js";
console.log(diff(3,1));
console.log(multiple(2,3,4));

// Outputs: 2
// Outputs: 24

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

import div from './defaultexport.js';
console.log(div(6,3));

// Outputs: 2

// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as multifunc from "./multifunc2.js";
console.log(multifunc.diff(4,2));
console.log(multifunc.multiple(2,3,4));
console.log(multifunc.a);

// Outputs: 2
//          24
//          2.3

// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

import { reverse } from 'lodash';

const array = [1, 2, 3, 4, 5];

const reversedArray = reverse(array.slice()); 
console.log('Original Array:', [1, 2, 3, 4, 5]);
console.log('Reversed Array:', reversedArray);


// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
