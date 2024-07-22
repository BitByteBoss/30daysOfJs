// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  const element = i;
  console.log(element);  
}

//Outputs
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(n + '*' + i + '=' + n*i);
}

// Outputs
// 5*1=5
// 5*2=10
// 5*3=15
// 5*4=20
// 5*5=25
// 5*6=30
// 5*7=35
// 5*8=40
// 5*9=45
// 5*10=50

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to n using a while loop.

let i = 0,sum = 0;
while (i<100) {
  sum = sum + i;
  i++;
}
console.log(sum);         //Output: 4950

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let x = 10;
while (x>0) {
  console.log(x);
  x--;
}

//Outputs:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Activity 3: Do…While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do…while loop.

let y = 1;
do {
  console.log(y);
  y++;
} while (y<=5);

// Outputs:
// 1
// 2
// 3
// 4
// 5

// Task 6: Write a program to calculate the factorial of a number using a do…while loop.

let z = 1,fact = 1;
do {
  fact = fact * z;
  z++;
} while (z<=5);
console.log(fact);          //Output: 120 

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops.

let pattern = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    pattern += "*";
    
  }
  pattern += "\n";
}
console.log(pattern);

// Outputs:
// *
// **
// ***
// ****
// *****


// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let a = 1; a <= 10; a++) {
  if (a == 5) {
    continue;
  }
  console.log(a);
}

// Outputs:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let b = 1; b < 10; b++) {
  if (b === 7) {
    break;
  }
  console.log(b);
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6