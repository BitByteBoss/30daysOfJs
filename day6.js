// Here's the text extracted from the image:

// Activity 1: Array Creation and Access

//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const arr = [1,2,3,4,5];
console.log(arr);

//Task 2: Access the first and last elements of the array and log them to the console.

console.log(`${arr[0]} is the first element and ${arr[4]} is the last element`);

//Activity 2: Array Methods (Basic)

//Task 3: Use the `push` method to add a new number to the end of the array and log the updated array.

arr.push(6,7);
console.log(arr);

//Task 4: Use the `pop` method to remove the last element from the array and log the updated array.

arr.pop();
console.log(arr);

//Task 5: Use the `shift` method to remove the first element from the array and log the updated array.

arr.shift();
console.log(arr);

//Task 6: Use the `unshift` method to add a new number to the beginning of the array and log the updated array.

arr.unshift(8,9);
console.log(arr);

//Activity 3: Array Methods (Intermediate)

//Task 7: Use the `map` method to create a new array where each number is doubled and log the new array.

let newArr = arr.map(myfunction);

function myfunction(num){
  return num * 10;
}

console.log(newArr);

//Task 8: Use the `filter` method to create a new array with only even numbers and log the new array.

const newArr1 = arr.filter(myfunction1);

function myfunction1(num1){
  return num1 < 40;
}

console.log(newArr1);

//Task 9: Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


//Activity 4: Array Iteration

//Task 10: Use a `for` loop to iterate over the array and log each element to the console.

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

//Task 11: Use the `forEach` method to iterate over the array and log each element to the console.

const num = [65, 44, 12, 4];
num.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}

console.log(num);

//Activity 5: Multi-dimensional Arrays

//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

// Create a 2D array (matrix)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Log the entire array to the console
console.log('Matrix:', matrix);         //Matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

//Task 13: Access and log a specific element from the two-dimensional array.

// Create a 2D array (matrix)

const rowIndex = 1; // 2nd row (0-based index)
const colIndex = 2; // 3rd column (0-based index)

const element = matrix[rowIndex][colIndex];

console.log(`Element at row ${rowIndex + 1}, column ${colIndex + 1}:`, element);

//Output:Element at row 2, column 3: 6
