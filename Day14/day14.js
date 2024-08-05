// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. 
// Create an instance of the class and log the greeting message.

class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Creating an instance of Person and logging the greeting message
let person1 = new Person("John Doe", 30);
console.log(person1.greeting());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

Person.prototype.updateAge = function(newAge) {
  this.age = newAge;
  console.log(`Updated age: ${this.age}`);
}

// Updating the age and logging the updated age
person1.updateAge(31);

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. 
// Create an instance of the Student class and log the student ID.

class Student extends Person {
  constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
  }

  getStudentId() {
      return this.studentId;
  }
}

// Creating an instance of Student and logging the student ID
let student1 = new Student("Jane Smith", 20, "S12345");
console.log(student1.getStudentId());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. 
// Log the overridden greeting message.

Student.prototype.greeting = function() {
  return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
}

// Logging the overridden greeting message
console.log(student1.greeting());

// Task 5: Add a static method to the Person class that returns a generic greeting message. 
// Call this static method without creating an instance of the class and log the message.

Person.genericGreeting = function() {
  return "Hello, this is a generic greeting message.";
}

// Calling the static method without creating an instance and logging the message
console.log(Person.genericGreeting());

// Task 6: Add a static property to the Student class to keep track of the number of students created. 
// Increment this property in the constructor and log the total number of students.

Student.studentCount = 0;

Student.prototype.constructor = function(name, age, studentId) {
  super(name, age);
  this.studentId = studentId;
  Student.studentCount++;
}

// Creating instances of Student and logging the total number of students
student1 = new Student("Jane Smith", 20, "S12345");
console.log(`Total number of students: ${Student.studentCount}`);

let student2 = new Student("Alice Johnson", 22, "S12346");
console.log(`Total number of students: ${Student.studentCount}`);

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). 
// Create an instance and log the full name using the getter.

class PersonWithFullName {
  constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }

  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  }
}

// Creating an instance of PersonWithFullName and logging the full name using the getter
person1 = new PersonWithFullName("John", "Doe", 30);
console.log(person1.fullName);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). 
// Update the name using the setter and log the updated full name.

PersonWithFullName.prototype.fullName = function(name) {
  [this.firstName, this.lastName] = name.split(" ");
}

// Updating the name using the setter and logging the updated full name
person1.fullName = "Johnny Doe";
console.log(person1.fullName);
