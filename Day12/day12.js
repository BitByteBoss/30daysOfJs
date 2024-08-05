// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
  throw new Error("This is an intentional error");
}

function handleError() {
  try {
    throwError();
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

handleError();


// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideNumbers(numerator, denominator){
  if (denominator == 0) {
    throw new Error("Denominator cannot be zero");
}
  return numerator/denominator;
}

function handleDivision(numerator,denominator) {
  try {
    const result = divideNumbers(numerator,denominator);
    console.log(`Result: ${result}`);
    
  } catch (error) {
    console.log("An error occured: ", error.message);
  }
}

handleDivision(10, 2);  // Should log: Result: 5
handleDivision(10, 0);  // Should log: An error occurred: Denominator cannot be zero

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function throwError() {
  throw new Error("This is an intentional error");
}

function demonstrateTryCatchFinally() {
  try {
    console.log("Inside try block.");
    throwError();
  } catch (error) {
    console.log("Inside catch block. Caught an error:", error.message);
  } finally {
    console.log("Inside finally block. This always executes.");
  }
}

demonstrateTryCatchFinally();


// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error message");
}

function handleCustomError() {
  try {
    throwCustomError();
  } catch (error) {
    if (error instanceof CustomError) {
      console.error("Caught a CustomError:", error.message);
    } else {
      console.error("Caught an unexpected error:", error);
    }
  }
}

handleCustomError();


// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateInput(input) {
  if (!input || input.trim() === "") {
    throw new ValidationError("Input cannot be empty");
  }
  return true; 
}

function handleValidation(input) {
  try {
    validateInput(input);
    console.log("Input is valid:", input);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation Error:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}

handleValidation("valid input"); 
handleValidation(""); 
handleValidation("  "); 


// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

function randomPromise() {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;
    setTimeout(() => {
      if (isSuccess) {
        resolve("Promise resolved successfully");
      } else {
        reject(new Error("Promise rejected randomly"));
      }
    }, 1000);
  });
}

randomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Caught an error:", error.message);
  });


// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handleRandomPromise() {
  try {
    const message = await randomPromise();
    console.log(message);
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

handleRandomPromise();


// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

const invalidUrl = "https://invalidurl.example.com";

fetch(invalidUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch(error => {
    console.error("Fetch error caught:", error.message);
  });


// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchFromInvalidUrl() {
  const invalidUrl = "https://invalidurl.example.com";
  
  try {
    const response = await fetch(invalidUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error caught:", error.message);
  }
}

fetchFromInvalidUrl();

