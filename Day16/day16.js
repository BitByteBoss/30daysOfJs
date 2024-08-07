// Activity 1: Basic Recursion
//   • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(num) {
  if (num == 0 || num == 1) {
    return 1
  } else {
    return num*factorial(num-1);
  }
}

let testCases = [0,1,4,9]

testCases.forEach((num) => {
  console.log(`factorial for ${num} is ${factorial(num)}`);
})

//Outputs:
// factorial for 0 is 1
// factorial for 1 is 1
// factorial for 4 is 24
// factorial for 9 is 362880

//   • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function Fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1){
    return 1;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n -2);
  }
}

testCases.forEach((num) => {
  console.log(`Fibonacci number of ${num} term is ${Fibonacci(num)} `);
  
})

// Outputs:
// Fibonacci number of 0 term is 0 
// Fibonacci number of 1 term is 1 
// Fibonacci number of 4 term is 3 
// Fibonacci number of 9 term is 34 

// Activity 2: Recursion with Arrays
//   • Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumofArr(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumofArr(arr.slice(1));
  }
}

const testCases1 = [
  [],
  [1, 2, 3, 4, 5],
  [10, 20, 30],
  [7, 14, 21, 28],
];

testCases1.forEach((arr,index) => {
  console.log(`Sum of element in array ${index} is ${sumofArr(arr)}`);
})


// Outputs:
// Sum of element in array 0 is 0
// Sum of element in array 1 is 15
// Sum of element in array 2 is 60
// Sum of element in array 3 is 70

//   • Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxNum(num) {
  if (num.length === 1) {
    return num[0]
  } else {
    const restMax = maxNum(num.slice(1));
    return num[0] > restMax ? num[0] :restMax;
  }
}

const testCases2 = [
  [1, 2, 3, 4, 5],
  [10, 20, 30, 5, 25],
  [7, 14, 21, 28, 3, 8],
  [-10, -20, -30, -5, -25],
  [100]
];

testCases2.forEach((arr, index) => {
  console.log(`Maximum element in array ${index + 1} is ${maxNum(arr)}`);
});

// Outputs:
// Maximum element in array 1 is 5
// Maximum element in array 2 is 30
// Maximum element in array 3 is 28
// Maximum element in array 4 is -5
// Maximum element in array 5 is 100

// Activity 3: String Manipulation with Recursion
//   • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.slice(1)) + str[0];
}

const testCases3 = [
  "hello",
  "world",
  "recursion",
  "JavaScript",
  ""
];

testCases3.forEach((str, index) => {
  console.log(`Reversed string ${index + 1}: ${reverseString(str)}`);
});

// Outputs:
// Reversed string 1: olleh
// Reversed string 2: dlrow
// Reversed string 3: noisrucer
// Reversed string 4: tpircSavaJ
// Reversed string 5:

//   • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

const testCases4 = [
  "racecar",
  "madam",
  "hello",
  "level",
  "world",
  "a",
  ""
];

testCases4.forEach((str, index) => {
  console.log(`Is "${str}" a palindrome? ${isPalindrome(str)}`);
});

// Outputs:
// Is "racecar" a palindrome? true
// Is "madam" a palindrome? true
// Is "hello" a palindrome? false
// Is "level" a palindrome? true
// Is "world" a palindrome? false
// Is "a" a palindrome? true
// Is "" a palindrome? true


// Activity 4: Recursive Search
//   • Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) {
    return mid;
  }
  
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  }
  
  return binarySearch(arr, target, mid + 1, right);
}

const testCases5 = [
  { arr: [1, 2, 3, 4, 5], target: 3 },
  { arr: [10, 20, 30, 40, 50], target: 25 },
  { arr: [5, 10, 15, 20, 25, 30], target: 15 },
  { arr: [2, 4, 6, 8, 10, 12], target: 8 },
  { arr: [1, 3, 5, 7, 9], target: 1 }
];

testCases5.forEach((test, index) => {
  const { arr, target } = test;
  console.log(`Test case ${index + 1}: Index of ${target} in [${arr}] is ${binarySearch(arr, target)}`);
});

// Outputs:
// Test case 1: Index of 3 in [1,2,3,4,5] is 2
// Test case 2: Index of 25 in [10,20,30,40,50] is -1
// Test case 3: Index of 15 in [5,10,15,20,25,30] is 2
// Test case 4: Index of 8 in [2,4,6,8,10,12] is 3
// Test case 5: Index of 1 in [1,3,5,7,9] is 0


//   • Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target) {
  if (arr.length === 0) {
      return 0;
  }
  if (arr[0] === target) {
      return 1 + countOccurrences(arr.slice(1), target);
  } else {
      return countOccurrences(arr.slice(1), target);
  }
}

const testArrays = [
  [1, 2, 3, 4, 2, 2, 5],
  [7, 8, 9, 7, 7, 7, 9],
  [5, 5, 5, 5, 5],
  [10, 20, 30, 40],
  []
];

const targets = [2, 7, 5, 30, 100];

testArrays.forEach(arr => {
  targets.forEach(target => {
      console.log(`Array: [${arr}], Target: ${target}, Occurrences: ${countOccurrences(arr, target)}`);
  });
});

// Outputs:
// Array: [1,2,3,4,2,2,5], Target: 2, Occurrences: 3
// Array: [1,2,3,4,2,2,5], Target: 7, Occurrences: 0
// Array: [1,2,3,4,2,2,5], Target: 5, Occurrences: 1
// Array: [1,2,3,4,2,2,5], Target: 30, Occurrences: 0
// Array: [1,2,3,4,2,2,5], Target: 100, Occurrences: 0
// Array: [7,8,9,7,7,7,9], Target: 2, Occurrences: 0
// Array: [7,8,9,7,7,7,9], Target: 7, Occurrences: 4
// Array: [7,8,9,7,7,7,9], Target: 5, Occurrences: 0
// Array: [7,8,9,7,7,7,9], Target: 30, Occurrences: 0
// Array: [7,8,9,7,7,7,9], Target: 100, Occurrences: 0
// Array: [5,5,5,5,5], Target: 2, Occurrences: 0
// Array: [5,5,5,5,5], Target: 7, Occurrences: 0
// Array: [5,5,5,5,5], Target: 5, Occurrences: 5
// Array: [5,5,5,5,5], Target: 30, Occurrences: 0
// Array: [5,5,5,5,5], Target: 100, Occurrences: 0
// Array: [10,20,30,40], Target: 2, Occurrences: 0
// Array: [10,20,30,40], Target: 7, Occurrences: 0
// Array: [10,20,30,40], Target: 5, Occurrences: 0
// Array: [10,20,30,40], Target: 30, Occurrences: 1
// Array: [10,20,30,40], Target: 100, Occurrences: 0
// Array: [], Target: 2, Occurrences: 0
// Array: [], Target: 7, Occurrences: 0
// Array: [], Target: 5, Occurrences: 0
// Array: [], Target: 30, Occurrences: 0
// Array: [], Target: 100, Occurrences: 0
