//Activity 1: Basic Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result. 

function init() {
  let name = "fireFox";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const result = init();
console.log(result());      //Output:fireFox


// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function counter() {
  let count = 0;
  function increase() {
    count++
  }
  function getValue() {
    console.log(count);
  }
  return {
    increase: increase,
    getValue: getValue
  };
}

let myCounter = counter();
myCounter.increase();
myCounter.increase();
myCounter.increase();

console.log(myCounter.getValue());        //Output:3


// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createUniqueIdGenerator() {
  let lastId = 0;

  return function() {
    lastId++;
    return lastId;
  };
}

const generateUniqueId = createUniqueIdGenerator();

console.log(generateUniqueId()); // Output: 1
console.log(generateUniqueId()); // Output: 2
console.log(generateUniqueId()); // Output: 3


// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function usergreet() {
  let username = "dheerajDixit"
  function greets() {
    console.log(`Hello ${username}`);
  }
  return greets
}

let greeting = usergreet()
console.log(greeting());        //Output:Hello dheerajDixit


// Activity 3: Closures in Loops
// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionArray(size) {
  const functionArray = [];

  for (let i = 0; i < size; i++) {
    functionArray.push(
      (function(index) {
        return function() {
          console.log(index);
        };
      })(i)
    );
  }

  return functionArray;
}

const functions = createFunctionArray(5);

functions[0](); // Output: 0
functions[1](); // Output: 1
functions[2](); // Output: 2
functions[3](); // Output: 3
functions[4](); // Output: 4


// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function createItemManager() {
  let items = [];

  function addItem(item) {
    items.push(item);
    console.log(`Added: ${item}`);
  }

  function removeItem(item) {
    const index = items.indexOf(item);
    if (index !== -1) {
      items.splice(index, 1);
      console.log(`Removed: ${item}`);
    } else {
      console.log(`${item} not found`);
    }
  }

  function listItems() {
    if (items.length === 0) {
      console.log('No items in the list');
    } else {
      console.log('Items:', items);
    }
  }

  return {
    addItem: addItem,
    removeItem: removeItem,
    listItems: listItems
  };
}

const itemManager = createItemManager();

itemManager.addItem('apple');   // Output: Added: apple
itemManager.addItem('banana');  // Output: Added: banana
itemManager.listItems();        // Output: Items: [ 'apple', 'banana' ]
itemManager.removeItem('apple');// Output: Removed: apple
itemManager.listItems();        // Output: Items: [ 'banana' ]
itemManager.removeItem('orange');// Output: orange not found


// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log('Fetching from cache:', key);
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      console.log('Storing in cache:', key);
      return result;
    }
  };
}

function slowFunction(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5000)); // First call, slow
console.log(memoizedSlowFunction(5000)); // Second call, fast (cached)
console.log(memoizedSlowFunction(3000)); // Different argument, slow
console.log(memoizedSlowFunction(5000)); // Cached result


// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log('Fetching from cache:', key);
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      console.log('Storing in cache:', key);
      return result;
    }
  };
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(5)); // Output: 120 (cached)

