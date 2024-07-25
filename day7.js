// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let books = {
  title: 'The Psychology of Money',
  author: 'Morgan Housel',
  year: 2020
}

console.log(books);    
// Outputs: {
//   title: 'The Psychology of Money',
//   author: 'Morgan Housel',
//   year: 2020
// }

// Task 2: Access and log the title and author properties of the book object.

console.log(`The authoe of the book is ${books.author} and it publish in ${books.year}`);
//Outputs:The authoe of the book is Morgan Housel and it publish in 2020

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book’s title and author, and log the result of calling this method.

// function titleAndauthor(){
//   return `${this.title} by ${this.author}`;
// }

// let getTitlebyauthor = books.titleAndauthor();
// console.log(getTitlebyauthor());

books.getTitleAndAuthor = function() {
  return `${this.title} by ${this.author}`;
};

console.log(books.getTitleAndAuthor());       //Outputs:The Psychology of Money by Morgan Housel

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.

books.updateyear = function(newYear) {
  this.year = newYear;
}

books.updateyear(2024);

console.log(books);         // Outputs: {
  //   title: 'The Psychology of Money',
  //   author: 'Morgan Housel',
  //   year: 2024
  // }

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let book1 = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960
};

let book2 = {
  title: '1984',
  author: 'George Orwell',
  year: 1949
};

let book3 = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925
};

let library = {
  books: [book1,book2,book3]
}

console.log(library);

//Outputs: books: [
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960
//     },
//     { title: '1984', author: 'George Orwell', year: 1949 },
//     {
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       year: 1925
//     }
//   ]
// }

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log('Book Titles:');
library.books.forEach(book => {
  console.log(book.title);
});

// Outputs:Book Titles:
// To Kill a Mockingbird
// 1984
// The Great Gatsby

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book’s title and year, and log the result of calling this method.


let book4 = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960,

  getTitleAndYear: function() {
    return `${this.title} (${this.year})`;
  }
};

console.log(book4.getTitleAndYear());

// Outputs:To Kill a Mockingbird (1960)


// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

let book5 = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960,
 
  getTitleAndYear: function() {
    return `${this.title} (${this.year})`;
  }
};

for (let property in book5) {
  console.log(`${property}: ${book5[property]}`);
}

// Outputs:title: To Kill a Mockingbird
// author: Harper Lee
// year: 1960
// getTitleAndYear: function() {
//   return `${this.title} (${this.year})`;
// }


// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

// Log all the keys of the book object
console.log('Keys:', Object.keys(book5));

// Log all the values of the book object
console.log('Values:', Object.values(book5));
 
// Output:Keys: [ 'title', 'author', 'year', 'getTitleAndYear' ]
// Values: [ 'To Kill a Mockingbird', 'Harper Lee', 1960, [Function: getTitleAndYear] ]
