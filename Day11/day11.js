// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

function getMessage1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 1 resolve in 2 second")
    },2000);
  });
}

getMessage1().then((message) => {console.log(message)});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

function getMessage2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("task 2 reject in 2 second")
    },2000);
  });
}

getMessage2().catch((message) => {console.log(message)});

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("data1")
    },2000);
  });
}

function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("data2")
    },2000);
  });
}

function getData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data3");
      resolve("data3")
    },2000);
  });
}

console.log("fetching data 1....");
getData1().then((data) => {
  console.log("fetching data 2....");
    return getData2();
})
.then((data) => {
  console.log("fetching data 3....");
  return getData3();
})
.then((data) => {
})

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

function asyncawait(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`asyncData${dataId}`);
      resolve("asyncData1")
    },2000);
  });
}

async function getAsync() {
  await asyncawait(1);
  await asyncawait(2);
}

getAsync();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function handleRejectedPromise() {
  try {
    await getMessage2();
  } catch (error) {
    console.log(error);
  }
}

function getMessage2() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("task 2 reject in 2 second");
    }, 2000);
  });
}

handleRejectedPromise();


// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

const URL = "https://cat-fact.herokuapp.com/facts";

function getFacts() {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
}

getFacts()

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

const getFact = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
}

getFact();

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promises1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 done")
  },2000);
});

const promises2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 done")
  },3000);
});

const promises3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3 done")
  },4000);
});

Promise.all([promises1, promises2, promises3])
  .then((value) => {
    console.log(value);
  });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

const promises4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 4 done")
  },2000);
});

const promises5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 5 done")
  },3000);
});

const promises6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 6 done")
  },1000);
});

Promise.race([promises4, promises5, promises6])
  .then((value) => {
    console.log(value);
  });
