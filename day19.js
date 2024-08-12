// Task 1: Match all occurrences of the word "JavaScript"
const task1 = (str) => str.match(/JavaScript/g);
console.log(task1("JavaScript is a popular language. JavaScript is widely used."));

// Task 2: Match all digits in a string
const task2 = (str) => str.match(/\d/g);
console.log(task2("The price is 123 dollars."));

// Task 3: Match all words in a string that start with a capital letter
const task3 = (str) => str.match(/\b[A-Z][a-z]*\b/g);
console.log(task3("Alice and Bob are Working on a Project."));

// Task 4: Match all sequences of one or more digits in a string
const task4 = (str) => str.match(/\d+/g);
console.log(task4("There are 12 apples, 34 bananas, and 567 grapes."));

// Task 5: Capture the area code, central office code, and line number from a US phone number format
const task5 = (str) => str.match(/\((\d{3})\)\s(\d{3})-(\d{4})/);
console.log(task5("(123) 456-7890"));

// Task 6: Capture the username and domain from an email address
const task6 = (str) => str.match(/(\w+)@([\w.]+)/);
console.log(task6("user@example.com"));

// Task 7: Match a word only if it is at the beginning of a string
const task7 = (str) => str.match(/^\w+/);
console.log(task7("Hello world!"));

// Task 8: Match a word only if it is at the end of a string
const task8 = (str) => str.match(/\w+$/);
console.log(task8("Welcome to the club"));

// Task 9: Validate a simple password (at least one uppercase, one lowercase, one digit, one special character)
const task9 = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/.test(password);
console.log(task9("Password123!")); // true
console.log(task9("password123"));  // false

// Task 10: Validate a URL
const task10 = (url) => /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/.test(url);
console.log(task10("https://www.example.com")); // true
console.log(task10("www.example")); // false
