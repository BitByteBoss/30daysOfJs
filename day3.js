// Activity 1: If-Else Statements

// - Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let x = 7;

if(x>0){
  console.log("number is positive");
} else if(x<0){
  console.log("number is negative");
} else{
  console.log("number is zero");                                        //Output:number is positive
}

// - Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 20;

if(age>18){
  console.log("you are eligible to vote");
} else{
  console.log("you are not eligible to vote");
}                                                                 //Output:you are eligible to vote

// Activity 2: Nested If-Else Statements

// - Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 3, num2 = 5, num3 = 9;
let largeNum;
if(num1>num2){
  if(num1>num3){
    largeNum = num1;
  }
} else if(num2>num3){
  if(num2>num1){
    largeNum = num2
  }
} else{
  largeNum = num3;
}

console.log(`largest Number is ${largeNum}`);                           //Output:largest Number is 9

// Activity 3: Switch Case

// - Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;
  
  case 7:
    console.log("Sunday");
    break;                                    

}                                                     //Output:Wednesday

// - Task 5: Write a program that uses a switch case to determine a grade (A, B, C, D, F) based on a score and log the result to the console.

let score = 65;

switch (true) {
  case score >= 85:
    console.log("Grade = A");
    break;

  case score >= 75:
    console.log("Grade = B");
    break;

  case score >= 65:
    console.log("Grade = C");
    break;

  case score >= 40:
    console.log("Grade = D");
    break;

  case score < 40:
    console.log("Grade = F");
    break;                                          //Output:Grade = C
}

// Activity 4: Conditional (Ternary) Operator

// - Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let Number = 9;

let oddEven = (Number % 2 == 0) ? 'Even Number' : 'Odd Number';
console.log(oddEven);                                                   //Output:Odd Number

// Activity 5: Combining Conditions

// - Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not divisible by 100; or divisible by 400) and log the result to the console.

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log("It's a leap year");; // It's a leap year
} else {
  console.log(" It's not a leap year");; // It's not a leap year
}                                                                           //Output: It's a leap year
